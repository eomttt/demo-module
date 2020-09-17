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
    <BrowserRouter>
    <div>
      <Switch>
        <Route path="/demo-module/tree-multi-selector">
          <TreeMultiSelectorComponent />
        </Route>
        <Route path="/demo-module/drag-and-select">
          <DragAndSelectComponent />
        </Route>
      </Switch>
    </div>
    </BrowserRouter>
  );
}

export default App;
