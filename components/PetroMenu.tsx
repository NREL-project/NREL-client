import { Button, Menu, MenuItem } from "@mui/material";
import { useState } from "react";


function PetroMenu() {

const [petAnchor, setPetAnchor] = useState<null | HTMLElement>(null)
const open = Boolean(petAnchor)

const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setPetAnchor(event.currentTarget)
}

const handleClose = () => {
    setPetAnchor(null)
}
 
  return (
    <div className="flex">
      <Button
        id="basic-button"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
        className="!capitalize bg-black rounded-full !text-white"
      >
        Petrol Fuel vehicles
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={petAnchor}
        open={open}
        onClose={handleClose}
        className="menu"
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        <MenuItem onClick={handleClose}>Sedan</MenuItem>
        <MenuItem onClick={handleClose}>Compact</MenuItem>
        <MenuItem onClick={handleClose}>SUV</MenuItem>
        <MenuItem onClick={handleClose}>Trucks</MenuItem>
      </Menu>
    </div>
  )
}

export default PetroMenu