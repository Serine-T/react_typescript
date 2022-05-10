import React from 'react';
import { BrowserRouter, Switch, Route} from 'react-router-dom';
// import { TodoFormTest } from './components/TodoFormTest';
import AboutPage from './pages/AboutPage';
import TodosPage from './pages/TodosPage';
import { Navbar } from './components/Navbar';

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <div className="container">
        <Switch>
          <Route component={TodosPage} path='/' exact/>
          <Route component={AboutPage} path='/about'/>
        </Switch> 
      </div>
    </BrowserRouter>
   );
}

export default App;
