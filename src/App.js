import React from 'react';
import {
  BrowserRouter,
  Switch,
  Route,
} from "react-router-dom";
import { DragAndSelectComponent } from './DragAndSelect';
import { TreeMultiSelectorComponent } from './TreeMultiSelector';


function App() {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
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
