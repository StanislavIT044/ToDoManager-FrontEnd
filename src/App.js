import './App.css';
import * as React from 'react';
import TaskList from './components/TasksList';
import ResponsiveAppBar from './components/layout/Header';
import Footer from './components/layout/Footer';
import { Routes, Route, Link } from "react-router-dom";

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <ResponsiveAppBar />
            </header>

            <main>
                <Routes>
                    <Route path="/" element={<TaskList />} />
                    <Route path="/a" element={<div>asd</div>} />
                </Routes>                
            </main>

            <footer className="App-footer">
                <Footer />
            </footer>
        </div>
    );
}

export default App;
