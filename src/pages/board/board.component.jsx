import { BoardContainer, 
    SubCategoriesContainer,
    noticesContianer,
    postsContainer,
 } from "./board.styles";
import { MainTitle } from "../../components/title/title.component";


const Board = ({subCategories, postItems, notices})=>(
    <BoardContainer>
        <MainTitle></MainTitle>
        <SubCategoriesContainer>
        </SubCategoriesContainer>
    </BoardContainer>
);

export default Board;