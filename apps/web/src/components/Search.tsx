import Button from "./Button";
import React, { useState } from "react";

interface Props {
  onClear: () => void;
  onSearch: (searchToken: string) => void;
}

const Search: React.FC<Props> = ({onClear, onSearch}) => {
  const [searchToken, setSearchToken] = useState<string>('');

  const searchDisabled = !searchToken || searchToken.length < 3 || searchToken.length >= 30;

  return (
    <div className="w-full rounded overflow-hidden shadow-lg bg-white p-4 mb-4 self-start flex flex-col gap-2">
      <h2 className={"text-3xl font-bold tracking-tight text-gray-900"}>Search</h2>
      <form onSubmit={(e) => {
        e.preventDefault();
      }}>
        <input type="text"
               className={`shadow appearance-none border ${searchDisabled ? "border-gray-200" : "border-blue-500"} rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline`}
               placeholder="Enter search..."
               value={searchToken}
               onChange={(v) => setSearchToken(v.target.value)}
        />
        <div className={"flex justify-end pt-2 gap-2"}>
          <Button label={"Clear"} color={"blue"} onClick={() => {
            onClear();
            setSearchToken('');
          }} type={"reset"}/>
          <Button label={"Search"} color={"blue"} onClick={(e) => {
            e.preventDefault();
            onSearch(searchToken)
          }} type="submit" disabled={searchDisabled}/>
        </div>
      </form>
    </div>
  )
}

export default Search;