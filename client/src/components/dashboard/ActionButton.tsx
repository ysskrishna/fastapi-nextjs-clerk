import React from "react";

export interface ActionButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  isLoading?: boolean;
}

export default function ActionButton({ children, isLoading, className = "", ...props }: ActionButtonProps) {
  return (
    <button
      type="button"
      className={`px-5 py-2.5 text-sm font-medium text-white rounded-lg focus:outline-none focus:ring-4
                  ${isLoading ? 'bg-gray-400 dark:bg-gray-600 cursor-not-allowed'
                              : `bg-blue-600 hover:bg-blue-700 focus:ring-blue-300 dark:bg-blue-500 dark:hover:bg-blue-600 dark:focus:ring-blue-800 ${className || ''}`
                   }
                   transition-colors duration-150 ease-in-out disabled:opacity-70 disabled:cursor-not-allowed
                  `}
      disabled={isLoading || props.disabled}
      {...props}
    >
      {isLoading ? (
        <div className="flex items-center justify-center">
          <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
          </svg>
          Processing...
        </div>
      ) : (
        children
      )}
    </button>
  );
} 