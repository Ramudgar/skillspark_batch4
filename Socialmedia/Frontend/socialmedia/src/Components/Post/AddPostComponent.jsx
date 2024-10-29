import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const AddPostComponent = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [image, setImage] = useState(null);
  const [categories, setCategories] = useState([]);

  const Navigate = useNavigate();

  const handleImageChange = (e) => {
    setImage(e.target.files[0]);
    // console.log(e.target);
  };

  // console.log(image);
  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("title", title);
    formData.append("description", description);
    formData.append("category", category);
    formData.append("postImage", image);

    try {
      const response = await axios.post(
        "http://localhost:8000/api/post/create",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      toast.success(response.data.msg, {
        position: "top-center",
        autoClose: 1000,
      });

      setTimeout(() => {
        Navigate("/post");
      }, 1000);

      // clear the form
      setTitle("");
      setDescription("");
      setCategory("");
      setImage(null);

      // console.log(response);
    } catch (error) {
      console.error("Error creating post:", error);
    }
  };

  useEffect(() => {
    // Fetch categories from API on component mount
    const fetchCategories = async () => {
      try {
        const response = await axios.get(
          "http://localhost:8000/api/category/all"
        );
        // console.log(response)
        setCategories(response.data.categories);
      } catch (error) {
        console.error("Error fetching categories:", error);
      }
    };

    fetchCategories();
  }, []);

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded-lg shadow-lg">
      <h2 className="text-2xl font-semibold text-gray-800 text-center">
        Create a Social Media Post
      </h2>
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
            {categories.map((cat) => (
              <option key={cat._id} value={cat._id}>
                {cat.name}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label className="block text-gray-700 font-medium">
            Upload Image
          </label>
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

export default AddPostComponent;
