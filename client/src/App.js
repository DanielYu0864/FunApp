//import Login from './Login/Login.js';
import Category from './Category/Category';
import Navbar from './components/Navbar/Navbar';

function App() {
  return (
    <main>
      <Navbar />
      <Category type="content" items={{
          type: 'img',
          items: ['food.png', 'animal.png', 'soccer.jpg']
        }} />
    </main>
  );
}

export default App;
