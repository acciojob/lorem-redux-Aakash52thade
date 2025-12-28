import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchLoremData } from './redux/loremActions';
import './App.css';

function App() {
  const dispatch = useDispatch();
  const { loading, data, error } = useSelector(state => state);

  useEffect(() => {
    dispatch(fetchLoremData());
  }, [dispatch]);

  return (
    <div className="App">
      <h1>A short Naration of Lorem Ipsum</h1>
      <p className="subtitle">
        Below Contains A title and Body gotten from a random API. Please take your time to Review
      </p>
      
      {loading && <h4 className="loading">Loading...</h4>}
      
      {error && <p className="error">Error: {error}</p>}
      
      {!loading && data && data.length > 0 && (
        <ul className="posts-list">
          {data.map((post) => (
            <li key={post.id} className="post-item">
              <h4 className="post-title">{post.title}</h4>
              <p className="post-body">{post.body}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default App;