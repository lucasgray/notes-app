import Button from './Button';
import React, { useState } from 'react';

interface Props {
  onCreate: (note: string) => void;
}

/**
 * A simple Card that allows note creation
 */
const CreateNote: React.FC<Props> = ({ onCreate }) => {
  const [note, setNote] = useState<string>('');
  const [showValidation, setShowValidation] = useState<boolean>();

  const noteTooShort = (note: string) => note.length < 20;
  const noteTooLong = (note: string) => note.length >= 300;

  return (
    <div className='w-full rounded overflow-hidden shadow-lg bg-white p-4 mb-4 self-start flex flex-col gap-2'>
      <h2 className={'text-3xl font-bold tracking-tight text-gray-900'}>Create New Note</h2>
      <form
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        <textarea
          id='message'
          rows={4}
          className='block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
          placeholder='Start typing... '
          value={note}
          onChange={(v) => setNote(v.target.value)}
        />
        {(noteTooShort(note) || noteTooLong(note)) && showValidation && (
          <p className='mt-2 text-sm text-red-600 dark:text-red-500'>
            <span className='font-medium'>Oops!</span> Your note is too
            {noteTooLong(note) ? ' long' : ' short'}.
          </p>
        )}
        <div className={'flex justify-end pt-2 gap-2'}>
          <Button
            label={'Create'}
            color={'blue'}
            onClick={() => {
              // if we don't pass validation, show validation until we do.
              if (noteTooLong(note) || noteTooShort(note)) {
                setShowValidation(true);
                return;
              }
              onCreate(note);
              setNote('');
              setShowValidation(false);
            }}
            type={'submit'}
          />
        </div>
      </form>
    </div>
  );
};

export default CreateNote;
