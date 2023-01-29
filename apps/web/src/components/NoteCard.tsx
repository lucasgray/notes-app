import React from "react";
import Note from "types/src/Note";
import Button from "./Button";

interface Props {
  note: Note;
  onDelete: (id: number) => void;
  onEdit: (newMessage: string) => void;
}

const NoteCard: React.FC<Props> = ({ note, onDelete, onEdit }) => {
  return (<div className={"w-200 rounded overflow-hidden shadow-lg bg-white p-4 mb-4"}>
    <div className={"divide-y divide-dashed"}>
      <p className={"text-gray-700 pb-2"}>{note.message}</p>
      <div className={"flex justify-end pt-2 gap-2"}>
        {/*<Button color={"blue"} label={"Edit"} onClick={() => null}/>*/}
        <Button color={"red"} label={"Delete"} onClick={() => onDelete(note.id!!)}/>
      </div>
    </div>

  </div>);
};

export default NoteCard;