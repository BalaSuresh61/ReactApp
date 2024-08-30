// import React from 'react'
import PropTypes from 'prop-types'
import './Profile.css';

const Profile = (props) => {
  return (
    <div className="profile">
      <div className="card-container">
        <span className="pro online" style={{ backgroundColor: props.status ? "green" : "red" }}>{props.status ? "Online" : "Offline"}</span>
        <img src="images/1.png" className="img" alt="User" />
        <h3>{props.name}</h3>
        <h3>{props.city}</h3>
        <p>{props.description}</p>
        <div className="buttons">
          <button className="primary">Message</button>
          <button className="primary outline">Following</button>
        </div>
        <div className="skills">
          <h6>Skills</h6>
          <ul>
            {props.skills.map((skill, index) => (
              <li key={index}>{skill}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>

  )
}

export default Profile
Profile.propTypes = {
  status: PropTypes.bool,
  name: PropTypes.string.isRequired,
  city: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  skills: PropTypes.arrayOf(
    PropTypes.string
  ).isRequired
}