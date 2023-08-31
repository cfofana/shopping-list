import './App.css';
import { FaPlus } from "react-icons/fa6";
//import { FaMinus } from "react-icons/fa6";
import { FaCheck } from "react-icons/fa6";
import { FaX } from "react-icons/fa6";



const products = [
  {title: 'Cabbage', id:1},
  {title: 'Apples', id:2},
  {title: 'Milk', id:3},
  {title: 'Eggs', id:4},
  {title: 'Steak', id:5},
  {title: 'Butter', id:6},
  {title: 'Rice', id:7},
];

function App() {
  const listItems = products.map(product => 
    <li key={product.id}
      style={{color:product.id%2===0?'magenta':'darkgreen'}}>
      {product.title} <span><FaCheck /><FaX /></span>
    </li>
  );
// TO DO: ADD BUTTON AT TOP OF LIST, EACH LI HAS
// X ON FAR RIGHT FOR DELETE ITEM, COMPLETED NEXT TO IT
// HOW TO USE ICONS IN REACT
  return (
    <div className="shopping-list">
      <div className="container">
      <h1>My Shopping List</h1>
      <div><FaPlus />  Add item to List</div>
        <ul>{listItems}</ul>
      </div>
      
    </div>
  );
}

export default App;
