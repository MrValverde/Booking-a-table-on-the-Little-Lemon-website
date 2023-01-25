const CommentBox = ({ id, labelled = true, labelText, placeholder = labelText, commentRef, fullSpan = false, formikVal, validated = false, formError }) => {
  return (
    <div className={`form-group${fullSpan ? ' full-span' : ''}`}>
      <label htmlFor={id} className={`${!labelled ? 'sr-only ' : ''}highlight`}>
        {labelText}
      </label>
      <textarea id={id} data-testid={id} cols='30' rows='4' placeholder={placeholder} name={commentRef} style={{ width: '100%' }} {...formikVal}></textarea>
      {validated && (
        <div className='form-error' data-testid={`${id}-error`}>
          {formError}
        </div>
      )}
    </div>
  );
};
export default CommentBox;
