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
   <DatePickerWrapper
              id="dateFrom"
              value={dateFrom}
              closeOnScroll={(e) => e.target === document}
              onChange={handleChangeDate}
              name="date"
              dateFormat="DD/MM/YYYY"
              showIcon={true}
              minDate={addDays(new Date(), 1)}
              maxDate={addMonths(new Date(), 3)}
              startDate={dateFrom}
              locale="uk"
              icon={
                <Box className="iconCalender">
                  <SpriteSVG name={"icon-calendar"} />
                </Box>
              }
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