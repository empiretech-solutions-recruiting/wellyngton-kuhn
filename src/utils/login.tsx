import { AxiosError } from "axios";
import { api } from "axiosConfig/api";

type UseLoginProps = {
  email: string;
  password: string;
};

export default async function useLogin({ email, password }: UseLoginProps) {
  try {
    if (email && password !== "") {
      const response = await api.post("/login", { email, password });
      if (response.status === 200) {
        return response;
      }
    }
    return;
  } catch (error) {
    const errorData = error as AxiosError;
    return errorData.response;
  }
}
