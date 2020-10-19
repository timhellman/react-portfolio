import React, {useState} from "react";
import "./Contact.css";

import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
const useStyles = makeStyles((theme) => ({
    root: {
      '& > *': {
        margin: theme.spacing(1),
        width: "80%",
        marginLeft: "10%"
      },
    },
  }));

export default () => {
    const [input, setInput] = useState({});
    const classes = useStyles();

    const handleChange = ({target:{name,value}}) => {
        setInput({...input, [name]:value});
        console.log(input)
    }

    const handleSubmit = ()=> {
        //do nodemailer here send input state
    }
    
      return (
        <main id="contact">
        <form className={classes.root} noValidate autoComplete="off">
          <div>
        <h3>Contact Me!</h3>  
          <p>timhellman@yahoo.com</p>
          
          {/* <TextField
            onChange={handleChange}
            id="outlined-secondary"
            label="Your Name"
            name="name"
            variant="outlined"
            color="secondary"
            fullWidth={true}
          />
          </div>
          <div>

          <TextField
            onChange={handleChange}
            name="email"
            id="outlined-secondary"
            label="Your Email Address"
            variant="outlined"
            color="secondary"
            fullWidth={true}
            />
            </div>
            <div>
          <TextField
            onChange={handleChange}
            name="message"
            id="outlined-secondary"
            label="Your Message"
            variant="outlined"
            color="secondary"
            fullWidth={true}
            rows={20}
            multiline={true}
            />
            <button onClick={handleSubmit}>Submit</button> */}
            </div>
        </form>
        </main>
      );
    }
    




