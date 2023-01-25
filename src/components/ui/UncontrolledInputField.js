const UncontrolledInputField = ({ type = 'text', id, labelText, placeholder = labelText, labelled = true, inputRef, fullSpan = false }) => {
  return (
    <div className={`form-group${fullSpan ? ' full-span' : ''}`}>
      <label htmlFor={id} className={`${!labelled ? 'sr-only ' : ''}highlight`}>
        {labelText}
      </label>
      <input type={type} id={id} data-testid={id} ref={inputRef} placeholder={placeholder} />
    </div>
  );
};
export default UncontrolledInputField;
