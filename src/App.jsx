import css from './App.module.css';
import { Header } from './components/Header';
import { Sidebar } from './components/Sidebar';
import './global.css';
import { Post } from './Post';

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
