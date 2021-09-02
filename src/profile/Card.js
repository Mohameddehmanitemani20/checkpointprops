import React from "react";
import PropTypes from "prop-types";
import Dahmoun from "../assets/dahmoun.jpg";

function Card(props) {
  const { item, name, bio, profession } = props;
  return (
    <>
      <img style={{ height: "250px", width: "600px"  }} src={Dahmoun} />
      <h1>{name}</h1>
      <h2>{profession}</h2>
      <h4 >{bio}</h4>
      <div>
      <script>
         function handleName() {
           
          alert('you are welcome')
              }
        </script>

      </div>
    </>
  );
}


Card.defaultProps = {
    name: "Med Dehmani Temani",
    profession: "IT Engineering Student",
    bio :"I have always been interested in the way things work. I am always determined to succeed and I feel that this degree will make the most of my skills. I believe that being part of an engineering team will be very rewarding..",
    img: {Dahmoun},
  };


  Card.propTypes = {
    item: PropTypes.object,
    name: PropTypes.string,
    bio:  PropTypes.string,
    profession: PropTypes.string,
    img: PropTypes.object
  }
export default Card;
