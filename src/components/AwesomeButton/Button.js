import React from "react";
import { AwesomeButton } from "react-awesome-button";
import "./style.css";


function Button({text, variant}) {
    return (
      <AwesomeButton
        size="large"
        type= {variant||"primary"}
      >
        {text}
      </AwesomeButton>
    );
    }

    export default Button;