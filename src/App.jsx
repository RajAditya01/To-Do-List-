// import React, { useState } from "react";
// import ToDoList from "./ToDoList";

// const App = () => {
//   const [inputList, setInputList] = useState("");
//   const [items, setItems] = useState([]);

//   const itemEvent = (event) => {
//     setInputList(event.target.value);
//   };

//   const listOfItems = () => {
//     setItems((oldItems) => {
//       return [...oldItems, inputList];
//     });
//     setInputList(""); // Clear the input field after adding an item
//   };

//   return (
//     <>
//       <div className="main_div">
//         <div className="center-div">
//           <br />
//           <h1>ToDo List</h1>
//           <br />
//           <input
//             type="text"
//             placeholder="Add an Item"
//             onChange={itemEvent}
//             value={inputList}
//           />
//           <button onClick={listOfItems}> + </button>

//           <ol>
//             {items.map((itemValue, index) => (
//               <ToDoList key={index} item={itemValue} />
//             ))}
//           </ol>
//         </div>
//       </div>
//     </>
//   );
// };

// export default App;













import React, { useState } from 'react';
import ToDo from './ToDo';


const App = () =>{
const [inputList, setInputList] = useState("");

const [Items, setItems] = useState([]);

const itemEvent =(event) => {
    setInputList(event.target.value);
};

const listOfItems = () => {
    setItems((oldItems) =>{
        return [...oldItems, inputList];
    } );
    setInputList("");
};

const deleteItems = (id) => {
    console.log("deleted"); 

    setItems((oldItems) => {
        return oldItems.filter((arrElem, index) => {
            return index !== id;
        });
        
    });


};

return ( <>
<div className="main_div">
<div className='center_div'>
<br/>
<h1>ToDo List</h1>
<br/>
<input type="text" placeholder ="Add a Items" onChange={itemEvent} />
<button onClick={listOfItems}> + </button>

<ol>

{Items.map( (itemval, index) => {
    return <ToDo key={index}  id={index}
     text={itemval}
     onSelect = {deleteItems}    
     />;
} )}

</ol>
</div>
</div>
</>
);
};

export default App;