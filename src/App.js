import React from 'react';
import {
  BrowserRouter,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { DragAndSelectComponent } from './DragAndSelect';
import { TreeMultiSelectorComponent } from './TreeMultiSelector';


function App() {
  return (
    <BrowserRouter>
    <div>
      <Switch>
        <Route path="/tree-multi-selector">
          <TreeMultiSelectorComponent />
        </Route>
        <Route path="/drag-and-select">
          <DragAndSelectComponent />
        </Route>
      </Switch>
    </div>
    </BrowserRouter>
  );
}

export default App;
