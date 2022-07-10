import { Container } from '@chakra-ui/react';
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './component/navbar';
import HomePage from './page/home';
import NotFoundPage from './page/not-found';
import PaymentPage from './page/payment';
import ResultPage from './page/result';

function App() {
  return (
    <div>
      <Navbar />
      <Container pt={20} maxW={'container.sm'}>
        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route path="/works" element={<PaymentPage />} />
          <Route path="/music" element={<ResultPage />} />
          <Route path='*' element={<NotFoundPage />} />
        </Routes>
      </Container>
    </div>
  );
}

export default App;
