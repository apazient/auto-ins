import ReactDatePicker from "react-datepicker";
import { DataContainerStyled } from "./CommonDatePicker.styled";

const CommonDatePicker = ({
  label,
  id,
  selected,
  onSelect,
  closeOnScroll,
  customInput,
  name,
  dateFormat,
  showIcon,
  minDate,
  maxDate,
  startDate,
  locale,
  icon,
  ...props
}) => {
  return (
    <DataContainerStyled>
      <label htmlFor={id}>{label}</label>
      <ReactDatePicker
        id={id}
        selected={selected}
        onSelect={onSelect}
        closeOnScroll={closeOnScroll}
        customInput={customInput}
        name={name}
        dateFormat={dateFormat}
        showIcon={showIcon}
        minDate={minDate}
        maxDate={maxDate}
        startDate={startDate}
        locale={locale}
        withPortal
        icon={icon}
        {...props}
      />
    </DataContainerStyled>
  );
};

export default CommonDatePicker;
