import { BrowserRouter as Router, Routes, Route, Outlet } from 'react-router-dom';
import HomePage from '@/HomePage';
import ProductPage from '@/ProductPage';
import '@/App.css';
import Header from '@/components/header';
import Footer from '@/components/footer';

function App() {
  return (
    <Router>
      <Routes>
          <Route Component={() => (
            <main className="flex min-h-screen flex-col items-center justify-between p-24">
              <Header />
              <Outlet />
              <Footer />
            </main>
          )}>
          <Route path="/" Component={HomePage} />
          <Route path="/product" Component={ProductPage} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
