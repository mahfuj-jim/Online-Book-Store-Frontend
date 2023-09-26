/* eslint-disable react/prop-types */
import "./button.style.css";

const Button = ({className, title}) => {
    return (
        <button className={className}>{title}</button>
    );
}

export default Button;
