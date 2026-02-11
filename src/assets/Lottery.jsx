import { useState } from "react"
import "./Lottery.css"
import { genticket, } from "./helper";
import Ticket from "./Ticket";

export default function Lottery ({n=3, winCondition}) {
     let [ticket, setTicket]= useState(genticket(n));
     let isWinning = winCondition(ticket);

     let buyTicket = () => {
        setTicket(genticket(n));
     };
    return(
        <div>
            <h1>Lottery Game</h1>
           <Ticket ticket={ticket}/> 
           <br />
        <button onClick={buyTicket}>Buy new Ticket</button>
         <h3>{isWinning && "Congratulations You Won!!!"}</h3>
         
         </div>
    );
}