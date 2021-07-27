import { MenuWrapper } from "./styles/MenuWrapper";
import { Logo } from "../../../theme/Logo";
const Menu = () => {
  const links = [
    { texto: "Home", url: "/" },
    { texto: "Perguntas Frequentes", url: "/faq" },
    { texto: "Sobre", url: "/sobre" },
  ];
  return (
    <MenuWrapper>
      <MenuWrapper.LeftArea>
        <Logo />
      </MenuWrapper.LeftArea>
      <MenuWrapper.CenterArea>
        {links.map((link)=>{
          return (
            <li> 
              <a href={link.url}>{link.texto}</a>
            </li>
          )
        })}
      </MenuWrapper.CenterArea>
      <MenuWrapper.RightArea>
        <button>Entrar</button>
        <button>Cadastrar</button>
      </MenuWrapper.RightArea>
    </MenuWrapper>
  );
};

export default Menu;
