
import React, { useState } from 'react';
import Cards from '../Cards';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import awsIcon from "../../../../../../assets/img/assetmanagement/aws.svg";
import CpuPerformance from '../CpuPerformance';
import Memory from '../Memory';
import Storage from '../Storage';
import Network from '../Network';
import Graphs from '../graphs';

const Index = () => {
  const [sections, setSections] = useState({
    cpuPerformance: false,
    memory: false,
    storage: false,
    network: false,
  });

  // General toggle function to handle state updates for different sections
  const toggleSection = (section) => {
    setSections((prevState) => ({
      ...prevState,
      [section]: !prevState[section],
    }));
  };

  return (
    <div>
      <Cards />

      {/* Section for CPU Performance */}
      <div className="flex items-center justify-between rounded-md6 bg-white py-2 px-6 mt-4">
        <div className="flex items-center space-x-8">
          <div className="bg-white shadow-md rounded-md">
            <img src={awsIcon} alt="AWS" className="w-8 h-8" />
          </div>
          <h6 className="text-lg font-semibold text-gray-700">CPU Performance</h6>
        </div>
        <button
          onClick={() => toggleSection('cpuPerformance')}
          className="text-lg px-2 py-1 rounded-md hover:bg-gray-100"
        >
          {sections.cpuPerformance ? <ArrowDropUpIcon /> : <ArrowDropDownIcon />}
        </button>
      </div>
      {sections.cpuPerformance && <CpuPerformance />}

      {/* Section for Memory */}
      <div className="flex items-center justify-between rounded-md6 bg-white py-2 px-6 mt-4">
        <div className="flex items-center space-x-8">
          <div className="bg-white shadow-md rounded-md">
            <img src={awsIcon} alt="AWS" className="w-8 h-8" />
          </div>
          <h6 className="text-lg font-semibold text-gray-700">Memory</h6>
        </div>
        <button
          onClick={() => toggleSection('memory')}
          className="text-lg px-2 py-1 rounded-md hover:bg-gray-100"
        >
          {sections.memory ? <ArrowDropUpIcon /> : <ArrowDropDownIcon />}
        </button>
      </div>
      {sections.memory && <Memory />}

      {/* Section for Storage */}
      <div className="flex items-center justify-between rounded-md6 bg-white py-2 px-6 mt-4">
        <div className="flex items-center space-x-8">
          <div className="bg-white shadow-md rounded-md">
            <img src={awsIcon} alt="AWS" className="w-8 h-8" />
          </div>
          <h6 className="text-lg font-semibold text-gray-700">Storage</h6>
        </div>
        <button
          onClick={() => toggleSection('storage')}
          className="text-lg px-2 py-1 rounded-md hover:bg-gray-100"
        >
          {sections.storage ? <ArrowDropUpIcon /> : <ArrowDropDownIcon />}
        </button>
      </div>
      {sections.storage && <Storage />}

      {/* Section for Network */}
      <div className="flex items-center justify-between rounded-md6 bg-white py-2 px-6 mt-4">
        <div className="flex items-center space-x-8">
          <div className="bg-white shadow-md rounded-md">
            <img src={awsIcon} alt="AWS" className="w-8 h-8" />
          </div>
          <h6 className="text-lg font-semibold text-gray-700">Network</h6>
        </div>
        <button
          onClick={() => toggleSection('network')}
          className="text-lg px-2 py-1 rounded-md hover:bg-gray-100"
        >
          {sections.network ? <ArrowDropUpIcon /> : <ArrowDropDownIcon />}
        </button>
      </div>
      {sections.network && <Network />}

       {/* General Graphs */}
       <Graphs />
    </div>
  );
};

export default Index;
