import React from 'react'
import { useParams } from "react-router-dom";

const CoursesDetails = () => {


  // using obj destructuring
const { id } = useParams(); // give a parameter what we use in the search bar after courses 
console.log(id); 


// without obj destructuring
const data = useParams()
const id2 = data.id
console.log("both r same: ",{id})

  return (

    <h1>{id} course details</h1>
  )
}

export default CoursesDetails