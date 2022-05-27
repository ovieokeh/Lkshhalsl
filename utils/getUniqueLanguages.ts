import { LocalType } from '../components/locals/Local'

export default function getUniqueLanguages(locals: LocalType[]) {
  const filters = new Set<string>()

  locals.forEach((local) => {
    for (const language of local.languages) {
      filters.add(language)
    }
  })

  return Array.from(filters)
}
