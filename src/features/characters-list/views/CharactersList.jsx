import React from 'react';
import { Link } from 'react-router-dom';

export default function CharactersList() {
  return (
    <>
      <div>Characters List</div>
      <button>
        <Link to="/characters/:charld">Character info</Link>
      </button>
    </>
  );
}
