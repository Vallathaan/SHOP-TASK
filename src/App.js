import "./App.css";
import { useState } from "react";

function App() {
  return (
    <div className="App">
      <Card />
    </div>
  );
}

export default App;

let data = [
  {
    id: "1",
    product: "Smart Watch",
    productrate: "₹2000",
    productpicture: "https://m.media-amazon.com/images/I/91z5KuonXrL._SL1500_.jpg",
    },
  {
    id: "2",
    product: "Anroid Smart Phone",
    productrate: "₹25000",
    productpicture: "https://m.media-amazon.com/images/I/71T49MbnG6L._SL1500_.jpg",
     },
  {
    id: "3",
    product: "samsung Television 4K",
    productrate: "₹65000",
    productpicture: "https://m.media-amazon.com/images/I/81+JXgPUDLL._SL1500_.jpg",
   },
  {
    id: "4",
    product: "Laptop",
    productrate: "₹75000",
    productpicture: "https://m.media-amazon.com/images/I/61y4yt0L2oL._SL1500_.jpg",
    },
  {
    id: "5",
    product: "Bluetooh Headset",
    productrate: "₹2500",
    productpicture: "https://m.media-amazon.com/images/I/61lFqpgK26L._SL1500_.jpg",
    },
];

function Card() {
  let [count, setCount] = useState(0);

  const handleAdd = (product, amount) => {
    setCount(count + 1);
    var tempProduct = product;
    var tempAmount = amount;
    console.log(tempProduct, tempAmount);
    document.getElementById(tempProduct).disabled = true;
    document.getElementById(tempAmount).disabled = false;
  };
  const handleRemove = (product, amount) => {
    if (document.getElementById(product).disabled === true) {
      setCount(count - 1);
      var tempProduct = product;
      var tempAmount = amount;
      console.log(tempProduct, tempAmount);
      document.getElementById(tempProduct).disabled = false;
      document.getElementById(tempAmount).disabled = true;
    }
  };
  return (
    <div className="container">
      <h1 className="title">ENJOY YOUR <strong>SHOPPING..!</strong></h1>
      <h2 className="count">Your <strong>Cart</strong> Count is {count} </h2>

      <div className="item">
        {data.map((each, idx) => (
          <div className="Card" key={idx}>
            <img src={each.url} alt={each.product} />
            <div className="name size">{each.product}</div>
            <div className="amount size">{each.amount}</div>
            <button
              id={each.product}
              className="btn size add"
              onClick={() => handleAdd(each.product, each.amount)}
            >
              Add to cart
            </button>
            <button
              id={each.amount}
              className="btn size"
              onClick={() => handleRemove(each.product, each.amount)}
            >
              Remove form cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
