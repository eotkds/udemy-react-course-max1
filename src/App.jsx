import Post from './components/Post'
import './App.css'

function App() {
  {/* 
    JSX expressions must have one parent element. 
    jsx, tsx 여러 요소를 사용할 경우 반드시 부모 요소로 감싸야 한다.
    */}
  return (
      <>
      <Post />
      <Post />
      <Post />
      <Post />
      </>
  )
}

export default App
