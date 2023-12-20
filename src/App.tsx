import Header from "./components/Header";
import { Outlet } from "react-router-dom";

function App() {
    return (
        <main className="flex flex-col content-center md:flex-row md:h-screen md:w-full">
            <Header />
            <div className="md:flex-1 md:px-8 md:py-32">
                <Outlet />
            </div>
        </main>
    );
}

export default App;
