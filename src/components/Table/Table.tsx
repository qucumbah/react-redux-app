import React from 'react';
import {HTMLTable} from '@blueprintjs/core';
import useSearchString from '../../hooks/useSearchString';
import useStringItems from '../../hooks/useStringItems';
import {StringItem} from '../../slices/stringItemsSlice';

/**
 * Table for displaying added string items.
 * Checks current search string and filters out non-matching items.
 * @return {JSX.Element}
 */
function Table() {
  const [searchString] = useSearchString();
  const [stringItems] = useStringItems();

  const filteredStringItems: StringItem[] = stringItems.filter(
      (stringItem: StringItem) => {
        return stringItem.value.includes(searchString);
      },
  );

  const stringItemElements: JSX.Element[] = filteredStringItems.map(
      (stringItem: StringItem) => {
        return (
          <tr key={stringItem.id}>
            <td>
              {stringItem.value}
            </td>
          </tr>
        );
      });

  return (
    <HTMLTable>
      <tbody>
        {stringItemElements}
      </tbody>
    </HTMLTable>
  );
}

export default Table;
