import Home from './pages/Home/Home';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Contact from './pages/Contact/Contact';

function App() {
  return (
    <Router>
      <Route exact path='/' component={Home} />
      <Route path='/contact' component={Contact} />
    </Router>
  );
}

export default App;
