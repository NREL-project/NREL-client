import { Button, Menu } from '@mui/material'
import React, { useState } from 'react'
import AltMenu from './AltMenu'

function AltColumn() {

  return (
    <div className='bg-gray-200'>
      <Button>
        <AltMenu />
      </Button>
    </div>
  )
}

export default AltColumn