import { useForm, Controller } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import Login from "../../organisms/login/login";
import AuthTemplate from "../../templates/auth/auth_template";
import useSignupHook from "../../../hooks/useSignupHook";
import "./login_page.style.css";

const LoginPage = () => {
  const navigate = useNavigate();
  const {
    handleSubmit,
    control,
    formState: { errors },
    getValues,
  } = useForm();

  const { login } = useSignupHook();

  const onSubmit = async () => {
    const userData = {
      email: getValues("email"),
      password: getValues("password"),
    };

    const result = await login(userData);
    if (result.success) {
      navigate("/");
    } else {
      console.log("Not");
    }
  };

  return (
    <AuthTemplate onSubmit={onSubmit} title={"Login"} buttonTitle={"Submit"}>
      <Login
        handleSubmit={handleSubmit}
        onSubmit={onSubmit}
        errors={errors}
        Controller={Controller}
        control={control}
      ></Login>
    </AuthTemplate>
  );
};

export default LoginPage;
