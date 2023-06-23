import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from '@/homePage';
import ProductPage from '@/productPage';
import '@/App.css';
import Header from '@/components/header';
import Footer from '@/components/footer';

function App() {
  return (
		<main className="flex min-h-screen flex-col items-center justify-between p-24">
			<Header />
      <Router>
        <Routes>
          <Route path="/" Component={HomePage} />
          <Route path="/product" Component={ProductPage} />
        </Routes>
      </Router>
			<Footer />
		</main>
  );
}

export default App;
