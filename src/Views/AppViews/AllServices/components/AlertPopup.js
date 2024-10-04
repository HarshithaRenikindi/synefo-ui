import React, { useState, useEffect } from 'react';
import axios from 'axios'; // Ensure axios is imported
import SuccessPopup from './SuccessPopup'; // Import SuccessPopup


const AlertPopup = ({ onClose, initialInstanceName }) => {
  const [instanceName, setInstanceName] = useState('');
  const [showSuccessPopup, setShowSuccessPopup] = useState(false); // State for success popup

  useEffect(() => {
    setInstanceName(initialInstanceName);
  }, [initialInstanceName]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const alertData = {
      instance_name: instanceName,
      cpu_threshold: 75,
      memory_threshold: 2048000000,
      storage_threshold: 80,
      network_in_threshold: 5000000000,
      network_out_threshold: 5000000000,
    };

    try {
      const response = await axios.post('https://itd8d2kvh2.execute-api.us-east-1.amazonaws.com/dev/alarms', alertData);
      console.log("Alert sent successfully:", response.data);
      setShowSuccessPopup(true); // Show success popup
    } catch (error) {
      console.error("Error sending alert:", error);
    }
  };

  const handleSuccessClose = () => {
    setShowSuccessPopup(false);
    onClose(); // Close the AlertPopup after confirming success
  };

  return (
    <>
      <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50">
        <div className="bg-white rounded-lg p-6 shadow-lg">
          <h2 className="text-xl font-semibold mb-4">Set Alert</h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label className="block text-gray-700">Instance Name</label>
              <input
                type="text"
                className="border rounded w-full py-2 px-3"
                value={instanceName}
                onChange={(e) => setInstanceName(e.target.value)}
              />
            </div>

            <div className="flex justify-between">
              <button type="button" className="bg-gray-300 py-2 px-4 rounded" onClick={onClose}>Cancel</button>
              <button type="submit" className="bg-blue-600 text-white py-2 px-4 rounded">Remind me</button>
            </div>
          </form>
          <button className="absolute top-2 right-2 text-gray-500" onClick={onClose}>
            ✖
          </button>
        </div>
      </div>
      
      {/* Render Success Popup if needed */}
      {showSuccessPopup && <SuccessPopup message="Please confirm your subscription through the recieved mail!" onClose={handleSuccessClose} />}
    </>
  );
};

export default AlertPopup;
