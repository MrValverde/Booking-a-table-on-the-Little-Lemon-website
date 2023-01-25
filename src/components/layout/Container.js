const Container = ({ children, className = '', customStyles, customize = false }) => {
  return (
    <div className={`container ${className}`} style={customize ? customStyles : {}}>
      {children}
    </div>
  );
};
export default Container;
