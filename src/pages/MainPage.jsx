import MainComponent from "../components/Main/MainComponent";
import ExpProvider from "../context/expProvider";

function MainPage(){

    return <>
    <ExpProvider>
        <MainComponent />
    </ExpProvider>
    </>
}

export default MainPage;