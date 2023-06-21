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
    amount: "₹2000",
    url: "https://cdn1.smartprix.com/rx-iOOWCeyOv-w420-h420/lige-smartwatch.jpg",
  },
  {
    id: "2",
    product: "Anroid Smart Phone",
    amount: "₹25000",
    url: "https://5.imimg.com/data5/NN/PW/XN/SELLER-8587078/11-500x500.jpg",
  },
  {
    id: "3",
    product: "Television 4K",
    amount: "₹65000",
    url: "https://cdn1.smartprix.com/rx-iEotS5pml-w1200-h1200/EotS5pml.jpg",
  },
  {
    id: "4",
    product: "Laptop",
    amount: "₹75000",
    url: "https://m.media-amazon.com/images/I/61y4yt0L2oL._SL1500_.jpg",
  },
  {
    id: "5",
    product: "Bluetooh Headset",
    amount: "₹2500",
    url: "https://shopatsc.com/cdn/shop/products/WF-C500-black-1.jpg?v=1641808702",
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