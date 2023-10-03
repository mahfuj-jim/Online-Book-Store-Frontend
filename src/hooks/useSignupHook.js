import { useState } from "react";
import axiosInstance from "../utils/axios_instance";

const useSignupApi = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [response, setResponse] = useState(null);

  const signUp = async (userData) => {
    setIsLoading(true);
    setResponse(null);

    userData = { ...userData };

    try {
      const response = await axiosInstance.post("/auth/signup", userData);
      setResponse(response.data);
      setIsLoading(false);

      return response.data;
    } catch (error) {
      console.log(error);
    }
  };

  return { signUp, isLoading, response };
};

export default useSignupApi;
