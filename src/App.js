import './App.css';
import Main from './components/Main';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Dashboard from './components/dashboard/dashboard';

function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path="/" component={ Main } />
          <Route exact path="/watch" component={() => <Dashboard category="home" />}  />
          <Route exact path="/watch/tvshows" component={() => <Dashboard category="tvshows" /> } />
          <Route exact path="/watch/movies" component={() => <Dashboard category="movies" /> } />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
