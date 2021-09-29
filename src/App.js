import  {React, useState} from "react"

 const App = () => {



  const [good, setGood] =useState(0)
  const [bad, setBad]=useState(0)
  const [neutral, setNeutral]=useState(0)

  const all =good +neutral+ bad

  const average =all/3
  const postive =(good + neutral)/ all *100;

  const handleGoodClick=()=>{

    
    setGood(6)
  }

  const handleBadClick=()=>{

    
    setBad(1)
  }

  const handleNeutralClick=()=>{

    
    setNeutral(2)
  }


  return(
    <div>
      <h1>give feedback</h1>

     
     <button onClick={handleGoodClick}> good</button> 

     <button onClick={handleNeutralClick}> neutral</button> 

     <button onClick={handleBadClick}> bad</button> 

     <h1>statistic</h1>
     <p>Good {good} </p>  
     <p>Neutral  {neutral}</p> 
     <p>Bad {bad} </p> 

     <p>All {all} </p>
     <p>Average {average} </p>
     <p>Positive {postive} </p>
     

    </div>
  )

 
}

export default App





