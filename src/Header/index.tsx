import "animate.css";
import Logo from "./../assets/image/logo.svg";

export default function Header() {
  return (
    <div className="flex flex-col justify-center items-center w-full">
      <img
        src={Logo}
        className="w-24 mt-10 bg-primary-color-100 rounded-full p-2 shadow-[0px_0px_50px_5px_#f7a90074] animate__animated animate__backInDown"
      />
      <p className="text-white font-khand font-extrabold tracking-wide text-2xl mt-6 animate__animated animate__fadeInDown">
        ANZO DESIGNER
      </p>
      <p className="text-white/40 font-light tracking-widest text-sm animate__animated animate__fadeInDown">
        Designer Gráfico para Social Mídia
      </p>
    </div>
  );
}
