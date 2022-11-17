import css from './App.module.css';
import { Header } from './components/Header';
import { Post } from './components/Post';
import { Sidebar } from './components/Sidebar';
import './global.css';

const posts = [
  {
    id: 1,
    author: {
      name: 'John Doe',
      avatarURL: 'https://placekitten.com/200/300',
      role: 'Frontend Engineer',
    },
    content: [
      { type: 'paragraph', content: 'Fala galeraa 👋' },
      {
        type: 'paragraph',
        content:
          'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀',
      },
      { type: 'anchor', content: 'jane.design/doctorcare' },
      { type: 'hashtag', content: '#novoprojeto' },
      { type: 'hashtag', content: '#nlw' },
      { type: 'hashtag', content: '#rocketseat' },
    ],
    publishedAt: new Date('2022-11-15 00:00:00'),
  },
  {
    id: 2,
    author: {
      name: 'Jane Doe',
      avatarURL: 'https://placekitten.com/200/300',
      role: 'Backend Engineer',
    },
    content: [
      { type: 'paragraph', content: 'Fala galeraa 👋' },
      {
        type: 'paragraph',
        content:
          'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀',
      },
      { type: 'anchor', content: 'jane.design/doctorcare' },
      { type: 'hashtag', content: '#novoprojeto' },
      { type: 'hashtag', content: '#nlw' },
      { type: 'hashtag', content: '#rocketseat' },
    ],
    publishedAt: new Date('2022-11-15 00:10:00'),
  },
  {
    id: 3,
    author: {
      name: 'John Doe',
      avatarURL: 'https://placekitten.com/200/300',
      role: 'Quality Assurance Engineer',
    },
    content: [
      { type: 'paragraph', content: 'Fala galeraa 👋' },
      {
        type: 'paragraph',
        content: 'Projetinho novo na area! 🚀',
      },
      { type: 'anchor', content: 'jane.design/doctorcare' },
      { type: 'hashtag', content: '#novoprojeto' },
      { type: 'hashtag', content: '#nlw' },
      { type: 'hashtag', content: '#rocketseat' },
    ],
    publishedAt: new Date('2022-11-12 00:20:00'),
  },
];

export function App() {
  return (
    <>
      <Header />
      <div className={css.wrapper}>
        <Sidebar />
        <main>
          {posts.map((post) => (
            <Post
              key={post.id}
              author={post.author}
              content={post.content}
              publishedAt={post.publishedAt}
            />
          ))}
        </main>
      </div>
    </>
  );
}
