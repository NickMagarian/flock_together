import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
import { LoginPage } from './pages/login';
import { RegistrationForm } from './pages/register';
import { LogoutPage } from './pages/logout';
import calendar from './pages/calendar';
import events from './pages/events';
import { NotFound } from './pages/notFound';

const client = new ApolloClient({
  uri: '/graphql',
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
    <Router>
      <div>
        <Routes>
          <Route 
            path="/" 
            element={<calendar />}
          />
          <Route 
            path="/events" 
            element={<events />}
          />
          <Route 
            path="/login" 
            element={<LoginPage />}
          />
          <Route 
            path="/logout" 
            element={<LogoutPage />}
          />
          <Route 
            path="/register" 
            element={<RegistrationForm />}
          />
          <Route 
            path="*"
            element={<NotFound />}
          />
        </Routes>
      </div>
    </Router>
  </ApolloProvider>
  );
}

export default App;
