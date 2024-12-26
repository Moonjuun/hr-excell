"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import IconButton from "@mui/material/IconButton";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import DashboardIcon from "@mui/icons-material/Dashboard";
import BarChartIcon from "@mui/icons-material/BarChart";
import PeopleIcon from "@mui/icons-material/People";
import SettingsIcon from "@mui/icons-material/Settings";

const menuItems = [
  { icon: DashboardIcon, label: "Dashboard", href: "/dashboard" },
  { icon: BarChartIcon, label: "Analytics", href: "/dashboard/analytics" },
  { icon: PeopleIcon, label: "Customers", href: "/dashboard/customers" },
  { icon: SettingsIcon, label: "Settings", href: "/dashboard/settings" },
];

export default function Sidebar() {
  const [open, setOpen] = useState(true);
  const router = useRouter();

  const handleDrawerToggle = () => {
    setOpen(!open);
  };

  return (
    <Drawer
      variant="permanent"
      open={open}
      sx={{
        width: open ? 240 : 72,
        flexShrink: 0,
        "& .MuiDrawer-paper": {
          width: open ? 240 : 72,
          boxSizing: "border-box",
          transition: "width 0.3s ease-in-out",
          overflowX: "hidden",
        },
      }}
    >
      <List>
        <ListItem
          disablePadding
          sx={{ display: "flex", justifyContent: "flex-end", p: 1 }}
        >
          <IconButton onClick={handleDrawerToggle}>
            {open ? <ChevronLeftIcon /> : <ChevronRightIcon />}
          </IconButton>
        </ListItem>
        {menuItems.map((item) => (
          <ListItem key={item.href} disablePadding>
            <ListItemButton
              onClick={() => router.push(item.href)}
              sx={{
                minHeight: 48,
                justifyContent: open ? "initial" : "center",
                px: 2.5,
              }}
            >
              <ListItemIcon
                sx={{
                  minWidth: 0,
                  mr: open ? 3 : "auto",
                  justifyContent: "center",
                }}
              >
                <item.icon />
              </ListItemIcon>
              <ListItemText
                primary={item.label}
                sx={{ opacity: open ? 1 : 0 }}
              />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Drawer>
  );
}
