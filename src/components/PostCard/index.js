import React from 'react';
import { makeStyles } from '@mui/styles';
import { Avatar, Card, CardActionArea, CardActions, CardContent, CardHeader, IconButton, Typography } from '@mui/material';
import { Message, Favorite, Bookmark } from '@mui/icons-material';


const useStyles = makeStyles(() => ({
    root: {
        marginBottom: 8
    },
    subheader: {
        display: 'flex',
        alignItems: 'center'
    },
    caption: {
        marginRight: '8px !important'
    },
    message: {
        height: 'auto',
        marginBottom: 16,
        padding: '0px 24px !important'
    },
    image: {
        height: 300,
        width: '100%',
        maxWidth: '100%'
    },
    content: {
        padding: 0
    },
    favorite: {
        marginLeft: 'auto'
    }
}));

function PostCard({ post }) {
    const classes = useStyles();

    return (
        <Card className={classes.root}>
            <CardHeader
                avatar={<Avatar src={post.author.avatar} />}
                title={<Typography variant='h6'>{post.title}</Typography>}
                subheader={
                    <div className={classes.subheader}>
                        <Typography variant='caption' className={classes.caption}>
                            {'Avaliado por'}
                        </Typography>
                        <Typography variant='subtitle2' className={classes.caption}>
                            {post.author.name}
                        </Typography>
                        <Typography variant='caption' className={classes.caption}>
                            {post.date}
                        </Typography>
                    </div>
                }
            />
            <CardContent className={classes.content}>
                <Typography
                    className={classes.message}
                    variant='body1'
                >
                    {post.hashtags}
                </Typography>
                <CardActionArea>
                    <img src={post.image} className={classes.image} />
                </CardActionArea>
            </CardContent>
            <CardActions disableSpacing>
                <IconButton aria-label='like'>
                    <Favorite />
                    <Typography
                        style={{ cursor: 'pointer' }}
                        color="text-secondary"
                        variant='body2'>
                        {'10'}
                    </Typography>
                </IconButton>

                <IconButton aria-label='comment'>
                    <Message />
                    <Typography
                        style={{ cursor: 'pointer' }}
                        color="text-secondary"
                        variant='body2'>
                        {'10'}
                    </Typography>
                </IconButton>

                <IconButton aria-label='favorite' className={classes.favorite}>
                    <Bookmark />
                    <Typography
                        style={{ cursor: 'pointer' }}
                        color="text-secondary"
                        variant='body2'>
                        {'10'}
                    </Typography>
                </IconButton>
            </CardActions>
        </Card>
    )
}

export default PostCard;