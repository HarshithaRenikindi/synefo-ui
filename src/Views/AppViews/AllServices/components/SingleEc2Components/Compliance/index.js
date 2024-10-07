import React from 'react'
import AccessControlTable from './AccessControlTable'
import InstanceCompliance from './InstanceCompliance'
import EncryptionCompliance from './EncryptionCompliance'

const index = () => {
  return (
    <div className='mt-4'>
        <div className='flex justify-between gap-4'>
            <div className='w-1/2'>
              <AccessControlTable/>
            </div>
            <div className='w-1/2'>
              <InstanceCompliance/>
            </div>

        </div>
        <div className='w-full'>
              <EncryptionCompliance/>
            </div>
    </div>
  )
}
export default index


