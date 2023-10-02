import { useState } from "react";
import axiosInstance from "../utils/axios_instance";

const useSignupApi = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [response, setResponse] = useState(null);

  const signUp = async (userData) => {
    setIsLoading(true);
    setError(null);
    setResponse(null);

    userData = { ...userData, role: 2 };
    console.log(userData);

    try {
      const response = await axiosInstance.post("/auth/signup", userData);
      setResponse(response.data);
    } catch (error) {
      setError(error);
    } finally {
      setIsLoading(false);
    }
  };

  return { signUp, isLoading, error, response };
};

export default useSignupApi;
