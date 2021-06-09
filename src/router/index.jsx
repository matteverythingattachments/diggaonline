import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

// Static Componenets
import Header from '../components/Header';
import Nav from '../components/Nav';

// Router Components
import Home from '../pages/Home/Home';
import SecondPage from '../pages/SecondPage/SecondPage';
import ThirdPage from '../pages/ThridPage/ThirdPage';

export default function PageRouter() {
  return (
    <>
      <Router>
        <Header>
          <Nav />
        </Header>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/second-page' component={SecondPage} />
          <Route path='/third-page' component={ThirdPage} />
        </Switch>
      </Router>
    </>
  );
}
