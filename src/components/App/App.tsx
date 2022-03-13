import React from 'react';
import NavigationBar from '../NavigationBar';
import Table from '../Table';

/**
 * Main component of the application.
 * Contains navigation bar and the strings table.
 * @return {JSX.Element}
 */
function App() {
  return (
    <>
      <NavigationBar />
      <Table />
    </>
  );
}

export default App;
