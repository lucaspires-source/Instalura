import { MenuWrapper } from "./styles/MenuWrapper";

const Menu = () => {
  return (
    <MenuWrapper>
      <MenuWrapper.LeftArea>Logo Area</MenuWrapper.LeftArea>
      <MenuWrapper.CenterArea>Links Area</MenuWrapper.CenterArea>
      <MenuWrapper.RightArea>Buttons Area</MenuWrapper.RightArea>
    </MenuWrapper>
  );
};

export default Menu;
