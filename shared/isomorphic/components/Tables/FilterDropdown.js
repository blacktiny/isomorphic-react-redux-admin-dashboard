import React from 'react';
import Input from '../uielements/input';
import Button from '../uielements/button';

export default function({ searchText, onInputChange, onSearch }) {
  return (
    <div className="isoTableSearchBox">
      <Input
        id="tableFilterInput"
        placeholder="Search name"
        value={searchText}
        onChange={onInputChange}
        onPressEnter={onSearch}
      />
      <Button type="primary" onClick={onSearch}>
        Search
      </Button>
    </div>
  );
}
