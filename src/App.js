import './App.css';
import mysql from "mysql";
import {useEffect} from "react";
import {useTelegram} from "./hooks/useTelegram";
import Header from "./components/Header/Header";
import {Route, Routes} from 'react-router-dom'
import ProductList from "./components/ProductList/ProductList";
import Play from "./components/Play/Play";
import TopSecret from './components/TopSecret/TopSecret';

mysql.conn()

function App() {
    const {onToggleButton, tg} = useTelegram();

    useEffect(() => {
        tg.ready();
        tg.expand();
    }, [])

    return (
        <div className="App">
            <Routes>
                <Route index element={<ProductList />}/>
                <Route path={'play'} element={<Play />}/>
                <Route path={'pr'} element={<TopSecret />}/>
            </Routes>
        </div>
    );
}

export default App;
