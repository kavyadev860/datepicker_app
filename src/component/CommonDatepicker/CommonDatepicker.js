import React, { useState } from "react";
import { DateRangePicker } from "mui-daterange-picker";
import { withStyles } from "@mui/styles";
import moment from "moment";
const styles = (theme) => ({
  datepicker: {
    maxWidth: "700px",
    "& .MuiGrid-wrap-xs-nowrap": {
      flexDirection: "row-reverse",
      borderRadius: "5px",
      overflow: "hidden",
    },
    "& .css-pad2pl-MuiGrid-root": {
      boxShadow:"0px 4px 6px -2px #00000008, 0px 12px 16px -4px #00000014 !important",
      border: "1px solid #C6C6C6",
    },
    "& .MuiOutlinedInput-root": {
      border: "none",
      "& > div": {
        border: "none",
      },
    },
  },
  datefield: {
    padding: "15px",
    position: "relative",
    border: "1px solid #C6C6C6",
    minWidth: "250px",
    display: "flex",
    marginBottom: "20px",
    borderRadius: "8px",
    maxWidth: "250px",
    marginLeft: "auto",
    "& input": {
      border: "none",
      padding: "0",
    },
    "& img": {
      width: "20px",
      height: "20px",
      marginRight: "8px",
    },
  },
  formControl: {
    padding: "15px",
    fontSize: "15px",
  },
});
const CommonDatepicker = (props) => {
  const { classes } = props;
  const [open, setOpen] = React.useState(true);
  const [dateRange, setDateRange] = React.useState("Date of registration");
  const toggle = () => setOpen(!open);

  const dateRangeChangeHandler = (range) => {
    // console.log(range);
    // '2024-02-24 - 2024-02-27'
    if (range.startDate && range.endDate) {
      setDateRange(
        moment(range.startDate).format("MMM D, YYYY") +
          " - " +
          moment(range.endDate).format("MMM D, YYYY")
      );
    }
  };
  // console.log(startDate);
  // console.log(endDate);
  return (
    <>
      <div className={classes.datepicker}>
        <div className={classes.datefield}>
          <img src="images/calendar.svg" alt="calendar" />
          <input
            type=""
            value={dateRange}
            placeholder="Select date"
            className={classes.formControl}
          />
        </div>
        <DateRangePicker
          disableScrollLock={false}
          open={open}
          toggle={toggle}
          onChange={dateRangeChangeHandler}
        />
      </div>
    </>
  );
};
export default withStyles(styles)(CommonDatepicker);
