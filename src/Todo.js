import List from './components/List';
import Header from './components/Header';
import Footer from './components/Footer';

function Todo() {
  return (
    <div className='Todo'>
      <Header />
      <main className='main container'>
        <List />
      </main>
      <Footer />
    </div>
  );
}

export default Todo;
