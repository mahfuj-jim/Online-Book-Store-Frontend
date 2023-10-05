/* eslint-disable react/prop-types */
import Input from "../../atoms/elements/input/input";

const Login = ({ handleSubmit, onSubmit, errors, Controller, control }) => {
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
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
            <Input
              type={"email"}
              id={"email"}
              field={field}
              className={"signup-input"}
            ></Input>
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
            <Input
              type={"password"}
              id={"password"}
              field={field}
              className={"signup-input"}
            ></Input>
          )}
        />
      </div>
    </form>
  );
};

export default Login;
