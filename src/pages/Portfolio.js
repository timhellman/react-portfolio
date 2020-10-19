import React from "react";
import "./Portfolio.css";
import project2 from "../components/img/project2.png";
import project1 from "../components/img/project1.png";
import project3 from "../components/img/project3.png";
import burgerhomework from "../components/img/burgerhomework.png";
import Card from 'react-bootstrap/Card';
import Grid from '@material-ui/core/Grid';
import Button from 'react-bootstrap/Button';
import ReactTooltip from "react-tooltip";
import GitHubIcon from '@material-ui/icons/GitHub';
import WebIcon from '@material-ui/icons/Web';

const styles = {
  PortfolioGrid: {
    padding: "10px",
    overflow: "hidden"
  }, 
  iconButton: {
    width: "40px",
    height: "40px",
    borderRadius: "20px"
  }
}
export default () => {
  return <main id="portfolio">

    <h3 className="sectionHeader">My Portfolio</h3>
   
      <Grid container>
        <Grid item xs={6} style={styles.PortfolioGrid}>
          <Card style={{ width: '24rem',margin:"auto" }}>
            <Card.Img variant="top" src={project2} />
            <Card.Body>
              <Card.Title>Express Bartender</Card.Title>
              <p data-tip="Github!">

              <a href="https://github.com/FuDoggy/project2.git" target="_blank">
              <Button style={styles.iconButton} variant="outline">
                <GitHubIcon style={{margin:"auto"}}/>
              </Button>
              </a>
              </p>
              {/* <ReactTooltip effect="float"/>
              <p data-tip="Heroku!">
              <a href=" https://expressbartender.herokuapp.com/" target="_blank">
              <Button style={styles.iconButton} variant="outline">
                <GitHubIcon style={{margin:"auto"}}/>
              </Button>
              </a>
              </p>
              <ReactTooltip effect="float"/> */}
            </Card.Body>
          </Card>
        </Grid>
        <Grid item xs={6} style={styles.PortfolioGrid}>
          <Card style={{ width: '24rem',margin:"auto" }}>
            <Card.Img variant="top" src={project1} />
            <Card.Body>
              <Card.Title>ROE</Card.Title>
              {/* <Card.Text>
               
    </Card.Text> */}
    <p data-tip="Github!">

<a href="https://github.com/ainiwang14/reimagined-octo-enigma-API" target="_blank">
<Button style={styles.iconButton} variant="outline">
  <GitHubIcon style={{margin:"auto"}}/>
</Button>
</a>
</p>
<ReactTooltip effect="float"/>
              
            </Card.Body>
          </Card>
        </Grid>
        <Grid item xs={6} style={styles.PortfolioGrid}>
          <Card style={{ width: '24rem',margin:"auto"}}>
            <Card.Img variant="top" src={project3} />
            <Card.Body>
              <Card.Title>Inform And React</Card.Title>
              <p data-tip="Github!">

<a href="https://github.com/Koldenblue/Inform-and-React" target="_blank">
<Button style={styles.iconButton} variant="outline">
  <GitHubIcon style={{margin:"auto"}}/>
</Button>
</a>
</p>
<ReactTooltip effect="float"/>
              
              {/* <Card.Text>
               
    </Card.Text> */}
              {/* <Button variant="primary">Go somewhere</Button> */}
            </Card.Body>
          </Card>
        </Grid>
        <Grid item xs={6} style={styles.PortfolioGrid}>
          <Card style={{ width: '24rem',margin:"auto" }}>
            <Card.Img variant="top" src={burgerhomework} />
            <Card.Body>
              <Card.Title>Eat Da Burger!</Card.Title>
              {/* <Card.Text>
              
    </Card.Text>
              <Button variant="primary">Go somewhere</Button> */}
               <p data-tip="Github!">

<a href="https://github.com/timhellman/burger" target="_blank">
<Button style={styles.iconButton} variant="outline">
  <GitHubIcon style={{margin:"auto"}}/>
</Button>
</a>
</p>
<ReactTooltip effect="float"/>
            </Card.Body>
          </Card>
        </Grid>
      </Grid>
    {/* </div> */}


  </main>
}