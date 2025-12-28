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
      <h1>Lorem Redux Application</h1>
      
      {loading && <p className="loading">Loading...</p>}
      
      {error && <p className="error">Error: {error}</p>}
      
      {data && !loading && (
        <div className="content">
          <h2>{data.title}</h2>
          <p>{data.body}</p>
        </div>
      )}
    </div>
  );
}

export default App;