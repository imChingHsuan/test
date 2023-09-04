import { Box, Button, Drawer, IconButton, List, Toolbar } from "@mui/material";
import SortBtn from "./SortBtn";
import leftNavData from "./leftNavData";
import MenuIcon from "@mui/icons-material/Menu";
import { useState } from "react";
import DrawerChild from "./DrawerChild";
const Header = () => {
  const [anchor, setAnchor] = useState(false);
  const toggleDrawer = () => {
    setAnchor((state) => !state);
  };
  return (
    <>
      <Box
        className="h-[75px] sticky w-full overflow-hidden top-0"
        sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}
      >
        <div className="flex items-center h-full px-8 justify-between">
          <div className="flex items-center space-x-2">
            <IconButton
              sx={{ "@media (min-width: 768px)": { display: "none" } }}
              onClick={toggleDrawer}
            >
              <MenuIcon />
            </IconButton>

            <div className="bg-slate-100 text-4xl font-bold p-2">LOGO</div>
          </div>
          <div className="flex items-center space-x-2">
            {leftNavData.map(({ title, key, sort }) => {
              return <SortBtn key={key} title={title} sort={sort} />;
            })}
            <Button className="font-bold p-1" color="inherit">
              登入
            </Button>
          </div>
        </div>
      </Box>
      <Drawer
        anchor="left"
        open={anchor}
        onClose={toggleDrawer}
        variant="temporary"
        sx={{ width: 250, "& .MuiDrawer-paper": { width: 250, top: 75 } }}
        hideBackdrop
        elevation={0}
      >
        <List disablePadding>
          {leftNavData.map((classify) => (
            <DrawerChild classify={classify} key={classify.key} />
          ))}
        </List>
      </Drawer>
    </>
  );
};

export default Header;
