import React from 'react';
import {InputGroup} from '@blueprintjs/core';
import useSearchString from '../../hooks/useSearchString';

import useStringItems from '../../hooks/useStringItems';

import AddButton from '../AddButton';

import './SearchInput.module.css';

/**
 * Search input that contains a button for adding string to the list.
 * Controls current search string, adds string items to the table.
 * @return {JSX.Element}
 */
function SearchInput() {
  const [searchString, setSearchString] = useSearchString();
  const [, addStringItem] = useStringItems();

  /**
 * Adds current search string's value to the strings list.
 * @return {void}
 */
  function handleAddItem() {
    if (searchString.length === 0) {
      return;
    }

    addStringItem(searchString);
  }

  return (
    <InputGroup
      value={searchString}
      fill={false}
      onChange={({target}) => setSearchString(target.value)}
      rightElement={<AddButton onClick={handleAddItem} />}
    />
  );
}

export default SearchInput;
