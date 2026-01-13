import { Container, MainBlock, MainM, MainContent } from "./MainComponent.styled";
import GridTable from "../GridTable/GridTable";
import ExpForm from "../ExpForm/ExpForm";

function MainComponent(){
    return (
        <MainM>
			<Container>
				<MainBlock>
					<MainContent>
                        <GridTable />
						<ExpForm />
					</MainContent>
				</MainBlock>
			</Container>
		</MainM>
    )
};

export default MainComponent;