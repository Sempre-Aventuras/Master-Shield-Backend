import React from 'react';
import { Link } from 'react-router-dom';
import { AppBar, Toolbar, Button, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Logo from './msLogo.png';

const useStyles = makeStyles({
    root: {
      background: 'linear-gradient(45deg, #595959 30%, #262626 90%)',
    },
    image: {
        maxWidth: '5vw'
    },
    alignRight: {
        marginLeft: 'auto',
        marginRight: 0,
    },
    btnText: {
        color: 'white',
        textDecoration: 'none'
    }
  });

const WellcomeNavbar = () => {
    const classes = useStyles();

    return (
        <AppBar position="static" className={classes.root}>
                <Toolbar className={classes.align}>
                        <Typography>
                            <Link to="/"><img src={Logo} className={classes.image}/></Link>
                        </Typography>
                        <div className={classes.alignRight}>
                            <Button color="inherit">
                                <Link to="/login" className={classes.btnText}>Login</Link>
                            </Button>
                            <Button color="inherit">
                                <Link to="/register" className={classes.btnText}>Register</Link>
                            </Button>
                        </div>
                </Toolbar>
        </AppBar>
    )
}

export default WellcomeNavbar;
