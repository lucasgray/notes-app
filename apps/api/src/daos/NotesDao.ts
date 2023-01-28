import InMemoryDao from "./InMemoryDao";
import Note from "types/src/Note"

export default class NotesDao extends InMemoryDao<Note> {}