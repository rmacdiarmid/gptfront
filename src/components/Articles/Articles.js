// Articles.js
import React from 'react';
import useArticles from '../../hooks/useArticles';
import Article from '../Article/Article';
import useCleanImageName from '../../hooks/useCleanImageName';

const Articles = () => {
    const articles = useArticles();
    const imagePath = process.env.REACT_APP_IMAGE_PATH;

    const getImageUrl = (imageName) => {
        // Log the image path and cleaned image name
        console.log('Image path:', imagePath);
        const cleanedImageName = useCleanImageName(imageName);
        console.log('Cleaned image name:', cleanedImageName);

        // Calculate the final image URL
        const imageUrl = `${imagePath}${cleanedImageName}`;

        // Log the final image URL
        console.log('Final image URL:', imageUrl);

        return imageUrl;
    };

    return (
        <div>
            <h2>Articles</h2>
            <ul>
                {articles.map((article) => (
                    <li key={article.ID}>
                        <Article
                            image={getImageUrl(article.Image)}
                            title={article.Title}
                            preview={article.Preview}
                        />
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Articles;

