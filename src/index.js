import React from 'react';

import ReactDOM from 'react-dom/client';
// import { createBrowserRouter } from 'react-router-dom';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
// import ReactDOM from 'react-dom';

import App from './components/AppPage';
import Accessibility from './components/AccessibilityQuestionPage';
import './index.css';
import NotFoundPage from './components/NotFoundPage';
import CssQuestionPage from './components/CssQuestionPage';
import HtmlQuestionPage from './components/HtmlQuestionPage';
import JavascriptQuestionPage from './components/JavascriptQuestionPage';
const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <NotFoundPage />,
  },
  {
    path: '/accessibilityquestionpage',
    element: <Accessibility />,
  },
  {
    path: '/cssquestionpage',
    element: <CssQuestionPage />,
  },
  {
    path: '/htmlquestionpage',
    element: <HtmlQuestionPage />,
  },
  {
    path: '/javascriptquestionpage',
    element: <JavascriptQuestionPage />,
  },
]);
// REACT 18
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// REACT 17
// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );
