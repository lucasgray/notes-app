import InMemoryDao from "./InMemoryDao";
import Note from "types/src/Note"

export default class NotesDao extends InMemoryDao<Note> {
  search(query: string): Note[] {
    return this.data.filter(d => d.message.toLowerCase().includes(query.toLowerCase()));
  }
}