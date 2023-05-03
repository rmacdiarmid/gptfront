// useArticles.js
import { useState, useEffect } from 'react';

const useArticles = () => {
    const [articles, setArticles] = useState([]);

    useEffect(() => {
        fetch("/api/articles")
          .then((res) => res.json())
          .then((data) => {
            console.log("Fetched articles:", data); // Add this console log
            setArticles(data);
          })
          .catch((err) => console.error(err));
      }, []);

    return articles;
};

export default useArticles;
