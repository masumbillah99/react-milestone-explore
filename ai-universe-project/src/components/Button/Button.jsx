import React from 'react';

const Button = ({children}) => {
    return (
        <div className="text-center mt-6 mb-10">
            <button className="btn btn-accent">{children}</button>
        </div>
    );
};

export default Button;