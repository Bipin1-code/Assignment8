
import React from 'react';
import './StudentDetail.css';
import StudentAttendancePieChart from './AttendancePieChart';
import SubjectPerformanceChart from './SubjectPerformanceChart';
import ExtraCurricular from './ExtraCurricular';


const StudentDetail = ({ detail }) => {

    return (
        <div className="StudentDetail">
            <div className="modal fade" id="modalPage" tabIndex="-1" aria-labelledby="modalPageLabel" aria-hidden="true">
                <div className="modal-dialog modal-fullscreen">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h2>Student Details</h2>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            {detail ? (
                                <div className="customBody">
                                    <div className="basicInfo">
                                        <figure>
                                            <img src={detail.image} alt={`${detail.name}'s Profile`} width="100" height="100" />
                                        </figure>
                                        <p><em>Registration ID:</em> {detail.registrationId}</p>
                                        <p><em>Name:</em> {detail.name}</p>
                                        <p><em>Age:</em> {detail.age}</p>
                                        <p><em>Email:</em> {detail.email}</p>
                                        <p><em>Class:</em> {detail.class}</p>
                                        <p><em>Roll Number:</em> {detail.rollNumber}</p>
                                        <p><em>Address:</em> {detail.address}</p>
                                        <h5>Parents Detail</h5>
                                        <p><em>Father name:</em> {detail.parent.father}</p>
                                        <p><em>Father contact:</em> {detail.parent.father_contact}</p>
                                        <p><em>Mother name:</em> {detail.parent.mother}</p>
                                        <p><em>Mother contact:</em> {detail.parent.mother_contact}</p>
                                    </div>
                                    <div className='pieChartBody'>
                                        <StudentAttendancePieChart attendanceDetail={detail.attendance} />
                                    </div>
                                    <div className="lineChartBody">
                                        <SubjectPerformanceChart subjectPerformance={detail.subjects} />
                                    </div>
                                    <div className="extraCurriculam">
                                        <ExtraCurricular extraCurriculam = {detail.extracurricular}/>
                                    </div>
                                </div>
                            ) : (<p> No details available. </p>)}

                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button type="button" className="btn btn-primary">Save changes</button>
                            <button type="button" className="btn btn-danger">Delete</button>
                        </div>
                    </div>
                </div>

            </div>

        </div>
    );
};

export default StudentDetail;