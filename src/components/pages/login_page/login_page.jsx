import { useForm, Controller } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import Login from "../../organisms/login/login";
import AuthTemplate from "../../templates/auth/auth_template";
import useSignupHook from "../../../hooks/useSignupHook";
import { addUser } from "../../../redux/actions/user_action";
import "./login_page.style.css";

const LoginPage = () => {
  const dispatch = useDispatch();
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
      const userInfo = {
        token: result.data.token,
        id: result.data.user._id,
        email: result.data.user.email,
      };
      
      dispatch(addUser(userInfo));
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
