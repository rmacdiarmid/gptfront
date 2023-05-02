import React, { useCallback, useState } from 'react';
import { useDropzone } from 'react-dropzone';
import PropTypes from 'prop-types';

const FileUpload = ({ onDrop }) => {
  const [files, setFiles] = useState([]);

  const handleDrop = useCallback((acceptedFiles) => {
    setFiles(acceptedFiles.map((file) => Object.assign(file, {
      preview: URL.createObjectURL(file)
    })));
    onDrop(acceptedFiles);
  }, [onDrop]);

  const { getRootProps, getInputProps } = useDropzone({ onDrop: handleDrop });

  return (
    <div {...getRootProps()} style={{ border: '1px dashed #c4c4c4', padding: '20px', textAlign: 'center' }}>
      <input {...getInputProps()} />
      <p>Drag and drop an image here, or click to select an image</p>
      {files.map((file, index) => (
        <img key={index} src={file.preview} alt="uploaded thumbnail" style={{ width: '100px', height: '100px', objectFit: 'cover' }} />
      ))}
    </div>
  );
};

FileUpload.propTypes = {
  onDrop: PropTypes.func.isRequired,
};

export default FileUpload;
