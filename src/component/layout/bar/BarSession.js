import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },
    selectionDesktop : {
        display: 'none',
        [theme.breakpoints.up("md")]: {
            display: 'flex',
        }
    },
    selectionMobile: {
        display: 'flex',
        [theme.breakpoints.up("md")]: {
            display: 'none',
        }
    }

  }));
  export default function BarSession() {
    const classes = useStyles();

   


    
        return (
            <div className={classes.root}>
      
            <Toolbar>

              <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                <MenuIcon />
              </IconButton>
              <Typography variant="h6" className={classes.title}>
                Home
              </Typography>
              <div className={classes.selectionDesktop}>
              <Button color="inherit">Login</Button>
              </div>
              <div className={classes.selectionMobile}>
              <IconButton color="inherit">
                  <i className="material-icons">more_vert</i>
              </IconButton>
                </div>
            </Toolbar>
          
        </div>
        );
    
}

