import React from 'react'
import CustomAlerts from './CustomAlert'
import InstanceAuthentication from './InstanceAuth'
import Patching from './Patching'
import PatchManagementDashboard from './PatchManagementStatus'

const index = () => {
  return (
    <div className='mt-4'>
        <div className='flex justify-between gap-4'>
            <div className='w-1/2'>
                <CustomAlerts />
            </div>
            <div className='w-1/2'>
                <InstanceAuthentication />
            </div>
        </div>
        <div className='mt-4'>
            <Patching />
        </div>
        <div className='mt-4'>
            <PatchManagementDashboard />
        </div>
    </div>
  )
}

export default index