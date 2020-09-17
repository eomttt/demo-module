import React from 'react';
import { Link } from "react-router-dom";

export const Home = () => (
  <div>
    <ul>
      <li>
        <Link to="/tree-multi-selector">tree-multi-selector</Link>
      </li>
      <li>
        <Link to="/drag-and-select">drag-and-select</Link>
      </li>
    </ul>
  </div>
)