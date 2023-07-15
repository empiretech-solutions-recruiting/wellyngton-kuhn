import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useForm, SubmitHandler } from "react-hook-form";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import useLogin from "utils/login";

const loginShema = yup.object({
  email: yup.string().email("email inválido").required("campo obrigatório"),
  password: yup
    .string()
    .min(8, "mínimo de 8 caracteres")
    .required("campo obrigatório"),
});

type Login = yup.InferType<typeof loginShema>;

export default function Login() {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Login>({
    resolver: yupResolver(loginShema),
    mode: "all",
  });

  const handleShowPassword = () => {
    setShowPassword((prev) => !prev);
  };

  const handleLogin: SubmitHandler<Login> = async (data) => {
    if (data.email && data.password) {
      const response = await useLogin(data);
      if (response?.status === 400) {
        alert(response.data);
      }
      if (response?.status === 200) {
        navigate("/dashboard", { replace: true });
      }
    }
    return;
  };

  return (
    <main className="w-full h-screen flex items-center">
      <section className="container mx-auto px-5">
        <div className="md:max-w-sm mx-auto">
          <h1 className="text-2xl text-gray-950 font-medium mb-5 ">Login</h1>
          <form className="flex flex-col" onSubmit={handleSubmit(handleLogin)}>
            <input
              type="text"
              placeholder="seuemail@abc.com"
              className="border-solid border-gray-300 border-b-[1px] outline-none text-gray-500 text-base px-3"
              {...register("email")}
            />
            {errors.email && (
              <p className="text-sm font-normal text-red-500">
                {errors.email.message}
              </p>
            )}
            <div className="flex items-center justify-between border-solid border-gray-300 border-b-[1px] px-3 mt-3">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="********"
                className=" w-full outline-none text-gray-500 text-base"
                {...register("password")}
              />
              {showPassword ? (
                <button onClick={() => handleShowPassword()}>
                  <AiOutlineEyeInvisible size={18} />
                </button>
              ) : (
                <button onClick={() => handleShowPassword()}>
                  <AiOutlineEye size={18} />
                </button>
              )}
            </div>
            {errors.password && (
              <p className="text-sm font-normal text-red-500">
                {errors.password.message}
              </p>
            )}
            <button
              type="submit"
              className="bg-blue-500 px-7 py-2 mt-4 rounded-2xl text-gray-50 text-base "
            >
              Entrar
            </button>
          </form>
        </div>
      </section>
    </main>
  );
}
