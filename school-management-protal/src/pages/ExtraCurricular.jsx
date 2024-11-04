import React from 'react';
import './ExtraCurricular.css';

const ExtraCurricular = ({ extraCurriculam }) => {
    
    return (
        <div className='curriculam'>
            <h4>Extra-Curriculam</h4>
            {extraCurriculam.sports && (
                <div>
                    <div className='sportsInfo'>
                        <h5>Sports:</h5>
                        <p>{extraCurriculam.sports.activity} - Position: {extraCurriculam.sports.position}</p>
                    </div>
                    <div className="achievements">
                        <h5>Achievements:</h5>
                        {
                            extraCurriculam.sports.achievements.map(
                                (achieve, index) => (<p key={index} className="achieve" >{achieve}</p>)
                            )
                        }
                    </div>
                </div>

            )}
            {extraCurriculam.arts && (
                <div className='arts'>
                    <h5>Arts:</h5>
                    <p className="acivity" >Activity: {extraCurriculam.arts.activity}</p>
                    {extraCurriculam.arts.roles.map((role, index) => (
                        <p key={index} className="role" >Perform as {role}</p>
                    ))}
                </div>
            )}
            {extraCurriculam.volunteer && (
                <div className='volunteer'>
                    <h5>Volunteer:</h5>
                    {extraCurriculam.volunteer.activities.map((activity, index) => (
                        <p key={index} className="event" >Event: {activity.event} for {activity.hours} hours</p>
                    ))}
                </div>
            )}
        </div>
    );
};

export default ExtraCurricular;
