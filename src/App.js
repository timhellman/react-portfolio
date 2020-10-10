import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import AppBar from './components/Appbar/Appbar';
import Drawer from './components/Drawer/Drawer';
import Grid from "@material-ui/core/Grid";
import Paper from '@material-ui/core/Paper';
import Button from "./components/AwesomeButton/Button";
import Contact from "./pages/Contact";
import About from "./pages/About";
import Portfolio from "./pages/Portfolio";

const Pages = {
  Contact: () => <Contact/>,
  About: () => <About/>, 
  Portfolio: () => <Portfolio/>
}

const styles = {
  GridContainer: {
    height: "80vh",
    width:"90vw",
    marginLeft:"5vw", 
    marginTop: "10vh"
  },
  ButtonGrid: {
    margin: "auto",
    marginTop: "40px"
  }
}

function App() {
  const [page, setPage] = useState("About");

  const handleSetPage = name => {
    console.log(name)
    setPage(name)
  }

  return (
    <>

    <AppBar brand={`Tim Hellman`}/>
    {/* <Paper elevation={15} rounded className="row contentContainer"> */}
      {/* <div className="row contentContainer"> */}

<Grid container style={styles.GridContainer}>
  
  <Grid item xs={2} >
  <Paper elevation={10} className="sidenav" style={{borderRadius: "6px 0 0 6px"}}>
    <Grid container  direction="column">
      <Grid item style={styles.ButtonGrid}>

    <Button variant="instagram" onClick={() => handleSetPage("About")} text={`About`}/>
      </Grid>
      <Grid item style={styles.ButtonGrid}>

    <Button variant="google" onClick={() => handleSetPage("Portfolio")} text={`Portfolio`}/>
      </Grid>
      <Grid item style={styles.ButtonGrid}>

    <Button variant="reddit" onClick={() => handleSetPage("Contact")} text={`Contact`}/>
      </Grid>
    </Grid>

  </Paper>
  </Grid>
    <Grid item xs={10}>

  <Paper elevation={10} className="content" style={{borderRadius: "0 6px 6px 0"}}>
    {Pages[page]()}
  </Paper>
    </Grid>
</Grid>

      {/* </div> */}
  
    </>
  );
}

export default App;
