import React from 'react'
import NetInPackets from './NetInPackets'
import NetOutPackets from './NetOutPackets'
import NetInBytes from './NetInByets'
import NetOutBytes from './NetOutByets'


const index = () => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">
            <div className='bg-white py-8 rounded-md'>
                <NetInPackets />
            </div>
            <div className='bg-white py-8 rounded-md'>
                <NetOutPackets />
            </div>
            <div className='bg-white py-8 rounded-md'>
                <NetInBytes />
            </div>
            <div className='bg-white py-8 rounded-md'>
                <NetOutBytes />
            </div>
        </div>
    )
}

export default index