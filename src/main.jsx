// Importing StrictMode from React. 
// StrictMode is a tool that helps detect potential problems in your React code during development.
import { StrictMode } from 'react'

// Importing createRoot from the 'react-dom/client' package.
// This is used to create a React root where your React app will be rendered in the HTML DOM.
import { createRoot } from 'react-dom/client'

// Importing global CSS styles for the project.
// This file usually contains styles that apply to the entire app.
import './index.css'

// Importing the main App component, which is the root component of the React application.
import App from './App.jsx'

// Selecting the HTML element with id 'root' and creating a React root.
// This connects React to the actual HTML page.
createRoot(document.getElementById('root')).render(
  
  // Wrapping the App component with StrictMode for extra checks and warnings in development.
  <StrictMode>
    <App/>
  </StrictMode>,
      // Rendering the App component, which contains your whole application. // End of StrictMode wrapper
) // End of createRoot().render()