import css from './App.module.css';
import { Header } from './components/Header';
import { Post } from './components/Post';
import { Sidebar } from './components/Sidebar';
import './global.css';

export function App() {
  return (
    <>
      <Header />
      <div className={css.wrapper}>
        <Sidebar />
        <main>
          <Post author="John" content="content here" />
        </main>
      </div>
    </>
  );
}
