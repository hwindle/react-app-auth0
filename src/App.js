import { useAuth0 } from "@auth0/auth0-react";
import Login from './Login';
import Logout from './Logout';
import Profile from './Profile';
import './App.css';

function App() {
  return (
    <div className="App">
      <Login />
      <Logout />
      <Profile />
    </div>
  );
}

export default App;
