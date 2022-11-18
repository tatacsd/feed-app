import css from './App.module.css';
import { Header } from './components/Header';
import { Post, PostProps } from './components/Post';
import { Sidebar } from './components/Sidebar';
import './global.css';

const posts = [
  {
    id: 1,
    author: {
      name: '@thayscasado',
      avatarURL: 'https://github.com/tatacsd.png',
      role: 'Fullstack Developer',
    },
    content: [
      { type: 'paragraph', content: 'Helloo there! 👋' },
      {
        type: 'paragraph',
        content:
          'I have just finished a to do app. It is an application that allows the user to create a task list, being able to add, remove and mark as completed. It is called ToDo App and it is available on my GitHub. This project is the first on ignite track course from rocketseat. It is a simple application, but it was very interesting to develop it. I hope you like it!',
      },
      {
        type: 'anchor',
        href: 'https://github.com/tatacsd/todo-app',
        content: 'github.com/tatacsd/todo-app',
      },
      { type: 'hashtag', content: '#newProject' },
      { type: 'hashtag', content: '#rocketseat' },
      { type: 'hashtag', content: '#todoApp' },
      { type: 'hashtag', content: '#ignite' },
      { type: 'hashtag', content: '#challenge' },
    ],
    publishedAt: new Date('2022-11-16 23:55:00'),
  },
] as PostProps[];

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
