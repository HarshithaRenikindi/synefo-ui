import React from 'react'
import InstanceHours from './InstanceHours'
import InstanceHoursStopped from './InstanceHoursStopped'
import InstanceStarts from './InstanceStarts'
import InstanceStops from './InstanceStops'
import InboundTransfer from './InboundTransfer'
import OutboundTransfer from './OutboundTransfer'

const index = () => {
  return (
    <div>

        <div className='flex mt-4 gap-3'>
          <InstanceHours/>
          <InstanceHoursStopped/>
        </div>

        <div className='flex mt-4 gap-3'>
          <InstanceStarts/>
          <InstanceStops/>
        </div>

        <div className='flex mt-4 gap-3'>
          <InboundTransfer/>
          <OutboundTransfer/>
        </div>

    </div>
  )
}

export default index