const RadioOption = ({ name, id, labelText, inputVal, changeHandler, fullSpan = false }) => {
  return (
    <div className={`form-group${fullSpan ? ' full-span' : ''}`}>
      <input name={name} type='radio' id={id} data-testid={id} value={inputVal} onChange={(e) => changeHandler(e.target.value)} />
      <label htmlFor={id} className='radio-label highlight'>
        {labelText}
      </label>
    </div>
  );
};
export default RadioOption;
