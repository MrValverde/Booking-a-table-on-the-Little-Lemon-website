const OccasionSelect = ({ id, labelText, labelled = true, selectRef, fullSpan = false, formikVal, validated = false, formError }) => {
  const occasions = ['Engagement', 'Birthday', 'Anniversary', 'Reunion', 'Others'];
  return (
    <div className={`form-group${fullSpan ? ' full-span' : ''}`}>
      <label htmlFor={id} className={`${!labelled ? 'sr-only ' : ''}highlight`}>
        {labelText}
      </label>
      <select id={id} data-testid={id} name={selectRef} {...formikVal}>
        <option value=''>None</option>
        {occasions.map((ocassion, index) => (
          <option key={index} value={ocassion.toLowerCase()} data-testid={`${id}-option`}>
            {ocassion}
          </option>
        ))}
      </select>
      {validated && (
        <div className='form-error' data-testid={`${id}-error`}>
          {formError}
        </div>
      )}
    </div>
  );
};
export default OccasionSelect;
