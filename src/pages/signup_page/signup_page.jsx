import { useForm, Controller } from "react-hook-form";
import "./signup_page.style.css";
import Button from "../../components/elements/button/button";
import useSignupApi from "../../hooks/useSignupHook";

const SignUpPage = () => {
  const {
    handleSubmit,
    control,
    formState: { errors },
    setValue,
    getValues,
    watch,
  } = useForm();

  const { signUp } = useSignupApi();

  const onSubmit = () => {
    setValue("name", `${getValues("first_name")} ${getValues("last_name")}`);

    const userData = {
      role: 2,
      email: getValues("email"),
      name: getValues("name"),
      password: getValues("password"),
    };

    signUp(userData);
  };

  return (
    <div className="signup-container">
      <h2>Sign Up</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="form-group">
          <label htmlFor="first_name">First Name</label>
          {errors.first_name && (
            <p className="error-message">First Name is required.</p>
          )}
          <Controller
            name="first_name"
            control={control}
            defaultValue=""
            rules={{ required: true }}
            render={({ field }) => (
              <input
                type="text"
                id="first_name"
                {...field}
                className={errors.first_name ? "error" : ""}
              />
            )}
          />
        </div>
        <div className="form-group">
          <label htmlFor="last_name">Last Name</label>
          {errors.last_name && (
            <p className="error-message">Late Name is required.</p>
          )}
          <Controller
            name="last_name"
            control={control}
            defaultValue=""
            rules={{ required: true }}
            render={({ field }) => (
              <input
                type="text"
                id="last_name"
                {...field}
                className={errors.last_name ? "error" : ""}
              />
            )}
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          {errors.email && (
            <p className="error-message">Invalid email address.</p>
          )}
          <Controller
            name="email"
            control={control}
            defaultValue=""
            rules={{ required: true, pattern: /^\S+@\S+$/i }}
            render={({ field }) => (
              <input
                type="email"
                id="email"
                {...field}
                className={errors.email ? "error" : ""}
              />
            )}
          />
        </div>
        <div className="form-group">
          <label htmlFor="phoneNumber">Phone Number</label>
          {errors.phoneNumber && (
            <p className="error-message">Phone number must be 11 digits.</p>
          )}
          <Controller
            name="phoneNumber"
            control={control}
            defaultValue=""
            rules={{ required: true, pattern: /^[0-9]{11}$/ }}
            render={({ field }) => (
              <input
                type="tel"
                id="phoneNumber"
                {...field}
                className={errors.phoneNumber ? "error" : ""}
              />
            )}
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          {errors.password && (
            <p className="error-message">
              Password must be at least 8 characters.
            </p>
          )}
          <Controller
            name="password"
            control={control}
            defaultValue=""
            rules={{ required: true, minLength: 8 }}
            render={({ field }) => (
              <input
                type="password"
                id="password"
                {...field}
                className={errors.password ? "error" : ""}
              />
            )}
          />
        </div>
        <div className="form-group">
          <label htmlFor="confirm_password">Confirm Password</label>
          {errors.confirm_password && (
            <p className="error-message">
              Password and confirm password should be same
            </p>
          )}
          <Controller
            name="confirm_password"
            control={control}
            defaultValue=""
            rules={{
              required: true,
              validate: (value) => {
                if (value != watch("password"))
                  return "Password and confirm password should be same";
              },
            }}
            render={({ field }) => (
              <input
                type="password"
                id="confirm_password"
                {...field}
                className={errors.confirm_password ? "error" : ""}
              />
            )}
          />
        </div>
        <Button
          className={"cart-btn"}
          title={"Submit"}
          type="submit"
          onClick={() => {}}
        ></Button>
        <br></br>
      </form>
    </div>
  );
};

export default SignUpPage;
