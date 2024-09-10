import Header from './Header.jsx'
import Footer from './Footer.jsx'
import Button from './Button/Button.jsx'
import Food from './Food.jsx'
import Card from './Card.jsx'
import UserGreeting from './UserGreeting.jsx'
import List from './List.jsx'
import React, { useState } from 'react'
import ToDoList from './ToDoList.jsx'


function App() {

        const fruits = [{id: 1, name:"apple", prop1:50} , {id: 2, name:"orange", prop1:100}, 
          {id: 3, name:"banana" , prop1:70}, {id: 4, name:"pumpkin", prop1:86}];
        const people = [{id:5, name: "Vlad", prop1: 23}, {id:6, name: "Axel", prop1: 23}, {id:7, name: "Elisa", prop1: 24},
          {id:8, name: "Nikols", prop1: 22}, {id:9, name: "Jorge", prop1: 25}, {id:10, name: "Marco", prop1: 23}
        ];

        
        const[ppl, setPpl] = useState([]);
        const[pplyear, setPplyear] = useState(new Date().getFullYear());
        const[pplname, setPplname] = useState("");
        const[pplweight, setPplwight] = useState("");
    
        function handleAddPpl(){
          
          const newPpl = {year: pplyear, name: pplname, weight: pplweight};

          setPpl(p => [...p, newPpl]);

          setPplyear(new Date().getFullYear());
          setPplname("");
          setPplwight("");
          

        }
        function handleRemovePeople(index){
          setPpl(ppl.filter((_, i) => i !== index))
        }
        function setYear(event){
          setPplyear(event.target.value);
        }
        function setName(event){
          setPplname(event.target.value);
        }
        function setWeight(event){
          setPplwight(event.target.value);
        }

        
        

        const[foods, setFoods] = useState(["Apple", "Orange", "Banana"]);         
        const[color, setColor] = useState();
        const[count, setCount] = useState(0);
        const[car, setCar] = useState({year: 2024, 
                                       make: "Ford",
                                       model: "Mustang"});
                                    
                                    
                           
        function manageColorChange(event){
          setColor(event.target.value);
        }
        function handleReset(){
          setCount(c => c = 0);
          //Aqui como no depende del PrevState, no hace falta la Updater Function.
        }
        function handleIncrement(){
          setCount(c => c + 1);
          //Cuando al setter le metemos una arrow function, la izq denota el estado PREVIO
          //de la variable y la derecha el SIGUIENTE y por eso actualiza a cada linea

          //Si pones setVariable(variable...) n lineas, no hace esa accion n veces sino una
          //porque toma todos como una actualizacion por temas de performance

          //Se suele poner solo la primera letra de la State-Variable
        }
        function handleDecrement(){
          setCount(count - 1);
        }

        function handleYearChange(event){

          setCar(c => ({...c, year : event.target.value}));
        }
        function handleMakeChange(event){
          setCar(c => ({...c, make : event.target.value}));
        }
        function handleModelChange(event){
          setCar(c => ({...c, model : event.target.value}));
        }
        function handleAddFood(){

          const newFood = document.getElementById("foodInput").value;
          document.getElementById("foodInput").value = " ";

          setFoods(f => [...f, newFood]);
        }
        function handleRemoveFood(index){
          setFoods(foods.filter((_, i) => i !== index))
        }


      return(
        <>
            <Header/> 
            <UserGreeting isLoggedIn={true} username="Nikols"/>
            <UserGreeting />
            <Card name="Nikols 1" age="Petit" isTrabajande={false}/>
            <Card name="Nikols 2" age="Petit" isTrabajande={true}/>
            <Card name="Nikols 3" age="Petit" isTrabajande={false}/>
            <Card name="Nikols 4" age="Petit" isTrabajande/>
            <Card/>
            <Card/>
            <Food/>
            <Food/>
            <Button/>
            <List items={fruits} category="Fruits"/>
            <List items={people} category="VisCo"/>
            <div className='color-container'>
                <h3>Color picker</h3>
                <div style={{backgroundColor : color}} className='color-div'>
                <p>Selected color : {color}</p>
                </div>
                <label>Select a color:</label>
                <input className="color-changer" type="color" value={color} onChange={manageColorChange}></input>
            </div>

            <div className='count-div'>
                <h2>Count : {count}</h2>
                <button onClick={handleIncrement}>Increment</button>
                <button onClick={handleReset}>Reset</button>
                <button onClick={handleDecrement}>Decrement</button>
            </div>
            <div>
              <p>Your favorite car is : {car.year} {car.make} {car.model}</p>
              <input type="number" value={car.year} onChange={handleYearChange}/><br/>
              <input type="text" value={car.make} onChange={handleMakeChange}/><br/>
              <input type="text" value={car.model} onChange={handleModelChange}/><br/>
            </div>

            <div>
              <h2>List of Food</h2>
              <ul>
                {foods.map((food,index) => <li key={index} onClick={() => handleRemoveFood(index)}>{food}</li>)}
              </ul>
              <input type="text" id="foodInput" placeholder='Enter food name'></input>
              <button onClick={handleAddFood}>Add food</button>
            </div>

          <div>
           <h2>List of People Objects</h2>
           <ul>
              {ppl.map((person,index) => <li key={index} onClick={() => handleRemovePeople(index)}>{person.year} {person.name} {person.weight}</li>)}
           </ul>
          <input type="number" value={pplyear} onChange={setYear}/><br/>
          <input type="text" value={pplname} onChange={setName} placeholder='Enter name'/><br/>
          <input type="text" value={pplweight} onChange={setWeight} placeholder='Enter wight in kg'/><br/>
          <button onClick={handleAddPpl}>Add People</button>
          </div>
          <ToDoList/>
            <Footer/>
            
        </>
      );  
}

export default App
