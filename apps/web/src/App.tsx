import React, { useEffect, useState } from "react";
import { Link } from "ui";
import "./App.css";
import Note from "types/src/Note";

function App() {

  const [data, setData] = useState<Note[]>([])

  useEffect(() => {
    fetch('http://localhost:5000/notes')
      .then((response) => {
        console.log(response)
        return response.json()
      })
      .then(({ data }) => setData(data))
  }, [])

  console.log(data)

  return (
    <div className="App">

        <h1>The datas</h1>
        <div>
          {data.map(d => <p>{d.message}</p>)}
        </div>
    </div>
  );
}

export default App;
