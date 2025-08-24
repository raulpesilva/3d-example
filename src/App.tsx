import { BrowserRouter, Route, Routes } from 'react-router';
import { Drag, Fixed } from './pages';

export const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Fixed />} />
        <Route path="/drag" element={<Drag />} />
      </Routes>
    </BrowserRouter>
  );
};
