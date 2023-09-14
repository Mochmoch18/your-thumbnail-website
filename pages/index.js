import React, { useState } from 'react';

const HomePage = () => {
  const [url, setUrl] = useState('');
  const [thumbnail, setThumbnail] = useState('');

  const generateThumbnail = async () => {
    const response = await fetch(`/api/thumbnail?url=${encodeURIComponent(url)}`);
    const blob = await response.blob();
    const imageUrl = URL.createObjectURL(blob);
    setThumbnail(imageUrl);
  };

  return (
    <div>
      <h1>Thumbnail Grabber</h1>
      <input type="text" value={url} onChange={(e) => setUrl(e.target.value)} />
      <button onClick={generateThumbnail}>Generate Thumbnail</button>
      {thumbnail && <img src={thumbnail} alt="Thumbnail" />}
    </div>
  );
};

export default HomePage;  // Make sure to export the component as the default export
