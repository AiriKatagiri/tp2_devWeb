import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)

//Q1_Étape 3 : les pourcentages, la couleur, le max pourcentage et le nom de la bar, sont les éléments variables communs
// à toutes les bars
