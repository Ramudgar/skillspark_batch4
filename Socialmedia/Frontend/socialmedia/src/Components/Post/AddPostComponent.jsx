import React, { useState } from 'react';

const AddPostComponent
 = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [category, setCategory] = useState('');
  const [image, setImage] = useState(null);

  const handleImageChange = (e) => {
    setImage(e.target.files[0]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic
    console.log({ title, description, category, image });
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded-lg shadow-lg">
      <h2 className="text-2xl font-semibold text-gray-800 text-center">Create a Social Media Post</h2>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label className="block text-gray-700 font-medium">Title</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="mt-2 p-3 w-full border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
            placeholder="Enter title"
            required
          />
        </div>
        <div>
          <label className="block text-gray-700 font-medium">Description</label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="mt-2 p-3 w-full border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
            placeholder="Write a description..."
            rows="4"
            required
          ></textarea>
        </div>
        <div>
          <label className="block text-gray-700 font-medium">Category</label>
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="mt-2 p-3 w-full border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
            required
          >
            <option value="">Select category</option>
            <option value="Travel">Travel</option>
            <option value="Food">Food</option>
            <option value="Technology">Technology</option>
            <option value="Lifestyle">Lifestyle</option>
          </select>
        </div>
        <div>
          <label className="block text-gray-700 font-medium">Upload Image</label>
          <input
            type="file"
            accept="image/*"
            onChange={handleImageChange}
            className="mt-2 p-3 w-full border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
            required
          />
        </div>
        <button
          type="submit"
          className="w-full bg-indigo-500 text-white py-3 rounded-lg font-medium hover:bg-indigo-600 transition duration-300"
        >
          Post
        </button>
      </form>
    </div>
  );
};

export default AddPostComponent
;
