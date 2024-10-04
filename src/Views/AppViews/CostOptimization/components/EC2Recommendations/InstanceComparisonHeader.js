import React from 'react';

const InstanceComparisonHeader = ({ selectedInstance }) => {
  if (!selectedInstance) {
    return null; // Don't render if no instance is selected
  }

  return (
    <div className="bg-white p-6 rounded-lg m-6">
      <h2 className="text-xl font-semibold mb-2" style={{ color: '#383874' }}>
        Compare {selectedInstance?.type} (option 1) with t2.micro (current)
      </h2>
      <p className="text-sm text-gray-600 mb-4" style={{ color: '#383874' }}>
        Use the graphed metrics below to determine which instance type is the optimal choice for your application.
      </p>

      <div className="flex flex-col sm:flex-row gap-4">
        <div className="flex-1">
          <label htmlFor="statistic" className="block text-sm font-medium text-gray-700 mb-1">
            Statistic
          </label>
          <div className="relative">
            <select id="statistic" className="w-full border border-gray-300 rounded-md p-2">
              <option value="maximum">Maximum</option>
              <option value="average">Average</option>
              <option value="minimum">Minimum</option>
            </select>
          </div>
        </div>

        <div className="flex-1">
          <label htmlFor="timeRange" className="block text-sm font-medium text-gray-700 mb-1">
            Time Range
          </label>
          <div className="relative">
            <select id="timeRange" className="w-full border border-gray-300 rounded-md p-2">
              <option value="2weeks">Last 2 weeks</option>
              <option value="1month">Last month</option>
              <option value="3months">Last 3 months</option>
            </select>
          </div>
        </div>

        <div className="flex-1">
          <label htmlFor="metric" className="block text-sm font-medium text-gray-700 mb-1">
            Metric
          </label>
          <div className="relative">
            <select id="metric" className="w-full border border-gray-300 rounded-md p-2">
              <option value="all">All</option>
              <option value="price">Price</option>
              <option value="performance">Performance</option>
              <option value="network">Network</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InstanceComparisonHeader;
