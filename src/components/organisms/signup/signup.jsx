/* eslint-disable react/prop-types */
import Input from "../../atoms/elements/input/input";

const Signup = ({handleSubmit, onSubmit, errors, Controller, control, watch}) => {
  return (
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
              <Input
                type={"text"}
                id={"first_name"}
                field={field}
                className={"signup-input"}
              ></Input>
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
              <Input
                type={"text"}
                id={"last_name"}
                field={field}
                className={"signup-input"}
              ></Input>
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
              <Input
                type={"tel"}
                id={"phoneNumber"}
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
              <Input
                type={"password"}
                id={"confirm_password"}
                field={field}
                className={"signup-input"}
              ></Input>
            )}
          />
        </div>
      </form>
  );
};

export default Signup;
