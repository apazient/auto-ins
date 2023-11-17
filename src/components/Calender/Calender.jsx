import { useState } from "react";
import DatePicker from "react-datepicker";

const Calender = () => {
    const [startDate, setStartDate] = useState(null);
      // const valid = (current) => {
  //   const inThreeMonths = Datetime.moment().add(3, "months");
  //   return (
  //     current.isAfter(Datetime.moment()) && current.isBefore(inThreeMonths)
  //   );
  // };
  // const handleChangeDate = (e) => {
  //   const newObject = {
  //     ...submitObject,
  //     dateFrom: moment(e).format("YYYY-MM-DD"),
  //   };

  //   setUserDate(e);
  //   dispatch(setSubmitObj(newObject));
  // };
  return (
    <DatePicker
      id="dateFrom"
          value={dateFrom}
          locale="uk"
      selected={startDate}
      onChange={(date) => setStartDate(date)}
      includeDates={[new Date(), addDays(new Date(), 1)]}
      placeholderText="This only includes today and tomorrow"
    />
  );
};

export default Calender;
   // <DatePicker
    // id="dateFrom"
    // value={dateFrom}
    // // onChange={handleChangeDate}
    // type="date"
    // name="date"
    // dateFormat="YYYY-MM-DD"
    // timeFormat={false}
    // locale="uk"
    // closeOnSelect={true}
    // // isValidDate={valid}
    // inputProps={inputProps}
    />;