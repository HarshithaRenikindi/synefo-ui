import React from 'react'
import MemTotal from './memoryTotal'
import MemFree from './MemoryFree'
import MemUsed from './memoryUsed'
import MemoryCacheUtilization from './memoryCacheUtilization'

const index = () => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">
            <div className='bg-white py-8 rounded-md'>
                <MemTotal />
            </div>
            <div className='bg-white py-8 rounded-md'>
                <MemFree />
            </div>
            <div className='bg-white py-8 rounded-md'>
                <MemUsed />
            </div>
            <div className='bg-white py-8 rounded-md'>
                <MemoryCacheUtilization />
            </div>
        </div>
    )
}

export default index