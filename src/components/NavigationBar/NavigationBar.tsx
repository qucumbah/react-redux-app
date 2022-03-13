import React from 'react';
import {Navbar} from '@blueprintjs/core';

import SearchInput from '../SearchInput';

/**
 * Navigation bar that contains search input.
 * @return {JSX.Element}
 */
function NavigationBar() {
  return (
    <Navbar>
      <SearchInput />
    </Navbar>
  );
}

export default NavigationBar;
