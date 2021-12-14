import HomePage from './components/HomePage';
import LoginForm from './components/LoginForm';
import './App.css';

function App() {
  if (!localStorage.getItem('user')) return <LoginForm />
  return (
    <div className="App">
      <HomePage />

    </div>
  );
}

export default App;
