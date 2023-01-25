import { Link } from 'react-router-dom';

const Button = ({ btnText, path, button = false, clickHandler }) => {
  return (
    <>
      {button ? (
        <button type='button' className='btn-primary' onClick={clickHandler}>
          {btnText}
        </button>
      ) : (
        <Link className='btn-primary' to={path}>
          {btnText}
        </Link>
      )}
    </>
  );
};
export default Button;
