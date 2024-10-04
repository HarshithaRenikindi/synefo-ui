import React from 'react'
import Throughput from './Throughput'
import ErrorRate from './ErrorRate'
import Latency from './Latency'
import ErrorTracking from './ErrorTracking'
import HostedServices from './HostedServices'

const index = () => {
  return (
    <div>
      <div className='mt-4 gap-2'>
        <Throughput/>
      </div>
      
        <div className='flex mt-4 gap-3'>
          <ErrorRate/>
          <Latency/>
        </div>
      
    
        <div className='flex mt-4 gap-3'>
          <ErrorTracking/>
          <HostedServices/>
        </div>


    </div>
  )
}

export default index