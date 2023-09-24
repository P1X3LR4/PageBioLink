import Logo from "/logo.svg";
import BackgroundAnimated from "./components/BackgroundAnimated/BackgroundAnimated";
import LinkButton from "./components/LinkButton/LinkButton";
import { useState, useEffect } from "react";
import { TransitionGroup, CSSTransition } from "react-transition-group";

const linksButton: {
  [key: string]: string;
} = {
  wa: "https://wa.me/5563991179925?text=Ol%C3%A1%21+Me+chamo",
  in: "https://www.instagram.com/anzo.designer/",
  be: "https://www.behance.net/anzodesigner",
};

const imagesButtonLink: {
  [key: string]: string;
} = {
  wa: "/img_link_zap_original.png",
  in: "/img_link_instagram_original.png",
  be: "/img_link_behance_original.png",
};

function App() {
  const [visibleLinks, setVisibleLinks] = useState<string[]>([]);

  useEffect(() => {
    // Adicione os links à lista de links visíveis um por um com um atraso de 500ms entre cada um
    const keys = Object.keys(linksButton);
    const delay = 600; // Tempo de atraso entre cada link (em milissegundos)

    keys.forEach((key, index) => {
      const timeoutId = setTimeout(() => {
        setVisibleLinks((prevLinks) => [...prevLinks, key]);
      }, index * delay);

      // Limpe o timeout ao desmontar o componente para evitar vazamentos de memória
      return () => clearTimeout(timeoutId);
    });
  }, []);

  return (
    <>
      <BackgroundAnimated />
      <div className="main">
        <div className="topbar-container">
          <div className="logo-container">
            <img className="logo-image" src={Logo} alt="" />
          </div>

          <div className="welcome-container">
            <span className="text-welcome-1">Seja </span>
            <span className="text-welcome-2">Bem-vindo!</span>
          </div>

          <span className="text-subtitle">LINKS ÚTEIS</span>
        </div>
        <TransitionGroup className="links-images-container">
          {visibleLinks.map((key, index) => (
            <CSSTransition key={key} timeout={500} classNames="fade">
              <LinkButton
                key={key + index}
                link={linksButton[key]}
                image={imagesButtonLink[key]}
                alt={key}
              />
            </CSSTransition>
          ))}
        </TransitionGroup>
        <div className="footer-container-div">
          <a href="">Anzo Designer &copy; Copyright 2023 </a>
        </div>
      </div>
    </>
  );
}

export default App;
