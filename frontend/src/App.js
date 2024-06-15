import React, { useState } from 'react';
import axios from 'axios';

const FileUpload = () => {
  const [inputText, setInputText] = useState('');
  const [selectedFile, setSelectedFile] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState('');

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

    setIsLoading(true);
    setMessage('');

    const formData = new FormData();
    formData.append('file', selectedFile);
    formData.append('inputText', inputText);

    try {
      const response = await axios.post('/api/upload', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      setIsLoading(false);
      setMessage('File uploaded successfully!');
      console.log('File uploaded successfully:', response.data);
    } catch (error) {
      setIsLoading(false);
      setMessage('Error uploading file.');
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
        disabled={isLoading}
      >
        {isLoading ? 'Uploading...' : 'Upload'}
      </button>

      {message && <p className="mt-4 text-center text-gray-700">{message}</p>}
    </div>
  );
};

export default FileUpload;


//api-gateway-url: 'https://x3nk88tc3i.execute-api.us-east-1.amazonaws.com/dev'