import logo from './logo.svg';
import './App.css';
import './Produits.json';
import './name.js';
import './price.js';
import './description.js';
import './image.js';
const userName = "Alpha"; // Remplacez par votre nom

function App() {
  return (
    <div className="cart" style={{display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", height: "100vh", background: "gray"}}>
      <h1 className='name' style={{fontFamily: "Arial, Helvetica, sans-serif"}}>HP Pavillon</h1>
      <span className='price' style={{fontSize: "20px", background: "black", color: "white", borderRadius: "20px", padding: "5px"}}>700 {"$"}</span>
      <p className='description' style={{fontFamily: "Arial, Helvetica, sans-serif", fontSize: "12px", width: "200px", padding: "10px", }}>L'ordinateur portable HP Pavilion x360 14 2-en-1 s'adapte à tous vos besoins pour vous permettre d'être productif sous n'importe quel angle. Regardez vos séries préférées aussi longtemps que vous le souhaitez grâce à HP Fast charge.</p>
      <img className='image' src= "https://i.pinimg.com/564x/fa/46/c9/fa46c996ebb7dd7dfbe0cf23b7c10fda.jpg" alt="img" style={{width: "150px", height: "100px",}}/>
      <hr/>
      <div className="greeting-message">
        <p className='user-name' style={{fontFamily: "Arial, Helvetica, sans-serif", fontSize: "20px", fontWeight: "bold"}}>{userName ? `Hello, ${userName} !`  : "Hello, there !"}</p> 
      </div>
        {userName && <img className='user-image' style={{width: "150px", height: "100px", borderRadius: "30%"}} src="https://i.pinimg.com/564x/f9/1f/dc/f91fdc3c8608b708a759f2dcb05c5e41.jpg" alt="Userprofilepic"/>}
    </div>
    //Si l'utilisateur est connecté
  );
}
export default App;
