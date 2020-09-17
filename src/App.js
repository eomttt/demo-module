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
      <Route exact path="/" component={Home} />
      <Route path="/tree-multi-selector" component={TreeMultiSelectorComponent} />
      <Route path="/drag-and-select" component={DragAndSelectComponent}/>
    </BrowserRouter>
  );
}

export default App;
