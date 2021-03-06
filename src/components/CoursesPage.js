import React ,{useState,useEffect}from 'react';
import {getCourses} from '../api/courseApi';
import CourseList from "./CourseList";

function CoursesPage() {

    const[courses,setCourses]=useState([]);

    useEffect(()=>{
        getCourses().then(_courses=>setCourses(_courses))
    },[]);

    //making api call
    // componentDidMount(){
    //     getCourses().then(courses=>this.setState({courses:courses}));
    // }

    // renderRow(course){
    //     return <tr key={course.id}>
    //     <td>{course.title}</td>
    //     <td>{course.authorId}</td>
    //     <td>{course.category}</td>
    //     </tr>
    // }

   
        return( 
        <>
        <h2>Courses</h2>
            <CourseList courses={courses}></CourseList>
       </>
        )

}

export default CoursesPage;