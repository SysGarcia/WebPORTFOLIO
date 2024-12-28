import React from 'react';

const BatchWrapper = ({ children }) => {
    return (
        <div className="bg-[#4646464d] p-2 my-2 border border-white/10 rounded-sm">
            {React.Children.map(children, child =>
                React.cloneElement(child)
            )}
        </div>
    );
}

export default BatchWrapper;
