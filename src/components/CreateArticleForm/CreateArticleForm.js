import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { CREATE_ARTICLE } from '../../apolloClient';
import './CreateArticleForm.css';
import FileUpload from '../../utils/fileUpload';


const CreateArticleForm = () => {
  const [title, setTitle] = useState('');
  const [preview, setPreview] = useState('');
  const [content, setContent] = useState('');
  const [image, setImage] = useState(null);

  const [createArticle] = useMutation(CREATE_ARTICLE);

  const handleImageChange = (acceptedFiles) => {
    setImage(acceptedFiles[0]);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await createArticle({
        variables: { title, preview, content, image },
      });

      console.log('Article created:', response.data.createArticle);
    } catch (error) {
      console.error('Error creating article:', error);
    }
  };

  return (
    <div className="create-article-form">
      <h2>Create Article</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="title">Title:</label>
          <input
            id="title"
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>

        <div>
          <label htmlFor="preview">Preview:</label>
          <textarea
            id="preview"
            value={preview}
            onChange={(e) => setPreview(e.target.value)}
            required
          />
        </div>

        <div>
          <label htmlFor="content">Content:</label>
          <textarea
            id="content"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            required
          />
        </div>

        <div>
          <label>Image:</label>
          <FileUpload onDrop={handleImageChange} />
        </div>

        <button type="submit">Create Article</button>
      </form>
    </div>
  );
};

export default CreateArticleForm;
