import { ExpandLess, ExpandMore } from "@mui/icons-material";
import { Collapse, List, ListItemButton, ListItemText } from "@mui/material";
import { useState } from "react";
const emerald800 = "#065f46";
const DrawerChild = ({ classify }) => {
  const [expand, setExpand] = useState(false);
  const ListItemToggle = () => {
    setExpand((state) => !state);
  };
  return (
    <>
      <ListItemButton
        onClick={ListItemToggle}
        sx={{ backgroundColor: expand && "#d1fae5 !important" }}
      >
        <ListItemText sx={{ color: expand && emerald800 }}>
          {classify.title}
        </ListItemText>
        {expand ? (
          <ExpandLess color={expand ? "success" : "inhrtit"} />
        ) : (
          <ExpandMore />
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
