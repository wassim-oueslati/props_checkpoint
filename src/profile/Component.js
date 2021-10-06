import React from 'react'
import PropTypes from "prop-types";
function Component(props) {
    const {
        fullName,
        bio,
        profession,
        children,
        handleName
    } = props;

    const pStyling={color:"rgb(109, 80, 47)",fontSize:50};
    const buttonStyle={height:70 ,width:"120px", marginTop:20}
    

    return (
        <div>
            <p style={pStyling}>My name is {fullName}, I'm {bio} and I'm {profession} </p>
            {children}
            <br/>
            <button style={buttonStyle} onClick={() => handleName(fullName)}>click here</button>
        </div>
    )

}

Component.defaultProps = {
  fullName: "mohamed wassim oueslati",
  bio: "curently learning at gomycode",
  profession: "a student"
};

Component.propTypes = {
    fullName: PropTypes.string.isRequired,
    bio: PropTypes.string.isRequired,
    profession: PropTypes.string.isRequired
};

export default Component
