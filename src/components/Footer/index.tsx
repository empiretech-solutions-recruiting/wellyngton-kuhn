import { Link } from "react-router-dom";

import { AiOutlineLinkedin, AiOutlineGithub } from "react-icons/ai";
export default function Footer() {
  return (
    <footer className="w-full bg-gray-50 py-4">
      <div className="container mx-auto px-5">
        <div className="flex flex-col items-center gap-2">
          <p className="text-xs">
            Projeto feito por{" "}
            <Link
              to="https://portfolio-wellyngtonkuhn.vercel.app"
              title="Portfolio"
              target="_blank"
              className="font-bold"
            >
              Wellyngton Kuhn ©2023!
            </Link>
          </p>
          <ul className="flex items-center gap-4">
            <li>
              <Link
                to="https://www.linkedin.com/in/wellyngtonkuhn"
                title="Linkedin"
                target="_blank"
              >
                <AiOutlineLinkedin size={20} />
              </Link>
            </li>
            <li>
              <Link
                to="https://github.com/Wellyngtonkuhn"
                title="Github"
                target="_blank"
              >
                <AiOutlineGithub size={20} />
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
