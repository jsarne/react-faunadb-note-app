import {client, q} from '../config/db'

const createNote = (title, body) => client.query(
  q.Create(
    q.Collection('notes'),
    {data: {title, body}}
  )
).then(res => res)
.catch(err => console.warn('error', err.message));

export default createNote;