import './App.css';

import Header from './components/header/header.component';
import Footer from './components/footer/footer.component';
import Board from './pages/board/board.component';

function App() {
  return (
    <div>
      <Header />
      <Board />
      <Footer />
    </div>
  );
}

export default App;
