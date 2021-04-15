import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ListSubheader from '@material-ui/core/ListSubheader';
import DashboardIcon from '@material-ui/icons/Dashboard';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import PeopleIcon from '@material-ui/icons/People';
import BarChartIcon from '@material-ui/icons/BarChart';
import LayersIcon from '@material-ui/icons/Layers';
import AssignmentIcon from '@material-ui/icons/Assignment';
import DateAndTimePickers from './DatePicker';
export const mainListItems = (
  <div>
    <ListItem href="/mainCom" onClick={()=>{
    localStorage.removeItem("joinedSubId")
    localStorage.removeItem("joinedSubName")
    localStorage.removeItem("joinedSubMotto")
    localStorage.removeItem("joinedSubNumMembers")
    localStorage.removeItem("subId")
    localStorage.removeItem("subName")
    localStorage.removeItem("subMotto")}
    } button>
      <ListItemIcon>
        <DashboardIcon />
      </ListItemIcon>
       <a href="/mainCom">
      <ListItemText primary="Go to Main community" />
       </a>
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <ShoppingCartIcon />
      </ListItemIcon>
      <a href="/activities">
     <ListItemText primary="Activities" />
     </a>
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <PeopleIcon />
      </ListItemIcon>
      <ListItemText primary="Sponsors" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <BarChartIcon />
      </ListItemIcon>
      <a href="/reports">
      <ListItemText primary="Reports" /></a>
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <LayersIcon />
      </ListItemIcon>
      <ListItemText primary="Upcoming Events" />
    </ListItem>
  </div>
);

export const secondaryListItems = (
  <div><DateAndTimePickers/>
  </div>
);
