import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import './App.css';
import Home from './Pages/Home/home';
import Header from './Components/Header/header';
import Footer from './Components/Footer/Footer'

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
