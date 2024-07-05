import React, { useState} from 'react';
import axios from "axios";

const FileForm= (files,setFiles) => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [file, setFile] = useState(null);
  
  
    const handleSubmit = async(e) => {
        e.preventDefault();
        // Handle form submission logic
        console.log("the reqqqqqqqq"+{ title, description, file });
        const formData=new FormData();
        formData.append("title",title);
        formData.append("description",description);
        formData.append("file",file);
    
    
        const result= await axios.post("http://localhost:3000/upload",formData,{
            headers:{"Content-Type":"multipart/form-data"}
        }
       );
       setFiles(...files,{
        _id:result.data._id,
        title,
        description,
       })
       alert("added succesfully");
       console.log(result);
      };
    return (
      <form className="max-w-xl mx-auto p-8 bg-white shadow-md rounded" onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="title">
            Title
          </label>
          <input
            id="title"
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
  
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="description">
            Description
          </label>
          <textarea
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
  
        <div className="mb-6">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="file">
            File
          </label>
          <input
            id="file"
            type="file"
            onChange={(e) => setFile(e.target.files[0])}
            className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 focus:outline-none"
          />
        </div>
  
        <div className="flex items-center justify-between">
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Upload
          </button>
        </div>
      </form>
    );
  };
export default FileForm;
