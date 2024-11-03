import './Button.css'
import PropTypes from "prop-types";

const Button = ({children,className,onClick}) => {
  return (
    <button className={`${className}-btn`} onClick={onClick}>{children}</button>
  )
}

export default Button

Button.propTypes = {
  children: PropTypes.node,
  className:PropTypes.string,
  onClick:PropTypes.func
  
};