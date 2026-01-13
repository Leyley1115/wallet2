import { Container, MainBlock, MainM, MainContent } from "./MainComponent.styled";
import { Outlet } from "react-router-dom";

function MainComponent(){
    return (
        <MainM>
			<Container>
				<MainBlock>
					<MainContent>
                        <Outlet />
					</MainContent>
				</MainBlock>
			</Container>
		</MainM>
    )
};

export default MainComponent;