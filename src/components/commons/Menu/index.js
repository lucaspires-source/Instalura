import { MenuWrapper } from "./styles/MenuWrapper";
import { Logo } from "../../../theme/Logo";
import { Button } from "../Button";
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
        {links.map((link) => {
          return (
            <li key={link.url}>
              <a href={link.url}>{link.texto}</a>
            </li>
          );
        })}
      </MenuWrapper.CenterArea>
      <MenuWrapper.RightArea>
        <Button ghost>Entrar</Button>
        <Button>Cadastrar</Button>
      </MenuWrapper.RightArea>
    </MenuWrapper>
  );
};

export default Menu;
