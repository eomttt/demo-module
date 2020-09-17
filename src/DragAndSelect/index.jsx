import React, { useState } from 'react';
import DragAndSelect from 'react-dragandselect';

export const DragAndSelectComponent = () => {
  const [selected, setSelected] = useState([]);
  const childStyle = { width: '50%', height: '100px', marginBottom: '40px', textAlign: 'center', display: 'inline-block', userSelect: 'none' };
  const childItems = [{ id: '1', color: 'red'}, { id: '2', color: 'orange' }, { id: '3', color: 'yellow' }, { id: '4', color: 'green' }, { id: '5', color: 'blue' }]

  const handleSelectedItems = (selectedDataKeys) => {
    console.log("selectedDataKeys", selectedDataKeys);
    setSelected([...selectedDataKeys]);
  }

  return (
    <div style={{ width: '100%', height: '1000px'}}>
      <DragAndSelect onSelectedItems={handleSelectedItems}>
        {
          childItems.map((childItem) => {
            return (
              <div style={childStyle}>
                <div
                  data-select-key={childItem.id}
                  style={{
                    width: '50%',
                    height: '100%',
                    backgroundColor: childItem.color,
                    border: `5px solid ${selected.includes(childItem.id) ? 'black' : 'transparent'}`
                  }}
                >
                  {childItem.id}
                </div>
              </div>
            );
          })
        }
      </DragAndSelect>
    </div>
  )
}