import React, { useEffect, useState } from 'react';
import axios from 'axios';

interface UrlAnalyticsProps {
  shortCode: string;
}

const UrlAnalytics: React.FC<UrlAnalyticsProps> = ({ shortCode }) => {
  const [clicks, setClicks] = useState<number>(0);

  useEffect(() => {
    const fetchClicks = async () => {
      try {
        const response = await axios.get(`/analytics/clicks/${shortCode}`, {
          headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
        });
        setClicks(response.data.clicks);
      } catch (error) {
        console.error('Error fetching clicks data:', error);
      }
    };

    fetchClicks();
  }, [shortCode]);

  return (
    <div>
      <h2>URL Analytics</h2>
      <p>Clicks: {clicks}</p>
    </div>
  );
};

export default UrlAnalytics;
