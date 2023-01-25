import { useEffect } from 'react';

// const DateSelector = ({ id, labelled = true, labelText, dateRef, enablePastDates = false, fullSpan = false, changeHandler }) => {
const DateSelector = ({
  id,
  labelled = true,
  labelText,
  dateRef,
  enablePastDates = false,
  fullSpan = false,
  formikVal,
  validated = false,
  formError,
  handleChange,
  updateTimesCallback,
}) => {
  useEffect(() => {
    if (!enablePastDates) {
      const dateToday = new Date();

      let month = dateToday.getMonth() + 1;
      let day = dateToday.getDate();
      let year = dateToday.getFullYear();
      if (month < 10) month = '0' + month.toString();
      if (day < 10) day = '0' + day.toString();

      const maxDate = year + '-' + month + '-' + day;
      document.getElementById(`${id}`).setAttribute('min', maxDate);
    }
  }, [enablePastDates, id]);
  return (
    <div className={`form-group${fullSpan ? ' full-span' : ''}`}>
      <label htmlFor={id} className={`${!labelled ? 'sr-only ' : ''}highlight`}>
        {labelText}
      </label>
      <input
        type='date'
        id={id}
        data-testid={id}
        name={dateRef}
        {...formikVal}
        onChange={(event) => {
          handleChange(event);
          updateTimesCallback(event.target.value);
        }}
      />
      {validated && (
        <div className='form-error' data-testid={`${id}-error`}>
          {formError}
        </div>
      )}
    </div>
  );
};
export default DateSelector;
