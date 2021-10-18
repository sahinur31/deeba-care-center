import { BrowserRouter as Router,Switch,Route } from 'react-router-dom';
import './App.css';
import './Bootstrap/bootstrap.min.css';
import AuthProvider from './contexts/AuthProvider';
import Checkout from './Pages/Checkout/Checkout';
import Home from './Pages/Home/Home/Home';
import ServiceDetails from './Pages/Home/ServiceDetails/ServiceDetails';
import LogIn from './Pages/LogIn/LogIn';
import NotFound from './Pages/NotFound/NotFound';
import Footer from './Pages/Shared/Footer/Footer';
import Header from './Pages/Shared/Header/Header';
import SignUp from './Pages/SignUp/SignUp';
import PrivateRoute from './routes/PrivateRoute';


function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Header />
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route exact path="/home">
              <Home></Home>
            </Route>
            <Route exact path="/signup">
              <SignUp />
            </Route>
            <Route exact path="/login">
              <LogIn />
            </Route>
            <PrivateRoute exact path="/service/:id">
              <ServiceDetails />
            </PrivateRoute> 
            <PrivateRoute exact path="/checkout">
              <Checkout />
            </PrivateRoute> 
            <Route path="*">
              <NotFound></NotFound>
            </Route>
          </Switch>
          <Footer />
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
