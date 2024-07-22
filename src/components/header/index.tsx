import logo from '../../assets/logo.png';
import { HeaderContainer } from './header.styles';

function Header() {
return (
    <HeaderContainer>
        <img src={logo} alt="logo betalent" />
    </HeaderContainer>
)
}


export default Header;