import { Container } from "@mui/system";
import { useState } from "react";
import { withStyles } from "@mui/styles";
import FilterBox from "../component/FilterBox/FilterBox";
import CommonDatepicker from "../component/CommonDatepicker/CommonDatepicker";
const styles = (theme) => ({
  inner: {
    padding: "2rem",
    display: "flex",
    alginItem: "center",
    justifyContent: "space-between",
  },
});
const Home = (props) => {
  const { classes } = props;
  const [selectedOption, setSelectedOption] = useState("");
  const [showDatePicker, setShowDatePicker] = useState(false);
  const datepickerHandle = (value) => {
    if (value === "registration") {
      setSelectedOption();
      setShowDatePicker(true);
    }
  };
  return (
    <>
      <Container maxWidth="lg">
        <div className={classes.inner}>
          <FilterBox handleChange={datepickerHandle} />
          {showDatePicker && <CommonDatepicker />}
        </div>
      </Container>
    </>
  );
};
export default withStyles(styles)(Home);
