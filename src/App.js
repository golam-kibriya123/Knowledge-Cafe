import './App.css';
import BlogContainer from './component/Blog-Container/BlogContainer';
import Header from './component/Header/Header'
import Question from './component/Question/Question';


function App() {



  return (
    <div className="App">
      <Header></Header>
      <BlogContainer></BlogContainer>
      <Question></Question>
    </div>
  );
}

export default App;
