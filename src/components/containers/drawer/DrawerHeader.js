import React, { useState, useEffect } from "react";
import Avatar from "@material-ui/core/Avatar";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import UserService from "../../../services/user-service";
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from "@material-ui/core/ListItemText";
import PersonIcon from '@material-ui/icons/Person';
import SettingsIcon from '@material-ui/icons/Settings';


function DrawerHeader() {
  const [anchorE1, setAnchorE1] = useState(null);
  const [userProfile, setUserProfile] = useState(null);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    UserService.getUserByUsername()
      .then((user) => {
        UserService.getEmployeesByID(user.data.id).then(({ data }) => {
          user.data.employee = data;
          setTimeout(() => {
            setUserProfile(user.data);
          }, 3000);
        });
      })
      .catch((err) => {
        const user_data = { message: err };
      });
  }, []);

  const handleClick = (event) => {
    setOpen(true);
    setAnchorE1(event.currentTarget);
  };

  const handleRequestClose = () => {
    setOpen(false);
  };

  return (
    <div className="user-profile d-flex-row align-items-center">
      <Avatar
        alt="..."
        src={"https://via.placeholder.com/150x150"}
        className="user-avatar "
      />
      <div className="user-detail">
        <h4 className="user-name d-flex" onClick={handleClick}>
          <span className="text-truncate">
            {userProfile
              ? `${userProfile.employee.firstname} ${userProfile.employee.lastname}`
              : "User undefined"}
          </span>
        </h4>
      </div>
      <Menu
        className="user-info"
        id="simple-menu"
        anchorEl={anchorE1}
        open={open}
        onClose={handleRequestClose}
        PaperProps={{
          style: {
            minWidth: 120,
            paddingTop: 0,
            paddingBottom: 0,
          },
        }}
      >
        <MenuItem onClick={handleRequestClose}>
         <ListItemIcon>
           <PersonIcon/>
         </ListItemIcon>
          <ListItemText>Profile</ListItemText>
        </MenuItem>
        <MenuItem onClick={handleRequestClose}>
          <ListItemIcon>
            <SettingsIcon />
          </ListItemIcon>
          <ListItemText>Setting</ListItemText>
        </MenuItem>
        <MenuItem
          onClick={() => {
            handleRequestClose();
          }}
        >
          <ListItemIcon>
            <ExitToAppIcon />
          </ListItemIcon>
          <ListItemText>Log out</ListItemText>
        </MenuItem>
      </Menu>
    </div>
  );
}

export default DrawerHeader;
