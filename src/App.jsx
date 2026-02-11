import "./App.css";
import TodoList from "./assets/TodoList";
import Ludoboard from "./Ludoboard";
import Lottery from "./assets/Lottery";



function App() {
    let winCondition = (ticket) => {
        return ticket[0] === 0 ;
    }
 return(
  <>
  <Lottery n={3} winCondition={winCondition}/>
  
  </>
 );
   
 
 
}
export default App;
