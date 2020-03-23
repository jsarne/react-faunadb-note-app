import {client, q} from '../config/db'

const editNote = (id, title, body) => client.query(
  q.Update(
    q.Ref(q.Collection('notes'), id),
    {data: {title, body}}
  )
).then(res => res)
.catch(err => console.warn('error', err.message));

export default editNote;