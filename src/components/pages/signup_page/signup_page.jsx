import { useForm, Controller } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import Signup from "../../organisms/signup/signup";
import AuthTemplate from "../../templates/auth/auth_template";
import useSignupHook from "../../../hooks/useSignupHook";
import "./signup_page.style.css";

const SignUpPage = () => {
  const navigate = useNavigate();
  const {
    handleSubmit,
    control,
    formState: { errors },
    setValue,
    getValues,
    watch,
  } = useForm();

  const { signUp } = useSignupHook();

  const onSubmit = async () => {
    setValue("name", `${getValues("first_name")} ${getValues("last_name")}`);

    const userData = {
      role: 2,
      email: getValues("email"),
      name: getValues("name"),
      password: getValues("password"),
    };

    const result = await signUp(userData);
    if (result.success) {
      navigate("/");
    } else {
      console.log("Not");
    }
  };

  return (
    <AuthTemplate onSubmit={onSubmit} title={"Signup"} buttonTitle={"Submit"}>
      <Signup
        handleSubmit={handleSubmit}
        onSubmit={onSubmit}
        errors={errors}
        Controller={Controller}
        control={control}
        watch={watch}
      ></Signup>
    </AuthTemplate>
  );
};

export default SignUpPage;
