import "./App.css";
// import Login from "./pages/login";
import { DateRangePicker, RangeKeyDict, Range } from "react-date-range";
import { useState } from "react";
import "react-date-range/dist/styles.css"; // main css file
import "react-date-range/dist/theme/default.css"; // theme css file
import { format, addDays } from "date-fns";

function App() {
  const [dateRange, setDateRange] = useState<Range[]>([
    {
      startDate: new Date(),
      endDate: addDays(new Date(), -7),
      key: "selection",
      // color: "primary",
      showDateDisplay: true,
    },
  ]);

  const handleDateRangeChange = (rangesByKey: RangeKeyDict) => {
    console.log(rangesByKey.selection);
    setDateRange([rangesByKey.selection]);
  };
  return (
    <>
      {/* <Login /> */}
      <div>
        <DateRangePicker
          ranges={dateRange}
          onChange={handleDateRangeChange}
          maxDate={new Date(Date.now())}
          minDate={addDays(new Date(), -95)}
          moveRangeOnFirstSelection={false}
          months={2}
          direction="horizontal"
        />
        <div>
          <h2>Selected Range:</h2>
          <p>
            Start Date:{" "}
            {dateRange[0]?.startDate &&
              format(dateRange[0]?.startDate, "dd-MM-yyyy")}{" "}
            <br />
            End Date:{" "}
            {dateRange[0]?.endDate &&
              format(dateRange[0]?.endDate, "dd-MM-yyyy")}{" "}
          </p>
        </div>
      </div>
    </>
  );
}

export default App;
