import { StrictMode } from 'react' // StrictMode helps catch mistakes while developing
import { createRoot } from 'react-dom/client' // Connects React to the page
import { BrowserRouter } from 'react-router-dom' // Enables multiple pages with different URLs
import './styles/theme.css' // Loads our colors, fonts and styles for the whole site
import App from './App.jsx' // The main app component

// Find the <div id="root"> in index.html and render the app inside it
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter> {/* Everything inside can use page links and routes */}
      <App />
    </BrowserRouter>
  </StrictMode>
)