import { useForm, Controller } from "react-hook-form";
import "./signup_page.style.css";
import Button from "../../components/elements/button/button";
import useSignupApi from "../../hooks/useSignupHook"

const SignUpPage = () => {
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm();

  const { signUp } = useSignupApi();

  const onSubmit = (data) => {
    signUp(data);
  };

  return (
    <div className="signup-container">
      <h2>Sign Up</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          {errors.name && <p className="error-message">Name is required.</p>}
          <Controller
            name="name"
            control={control}
            defaultValue=""
            rules={{ required: true }}
            render={({ field }) => (
              <input
                type="text"
                id="name"
                {...field}
                className={errors.name ? "error" : ""}
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
