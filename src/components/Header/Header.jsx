import * as React from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { NavLink } from "react-router-dom";
import logo from "../../assets/images/logo.png";
import menu from "../../assets/images/menu.png";

function Header() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <div className="flex  justify-between items-center h-[181px] rounded-b-[79px] bg-[#1E0C06]  ">
      <div className="ml-[102px]">
        <NavLink to={"/"} className="">
          <img width={197} height={83.8} src={logo} alt="..." />
        </NavLink>
      </div>
      <div className="flex mr-24 gap-14 text-[#F5F5F5] font-bold text-xl max-lg:hidden ">
        <NavLink to={"/gallery"}>Gallery</NavLink>
        <NavLink to={"/pricesForServices"}>Prices for service</NavLink>
        <NavLink to={"/aboutUs"}>About Us</NavLink>
        <NavLink to={"/contact"}>Contact</NavLink>
      </div>
      <div className="lg:hidden mr-6">
        <Button
          id="basic-button"
          aria-controls={open ? "basic-menu" : undefined}
          aria-haspopup="true"
          aria-expanded={open ? "true" : undefined}
          onClick={handleClick}
        >
          <img width={50} height={50} src={menu} alt="" />
        </Button>
        <Menu
          id="basic-menu"
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          MenuListProps={{
            "aria-labelledby": "basic-button",
          }}
        >
          <MenuItem onClick={handleClose}>
            <NavLink to={"/gallery"}>Gallery</NavLink>
          </MenuItem>

          <MenuItem onClick={handleClose}>
            <NavLink to={"/pricesForServices"}>Prices for service</NavLink>
          </MenuItem>

          <MenuItem onClick={handleClose}>
            <NavLink to={"/aboutUs"}>About Us</NavLink>
          </MenuItem>

          <MenuItem onClick={handleClose}>
            <NavLink to={"/contact"}>Contact</NavLink>
          </MenuItem>
        </Menu>
      </div>
    </div>
  );
}

export default Header;
