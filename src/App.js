import  {React, useState} from "react"

 const App = () => {



  const [good, setGood] =useState(0)
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
      
     <p>good {good} </p>  
     <p>neutral {neutral}</p> 
     <p>bad {bad}</p> 

     <p>all {all} </p>
     <p>average {average}</p>
     <p>positive {postive} </p>


    </div>
  )
}

const Button=({buttonClicked, text})=>{
  return(
    <button onClick={buttonClicked}>{text}</button>
  )

}

export default App





