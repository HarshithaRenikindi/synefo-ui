import React, { useState } from 'react';
import { Button } from '@mui/material';
import TableCell from '@mui/material/TableCell';
import RemediatePopup from '../remediate';
import InstanceComparisonHeader from './InstanceComparisonHeader'; // Import the header component


const instanceData = [
  {
    options: 'Current',
    type: 'r6g.large',
    price: 0.0116,
    onDemandPrice: 0.0116,
    priceDifference: 0,
    performanceRisk: 'Low',
    vCPUs: 1,
    memory: '1 GiB',
    storage: 'EBS Only',
    network: 'Low to Moderate',
    current: true,
    savingsOpportunity: 0.0025,
  },
  {
    options: 'Option 1',
    type: 't4g.micro',
    price: 0.0084,
    onDemandPrice: 0.0084,
    priceDifference: -0.0032,
    performanceRisk: 'Medium',
    vCPUs: 2,
    memory: '1 GiB',
    storage: 'EBS Only',
    network: 'Up to 5 Gigabit',
    current: false,
    savingsOpportunity: 0.003,
  },
  {
    options: 'Option 2',
    type: 't3.micro',
    price: 0.0104,
    onDemandPrice: 0.0104,
    priceDifference: -0.0012,
    performanceRisk: 'Very low',
    vCPUs: 2,
    memory: '1 GiB',
    storage: 'EBS Only',
    network: 'Up to 5 Gigabit',
    current: false,
    savingsOpportunity: 0.002,
  },
  {
    options: 'Option 3',
    type: 't2.micro',
    price: 0.007,
    onDemandPrice: 0.0116,
    priceDifference: -0.0020,
    performanceRisk: 'Very low',
    vCPUs: 1,
    memory: '1 GiB',
    storage: 'EBS Only',
    network: 'Low to Moderate',
    current: false,
    savingsOpportunity: 0.0024,
  }
];

const EC2InstanceComparison = () => {
  const [selectedInstances, setSelectedInstances] = useState(
    instanceData.map(instance => instance.current)
  );
  const [selectedInstance, setSelectedInstance] = useState(null); // Track selected instance
  const [showRemediatePopup, setShowRemediatePopup] = useState(false);

  const handleRemediationClick = () => {
    setShowRemediatePopup(true); // Show the remediation popup
  };
  

  const handleCheckboxChange = (index) => {
    setSelectedInstances(prev => {
      const newSelected = [...prev];
      newSelected[index] = !newSelected[index];
      if (index !== 0) { // Ensure that the current instance (index 0) doesn't get selected
        setSelectedInstance(instanceData[index]);
      }
      return newSelected;
    });
  };

  const handleClosePopup = () => {
    // Find the instance with the lowest savings opportunity (including the first "Current" instance)
    const minSavingsInstance = instanceData.reduce((minInstance, currentInstance) => {
      return currentInstance.savingsOpportunity < minInstance.savingsOpportunity
        ? currentInstance
        : minInstance;
    }, instanceData[0]); // Start from the first instance
  
    // If the lowest savings instance is not already the current one, perform the swap
    const selectedIndex = instanceData.findIndex(
      instance => instance.type === minSavingsInstance.type
    );
  
    if (selectedIndex !== 0) {
      // Swap the current instance with the one having the lowest savings opportunity
      const updatedInstanceData = [...instanceData];
      [updatedInstanceData[0], updatedInstanceData[selectedIndex]] =
        [updatedInstanceData[selectedIndex], updatedInstanceData[0]];
  
      // Update the "current" field and label after the swap
      updatedInstanceData[0].current = true; // New current instance
      updatedInstanceData[0].options = "Current"; // Always label the first instance as "Current"
      updatedInstanceData[selectedIndex].current = false; // Old current instance
      updatedInstanceData[selectedIndex].options = `Option ${selectedIndex}`; // Label old current
  
      // Reflect the changes in the state
      instanceData.length = 0; // Clear the array
      instanceData.push(...updatedInstanceData); // Push the updated array
  
      setSelectedInstances(updatedInstanceData.map(instance => instance.current));
      setSelectedInstance(null);
    }
  
    setShowRemediatePopup(false); // Close the popup
  };
  


  return (
    <div className="p-6">
      <div className="bg-white rounded-lg shadow overflow-hidden">
        <div className="px-6 py-4  border-gray-200 flex justify-between items-center">
          <h2 className="text-xl font-semibold" style={{ color: '#383874' }}>
            Compare Current Instance Type with Recommended Options ({instanceData.length})
          </h2>
          <button
            className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
            onClick={handleRemediationClick}
            aria-label='optimization'
          >
            Optimize
          </button>
        </div>
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Options</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Instance Type</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Price (per after discounting)</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">On-demand Price</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Price Difference</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Performance Risk</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">vCPUs</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Memory</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Storage</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Network</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Savings Opportunity</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y">
              {instanceData.map((instance, index) => (
                <tr key={index}>
                  <td className="px-6 py-4 text-sm">
                    <tr  className='bg-white border-none'>
                      <div className="flex items-center">
                        <input
                          type="checkbox"
                          id={`instance-${index}`}
                          checked={selectedInstances[index]}
                          onChange={() => handleCheckboxChange(index)}
                          className="form-checkbox bg-white h-4 w-4 text-blue-600"
                          aria-label={`Select ${instance.type} instance`}
                        />
                        <label htmlFor={`instance-${index}`} className="sr-only px-8 py-4 whitespace-nowrap text-sm text-gray-500">
                          Select {instance.options} instance
                        </label>
                        <span className="ml-2">{instance.options}</span>
                      </div>
                    </tr>
                  </td>
                  <td className="px-8 py-4 whitespace-nowrap text-sm text-gray-500">{instance.type}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">${instance.price.toFixed(4)}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">${instance.onDemandPrice.toFixed(4)}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {instance.priceDifference === 0 ? '-' : `$${instance.priceDifference.toFixed(4)}`}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{instance.performanceRisk}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{instance.vCPUs}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{instance.memory}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{instance.storage}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{instance.network}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">${instance.savingsOpportunity.toFixed(4)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Render Header Only When an Instance is Selected, Below the Table */}
      {selectedInstance && <InstanceComparisonHeader selectedInstance={selectedInstance} />}

      {showRemediatePopup && (
        <RemediatePopup onClose={handleClosePopup} />
      )}
    </div>
  );
};

export default EC2InstanceComparison;