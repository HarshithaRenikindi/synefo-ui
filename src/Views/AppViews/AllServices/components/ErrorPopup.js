// ErrorPopup.js
import React from "react";

const ErrorPopup = ({ message, onClose }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-6 rounded shadow-md max-w-sm w-full">
        <h3 className="text-lg font-semibold text-red-600">Error</h3>
        <p className="mt-2">{message}</p>
        <div className="mt-4 flex justify-end">
          <button
            className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700"
            onClick={onClose}
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default ErrorPopup;
