Question: What is JSX, and why is it used?
Answer : JSX stands for JavaScript XML.
It’s a syntax extension for JavaScript that allows  to write HTML-like code inside JavaScript.
Example:
function App() {
  return <h1>Hello, World!</h1>;
}

It makes code more readable and expressive.

looks like HTML, so web developers find it easier to work with.

Helps React developers quickly see the structure of the UI.


 Question: What is the difference between State and Props?
Answer : State is an object that stores data inside a component while 
properties/ Props, used to pass data from parent to child component.
 State is mutable (can be changed using setState or useState) but Props is 
 immutable (cannot be changed by child component). State lives
inside the component whereas Props passed from outside (parent component).
The component itself updates state but the parent component updates props.
Examples :
 State ;
 const [count, setCount] = useState(0);

 Props ;
 <Child name="Fahmida" />

 Queation: What is the useState hook, and how does it work?
  Answer : useState is a React Hook that lets to add state to a 
  functional component.
  Example:
import { useState } from "react";
function Counter() {
  const [count, setCount] = useState(0);
return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
    </div>
  );
}
 useState(initialValue) returns an array with two items:
 State value (current data) and Setter function (used to update the state)
When developers  call the setter function (like setCount(count + 1)), 
React re-renders the component with the new value.

Question: How can you share state between components in React?
Answer : This is known as “Lifting State Up”. The process: 
move the state to the closest common parent of the components that need it.
pass state down as props.
pass setter function (or callback) if children need to update the state.
Example:
function Parent() {
  const [count, setCount] = useState(0);
return (
    <>
      <ChildDisplay count={count} />
      <ChildButton setCount={setCount} />
    </>
  );
}
function ChildDisplay({ count }) {
  return <p>Count: {count}</p>;
}
function ChildButton({ setCount }) {
  return <button onClick={() => setCount(prev => prev + 1)}>Increase</button>;
}

 Question: How is event handling done in React?
 Answer : In React, event handling is similar to HTML but with
 camelCase syntax and functions.
 Example:
function Button() {
  function handleClick() {
 alert("Button Clicked!");
  }
 return <button onClick={handleClick}>Click Me</button>;
}
Use camelCase (e.g., onClick, onChange).
Pass a function reference, not a function call.
 Wrong: <button onClick={handleClick()}>
Correct: <button onClick={handleClick}>
Developers can also use inline arrow functions if needed:

