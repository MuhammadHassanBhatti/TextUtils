// const products = [
//   {title: 'Apple' , isFruit: true, id: 1},
//   {title: 'Cabbage', isFruit: false, id: 2 },
//   {title: 'Garlic', isFruit: false, id: 3},
// ];

// export default function ShoppingList() {
//   const listitems = products.map(products =>
//     <li
//     key={products.id}
//       style={{
//         color: products.isFruit ? 'Red' : 'Black'
//       }}
//     >
//       {products.title}
//     </li>
//     );

//     return(
//       <ul>{listitems}</ul>
//     );
// }

// Clicked On Buttons : (Seprately)

// import { useState } from "react";

// export default (ClickSetup) => {
//   return(
//     <div>
//       <h1>Updated On Click</h1>
//       <MyButton />

//     </div>
//   );

//   function MyButton() {
//     const[count,setCount] = useState(0);

//   function handleClick() {
//     setCount(count+1);
//   }

// return(
//   <button onClick={handleClick}>
//     Clicked {count} times
//   </button>
// );
//   }

// }

// Clicked at a time on all Buttons :

import { useState } from "react";

export default function MyApp() {
  const [count, setCount] = useState(0);

  function handleClick() {
    setCount(count + 1);
  }

  return (
    <div>
      <h1>Counters that update together</h1>
      <MyButton count={count} onClick={handleClick} />
      <MyButton count={count} onClick={handleClick} />
    </div>
  );
}

function MyButton({ count, onClick }) {
  return <button onClick={onClick}>Clicked {count} times</button>;
}
