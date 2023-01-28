import Model from "./Model";

export type UnsavedNote = Omit<Note, 'id'>;

export default interface Note extends Model {
    message: string
}