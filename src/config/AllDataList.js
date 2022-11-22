// import React from 'react'
import axios from "axios";

const AllDataList = async() => {

   const mentors = await axios.get("https://ment-stud.herokuapp.com/mentor");
//   console.log(mentors)
  const students = await axios.get("https://ment-stud.herokuapp.com/student");
//   console.log(students)
  const result = {
    mentors: mentors.data,
    students: students.data,
  };

  return result;
}

export default AllDataList