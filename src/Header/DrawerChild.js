import { ExpandLess, ExpandMore } from "@mui/icons-material";
import {
  Box,
  Collapse,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@mui/material";
import { useState } from "react";
import leftNavData from "./leftNavData";

const DrawerChild = ({ classify }) => {
  const [expand, setExpand] = useState(false);
  const ListItemToggle = () => {
    setExpand((state) => !state);
  };
  return (
    <>
      <ListItemButton
        onClick={ListItemToggle}
        sx={{ backgroundColor: expand && "rgb(209 250 229) !important" }}
      >
        <ListItemText className={expand && "text-emerald-800"}>
          {classify.title}
        </ListItemText>
        {expand ? (
          <ExpandLess color={expand ? "success" : "inhrtit"} />
        ) : (
          <ExpandMore color={expand ? "success" : "inhrtit"} />
        )}
      </ListItemButton>
      <Collapse in={expand} timeout="auto" unmountOnExit>
        <List component="div" disablePadding className="bg-emerald-50">
          {classify.sort.map((sortItem) => (
            <ListItemButton sx={{ pl: 4 }} key={sortItem.key}>
              <ListItemText primary={sortItem.title} />
            </ListItemButton>
          ))}
        </List>
      </Collapse>
    </>
  );
};
export default DrawerChild;
