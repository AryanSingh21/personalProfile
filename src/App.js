
import Nav from './components/header'
import Mid from './components/Mid'
import LMid from './components/LMid'
import Hire from './components/hire';
import Review from './components/reviews';

function App() {
  return (
    <div className='container'>
    <div className='container-fluid' id='full'>
    <Nav />
    <Mid />
    </div>
    <LMid />
    <Hire />
    <Review />
    </div>
  );
    
  
}

export default App;
