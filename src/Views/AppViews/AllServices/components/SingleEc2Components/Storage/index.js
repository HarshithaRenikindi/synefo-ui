import React from 'react'
import DiskReads from './DiskRead'
import DiskWrites from './DiskWrite'
import DiskUsed from './DiskUsed'
import DiskAvailable from './DiskAvalable'


const index = () => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">
            <div className='bg-white py-8 rounded-md'>
                <DiskReads />
            </div>
            <div className='bg-white py-8 rounded-md'>
                <DiskWrites />
            </div>
            <div className='bg-white py-8 rounded-md'>
                <DiskUsed />
            </div>
            <div className='bg-white py-8 rounded-md'>
                <DiskAvailable />
            </div>
        </div>
    )
}

export default index