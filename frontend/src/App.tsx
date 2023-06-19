import { Navigate, Route, Routes } from 'react-router-dom';
import { NavBar } from './components/NavBar';
import { PageNotFound } from './components/PageNotFound';
import { HomePage } from './components/HomePage';
import { TrainPage } from './components/TrainPage';

export const App = () => (
  <div data-cy="app">
    <NavBar />

    <main className="section">
      <div className="container">

        <Routes>
          <Route path="*" element={<PageNotFound />} />
          <Route path="/" element={<HomePage />} />
          <Route path="/home" element={<Navigate to="/" replace />} />
          <Route path="/trains" element={<TrainPage />} />
        </Routes>
      </div>
    </main>
  </div>
);
