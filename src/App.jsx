import './App.css'
// Importamos la imagen desde la carpeta assets
import miImagen from './assets/img/logo-cid-estn.jpg' 

function App() {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', backgroundColor: '#f0f0f0' }}>
      {/* Aquí mostramos la imagen */}
      <img 
        src={miImagen} 
        alt="Una imagen genial" 
        style={{ maxWidth: '90%', height: 'auto', borderRadius: '10px', boxShadow: '0 4px 8px rgba(0,0,0,0.2)' }} 
      />
    </div>
  )
}

export default App