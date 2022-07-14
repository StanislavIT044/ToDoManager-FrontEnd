import './App.css';
import * as React from 'react';
import TaskList from './components/TasksList';
import ResponsiveAppBar from './components/layout/Header';
import Footer from './components/layout/Footer';

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <ResponsiveAppBar />
            </header>

            <main className="App-main">
                <TaskList />
            </main>

            <footer className="App-footer">
                <Footer />
            </footer>
        </div>
    );
}

export default App;
