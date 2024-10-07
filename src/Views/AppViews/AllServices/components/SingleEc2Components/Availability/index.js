import React from 'react'
import InstanceStatus from './InstanceStatus'
import AlertsNotifications from './AlertsAndNotification'
import InstanceHealthCheck from './InstanceHealthCheck'

const index = () => {
  return (
    <div>
        <div className='flex items-start justify-between gap-4 mt-4'>
            <div className='w-1/2'>
                <InstanceStatus />
            </div>
            <div className='w-1/2'>   
                <AlertsNotifications />
            </div>
        </div>
        <div className='mt-4'>
            <InstanceHealthCheck />
        </div>
    </div>
  )
}

export default index