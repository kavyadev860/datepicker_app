import * as React from "react";
import { useState } from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { withStyles } from "@mui/styles";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
const styles = (theme) => ({
  filterButton: {
    "&.MuiButton-root": {
      padding: "8px 15px",
      fontSize: "15px",
      color: "#344054",
      fontWeight: "600",
      border: " 0.75px solid #D0D5DD",
      boxShadow: "0px 0.75px 1.5px 0px #1018280D",
      borderRadius: "8px",
      "& img": {
        height: "20px",
        width: "20px",
        marginRight: "8px",
      },
    },
  },
  filterDropDown: {
    position: "inherit !important",
    boxShadow: "none !important",
    "& .MuiList-root": {
      minWidth: "320px",
      borderRadius: "8px !important",
      overflow: "hidden",
      padding: "0",
    },
    "& .MuiMenuItem-root": {
      padding: "15px",
      borderBottom: "1px solid #C6C6C6",
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      "&:last-child": {
        borderBottom: "none",
      },
      "& span": {
        fontSize: "15px",
        color: "#344054",
        fontWeight: "500",
      },
      "& svg": {
        fontSize: "15px",
        color: "#667085",
        fontWeight: "500",
      },
    },
  },
  refine: {
    "& span": {
      "&:first-child": {
        fontSize: "15px",
        fontWeight: "700",
      },
    },
  },
  clearLink: {
    fontSize: "15px",
    color: "#304FFE !important",
    fontWeight: "700",
  },
});
function FilterBox(props) {
  const { classes, handleChange } = props;
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className={classes.filterBox}>
      <Button
        id="basic-button"
        aria-controls={open ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
        className={classes.filterButton}
      >
        <img src="images/filters.svg" alt="filters" />
        Filters
      </Button>
      <Menu
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuProps={{
          disableScrollLock: false,
        }}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
        className={classes.filterDropDown}
      >
        <MenuItem
          onClick={() => handleChange("refine")}
          className={classes.refine}
        >
          <span>Refine by</span>
          <span className={classes.clearLink}>Clear</span>
        </MenuItem>
        <MenuItem onClick={() => handleChange("registration")}>
          <span>Date of registration</span>
          <ArrowForwardIosIcon />
        </MenuItem>
        <MenuItem onClick={() => handleChange("vendor")}>
          <span>Vendor score</span> <ArrowForwardIosIcon />
        </MenuItem>
        <MenuItem onClick={() => handleChange("rating")}>
          <span>Rating</span> <ArrowForwardIosIcon />
        </MenuItem>
        <MenuItem onClick={() => handleChange("status")}>
          <span>Status</span> <ArrowForwardIosIcon />
        </MenuItem>
        <MenuItem onClick={() => handleChange("business")}>
          <span>Type of business</span> <ArrowForwardIosIcon />
        </MenuItem>
        <MenuItem onClick={() => handleChange("location")}>
          <span>Location</span> <ArrowForwardIosIcon />
        </MenuItem>
        <MenuItem onClick={() => handleChange("assign")}>
          <span>Assign to</span> <ArrowForwardIosIcon />
        </MenuItem>
      </Menu>
    </div>
  );
}
export default withStyles(styles)(FilterBox);
