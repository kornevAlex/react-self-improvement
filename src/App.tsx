import { Suspense } from "react";
import { Link, Route, Routes } from "react-router-dom";
import { Counter } from "./components/Counter";
import './styles/index.sass';
import { AboutPageAsync } from "./pages/AboutPage/AboutPage";
import { MainPageAsync } from "./pages/MainPage/MainPage.async";
import { useTheme } from "./theme/useTheme";
import { classNames } from "./helpers/classNames/classNames";

const App = () => {
    const { theme, toggleTheme } = useTheme()
    return (
        <div className={classNames('app', {}, [theme])}>
            <button onClick={toggleTheme}>Сменить тему</button>
            <Link to={'/'}>Главная</Link>
            <Link to={'/about'}>О нас</Link>
            <Suspense fallback={<div>Loading...</div>}>
                <Routes>
                <Route path="/" element={<MainPageAsync />}/>
                <Route path="/about" element={<AboutPageAsync />}/>
                </Routes>
            </Suspense>
            <Counter />
        </div>
     );
}

export default App;