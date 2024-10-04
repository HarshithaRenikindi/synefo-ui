import React, { Component } from 'react';
import Dropdown from '../components/Dropdown';
import { APP_PREFIX_PATH } from 'Configs/AppConfig';
import { Link } from 'react-router-dom';

class ConfigureAmazonEC2 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      workload: "constant",
      numberOfInstances: "",
      instanceType: "",
      instanceFamily: "Any instance family",
      vCPUs: "Any vCPUs",
      memory: "Any instance family",
      networkPerformance: "Any network performance",
      showCurrentGen: true,
      showModal: false, // Modal visibility state
      showPopup: null,
      enableMonitoring: false,
      selectedOption: "", // Track selected option
      showConfirmationPopup: false,
      filteredInstances: [],
      selectedInstances: [],
      instanceData: [], // All instance data from the backend
      loading: true, // To show loading state
      error: null, // Error message for fetching data
      operatingSystem: "", // Store selected OS
    };
  }

  

  handleOSChange = (e) => {
    this.setState({ operatingSystem: e.target.value });
  };

  render() {

    const { operatingSystem } = this.state;
    const windowsOptions = [
      'Windows Server',
      'Windows Server with SQL Server Standard',
      'Windows Server with SQL Server Web',
      'Windows Server with SQL Server Enterprise'
    ];
    const redHatOptions = [
      'Red Hat Enterprise Linux',
      'Red Hat Enterprise Linux with HA',
      'Red Hat Enterprise Linux with SQL Server Standard',
      'Red Hat Enterprise Linux with SQL Server Web',
      'Red Hat Enterprise Linux with SQL Server Enterprise',
      'Red Hat Enterprise Linux with HA and SQL Server Standard',
      'Red Hat Enterprise Linux with HA and SQL Server Enterprise'
    ];
    const linuxOptions = [
      'Linux',
      'Linux with SQL Server Standard',
      'Linux with SQL Server Web',
      'Linux with SQL Server Enterprise',
      'SUSE Linux Enterprise Server'
    ];

    return (
      <div className="p-6 min-h-full flex flex-col justify-between">
        <div>
          <h2 className="text-2xl font-semibold mb-8">Configure Amazon EC2</h2>

          {/* Tenancy and Location Type */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div>
              <label className="block text-xl font-medium text-gray-700 mb-2">Tenancy</label>
              <select className="w-full p-3 border rounded-md">
                <option>Shared Instance</option>
                <option>Dedicated Instance</option>
              </select>
            </div>
            <div>
              <label className="block text-xl font-medium text-gray-700 mb-2">Choose a Location Type</label>
              <select className="w-full p-3 border rounded-md">
                <option>Region</option>
                <option>Availability Zone</option>
              </select>
            </div>
          </div>

          {/* Operating System Selection */}
          <div className="mb-6">
            <label className="block text-xl font-medium text-gray-700 mb-4">Select Operating System</label>

            {/* OS Options in a row */}
            <div className="flex space-x-4">
              {/* Windows Options Dropdown */}
              <div className="flex-1">
                <label className="font-semibold text-lg mb-2 block">Windows Options</label>
                <select
                  onChange={this.handleOSChange}
                  className="border border-gray-300 rounded-md p-2 w-full"
                  value={operatingSystem}
                >
                  <option value="">Select a Windows OS</option>
                  {windowsOptions.map((option, index) => (
                    <option key={index} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
              </div>

              {/* Red Hat Options Dropdown */}
              <div className="flex-1">
                <label className="font-semibold text-lg mb-2 block">Red Hat Options</label>
                <select
                  onChange={this.handleOSChange}
                  className="border border-gray-300 rounded-md p-2 w-full"
                  value={operatingSystem}
                >
                  <option value="">Select a Red Hat OS</option>
                  {redHatOptions.map((option, index) => (
                    <option key={index} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
              </div>

              {/* Linux Options Dropdown */}
              <div className="flex-1">
                <label className="font-semibold text-lg mb-2 block">Linux Options</label>
                <select
                  onChange={this.handleOSChange}
                  className="border border-gray-300 rounded-md p-2 w-full"
                  value={operatingSystem}
                >
                  <option value="">Select a Linux OS</option>
                  {linuxOptions.map((option, index) => (
                    <option key={index} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>


          {/* Use Case */}
          <div className="mb-6 w-[450px]">
            <label className="block text-xl font-medium text-black-700 mb-2">Use Case</label>
            <label className="block text-sm font-medium text-gray-700 mb-2">Choose</label>
            <select className="w-full p-3 border rounded-md">
              <option>Select</option>
              <option>Web Server</option>
              <option>Database</option>
              <option>Application Hosting</option>
            </select>
          </div>

          {/* Action Buttons */}
          <div className="flex justify-end space-x-4 mt-8">
            <Link
              to={{
                pathname: `${APP_PREFIX_PATH}/assets/price-estimator/configure-amazon-ec2`,
                state: { operatingSystem },  // Pass the selected operating system
              }}
            >
              <button className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition">
                Continue to Payment Options
              </button>
            </Link>

          </div>
        </div>
      </div>

    );
  }
}

export default ConfigureAmazonEC2;
