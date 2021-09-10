import React from 'react'

const App = () => {
  
  return (
    <div>
      
      <Header/>
      <Content/>
      <Total/>
      
     </div>


  )

  
}
const Header  =()=> {
  const course='Half stack application development'
  return(
    <div>
      <h1>{course}
      </h1>
    </div>

  )

}

const Content=()=>{
  
  
  return(
    <div>
       <Part1/>
       <Part2/>
       <Part3/>

    </div>
  )

}
const Part1=()=>{
  const part1='Fundamentals of react'
  const exercises1=10
  return(
    <div>
      <p>
        {part1}   {exercises1}
      </p>
    </div>

  )

}
const Part2=()=>{
  const part2='Using props to pass data'
  const exercises2=7
  return(
    <div>
      <p>
        {part2}   {exercises2}
      </p>
    </div>

  )

}

const Part3=()=>{
  const part3='State of a component'
  const exercises3=14
  return(
    <div>
      <p>
        {part3}   {exercises3}
      </p>
    </div>

  )

}

const Total=()=>{
  const exercises1=10
  const exercises2=7
  const exercises3=14

  return(
    <p>
      Total exercises {exercises1+exercises2+exercises3}
    </p>
  )
}







export default App
