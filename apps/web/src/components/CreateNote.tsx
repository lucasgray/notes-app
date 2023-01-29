import Button from "./Button";
import React, { useState } from "react";

interface Props {
  onCreate: (note: string) => void;
}

const Search: React.FC<Props> = ({onCreate}) => {
  const [note, setNote] = useState<string>('');

  return (
    <div className="w-full rounded overflow-hidden shadow-lg bg-white p-4 mb-4 self-start flex flex-col gap-2">
      <h2 className={"text-3xl font-bold tracking-tight text-gray-900"}>Create New Note</h2>
      <form>
        <input type="text"
               className={`shadow appearance-none border "border-gray-200" rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline`}
               placeholder="Start typing..."
               value={note}
               onChange={(v) => setNote(v.target.value)}
        />
        <div className={"flex justify-end pt-2 gap-2"}>
          <Button label={"Create"} color={"blue"} onClick={() => {
            onCreate(note);
            setNote('');
          }} type={"reset"}/>
        </div>
      </form>
    </div>
  )
}

export default Search;