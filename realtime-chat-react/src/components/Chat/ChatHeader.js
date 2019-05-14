import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import Grid from '@material-ui/core/Grid';
import { Typography } from '@material-ui/core';
import classnames from 'classnames'
import { connect } from 'react-redux';


const styles = theme => ({
    root: {
        width: '100%',
        backgroundColor: theme.palette.background.paper,
        height: '62px'
    },
    avatar: {
        margin: 10,
        background: 'none',
        border: `1px solid ${theme.palette.primary.main}`,
        color: theme.palette.primary.main
    },
    activeDot: {
        width: '8px',
        height: '8px',
        display: 'inline-block',
        background: '#51DB98',
        borderRadius: '900px',
        border: '1px solid #51DB98',
    },
    chatPartnerName: {
        fontFamily: 'Proxima Nova',
        fontSize: '20px',
        lineHeight: 'normal',
        color: '#000000'
    },
    grow: {
        flexGrow: 1,
        flex: 1
    },
    hidden: {
        display: 'none'
    }
});

const ChatHeader = (props) => {
    const { classes, className, user } = props;

    return (
        <Grid container justify="flex-start" alignItems="center" direction="row" className={className}>
            <Grid item>
                <Avatar className={classes.avatar}>{user.name.charAt(0).toUpperCase()}</Avatar>
            </Grid>
            <Grid item>
                <Grid container justify="flex-start" alignItems="flex-start" direction="column">
                    <Typography className={classes.chatPartnerName}>{user.name}&nbsp;
                        <span className={classnames(classes.activeDot, { [classes.hidden]: !!!user.isActive })}></span></Typography>
                    <Typography className={classnames({ [classes.hidden]: !!!user.isActive })}>Active now</Typography>
                    <Typography className={classnames({ [classes.hidden]: user.isActive })}>{new Date(user.lastActiveTime).toLocaleDateString()}</Typography>
                </Grid>
            </Grid>
        </Grid>
    )
}

const mapStateToProps = (state) => ({
    inactiveTimeout: state.user.inactiveTimeout
});
export default connect(mapStateToProps)(withStyles(styles)(ChatHeader));
