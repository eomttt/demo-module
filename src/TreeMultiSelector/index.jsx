import React from 'react';
import ReactTreeMultiSelector from 'react-tree-multi-selector';
import {
  dummyCategories,
  dummyInitial,
  dummyExceptions,
  dummyNotSelections,
  dummySelectedCategoryCallback
} from '../dummy.js'

export const TreeMultiSelectorComponent = () => (
  <ReactTreeMultiSelector
    categories={dummyCategories}
    initialSelectedIds={dummyInitial}
    exceptionIds={dummyExceptions}
    notSelectionIds={dummyNotSelections}
    handleSelectedCategories={dummySelectedCategoryCallback}
  />
)