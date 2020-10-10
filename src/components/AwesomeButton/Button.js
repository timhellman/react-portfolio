import React from "react";
import { AwesomeButton } from "react-awesome-button";
import "./style.css";


function Button({text, variant, onClick}) {
    return (
      <AwesomeButton
        size="large"
        type= {variant||"primary"}
        onPress={onClick}
      >
        {text}
      </AwesomeButton>
    );
    }

    export default Button;