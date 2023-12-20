import Header from "./components/Header";
import { Outlet } from "react-router-dom";

function App() {
    return (
        <>
            <Header />
            <div className="md:flex-1 px-8 py-32">
                <Outlet />
            </div>
        </>
    );
}

export default App;
