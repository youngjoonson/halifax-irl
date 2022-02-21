import { HeaderContainer } from "./header.styles"
import { MainTitle } from "../title/title.component";

const Header = ({children}) => (
    <HeaderContainer>
        <MainTitle isMain>{children}</MainTitle>
    </HeaderContainer>
);

export default Header;