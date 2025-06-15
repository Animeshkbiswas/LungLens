'use client';

import React, { useState } from 'react';
import axios from 'axios';

const ImgUploadComponent = () => {
  const [file, setFile] = useState(null);
  const [previewURL, setPreviewURL] = useState('');
  const [resultWord, setResultWord] = useState('');

  const handleChange = (e) => {
    const selectedFile = e.target.files[0];
    if (selectedFile) {
      setFile(selectedFile);
      setPreviewURL(URL.createObjectURL(selectedFile)); 
    }
  };

  const handleUpload = async () => {
    if (!file) {
      alert('Please select an image');
      return;
    }

    const formData = new FormData();
    formData.append('image', file);

    try {
      const response = await axios.post('http://127.0.0.1:5000/upload-image', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      setResultWord(response.data.word);
    } catch (error) {
      console.error('Upload error:', error);
      alert('Error uploading image');
    }
  };

  return (
    <div className="p-4 border w-fit rounded-lg">
      <input type="file" onChange={handleChange} accept="image/*" />
      {previewURL && (
        <div className="mt-2">
          <img
            src={previewURL}
            alt="Preview"
            className="w-40 h-auto border rounded shadow"
          />
        </div>
      )}

      <button
        onClick={handleUpload}
        className="bg-blue-600 text-white px-4 py-2 rounded mt-2">
        Upload Image
      </button>

      {resultWord && (
        <div className="mt-4 text-green-600 font-bold">
          <h4 >Result from backend: {resultWord}</h4>
        </div>
      )}
    </div>
  );
};

export default ImgUploadComponent;
