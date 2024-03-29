import React from "react"
import ReactDOM from "react-dom/client"
import "./index.css"

const pizzaData = [
  {
    name: "Focaccia",
    ingredients: "Bread with italian olive oil and rosemary",
    price: 6,
    photoName: "pizzas/focaccia.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Margherita",
    ingredients: "Tomato and mozarella",
    price: 10,
    photoName: "pizzas/margherita.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Spinaci",
    ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
    price: 12,
    photoName: "pizzas/spinaci.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Funghi",
    ingredients: "Tomato, mozarella, mushrooms, and onion",
    price: 12,
    photoName: "pizzas/funghi.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Salamino",
    ingredients: "Tomato, mozarella, and pepperoni",
    price: 15,
    photoName: "pizzas/salamino.jpg",
    soldOut: true,
  },
  {
    name: "Pizza Prosciutto",
    ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
    price: 18,
    photoName: "pizzas/prosciutto.jpg",
    soldOut: false,
  },
]

function App() {
  return (
    <div className="container">
      <Header />
      <Menu />
      <Footer />
    </div>
  )
}

function Header() {
  // const style = {
  //   color: "green",
  //   fontSize: "51px",
  //   textTransform: "uppercase",
  // }

  const style = {}

  return (
    <header className="header">
      <h1 style={style}>Pizza & You.</h1>
    </header>
  )
}

function Menu() {
  const pizzas = pizzaData
  const pizzaLength = pizzas.length
  return (
    <main className="menu">
      <h2>Menu</h2>

      {pizzaLength > 0 ? (
        <>
          <p>
            Authentic Italian Cusine. 6 creative dishes to choose from, all from
            our store oven, all organic, all delicious.
          </p>
          <ul className="pizzas">
            {pizzaData.map((pizza) => (
              <Pizza pizzaObj={pizza} key={pizza.name} />
            ))}
          </ul>
        </>
      ) : (
        <p>We're still working on our menu.Come back later. Thank you!!</p>
      )}

      {/* <Pizza
        name="Pizza Spinaci"
        ingredients="Tomato, mozarella, spinach, and ricotta cheese"
        photoName="pizzas/spinaci.jpg"
        price={10}
      />
      <Pizza
        name="Pizza Salamino"
        ingredients="Tomato, mozarella, spinach, and ricotta cheese"
        photoName="pizzas/salamino.jpg"
        price={15}
      />
      <Pizza
        name="Pizza Prosciutto"
        ingredients="Tomato, mozarella, spinach, and ricotta cheese"
        photoName="pizzas/prosciutto.jpg"
        price={15}
      />
      <Pizza
        name="Pizza Margherita"
        ingredients="Tomato, mozarella, spinach, and ricotta cheese"
        photoName="pizzas/margherita.jpg"
        price={12}
      />
      <Pizza
        name="Pizza Funghi"
        ingredients="Tomato, mozarella, spinach, and ricotta cheese"
        photoName="pizzas/funghi.jpg"
        price={14}
      />
      <Pizza
        name="Pizza Focaccia"
        ingredients="Tomato, mozarella, spinach, and ricotta cheese"
        photoName="pizzas/focaccia.jpg"
        price={6}
      /> */}
    </main>
  )
}

function Pizza(props) {
  return (
    <li className={`pizza ${props.pizzaObj.soldOut ? "sold-out" : ""}`}>
      <img src={props.pizzaObj.photoName} alt={props.pizzaObj.name} />
      <div>
        <h3>{props.pizzaObj.name}</h3>
        <p>{props.pizzaObj.ingredients}</p>
        <span>
          {props.pizzaObj.soldOut ? "SOLD-OUT" : props.pizzaObj.price}
        </span>
      </div>
    </li>
  )
}

function Footer() {
  const hour = new Date().getHours()
  //console.log(hour)
  const openHour = 4
  const closeHour = 22
  const isOpen = hour >= openHour && hour <= closeHour
  //console.log(isOpen)

  return (
    <footer className="footer">
      {isOpen ? (
        <div className="order">
          <p>
            {" "}
            We are open until {closeHour}:00. It's your PIZZA Day, Come vist us.
          </p>
          <button className="btn">Order</button>
        </div>
      ) : (
        <p>
          We will be opened between {openHour}:00 to {closeHour}:00 Hrs
        </p>
      )}
    </footer>
  )
  // React.createElement("footer", null, "We are currently open!!!")
}

const Test = () => {}

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
