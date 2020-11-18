//import Login from './Login/Login.js';
import Category from './Category/Category';
import Navbar from './components/Navbar/Navbar';
import Login from './Login/Login';

function App() {
  return (
    <main>
      <Navbar />
      <Category type="content" items={{
          type: 'text',
          items: ['Games', 'Books', 'Videos']
        }} />
      {/* <Login/> */}
    </main>
  );
}

export default App;
