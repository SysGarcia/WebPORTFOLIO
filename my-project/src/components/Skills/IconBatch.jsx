import React from 'react';
const IconBatch = ({ children }) => {
    return (
      <ul className="flex gap-x-4 flex-wrap">
        {React.Children.map(children, child =>
          React.cloneElement(child, {
            className: `${child.props.className || ''} h-7 w-7 my-2`
          })
        )}
      </ul>
    );
  }
  
  export default IconBatch;
  