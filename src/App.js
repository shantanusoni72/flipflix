import './App.css';
import Main from './components/main';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Dashboard from './components/dashboard/dashboard';
import Signin from './components/signin'

function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path="/" component={ Main } />
          <Route exact path="/watch" component={ Dashboard } />
          <Route exact path="/signin" component={ Signin } />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
