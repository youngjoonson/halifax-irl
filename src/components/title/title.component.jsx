import { MainTitleContainer } from "./title.styles";
import Button from "../buttons/button.component";
export const MainTitle = ({isMain, ...props}) => (
    <MainTitleContainer>
        theqoo
        {isMain?(<Button>login</Button>): (<></>) }
    </MainTitleContainer>
);
