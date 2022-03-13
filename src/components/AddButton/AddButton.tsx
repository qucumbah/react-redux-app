import React from 'react';
import {Button} from '@blueprintjs/core';

type AddButtonProps = {
  onClick: () => void,
};

/**
 * Component for adding a string to the table.
 * @param {AddButtonProps} props an object that contains click handler.
 * @return {JSX.Element}
 */
function AddButton({onClick}: AddButtonProps) {
  return (
    <Button icon={'add'} onClick={onClick} />
  );
}

export default AddButton;
