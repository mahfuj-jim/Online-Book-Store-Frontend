/* eslint-disable react/prop-types */
import "./button.style.css";

const Button = ({className, title, onClick}) => {
    return (
        <button className={className} onClick={onClick}>{title}</button>
    );
}

export default Button;
