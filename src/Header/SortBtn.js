import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { Box, Popover } from "@mui/material";
import { useState } from "react";
import { Link } from "react-router-dom";
const SortBtn = ({ title, sort }) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const handlePopoverOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handlePopoverClose = () => {
    setAnchorEl(null);
  };
  return (
    <Box className="md:block hidden">
      <div
        className="flex items-center space-x-0.5"
        onClick={handlePopoverOpen}
      >
        <div className="select-none">{title}</div>
        <KeyboardArrowDownIcon
          sx={{
            transform: Boolean(anchorEl) && "rotate(180deg)",
            transition: "all 0.3s ease",
          }}
          color="action"
        />
      </div>
      <Popover
        open={Boolean(anchorEl)}
        anchorEl={anchorEl}
        onClose={handlePopoverClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "center",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "center",
        }}
      >
        <div className="flex">
          {sort.map(({ title, key, items }) => (
            <div className="m-4 w-32" key={key}>
              <div className="text-emerald-600 font-bold border-b-2 border-emerald-600 p-1">
                {title}
              </div>
              {items.map(({ title, key, url }) => (
                <Link
                  className="cursor-pointer block mx-1 my-2"
                  key={key}
                  to={url}
                >
                  {title}
                </Link>
              ))}
            </div>
          ))}
        </div>
      </Popover>
    </Box>
  );
};
export default SortBtn;
