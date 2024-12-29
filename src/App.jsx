import { useState } from 'react';
import './App.css';
import cat1 from './assets/cat1.jpg'; // Gambar kucing 1
import cat2 from './assets/cat2.jpg'; // Gambar kucing 2
import cat3 from './assets/cat3.jpg'; // Gambar kucing 3
import cat4 from './assets/cat4.jpg'; // Gambar kucing 4
import cat5 from './assets/cat5.jpg'; // Gambar kucing 5
import cat6 from './assets/cat6.jpg'; // Gambar kucing 6
import cat7 from './assets/cat7.jpg'; // Gambar kucing 7
import cat8 from './assets/cat8.jpg'; // Gambar kucing 8
import cat9 from './assets/cat9.jpg'; // Gambar kucing 4
import cat10 from './assets/cat10.jpg'; // Gambar kucing 5
import cat11 from './assets/cat11.jpg'; // Gambar kucing 6
import cat12 from './assets/cat12.jpg'; // Gambar kucing 7

function App() {
  const [cart, setCart] = useState([]);

  const cats = [
    { id: 1, name: 'Persian Cat', price: 500, image: cat1 },
    { id: 2, name: 'Siamese Cat', price: 600, image: cat2 },
    { id: 3, name: 'Bengal Cat', price: 800, image: cat3 },
    { id: 4, name: 'Munchkin Cat', price: 700, image: cat4 },
    { id: 5, name: 'Maine Coon Cat', price: 500, image: cat5 },
    { id: 6, name: 'Scottish Fold Cat', price: 700, image: cat6 },
    { id: 7, name: 'Ragdoll Cat', price: 500, image: cat7 },
    { id: 8, name: 'Brittish Shorthair Cat', price: 700, image: cat8 },
    { id: 9, name: 'Savannah Cat', price: 700, image: cat9 },
    { id: 10, name: 'Japanese Bobtail Cat', price: 500, image: cat10 },
    { id: 11, name: 'Lynx Cat', price: 700, image: cat11 },
    { id: 12, name: 'Russian Blue Cat', price: 500, image: cat12 },
  ];

  const addToCart = (cat) => {
    setCart([...cart, cat]);
    alert(`${cat.name} has been added to the cart!`);
  };

  return (
    <>
      <header>
        <h1>CatStore - Buy Your Dream Cat</h1>
      </header>
      <main>
        <div className="cat-list">
          {cats.map((cat) => (
            <div className="cat-card" key={cat.id}>
              <img src={cat.image} alt={cat.name} className="cat-image" />
              <h2>{cat.name}</h2>
              <p>Price: ${cat.price}</p>
              <button onClick={() => addToCart(cat)}>Add to Cart</button>
            </div>
          ))}
        </div>
      </main>
      <footer>
        <h2>Shopping Cart</h2>
        <ul>
          {cart.length > 0 ? (
            cart.map((item, index) => <li key={index}>{item.name}</li>)
          ) : (
            <p>Your cart is empty.</p>
          )}
        </ul>
      </footer>
    </>
  );
}

export default App;
