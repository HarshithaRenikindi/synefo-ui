import React from 'react'
import CPUUser from './CpuUser'
import CPUIdle from './CpuIdle'
import CPUSys from './CpuSys'
import CPUNice from './CpuNice'

const index = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">
        <div className='bg-white py-8 rounded-md'>
          <CPUUser />
        </div>
        <div className='bg-white py-8 rounded-md'>
            <CPUIdle />
        </div>
        <div className='bg-white py-8 rounded-md'>
            <CPUSys />
        </div>
        <div className='bg-white py-8 rounded-md'>
            <CPUNice />
        </div>
    </div>
  )
}

export default index