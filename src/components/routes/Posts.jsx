import { Outlet } from 'react-router-dom';
import PostsList from '../PostsList';

function Posts() {
  return (
    <>
      <Outlet />
      <main>
        <PostsList />
      </main>
    </>
  );
}

export default Posts;

export async function loader() {
  const response = await fetch('https://react-new-a4be5-default-rtdb.europe-west1.firebasedatabase.app/posts.json');
  const resData = await response.json();
  return resData.posts;
}