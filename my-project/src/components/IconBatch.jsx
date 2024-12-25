import React from 'react';
const IconBatch = ({ children }) => {
    return (
      <ul className="flex gap-x-2">
        {React.Children.map(children, child =>
          React.cloneElement(child, {
            className: `${child.props.className || ''} h-7 w-7`
          })
        )}
      </ul>
    );
  }
  
  export default IconBatch;
  