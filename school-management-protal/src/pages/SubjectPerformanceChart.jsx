import React from 'react';
import './SubjectPerformanceChart.css';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const SubjectPerformanceChart = ({ subjectPerformance }) => {

    const maxSemesters = Math.max(...subjectPerformance.map(subject =>
        subject.performance.semesters.length)
    );

    const performanceData = Array.from({ length: maxSemesters }, (_, i) => {
        const semesterLabel = `Semester ${i + 1}`;
        const dataPoint = { name: semesterLabel };

        subjectPerformance.forEach(subject => {
            const semester = subject.performance.semesters[i];
            dataPoint[subject.name] = semester ? semester.score : null;
        });
        return dataPoint;
    });
    return (
        <div className="lineChart-container">
            <ResponsiveContainer width="100%" height="100%">
                <h5 style={{ textAlign: 'center', marginBottom: 10 }}>Student Performance in each Subject</h5>
                <LineChart
                    minWidth={300}
                    minHeight={300}
                    data={performanceData}
                    margin={{
                        top: 5,
                        right: 40,
                        left: 20,
                        bottom: 10,
                    }}
                >
                    <CartesianGrid stroke="#8dfbfc" strokeDasharray="10 10" />
                    <XAxis dataKey="name" stroke="#8884d8" />
                    <YAxis stroke="#8884d8" />
                    <Tooltip  wrapperClassName='custom-tooltip '/>
                    <Legend />
                    {subjectPerformance.map((subject, index) => (
                        <Line
                            key={subject.name}
                            type="monotone"
                            dataKey={subject.name}
                            stroke={['#db39f7', '#82ca9d', "#e80c2d", "#296ef0"][index % 4]}
                            strokeWidth={3}
                        />
                    )
                    )}
                </LineChart>
            </ResponsiveContainer>
        </div>

    );
};

export default SubjectPerformanceChart;
