import React from 'react';
import Note from 'types/src/Note';
import Button from './Button';

interface Props {
  note: Note;
  onDelete: (id: number) => void;
  onEdit: (newMessage: string) => void;
}

/**
 * Display a note with a nice rounded dropshadow, with actions to delete (edit was stubbed but left as a TODO)
 */
const NoteCard: React.FC<Props> = ({ note, onDelete, onEdit }) => {
  return (
    <div className={'mb-4 w-full overflow-hidden rounded bg-white p-4 shadow-lg'}>
      <div className={'divide-y divide-dashed'}>
        <p className={'pb-2 text-gray-700'}>{note.message}</p>
        <div className={'flex justify-end gap-2 pt-2'}>
          {/*<Button color={"blue"} label={"Edit"} onClick={() => null}/>*/}
          <Button color={'red'} label={'Delete'} onClick={() => onDelete(note.id!!)} />
        </div>
      </div>
    </div>
  );
};

export default NoteCard;
