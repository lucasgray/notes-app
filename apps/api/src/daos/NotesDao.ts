import InMemoryDao from './InMemoryDao';
import Note from 'types/src/Note';

/**
 * An in-memory DAO for a simple Notes database.
 *
 * Add a naive search function that finds any tuples that match exactly, ignoring case.
 */
export default class NotesDao extends InMemoryDao<Note> {
  search(query: string): Note[] {
    return this.data.filter((d) => d.message.toLowerCase().includes(query.toLowerCase()));
  }
}
