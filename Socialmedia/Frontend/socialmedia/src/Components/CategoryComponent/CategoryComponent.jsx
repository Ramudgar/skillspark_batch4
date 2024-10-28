import React, { useState, useEffect } from "react";
import axios from "axios";
import { toast } from "react-toastify";

const CategoryComponent = () => {
  const [categoryInput, setCategoryInput] = useState("");
  const [categories, setCategories] = useState([]);
  const [editingId, setEditingId] = useState(null);

  // Fetch categories from API on component mount
  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await axios.get(
          "http://localhost:8000/api/category/all"
        );
        console.log(response.data.categories);
        setCategories(response.data.categories);
      } catch (error) {
        console.error("Error fetching categories:", error);
      }
    };

    fetchCategories();
  }, []);

  // Handle form submission to add or edit a category
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!categoryInput.trim()) return;

    try {
      if (editingId) {
        // Update category
        const response = await axios.put(`/api/categories/${editingId}`, {
          name: categoryInput,
        });
        setCategories(
          categories.map((cat) => (cat._id === editingId ? response.data : cat))
        );
        setEditingId(null);
      } else {
        // Add new category
        const response = await axios.post(
          "http://localhost:8000/api/category/create",
          {
            name: categoryInput,
          },
          {
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
          }
        );
        toast.success(response.data.msg);

        // console.log(response.data.msg);

        // console.log(response.data.response.name);

        setCategories([...categories, response.data.response]);
      }
      setCategoryInput("");
    } catch (error) {
      console.error("Error submitting category:", error);
    }
  };

  // Handle delete action
  const handleDelete = async (id) => {
    try {
      await axios.delete(`/api/categories/${id}`);
      setCategories(categories.filter((cat) => cat._id !== id));
    } catch (error) {
      console.error("Error deleting category:", error);
    }
  };

  // Handle edit action
  const handleEdit = (category) => {
    setEditingId(category._id);
    setCategoryInput(category.name);
  };

  return (
    <div className="max-w-lg mx-auto p-6 bg-white rounded-lg shadow-lg my-20">
      <h2 className="text-2xl font-semibold text-gray-800 text-center">
        Manage Categories
      </h2>
      <form onSubmit={handleSubmit} className="mt-6 flex space-x-3">
        <input
          type="text"
          value={categoryInput}
          onChange={(e) => setCategoryInput(e.target.value)}
          className="flex-1 p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
          placeholder="Enter category name"
          required
        />
        <button
          type="submit"
          className="bg-indigo-500 text-white px-4 py-3 rounded-lg font-medium hover:bg-indigo-600 transition duration-300"
        >
          {editingId ? "Update" : "Add"}
        </button>
      </form>

      <ul className="mt-8 space-y-4">
        {categories.map((category) => (
          <li
            key={category._id}
            className="flex justify-between items-center bg-gray-100 p-4 rounded-lg"
          >
            <span className="text-black font-medium">{category.name}</span>
            <div className="space-x-3">
              <button
                onClick={() => handleEdit(category)}
                className="text-blue-500 hover:underline"
              >
                Edit
              </button>
              <button
                onClick={() => handleDelete(category._id)}
                className="text-red-500 hover:underline"
              >
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CategoryComponent;
