import React from "react";
import PropTypes from "prop-types"

const Profile = (props) => {

    const {fullname = "Macaulay Temitope", bio = "I am a frontend developer", profession = "ReactJs Developer", handleName} = props

  return (
    <div style={{marginTop: "40px"}}>
      {props.children}

      <h1 style={{marginBottom: "0px"}}>{fullname}</h1>
      <h5 style={{marginTop:"0px"}}>{profession}</h5>
      <p style={{width: "400px", margin: "20px auto", lineHeight:"1.5"}}>{bio}</p>

      <button style={{color:"#fff", border: "none", borderRadius:"10px", padding:"4px 11px", background: "#909090"}} onClick={() => handleName(fullname)}>Display Name</button>
    </div>
  );
};


Profile.propTypes = {
    fullname: PropTypes.string,
    bio: PropTypes.string,
    profession: PropTypes.string
}


export default Profile;