// src/components/UrlShortener.tsx
import React, { useState } from 'react';
import axios from 'axios';

const UrlShortener: React.FC = () => {
  const [originalUrl, setOriginalUrl] = useState('');
  const [customCode, setCustomCode] = useState('');
  const [shortUrl, setShortUrl] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5001/shorten', { originalUrl, customCode });
      setShortUrl(response.data.shortUrl);
      setError('');
    } catch (err) {
      setError('Error shortening the URL');
    }
  };

  return (
    <div>
      <h1>URL Shortener</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter URL"
          value={originalUrl}
          onChange={(e) => setOriginalUrl(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Custom code (optional)"
          value={customCode}
          onChange={(e) => setCustomCode(e.target.value)}
        />
        <button type="submit">Shorten</button>
      </form>
      {shortUrl && <p>Shortened URL: <a href={shortUrl} target="_blank" rel="noopener noreferrer">{shortUrl}</a></p>}
      {error && <p>{error}</p>}
    </div>
  );
};

export default UrlShortener;
