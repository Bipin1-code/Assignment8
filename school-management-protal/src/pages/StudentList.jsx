import React from 'react';
import { useState, useEffect } from 'react';
import StudentDetail from './StudentDetail';
import './StudentList.css';

const StudentList = () => {
    const [students, setStudents] = useState([]);
    const [selectedStudent, setSelectedStudent] = useState(null);

    useEffect(() => {
         const fetchData = async () => {
            try {
                const response = await fetch("/student.json");
                const jsonData = await response.json();
                setStudents(jsonData);
            } catch (error) {
                console.error("Error fetching data: ", error);
            }
        };

        fetchData();
    }, []);
    
    const StudentDetailView = (student) => {
        setSelectedStudent(student);
    };

    return (
        <div>
            <table className='StudentListTable'>
                <thead>
                    <tr>
                        <th>Registration_Id</th>
                        <th>Name</th>
                        <th>View</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        students.map((student) => (
                            <tr key={student.registrationId}>
                                <td>{student.registrationId}</td>
                                <td>{student.name}</td>
                                <td>
                                    <button type="button" id="viewButton"
                                        data-bs-toggle="modal" data-bs-target="#modalPage"
                                        onClick={() => StudentDetailView(student)} >View
                                    </button>
                                </td>
                            </tr>
                        ))}
                </tbody>
            </table>

            { selectedStudent && <StudentDetail detail = {selectedStudent} />}

        </div >
    );
};

export default StudentList;