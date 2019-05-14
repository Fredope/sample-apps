import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import DoneAllIcon from '@material-ui/icons/DoneAll';
import { Typography } from '@material-ui/core';
import classnames from 'classnames';


const styles = theme => ({
    root: {
        width: '100%',
    },
    incoming: {
        background: '#fff',
        border: '1px solid #F5F5F5',
    },
    outgoing: {
        background: '#51DB98',
        border: '1px solid #F5F5F5',
    },
    messageContainer: {
        boxSizing: 'border-box',
        boxShadow: '0px 1px 10px rgba(0, 0, 0, 0.04)',
        borderRadius: '10px',
        padding: '5px 10px',
        margin: '5px',
        maxWidth: '50%'
    },
    messageText: {
        paddingRight: '35px',
    },
    messageHour: {
        paddingTop: '4px',
        fontSize: '12px',
        color: 'rgba(20, 20, 20, 0.64)'
    },
    messageViewed: {
        height: '12px',
        color: 'rgba(20, 20, 20, 0.64)'
    },
    hidden: {
        display: 'none'
    }
});

const Chat = (props) => {
    const { classes, message } = props;

    const formatDate = () => {
        let time = new Date(message.time)

        time = time.toLocaleTimeString()
        return time

    }

    return (
        <Grid container
            justify="flex-start"
            alignItems={props.incoming ? "flex-start" : "flex-end"}
            direction="column"
            className={classes.root}
        >
            <Grid item
                className={classnames(classes.messageContainer, { [classes.incoming]: props.incoming }, { [classes.outgoing]: !props.incoming })}>
                <Typography className={classes.messageText}>{message.text}</Typography>

                <Grid container
                    justify="flex-end"
                    alignItems="flex-end"
                    direction="row"
                >
                    <Typography className={classes.messageHour}>
                        {formatDate()}
                        <DoneAllIcon className={classnames(classes.messageViewed, { [classes.hidden]: props.incoming || !message.read })} />
                    </Typography>
                </Grid>
            </Grid>
        </Grid>
    )
}

export default withStyles(styles)(Chat);
