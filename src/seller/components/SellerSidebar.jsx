// src/seller/components/SellerSidebar.jsx
import {
  Drawer,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import DashboardIcon from "@mui/icons-material/Dashboard";
import InventoryIcon from "@mui/icons-material/Inventory";
import AddBoxIcon from "@mui/icons-material/AddBox";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
import PersonIcon from "@mui/icons-material/Person";
import { NavLink } from "react-router-dom";

const menu = [
  { text: "Dashboard", icon: <DashboardIcon />, path: "/seller" },
  { text: "My Products", icon: <InventoryIcon />, path: "/seller/products" },
  { text: "Add Product", icon: <AddBoxIcon />, path: "/seller/add-product" },
  { text: "Orders", icon: <ShoppingBagIcon />, path: "/seller/orders" },
  { text: "Profile", icon: <PersonIcon />, path: "/seller/profile" },
];

const SellerSidebar = () => (
  <Drawer variant="permanent">
    <List sx={{ width: 240 }}>
      {menu.map((item) => (
        <ListItemButton key={item.text} component={NavLink} to={item.path}>
          <ListItemIcon>{item.icon}</ListItemIcon>
          <ListItemText primary={item.text} />
        </ListItemButton>
      ))}
    </List>
  </Drawer>
);

export default SellerSidebar;
