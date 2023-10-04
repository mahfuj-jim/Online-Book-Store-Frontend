/* eslint-disable react/prop-types */
import "./input.style.css";

const Input = ({
  className,
  type = "text",
  id,
  placeholder = "",
  field,
  value,
  onChange,
}) => {
  return (
    <input
      type={type}
      placeholder={placeholder}
      id={id}
      value={value}
      onChange={onChange}
      {...field}
      className={className}
    />
  );
};

export default Input;
