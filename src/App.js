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
      <h1>A short Narration of Lorem Ipsum</h1>
      <p className="subtitle">Below Contains A title and Body gotten from a random API. Please take your time to Review</p>
      
      {loading && <p className="loading">Loading...</p>}
      
      {error && <p className="error">Error: {error}</p>}
      
      {data && data.length > 0 && !loading && (
        <div className="cards-container">
          {data.map((post) => (
            <div key={post.id} className="card">
              <div className="card-title">Title</div>
              <p className="title-content">{post.title}</p>
              <div className="card-body">Body</div>
              <p className="body-content">{post.body}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default App;