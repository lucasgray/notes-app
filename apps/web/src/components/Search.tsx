import Button from './Button';
import React, { useState } from 'react';

interface Props {
  onClear: () => void;
  onSearch: (searchToken: string) => void;
}

/**
 * A simple Card that searches notes that match a given query
 */
const Search: React.FC<Props> = ({ onClear, onSearch }) => {
  const [searchToken, setSearchToken] = useState<string>('');

  const searchDisabled = !searchToken || searchToken.length < 3 || searchToken.length >= 30;

  return (
    <div className='mb-4 flex w-full flex-col gap-2 self-start overflow-hidden rounded bg-white p-4 shadow-lg'>
      <h2 className={'text-3xl font-bold tracking-tight text-gray-900'}>Search</h2>
      <form
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        <input
          type='text'
          className={`appearance-none border shadow ${
            searchDisabled ? 'border-gray-200' : 'border-blue-500'
          } focus:shadow-outline w-full rounded py-2 px-3 leading-tight text-gray-700 focus:outline-none`}
          placeholder='Enter search...'
          value={searchToken}
          onChange={(v) => setSearchToken(v.target.value)}
        />
        <div className={'flex justify-end gap-2 pt-2'}>
          <Button
            label={'Clear'}
            color={'blue'}
            onClick={() => {
              onClear();
              setSearchToken('');
            }}
            type={'reset'}
          />
          <Button
            label={'Search'}
            color={'blue'}
            onClick={(e) => {
              e.preventDefault();
              onSearch(searchToken);
            }}
            type='submit'
            disabled={searchDisabled}
          />
        </div>
      </form>
    </div>
  );
};

export default Search;
