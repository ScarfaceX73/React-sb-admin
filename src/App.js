import './App.css';
import Sidebar from './components/sidebar/index';
import Dashboard from './components/dashboard';

function App() {
  return (
    <div id="wrapper">
      <Sidebar />
      <Dashboard />
    </div>
  );
}

export default App;
