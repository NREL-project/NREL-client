import { Button } from '@mui/material'
import React from 'react'
import PetroMenu from './PetroMenu'

function PetroColumn() {
  return (
    <div className='bg-gray-300'>
      <Button>
        <PetroMenu />
      </Button>
    </div>
  )
}

export default PetroColumn
