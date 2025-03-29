
import './App.css'
import PostsList from './components/PostsList'


function App() {
  {/* 
    JSX expressions must have one parent element. 
    jsx, tsx 여러 요소를 사용할 경우 반드시 부모 요소로 감싸야 한다.
    */}
  return (
      <>
        <PostsList />
      </>
  )
}

export default App
