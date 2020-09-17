import React from 'react';
import {
  HashRouter,
  Route,
} from "react-router-dom";
import { DragAndSelectComponent } from './DragAndSelect';
import { Home } from './Home';
import { TreeMultiSelectorComponent } from './TreeMultiSelector';


function App() {
  return (
    <HashRouter>
      <Route exact path="/" component={Home} />
      <Route path="/tree-multi-selector" component={TreeMultiSelectorComponent} />
      <Route path="/drag-and-select" component={DragAndSelectComponent}/>
    </HashRouter>
  );
}

export default App;
