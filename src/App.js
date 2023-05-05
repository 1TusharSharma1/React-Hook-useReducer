import "./App.css";
import React, { useReducer} from "react";
import { Button } from "react-bootstrap";

const reducer = (state, action) => {
  switch (action.type){
      case 'inc':
        return {count : state.count + 1};
        case 'dec':
        return {count : state.count - 1};
        case 'res':
          return {count : state.count = 0};
        default: 
        return state;
    }
  }


function App() {

  const [state, dispatch] = useReducer(reducer, {count: 0});



  // const [count, setCount] = useState(0);


  const Incrementer = () => {dispatch({type: 'inc'})};
  const Decrementer = () => {dispatch({type: 'dec'})}
  const Reseter = () => {dispatch({type: 'res'})}

 
  return (
    <div className="App">
      <div className="counter">
        <h1> Counter </h1>
      </div>

      <div className="numbers">
        <h1>{state.count}</h1>
      </div>
      <Button variant="success" onClick={Incrementer}>
        Increase Count
      </Button>
      <Button variant="warning" onClick={Decrementer}>
        Decrease Count
      </Button>
      <Button variant="danger" onClick={Reseter}>
        Reset
      </Button>
    </div>
  );
}

export default App;
