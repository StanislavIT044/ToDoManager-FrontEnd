import './App.css';
import * as React from 'react';
import TaskList from './components/TasksList';
import ResponsiveAppBar from './components/ResponsiveAppBar';
import Footer from './components/footer/Footer';

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <ResponsiveAppBar />
            </header>

            <main className="App-main">
                <TaskList />
            </main>

            <footer>
                <Footer />
            </footer>
        </div>
    );
}

export default App;
