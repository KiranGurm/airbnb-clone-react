// import logo from './logo.svg';
import './App.css';
// 1. import Home from home written in <home/>
import Home from './Home'
import Header from './Header'
import Footer from './Footer'
import SearchPage from './SearchPage'

//react routerdom
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

function App() {
  return (
    //BEM -> Block, Element,Modifier
    <div className="app">
      {/*<h1>Let's build AIRBNB Clone 🚀</h1> */}
{/* so we are creating .js and .css files for each component here. For example for home, header etc */}
{/*we don't want header and footer in the router. We use SWITCH FOR  ROUTER */}
  {/*Header*/}
<Router>
<Header/>

   <Switch>

     <Route path="/search">
      <SearchPage/>
    </Route>

   {/*Home*/}
   <Route path="/">
     <Home/>
    </Route>

  </Switch>


<Footer/>

</Router>
  </div>

     /*Banner*/
             /*Search dates*/


      /*Cards*/

  /*Footer*/

  );
}

export default App;
