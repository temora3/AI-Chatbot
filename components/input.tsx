    import React from 'react';

    interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    label?: string;
    error?: string;
    }

    const Input: React.FC<InputProps> = ({
    label,
    error,
    className = '',
    ...props
    }) => {
    return (
        <div className="mb-4">
        {/* Label */}
        <label htmlFor={props.id} className="block text-sm font-medium text-gray-700">
            {label}
        </label>

        {/* Input field */}
        <input
            {...props}
            className={`mt-1 block w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 ${
            error ? 'border-red-500' : 'border-gray-300'
            } ${className}`}
        />

        {/* Error message */}
        {error && <p className="text-sm text-red-500 mt-1">{error}</p>}
        </div>
    );
    };

    export default Input;
