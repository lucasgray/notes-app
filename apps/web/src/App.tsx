import React, { useEffect, useState } from 'react';
import Note from 'types/src/Note';
import { NotesClient } from 'client/client';
import NoteCard from './components/NoteCard';
import Search from './components/Search';
import CreateNote from './components/CreateNote';

const notesClient = new NotesClient({
  BASE: 'http://localhost:5000',
});

function App() {
  const [notes, setNotes] = useState<Note[]>([]);

  useEffect(() => {
    notesClient.default.getNotes().then(setNotes);
  }, []);

  return (
    <div className='min-h-full'>
      <header className='bg-white shadow'>
        <div className='mx-auto max-w-7xl py-6 px-4 sm:px-6 lg:px-8'>
          <h1 className='text-3xl font-bold tracking-tight text-gray-900'>Notes</h1>
        </div>
      </header>
      <main>
        <div className='mx-auto max-w-7xl py-6 sm:px-6 lg:px-8'>
          <div className='flex px-4 py-6 sm:px-0 justify-between gap-2 bg-gray-100'>
            <div>
              {notes.map((n) => (
                <NoteCard
                  key={n.id}
                  note={n}
                  onDelete={(id) =>
                    notesClient.default
                      .deleteNote(id)
                      .then(() => notesClient.default.getNotes())
                      .then(setNotes)
                  }
                  onEdit={() => null}
                />
              ))}
            </div>
            <div className={'flex flex-col'}>
              <Search
                onSearch={(t) => {
                  notesClient.default.search(t).then(setNotes);
                }}
                onClear={() => {
                  notesClient.default.getNotes().then(setNotes);
                }}
              />
              <CreateNote
                onCreate={(message) =>
                  notesClient.default
                    .createNote({ message })
                    .then(() => notesClient.default.getNotes())
                    .then(setNotes)
                }
              />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
