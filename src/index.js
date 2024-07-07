import React from "react";
import ReactDom from "react-dom/client";
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
        soldOut: true,
    },
    {
        name: "Pizza Salamino",
        ingredients: "Tomato, mozarella, and pepperoni",
        price: 15,
        photoName: "pizzas/salamino.jpg",
        soldOut: false,
    },
    {
        name: "Pizza Prosciutto",
        ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
        price: 18,
        photoName: "pizzas/prosciutto.jpg",
        soldOut: false,
    },
];


function App() {
    return <div className="container">
        <Header />
        <Menu />
        <Footer />
    </div>
};

function Header() {
    return (
        <header className="header">
            <h1>Fact React Pizza Co.</h1>
        </header>
    )
}

function Menu() {

    const pizzas = pizzaData;
    const numPizzas = pizzas.length

    return (
        <main className="menu">
            <h2>Our Menu</h2>

            {numPizzas > 0 ? (
                <>

                    <p>
                        Authentic Italian cuisine. 6 creative dishes to choose from. All from our stone oven, all organic, all delicious.
                    </p>
                    <ul className="pizzas">
                        {pizzas.map((pizza) => {
                            return <Pizza pizzaObj={pizza} key={pizza.name} />
                        })}
                    </ul>
                </>
            ) : (<p>We're still working on our menu, please come back later </p>
            )}

            {/* <Pizza
                photoName="pizzas/focaccia.jpg"
                name="Pizza Focaccia"
                ingredients="Bread with italian olive oil and rosemary"
                price= {199}
            />

            <Pizza
                photoName="pizzas/funghi.jpg"
                name="Pizza Funghi"
                ingredients="Tomato, mozarella, mushrooms, and onion"
                price={99}
            /> */}
        </main>
    )
}

function Pizza({ pizzaObj }) {

    // if (props.pizzaObj.soldOut) return null;

    return (
        <li className={`pizza ${pizzaObj.soldOut ? "sold-out" : ""}`}>
            <img src={pizzaObj.photoName} alt={pizzaObj.name} />
            <div>
                <h3>{pizzaObj.name}</h3>
                <p>{pizzaObj.ingredients}</p>
                {/* {pizzaObj.soldOut ? (<span>SOLD OUT</span>) : (<span>{pizzaObj.price}</span>)} */}
                <span>{pizzaObj.soldOut ? "SOLD OUT" : pizzaObj.price}</span>
            </div>
        </li>
    )
};

function Footer() {
    const hour = new Date().getHours();
    const openHour = 10;
    const closeHour = 24;
    const isOpen = hour >= openHour && hour <= closeHour;
    console.log(isOpen);

    // if(hour <= openHour || hour >= closeHour) {
    //     alert("Sorry we're closed")
    // }


    return (
        <footer className="footer">
            {isOpen ? (
                <Order closeHour={closeHour} openHour={openHour} />
            ) : (<p>We're happy to welcome you between {openHour}:00 and {closeHour}:00.</p>)
            }
        </footer >
    )
}

function Order({ openHour, closeHour }) {
    return (
        <div className="order">
            <p>
                We're open until {closeHour}:00. Come visit us or order online.
            </p>
            <button className="btn">Order</button>
        </div>
    )
}

//Root Component
// const root = ReactDom.createRoot(document.getElementById("root"));
// root.render(<App />)

//StrictMode

const root = ReactDom.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
)