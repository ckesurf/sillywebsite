import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import bambiLogo from './assets/bambi.jpeg'
// import './App.css'

function App() {
  const [count, setCount] = useState(0)

  const menuItems = [
    {
      name: "Margherita Mice",
      description: "Tomato sauce, freshly minced mice, and basil",
      price: "$12"
    },
    {
      name: "Spaghetti Sparrow with Carbonara",
      description: "Classic Roman pasta with egg, pecorino, pancetta, topped with various forest birds",
      price: "$14"
    },
    {
      name: "Bruschetta Bunny",
      description: "Layers of pasta, rich rabbit sauce, and béchamel",
      price: "$15"
    }
  ];


  return (
    <div style={styles.container}>
      <img src={bambiLogo} className="base" width="170" height="179" alt="Bambi logo" />
      <h1 style={styles.title}>Bambi-no's Italian Restaurant</h1>
      <p style={styles.subtitle}>
        Authentic Italian cuisine made with love and small woodland creatures
      </p>

      <h2>Menu</h2>
      <ul style={styles.menu}>
        {menuItems.map((item, index) => (
          <li key={index} style={styles.menuItem}>
            <h3>
              {item.name} <span style={styles.price}>{item.price}</span>
            </h3>
            <p>{item.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

const styles = {
  container: {
    fontFamily: "Arial, sans-serif",
    padding: "2rem",
    maxWidth: "600px",
    margin: "0 auto"
  },
  title: {
    textAlign: "center"
  },
  subtitle: {
    textAlign: "center",
    color: "#555"
  },
  menu: {
    listStyle: "none",
    padding: 0
  },
  menuItem: {
    marginBottom: "1.5rem",
    borderBottom: "1px solid #ddd",
    paddingBottom: "1rem"
  },
  price: {
    fontWeight: "normal",
    color: "#777",
    fontSize: "0.9em"
  }
};


export default App
