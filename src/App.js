import  {React, useState} from "react"

 const App = () => {

  const anecdotes = [
    'If it hurts, do it more often',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients'
  ]
   
  const [selected, setSelected] = useState(0)
  const buttonClicked=()=>{
    setSelected(selected +1)
  }

  return (
    <div>
      {anecdotes[selected]} <br/>

      <Button buttonClicked={buttonClicked}  text='next anecdote'/>
    </div>
  )
}
const Button=({buttonClicked, text})=>{
  return(
    <button onClick={buttonClicked}>{text}</button>
  )

}


export default App



 /* const [good, setGood] =useState(0)
  const [bad, setBad]=useState(0)
  const [neutral, setNeutral]=useState(0)

  

  


  return(
    <div>
      <h1>give feedback</h1>

     
     <Button buttonClicked={()=>setGood(6) } text={"good"}/>

     <Button buttonClicked={()=>setNeutral(2) } text={"neutral"}/>

     <Button buttonClicked={()=>setBad(1) } text={"bad"}/>

     
    
     <Statistic good={good} bad={bad} neutral={neutral}/>
     
     </div>
  )

 
}

const Statistic=({good,neutral,bad})=>{
  const all =good +neutral+ bad

  const average =all/3
  const postive =(good + neutral)/ all *100;


  if(good===0 && neutral===0 && bad===0){
    return(
      <div>
        <p>
          No feedback given
        </p>
      </div>
    )
  }
  return(
    <div>
      <h1>statistic</h1>

      <StatisticLine good={good}  neutral={neutral} bad={bad} all={all} average={average} postive={postive}/>

    
     </div>
  )
}

const StatisticLine=({good,neutral,bad,all,average,postive})=>{


  return(
    <div>
      <table> 
        <tbody>
          <tr><td>good</td> <td>{good}</td> </tr>
          <tr><td>neutral</td> <td>{neutral}</td></tr>
          <tr><td>bad</td> <td>{bad}</td></tr>
          <tr><td>all</td> <td>{all}</td></tr>
          <tr><td>average</td> <td>{average}</td></tr>
          <tr><td>positive</td> <td>{postive}</td></tr>
        </tbody> 
        
        </table>
      
    

    </div>
  )
}
*/




