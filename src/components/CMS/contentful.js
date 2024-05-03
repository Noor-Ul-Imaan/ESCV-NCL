import { useState, useEffect } from 'react';
import { createClient } from 'contentful';

export function useContentfulData(contentType) {
  const [data, setData] = useState([]);

  useEffect(() => {
    const client = createClient({
        space: "fg8c8ttvyh8y",
        accessToken: "sQcdQjMZoB8rwKgxtF4XEIQcRIqZX3TurNC2FiOdFk8",
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
