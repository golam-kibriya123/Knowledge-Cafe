import { useEffect, useState } from 'react';
import './App.css';
import BlogContainer from './component/Blog-Container/BlogContainer';
import Users from './utilitis/Users';
import Header  from './component/Header/Header'



function App() {
  const data = Users;



  return (
    <div className="App">
      <Header></Header>
      <BlogContainer data={data}></BlogContainer>

    </div>
  );
}

export default App;
