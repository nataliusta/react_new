import { useState } from 'react';
import MainHeader from './components/MainHeader';
import PostsList from './components/PostsList';


function App() {
  const [modalIsVisible, setModalIsVisible] = useState(false);

  const hideModalHandle = () => {
    setModalIsVisible(false);
  };

  const showModalHandle = () => {
    setModalIsVisible(true);
  };

  return (
    <>
    <MainHeader onCreatePost={showModalHandle} />
      <main>
        <PostsList 
          isPosting={modalIsVisible} 
          onStopPosting={hideModalHandle}/>
      </main>
    </>
  );
}

export default App;
