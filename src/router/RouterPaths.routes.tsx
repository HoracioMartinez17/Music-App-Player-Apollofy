import React from 'react';
import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { HomePage, LandingPage, LoginPage, ProfilePage, RegisterPage, PlayerPage, StartingPage } from '../pages/index';
import '../App.css'; // Asegúrate de tener tus estilos CSS adecuados

const AnimatedRoutes = () => {
  const location = useLocation();

  return (
    <TransitionGroup>
      <CSSTransition
        key={location.key}
        timeout={500}
        classNames="page"
      >
        <Routes location={location}>
          <Route path="/" element={<LandingPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/starting" element={<StartingPage />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/player" element={<PlayerPage />} />
          <Route path="/player/:id" element={<PlayerPage />} />
          <Route path="/profile" element={<ProfilePage />} />
        </Routes>
      </CSSTransition>
    </TransitionGroup>
  );
};

export const Router = () => {
  return (
    <BrowserRouter>
      <AnimatedRoutes />
    </BrowserRouter>
  );
};
