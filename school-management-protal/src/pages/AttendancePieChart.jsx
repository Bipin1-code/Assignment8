import React from 'react';
import { PieChart, Pie, Cell, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import './AttendancePieChart.css';
import CustomTooltip from './CustomToolTip';

const colors = ['#46e629', 'red'];

const StudentAttendancePieChart = ({ attendanceDetail }) => {
    
    console.log(attendanceDetail);
    const attendanceData = [
        { name: "Attended", value: attendanceDetail.attended, total_classes: attendanceDetail.total_classes  },
        { name: "Absent", value: attendanceDetail.total_classes - attendanceDetail.attended, total_classes: attendanceDetail.total_classes  }
    ];
    return (
        <div className="pieChart-container">
             <h5 className="chart-title">Student Attendance Overview</h5>
            <ResponsiveContainer width="100%" height="100%">
                <PieChart  minWidth={300} minHeight={300}>
                    
                    <Pie
                        data={attendanceData}
                        cx="50%"
                        cy="50%"
                        outerRadius={150}
                        innerRadius={80}
                        fill="#8884d8"
                        dataKey="value"
                        label
                    >
                        {
                            attendanceData.map((entry, index) => (
                                <Cell key={`cell - ${index}`} fill={colors[index % colors.length]} />
                            ))
                        }

                    </Pie>
                    <Tooltip content = {<CustomTooltip/>} />
                    <Legend />
                    <text
                        x="50%"
                        y="50%"
                        textAnchor="middle"
                        dominantBaseline="middle"
                        fontSize={16}
                        fontWeight="bold"
                        fill="white"
                    >
                        Total_Classes: {attendanceDetail.total_classes}
                    </text>
                </PieChart>
            </ResponsiveContainer>
        </div>

    );
};

export default StudentAttendancePieChart;

