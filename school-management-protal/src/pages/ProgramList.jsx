
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import './ProgramList.css'; // Import custom CSS for additional styling

const programs = [
    {
        name: "Computer Science",
        benefits: [
            "Hands-on experience with programming languages and software development.",
            "Opportunity to participate in hackathons and coding competitions.",
            "Access to internships and job placement opportunities."
        ],
        eligibility: "Open to all students with a keen interest in technology and coding."
    },
    {
        name: "Business Administration",
        benefits: [
            "Gain knowledge in management, marketing, and finance.",
            "Develop leadership and communication skills.",
            "Networking opportunities with industry professionals."
        ],
        eligibility: "High school diploma or equivalent; no prior business knowledge required."
    },
    {
        name: "Fine Arts",
        benefits: [
            "Enhance creativity and artistic skills in various mediums.",
            "Exhibition opportunities to showcase student artwork.",
            "Access to workshops with professional artists."
        ],
        eligibility: "Open to all students with a passion for art and creativity."
    },
    {
        name: "Sports Management",
        benefits: [
            "Understanding of sports marketing, management, and event planning.",
            "Opportunities to work with local sports teams and organizations.",
            "Develop skills in team leadership and organization."
        ],
        eligibility: "Open to all students; a background in sports is beneficial but not required."
    }
];

const ProgramList = () => {
    return (
        <div className="containerProgram my-5">
            <h2 className="text-center mb-4">Available Programs</h2>
            <div className="row">
                {programs.map((program, index) => (
                    <div key={index} className="col-md-6 mb-4">
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title">{program.name}</h5>
                                <h6 className="card-subtitle mb-2 text-muted">Benefits:</h6>
                                <ul className="list-group mb-3">
                                    {program.benefits.map((benefit, idx) => (
                                        <li key={idx} className="list-group-item">{benefit}</li>
                                    ))}
                                </ul>
                                <h6 className="card-subtitle text-muted">Eligibility:</h6>
                                <p>{program.eligibility}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ProgramList;
