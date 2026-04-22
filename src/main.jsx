import React from "react"
import ReactDOM from "react-dom/client"
import App from "./App"
import "./index.css"
import AOS from "aos"
import "aos/dist/aos.css"
import { ThemeProvider } from "./contexts/ThemeContext"

// Initialize AOS after DOM is ready
if (typeof window !== 'undefined') {
  AOS.init({
    duration: 800,
    once: true,
    offset: 100
  });
}

ReactDOM.createRoot(document.getElementById("root")).render(
<React.StrictMode>
<ThemeProvider>
<App />
</ThemeProvider>
</React.StrictMode>
)