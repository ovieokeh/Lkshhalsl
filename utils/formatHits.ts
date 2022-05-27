export default function formatHits(hits: any) {
  return hits.map((hit: any) => ({
    id: hit._id,
    name: hit._source.name,
    title: hit._source.personal_title,
    imageSrc: hit._source.photo,
    languages: hit._source.spoken_languages,
  }))
}
