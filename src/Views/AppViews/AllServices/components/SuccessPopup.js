import React from 'react';

const SuccessPopup = ({ message, onClose }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50">
      <div className="bg-white rounded-lg p-6 shadow-lg">
        <h2 className="text-xl font-semibold mb-4">{message}</h2>
        <div className="flex justify-center">
          <button className="bg-blue-600 text-white py-2 px-4 rounded" onClick={onClose}>
            OK
          </button>
        </div>
      </div>
    </div>
  );
};

export default SuccessPopup;
