import React, { useState } from 'react';
import axios from 'axios';

const HomePage = () => {
  const [originalUrl, setOriginalUrl] = useState('');
  const [shortUrl, setShortUrl] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await axios.post('/api/shorten', { originalUrl });
      setShortUrl(response.data.shortUrl);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <h1>URL Shortener</h1>
      <form onSubmit={handleSubmit}>
        <input type="url" value={originalUrl} onChange={(e) => setOriginalUrl(e.target.value)} required />
        <button type="submit">Shorten</button>
      </form>
      {shortUrl && <p>Short URL: <a href={shortUrl}>{shortUrl}</a></p>}
    </div>
  );
};

export default HomePage;