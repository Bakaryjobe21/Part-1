import React from 'react'

const App = () => {
  const course='Half stack application development'
  const part1='Fundamentals of react'
   const exercises1=10
  const part2='Using props to pass data'
  const exercises2=7
  const part3='State of a component'
  const exercises3=14
  
  return (
    <div>
      <h1>{course}
      </h1>

      <p>
        {part1}   {exercises1}
      </p>
      <p>
        {part2}   {exercises2}
      </p>
      <p>
        {part3}   {exercises3}
      </p>
      <p>
      Total exercises {exercises1+exercises2+exercises3}
    </p>
      
     </div>


  )

}

  







export default App
