// import React from 'react'
// import Cpuutilizationpercentage from './CpuUtilization'
// import MemoryUtilizationChart from './memoryUtilization'
// import NetworkTraffic from './NetworkTraffic'
// import Diskio from './Disk'

// const Graphs = () => {
//   return (
//     <div>
//         <Cpuutilizationpercentage />
//         <MemoryUtilizationChart />
//         <NetworkTraffic />
//         <Diskio />
//     </div>
//   )
// }

// export default Graphs

import React from 'react'
import Cpuutilizationpercentage from './CpuUtilization'
import MemoryUtilizationChart from './memoryUtilization'
import NetworkTraffic from './NetworkTraffic'
import Diskio from './Disk'

const Graphs = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">
        <div className='bg-white py-8 rounded-md'>
            <Cpuutilizationpercentage />
        </div>
        <div className='bg-white py-8 rounded-md'>
            <MemoryUtilizationChart />
        </div>
        <div className='bg-white py-8 rounded-md'>
            <NetworkTraffic />
        </div>
        <div className='bg-white py-8 rounded-md'>
            <Diskio />
        </div>
    </div>
  )
}

export default Graphs
