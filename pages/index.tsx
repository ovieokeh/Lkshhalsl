import type { NextPage } from 'next'
import Head from 'next/head'

import Locals from '../components/locals'
import Navigation from '../components/navigation'
import { LocalType } from '../components/locals/Local'

import { FilterProvider } from '../contexts'
import formatHits from '../utils/formatHits'
import getUniqueLanguages from '../utils/getUniqueLanguages'

const Home: NextPage<{
  [id: string]: any
  results: LocalType[]
}> = ({ content, results }) => {
  const filters = getUniqueLanguages(results)

  return (
    <FilterProvider filters={filters}>
      <Head>
        <title>{content.headerTitle}</title>
        <meta name="description" content={content.headerDescription} />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>

      <Navigation />
      <Locals locals={results} />
    </FilterProvider>
  )
}

export async function getServerSideProps() {
  const response = await fetch(
    'https://www.withlocals.com/api/v1/hosts/search?location.country=italy&location.city=rome&lang=en&page=1'
  )
  const localsData = await response.json()

  return {
    props: {
      ...localsData,
      results: formatHits(localsData.results.hits.hits),
    },
  }
}

export default Home
