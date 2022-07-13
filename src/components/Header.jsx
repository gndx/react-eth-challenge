import React from 'react';
import Grid from '@mui/material/Grid';

const Header = (props) => {
  const { name, profession, avatar } = props;

  return (
    <Grid container spacing={2}>
      <Grid item>
        <div className="Header-picture">
          <img src={avatar} alt="" />
        </div>
      </Grid>
      <Grid item>
        <div className="Header-content">
          <h1 className="Header-title">{name}</h1>
          <h3 className="Header-job-title">{profession}</h3>
          {props.children}
        </div>
      </Grid>
    </Grid>
  );
};

export default Header;
