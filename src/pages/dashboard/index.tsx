import { useAppSelector } from "redux/reduxHooks";
import { SubmitHandler, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import InputMask from "react-input-mask";
import { useQuery } from "@tanstack/react-query";

import BrazilMap from "../../components/BrazilMap";
import axios from "axios";
import { useState } from "react";

const CepSchema = yup.object({
  cep: yup.string().required("campo obrigatório*"),
});

type CepType = yup.InferType<typeof CepSchema>;

export default function Dashboard() {
  const [braziCep, setBrazilCep] = useState<string | null>(null);
  const { user } = useAppSelector((state) => state.user);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<CepType>({
    resolver: yupResolver(CepSchema),
    mode: "all",
  });

  const { data, isFetching } = useQuery(
    ["cep", braziCep],
    async () => {
      const response = await axios.get(
        `https://viacep.com.br/ws/${braziCep}/json/`,
      );
      const data = response.data;
      return data;
    },
    {
      staleTime: 60 * 1000 * 5, // 5 minutos até revalidar novamente
      enabled: !!braziCep,
    },
  );

  const handleCepSearch: SubmitHandler<CepType> = (data) => {
    const cepFormated = data.cep.replace(".", "").replace("-", "");
    setBrazilCep(cepFormated);
  };

  return (
    <main className="w-full mt-4">
      <section className="container mx-auto px-5">
        <div className="flex flex-col md:flex-row-reverse md:justify-between md:items-center md:gap-10 z-0">
          <div className="w-full">
            <h3 className="text-lg text-gray-700 font-normal md:text-xl">
              Olá,
              <span className="font-medium"> {user.name}!</span>
            </h3>
            <p className="mb-4 text-gray-700">
              Insira um cep válido para pesquisar.
            </p>

            <form
              onSubmit={handleSubmit(handleCepSearch)}
              className="max-w-sm flex flex-col"
            >
              <InputMask
                mask="99.999-999"
                placeholder="99.999-999"
                maskChar={null}
                {...register("cep")}
                className="w-full border-solid border-gray-300 border-b-[1px] outline-none text-gray-500 text-base px-3"
              />

              {errors.cep && (
                <p className="text-sm font-normal text-red-500">
                  {errors.cep.message}
                </p>
              )}
              <button
                type="submit"
                className="bg-blue-500 py-2 mt-4 rounded-2xl text-gray-50 text-base"
              >
                {isFetching ? "Pesquisando..." : "Pesquisar"}
              </button>
            </form>
          </div>

          <div className="w-full my-4">
            <BrazilMap brazilState={data?.uf} />
          </div>
        </div>
      </section>
    </main>
  );
}
