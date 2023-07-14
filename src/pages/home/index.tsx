import { Link } from "react-router-dom";

export default function Home() {
  return (
    <main className="w-full">
      <div className="container mx-auto px-5">
        <div className="w-full h-screen flex items-center justify-center">
          <div className="flex flex-col items-center gap-1">
            <h1 className=" text-2xl text-gray-700 font-medium">
              Seja bem vindo!
            </h1>
            <p className="text-gray-700">Acesse sua conta.</p>
            <Link
              to="login"
              className="bg-blue-500 px-7 py-2 mt-4 rounded-2xl text-gray-50 text-base "
            >
              Fazer login
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
