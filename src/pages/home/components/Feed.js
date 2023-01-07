import React from 'react'
import { makeStyles } from '@mui/styles'
import PostCard from '../../../components/PostCard';

const useStyles = makeStyles((theme) => ({
  root: {

  }
}));

const posts = [
  {
    id: 1,
    title:
      'COMO MELHORAR SEU CODIGO JAVASCRIPT (ESLINT + PRETTIER + EDITORCONFIG) | Dicas e Truques #02',
    slug: 'como-melhorar-seu-codigo-javascript',
    date: new Date('2021/05/20 08:09:11').toLocaleString(),
    author: {
      id: 1,
      name: 'Lucas Nhimi',
      avatar: '/images/avatars/avatar_1.jpeg',
    },
    tags: ['eslint', 'prettier', 'editorconfig', 'vscode'],
    image: '/images/posts/post1.png',
    likes: 10,
    comments: 30,
  },
  {
    id: 2,
    title: 'COMO MIGRAR PARA REACT HOOKS | Tips & Tricks - React.js #01',
    slug: 'como-migrar-para-react-hooks',
    date: new Date('2019/01/22 10:18:54').toLocaleString(),
    author: {
      id: 1,
      name: 'Lucas Nhimi',
      avatar: '/images/avatars/avatar_1.jpeg',
    },
    tags: ['reactjs', 'javascript'],
    image: '/images/posts/post2.png',
    likes: 5,
    comments: 1,
  },
]

function Feed() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      {
        posts.map(post => (
          <PostCard key={post.id} post={post}></PostCard>
        ))
      }
    </div>
  )
}

export default Feed