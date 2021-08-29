import React from 'react';
import NextLink from 'next/link';
import PropTypes from 'prop-types';
import { MenuWrapper } from './styles/MenuWrapper';
import { Logo } from '../../../theme/Logo';
import { Button } from '../Button';

const Menu = ({ onCadastrarClick }) => {
  const links = [
    { texto: 'Home', url: '/' },
    { texto: 'Perguntas Frequentes', url: '/faq' },
    { texto: 'Sobre', url: '/sobre' },
  ];
  return (
    <MenuWrapper>
      <MenuWrapper.LeftArea>
        <Logo />
      </MenuWrapper.LeftArea>
      <MenuWrapper.CenterArea>
        {links.map((link) => (
          <li key={link.url}>
            <NextLink href={link.url}>
              <a>
                {link.texto}
              </a>
            </NextLink>
          </li>
        ))}
      </MenuWrapper.CenterArea>
      <MenuWrapper.RightArea>
        <Button ghost variant="secondary.main" href="/app/login">
          Entrar
        </Button>
        <Button
          variant="primary.main"
          onClick={onCadastrarClick}
        >
          Cadastrar
        </Button>
      </MenuWrapper.RightArea>
    </MenuWrapper>
  );
};
export default Menu;

Menu.propTypes = {
  onCadastrarClick: PropTypes.func.isRequired,
};
