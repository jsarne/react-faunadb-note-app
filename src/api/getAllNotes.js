import {client, q} from '../config/db'

const getAllNotes = client.query(
  q.Paginate(
    q.Match(
      q.Index('all_notes')
    )
  )
).then(response => {
  const notesRefs = response.data
  const getAllProductDataNPlus1Query = notesRefs.map((ref) => {
    return q.Get(ref)
  })
  return client.query(getAllProductDataNPlus1Query).then((data) => data)
}).catch(error => console.warn('error', error.message));

export default getAllNotes;