import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';


class Landing extends Component {
  render() {
    return(
      <div className="landing-grid">
        <Grid className="landing-grid">
          <Cell col={12}>
            {<img
              src={require('./ohto.jpg')}
              alt="Ohto"
              className="avatar-img"
              />}

            <div className="banner-text">
              <h1>Ohto Pentikäinen</h1>

            <hr/>
          
          <p>Just a lad from Helsinki, Finland. I work on projects in tech, real estate, blockchain, traveling etc.</p>

        <div className="social-links">

          {/* LinkedIn */}
          <a href="https://www.linkedin.com/in/lad/" rel="noopener noreferrer" target="_blank">
            <i className="fa fa-linkedin-square" aria-hidden="true" />
          </a>

          {/* Github */}
          <a href="https://github.com/ohtopen" rel="noopener noreferrer" target="_blank">
            <i className="fa fa-github-square" aria-hidden="true" />
          </a>

          {/* FB */}
          <a href="https://www.facebook.com/ohto.pentikainen" rel="noopener noreferrer" target="_blank">
            <i className="fa fa-facebook-square" aria-hidden="true" />
          </a>

        </div>
            </div>
          </Cell>
        </Grid>
      </div>
    )
  }
}

export default Landing;
