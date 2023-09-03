import { Button, Drawer, IconButton } from "@mui/material";
import SortBtn from "./SortBtn";
import leftNavData from "./leftNavData";
import MenuIcon from "@mui/icons-material/Menu";
import { useState } from "react";
const Header = () => {
  const [anchor, setAnchor] = useState(false);
  const toggleDrawer = () => {
    console.log("456");
    setAnchor((state) => !state);
  };
  console.log("anchor", anchor);
  return (
    <div className="h-[75px] bg-emerald-100 sticky w-full overflow-hidden top-0">
      <div className="flex items-center h-full px-8 justify-between">
        <div className="flex items-center space-x-2">
          <IconButton
            sx={{ "@media (min-width: 768px)": { display: "none" } }}
            onClick={toggleDrawer}
          >
            <MenuIcon />
          </IconButton>
          <Drawer
            anchor="left"
            open={anchor}
            onClose={toggleDrawer}
            variant="temporary"
          >
            <div>456</div>
          </Drawer>
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
    </div>
  );
};

export default Header;
