import styled from 'styled-components'

const MenuWrapper = styled.nav `
font-family: 'Rubik', 'sans-serif';
display: flex;
align-items: center;
justify-content:space-between;
flex-wrap: wrap;
margin-top:18px;
padding-left: 28px;
padding-right:28px;

`


const Menu = () => {
  return(
    <MenuWrapper>
      <div>
          Logo Area
      </div>
      <div>
        Links Area
      </div>
      <div>
        Buttons Area
      </div>
    </MenuWrapper>
  )
}

export default function Home() {
  return <div><Menu /></div>;
}
