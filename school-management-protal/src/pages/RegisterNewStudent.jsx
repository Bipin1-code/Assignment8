import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./RegisterStudentForm.css";


const RegisterNewStudent = ({ onSave, onCancel }) => {
    const [formData, setFormData] = useState({
        name: '',
        age: '',
        email: '',
        class: '',
        registrationId: '',
        rollNumber: '',
        address: '',
        parent: {
            father: '',
            father_contact: '',
            mother: '',
            mother_contact: ''
        },
        subjects: [
            { name: 'Mathematics', performance: { semesters: [] } },
            { name: 'Physics', performance: { semesters: [] } },
        ],
        extracurricular: {
            sports: { activity: '', position: '', achievements: [] },
            arts: { activity: '', roles: [] },
            volunteer: { activities: [] }
        },
        attendance: { total_classes: '', attended: '', attendance_percentage: '' }
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        if (name.includes('father') || name.includes('mother')) {
            const parentName = name.split('_')[0]; 
            const key = name.split('_')[1]; 
            setFormData((prevData) => ({
                ...prevData,
                parent: {
                    ...prevData.parent,
                    [parentName]: key === 'contact' ? value : prevData.parent[parentName],
                    [key]: key === 'contact' ? value : prevData.parent[parentName + '_contact']
                }
            }));
        } else {
            setFormData((prevData) => ({
                ...prevData,
                [name]: value
            }));
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onSave(formData);
    };

    return (
        <div className="containerForm">
            <h2 className="mt-4">Register New Student</h2>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="name" className="form-label">Name</label>
                    <input type="text" className="form-control" id="name" name="name" value={formData.name} onChange={handleChange} required />
                </div>
                <div className="mb-3">
                    <label htmlFor="age" className="form-label">Age</label>
                    <input type="number" className="form-control" id="age" name="age" value={formData.age} onChange={handleChange} required />
                </div>
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email</label>
                    <input type="email" className="form-control" id="email" name="email" value={formData.email} onChange={handleChange} required />
                </div>
                <div className="mb-3">
                    <label htmlFor="class" className="form-label">Class</label>
                    <input type="text" className="form-control" id="class" name="class"
                        value={formData.class} onChange={handleChange} required />
                </div>
                <div className="mb-3">
                    <label htmlFor="registrationId" className="form-label">Registration ID</label>
                    <input type="text" className="form-control" id="registrationId" name="registrationId"
                        value={formData.registrationId} onChange={handleChange} required />
                </div>
                <div className="mb-3">
                    <label htmlFor="rollNumber" className="form-label">Roll Number</label>
                    <input type="text" className="form-control" id="rollNumber" name="rollNumber"
                        value={formData.rollNumber} onChange={handleChange} required />
                </div>
                <div className="mb-3">
                    <label htmlFor="address" className="form-label">Address</label>
                    <input type="text" className="form-control" id="address" name="address"
                        value={formData.address} onChange={handleChange} required />
                </div>
                <h5>Parent Details</h5>
                <div className="mb-3">
                    <label htmlFor="father" className="form-label">Father's Name</label>
                    <input type="text" className="form-control" id="father" name="father"
                        value={formData.parent.father} onChange={handleChange} required />
                </div>
                <div className="mb-3">
                    <label htmlFor="father_contact" className="form-label">Father's Contact</label>
                    <input type="text" className="form-control" id="father_contact" name="father_contact"
                        value={formData.parent.father_contact} onChange={handleChange} required />
                </div>
                <div className="mb-3">
                    <label htmlFor="mother" className="form-label">Mother's Name</label>
                    <input type="text" className="form-control" id="mother" name="mother"
                        value={formData.parent.mother} onChange={handleChange} required />
                </div>
                <div className="mb-3">
                    <label htmlFor="mother_contact" className="form-label">Mother's Contact</label>
                    <input type="text" className="form-control" id="mother_contact" name="mother_contact"
                        value={formData.parent.mother_contact} onChange={handleChange} required />
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
                <button type="button" className="btn btn-secondary ms-2" onClick={onCancel}>Cancel</button>
            </form>
        </div>
    );
};

export default RegisterNewStudent;
