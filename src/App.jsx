import { Header } from "./components/Header";
import "./global.css";
import { Post } from "./Post";

export function App() {

  return (
    <>
    <Header />
    <Post author="John" content="content here"/>
    </>
  )
}
