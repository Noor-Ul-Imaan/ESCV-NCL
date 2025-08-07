import { useState, useEffect } from 'react';
import { createClient } from 'contentful';

export function useContentfulData(contentType) {
  const [data, setData] = useState([]);

  useEffect(() => {
    const client = createClient({
      space: process.env.REACT_APP_CONTENTFUL_SPACE,
      accessToken: process.env.REACT_APP_CONTENTFUL_ACCESS_TOKEN,
    });

    const fetchData = async () => {
      try {
        const response = await client.getEntries({
          content_type: contentType,
        });
        console.log(response.items);
        setData(response.items);
      } catch (error) {
        console.error("Error fetching Contentful data:", error);
      }
    };

    fetchData();
  }, [contentType]);

  return data;
}
