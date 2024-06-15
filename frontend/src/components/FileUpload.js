import React, { useState } from 'react';
import axios from 'axios';

const FileUpload = () => {
  const [inputText, setInputText] = useState('');
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (e) => {
    setSelectedFile(e.target.files[0]);
  };

  const handleTextChange = (e) => {
    setInputText(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!selectedFile || !inputText) {
      alert('Please provide both text input and a file.');
      return;
    }

    const formData = new FormData();
    formData.append('file', selectedFile);
    formData.append('inputText', inputText);

    try {
      const response = await axios.post('/api/upload', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      console.log('File uploaded successfully:', response.data);
    } catch (error) {
      console.error('Error uploading file:', error);
    }
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <label htmlFor="inputText" className="block text-gray-700 mb-2">Input Text:</label>
      <input
        type="text"
        id="inputText"
        value={inputText}
        onChange={handleTextChange}
        className="p-2 border rounded w-full text-black mb-4"
      />

      <label htmlFor="fileInput" className="block text-gray-700 mb-2 mr-2">Choose File:</label>
      <input
        type="file"
        id="fileInput"
        onChange={handleFileChange}
        className="p-2 border rounded w-full mb-4"
      />

      <button
        type="submit"
        className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600 transition-colors"
        onClick={handleSubmit}
      >
        Upload
      </button>
    </div>
  );
};

export default FileUpload;