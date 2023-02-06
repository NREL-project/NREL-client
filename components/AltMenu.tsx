import { Button, Menu, MenuItem } from "@mui/material";
import { useState } from "react";


function AltMenu() {

const [altAnchor, setAltAnchor] = useState<null | HTMLElement>(null)
const open = Boolean(altAnchor)

const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAltAnchor(event.currentTarget)
}

const handleClose = () => {
    setAltAnchor(null)
}
 
  return (
    <div>
      <Button
        id="basic-button"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
        className="!capitalize bg-black rounded-full  !text-white"
      >
        Alternative Fuel Vehicles
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={altAnchor}
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

export default AltMenu