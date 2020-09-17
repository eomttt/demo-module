import React from 'react';
import {
  BrowserRouter,
  Route,
} from "react-router-dom";
import { DragAndSelectComponent } from './DragAndSelect';
import { Home } from './Home';
import { TreeMultiSelectorComponent } from './TreeMultiSelector';


function App() {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Route exact path="/">
        <Home />
      </Route>
      <Route path="/tree-multi-selector">
        <TreeMultiSelectorComponent />
      </Route>
      <Route path="/drag-and-select">
        <DragAndSelectComponent />
      </Route>
    </BrowserRouter>
  );
}

export default App;
