import {client, q} from '../config/db'

const deleteNote = (id) => client.query(
  q.Delete(q.Ref(q.Collection('notes'), id))
).then(res => res)
.catch(err => console.warn('error', err.message));

export default deleteNote;