import React, { useState } from "react";
import axios from "axios";
import awsIcon from "../../../../assets/img/assetmanagement/aws.svg";
import AlertPopup from "./AlertPopup"; // Adjust the import path as necessary

const Header = () => {
  const [isPopupOpen, setPopupOpen] = useState(false);
  const [message, setMessage] = useState(""); // State for displaying API messages
  const [messageType, setMessageType] = useState(""); // State for message type (success/error)
  const [connectionUrl, setConnectionUrl] = useState(""); // State for connection URL
  const [instanceStatus, setInstanceStatus] = useState("stopped"); // Track instance status
  const instanceName = "test-mgt";

  const togglePopup = () => {
    setPopupOpen(!isPopupOpen);
  };

  const handleAlert = async (instanceName) => {
    const alertData = {
      instance_name: instanceName,
      cpu_threshold: 75,
      memory_threshold: 2048000000,
      storage_threshold: 80,
      network_in_threshold: 5000000000,
      network_out_threshold: 5000000000,
    };

    // Uncomment and use the alert API if needed
    // try {
    //   const response = await axios.post('https://your-api-url/alarms', alertData);
    //   console.log("Alert sent successfully:", response.data);
    //   setMessage(response.data.message); // Assuming the response has a message field
    //   setMessageType("success"); // Set message type to success
    // } catch (error) {
    //   console.error("Error sending alert:", error);
    //   setMessage(error.response.data.message || "Error sending alert."); // Use the error message if available
    //   setMessageType("error"); // Set message type to error
    // }
  };

  const handleStart = async () => {
    try {
      const response = await axios.get(`https://0k452b5cc3.execute-api.us-east-1.amazonaws.com/dev/ec2/start?instance_id=i-068be6cc8c0087aa1`);
      console.log("Instance started successfully:", response.data);
      setMessage(response.data.message); // Display the success message from the response
      setMessageType("success"); // Set message type to success
      setInstanceStatus("running"); // Update status to running
    } catch (error) {
      console.error("Error starting instance:", error);
      setMessage(error.response.data.message || "Failed to start instance."); // Use the error message if available
      setMessageType("error"); // Set message type to error
    }
  };

  const handleStop = async () => {
    try {
      const response = await axios.get(`https://0k452b5cc3.execute-api.us-east-1.amazonaws.com/dev/ec2/stop?instance_id=i-068be6cc8c0087aa1`);
      console.log("Instance  wil be stopped successfully in sometime:", response.data);
      setMessage(response.data.message); // Display the success message from the response
      setMessageType("success"); // Set message type to success
      setInstanceStatus("stopped"); // Update status to stopped
    } catch (error) {
      console.error("Error stopping instance:", error);
      setMessage(error.response.data.message || "Failed to stop instance."); // Use the error message if available
      setMessageType("error"); // Set message type to error
    }
  };

  const handleConnect = async () => {
    try {
      const connectData = {
        instance_name: instanceName,
      };
      const response = await axios.get('https://0k452b5cc3.execute-api.us-east-1.amazonaws.com/dev/ec2/connect?instance_id=i-068be6cc8c0087aa1', connectData);
      
      console.log("Connect request sent successfully:", response.data);
      
      // Set the connection URL from the response
      setConnectionUrl(response.data.connection_url);
      setMessage(response.data.message); // Display the success message from the response
      setMessageType("success"); // Set message type to success
    } catch (error) {
      console.error("Error sending connect request:", error);
      setMessage(error.response.data.message || "Instance is stopped. Please start the instance to connect."); // Use the error message if available
      setMessageType("error"); // Set message type to error
    }
  };

  const handleReboot = async () => {
    try {
      const response = await axios.get(`https://0k452b5cc3.execute-api.us-east-1.amazonaws.com/dev/ec2/reboot?instance_id=i-068be6cc8c0087aa1`);
      console.log("Instance rebooted successfully:", response.data);
      setMessage(response.data.message); // Display the success message from the response
      setMessageType("success"); // Set message type to success
      setInstanceStatus("running"); // Update status to running after reboot
    } catch (error) {
      console.error("Error rebooting instance:", error);
      setMessage(error.response.data.message || "Instance i-068be6cc8c0087aa1 is in stopped state. Only running instances can be rebooted."); // Use the error message if available
      setMessageType("error"); // Set message type to error
    }
  };

  return (
    <div className="p-4 bg-white">
      {/* Top Section: Logo, Title, and Down Arrow */}
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <div className="bg-white shadow-md rounded-md">
            <img src={awsIcon} alt="AWS" className="w-8 h-8" />
          </div>
          <h6 className="text-lg font-semibold text-gray-700">
            Amazon Web Services
          </h6>
        </div>
        <div className="flex space-x-4">
          <button
            className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-1 px-4 rounded"
            onClick={handleStart}
          >
            Start
          </button>
          <button
            className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-1 px-4 rounded"
            onClick={handleStop}
          >
            Stop
          </button>
          <button
            className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-1 px-4 rounded"
            onClick={handleConnect}
            // disabled={instanceStatus === "stopped"} // Disable if stopped
          >
            Connect
          </button>
          <button
            className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-1 px-4 rounded"
            onClick={handleReboot}
            // disabled={instanceStatus === "stopped"} // Disable if stopped
          >
            Reboot
          </button>
        </div>
      </div>

      {/* Message Display */}
      {message && (
        <div className={`my-2 p-2 border rounded ${messageType === "error" ? "bg-red-100 border-red-400 text-red-700" : "bg-green-100 border-green-400 text-green-700"}`}>
          {message}
        </div>
      )}

      {/* Display the Connection URL if available */}
      {connectionUrl && (
        <div className="my-2 p-2 bg-blue-100 border border-blue-400 text-blue-700 rounded">
          <a href={connectionUrl} target="_blank" rel="noopener noreferrer" className="underline">
            Click here to connect to the instance
          </a>
        </div>
      )}

      {/* Horizontal Line */}
      <hr className="my-3" />

      {/* Bottom Section: Breadcrumbs and Alerts */}
      <div className="flex justify-between items-center">
        {/* Breadcrumb Navigation */}
        <nav className="flex space-x-1 text-gray-600">
          <a href="/" className="hover:text-blue-600">
            AWS (657297475456)
          </a>
          <span className="text-gray-400">›</span>
          <a href="/vpc" className="hover:text-blue-600">
            VPC 1
          </a>
          <span className="text-gray-400">›</span>
          <a href="/app-service" className="hover:text-blue-600">
            App Service
          </a>
          <span className="text-gray-400">›</span>
          <span className="text-gray-800">EC2</span>
        </nav>

        {/* Alerts Button */}
        <button
          className="flex items-center text-blue-600 hover:bg-white"
          onClick={() => {
            handleAlert(instanceName);
            togglePopup(); // Show popup
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 mr-1"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path d="M10 2a6 6 0 00-6 6v5H3.293a1 1 0 00-.293.707v.293l.014.3.008.026.018.066.022.071a1 1 0 00.213.354l.025.026a1 1 0 00.075.071c.018.018.038.033.056.05l.028.023.1.066a1.007 1.007 0 00.384.153l.062.01.075.008h11a1 1 0 001-.92v-.188c.016-.04.016-.08.026-.12.004-.015.008-.03.01-.046a1 1 0 00.09-.406V13a1 1 0 00-.293-.707H16V8a6 6 0 00-6-6zm0 16a3 3 0 01-3-3h6a3 3 0 01-3 3z" />
          </svg>
          Alerts
        </button>
      </div>

      {/* Popup for Alerts */}
      {isPopupOpen && <AlertPopup onClose={togglePopup} initialInstanceName={instanceName} />}
    </div>
  );
};

export default Header;
