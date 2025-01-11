import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

const Blog = () => {
  const [posts, setPosts] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const [isEditMode, setIsEditMode] = useState(false);
  const [currentPost, setCurrentPost] = useState(null);
  const [newPost, setNewPost] = useState({
    title: '',
    featureImage: null,
    description: '',
    source: '',
    tags: '',
  });
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    fetchPosts();
  }, []);

  const fetchPosts = async () => {
    try {
      const response = await axios.get('https://arrc-tech-ratelab-backend.onrender.com/api/posts');
      setPosts(response.data);
    } catch (error) {
      console.error('Error fetching posts:', error);
      alert('Failed to fetch posts');
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewPost({ ...newPost, [name]: value });
  };

  const handleEditorChange = (value) => {
    setNewPost({ ...newPost, description: value });
  };

  const handleFileChange = (e) => {
    setNewPost({ ...newPost, featureImage: e.target.files[0] });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    for (const key in newPost) {
      formData.append(key, newPost[key]);
    }

    try {
      if (isEditMode) {
        await axios.put(`https://arrc-tech-ratelab-backend.onrender.com/api/posts/${currentPost._id}`, formData);
        alert('Post updated successfully');
      } else {
        await axios.post('https://arrc-tech-ratelab-backend.onrender.com/api/posts', formData);
        alert('Post created successfully');
      }
      fetchPosts();
      setIsOpen(false);
      resetForm();
    } catch (error) {
      console.error('Error saving post:', error);
      alert('Failed to save post');
    }
  };

  const handleEdit = (post) => {
    setCurrentPost(post);
    setNewPost({
      title: post.title,
      description: post.description,
      source: post.source,
      tags: post.tags.join(','),
    });
    setIsEditMode(true);
    setIsOpen(true);
  };

  const handleDelete = async (postId) => {
    try {
      await axios.delete(`https://arrc-tech-ratelab-backend.onrender.com/api/posts/${postId}`);
      alert('Post deleted successfully');
      fetchPosts();
    } catch (error) {
      console.error('Error deleting post:', error);
      alert('Failed to delete post');
    }
  };

  const resetForm = () => {
    setNewPost({
      title: '',
      featureImage: null,
      description: '',
      source: '',
      tags: '',
    });
    setIsEditMode(false);
    setCurrentPost(null);
  };

  const filteredPosts = posts.filter(post =>
    post.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="content-area">
        <h4 className="heading text-xl sm:text-2xl font-semibold mb-4">Blog Posts</h4>

        <div className="flex flex-col sm:flex-row justify-between mb-4 gap-4">
          <input
            type="text"
            placeholder="Search..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="border rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400 w-full sm:w-auto"
          />
          <button
            onClick={() => {
              resetForm();
              setIsOpen(true);
            }}
            className="btn btn-primary px-4 py-2 font-mono bg-indigo-600 text-white hover:bg-indigo-600 focus:outline-none w-full sm:w-auto"
          >
            + Add New Post
          </button>
        </div>

        <div className="overflow-x-auto">
          <table className="min-w-full border-collapse border border-gray-200">
            <thead>
              <tr className="bg-indigo-600 text-white font-mono">
                <th className="border border-gray-300 px-4 py-2">Featured Image</th>
                <th className="border border-gray-300 px-4 py-2">Post Title</th>
                {/* <th className="border border-gray-300 px-4 py-2">Views</th> */}
                <th className="border border-gray-300 px-4 py-2">Options</th>
              </tr>
            </thead>
            <tbody>
              {filteredPosts.map((post) => (
                // <tr key={post._id} className="hover:bg-gray-100 text-center">
                //   <td className="border border-gray-300 px-4 py-2 flex justify-center items-center">
                //     <img src={post.featureImage} alt={post.title} className="h-16 w-16 object-cover" />
                //   </td>
                //   <td className="border border-gray-300 px-4 py-2">{post.title}</td>
                //   {/* <td className="border border-gray-300 px-4 py-2">{post.views}</td> */}
                //   <td className="border border-gray-300 px-4 py-2 flex flex-col sm:flex-row justify-center space-y-2 sm:space-y-0 sm:space-x-2">
                //     <button
                //       onClick={() => handleEdit(post)}
                //       className="flex items-center justify-center rounded-2xl text-white bg-indigo-600 hover:bg-indigo-700 px-3 py-1 focus:outline-none focus:ring-2 transition ease-in-out duration-200"
                //     >
                //       Edit
                //     </button>
                //     <button
                //       onClick={() => handleDelete(post._id)}
                //       className="flex items-center justify-center rounded-2xl text-white bg-red-500 hover:bg-red-600 px-3 py-1 focus:outline-none focus:ring-2 transition ease-in-out duration-200"
                //     >
                //       Delete
                //     </button>
                //   </td>
                // </tr>
                <tr key={post._id} className="hover:bg-gray-100 text-center">
  <td className="border border-gray-300 px-4 py-2 flex justify-center items-center">
    <img
      src={post.featureImage}
      alt={post.title}
      className="h-16 w-16 object-cover rounded-md"
    />
  </td>
  <td className="border border-gray-300 px-4 py-2">{post.title}</td>
  <td className="border border-gray-300 px-4 py-2">
    <div className="flex justify-center space-x-4">
      <button
        onClick={() => handleEdit(post)}
        className="flex items-center justify-center rounded-2xl text-white bg-indigo-600 hover:bg-indigo-700 px-4 py-2 transition ease-in-out duration-200 focus:outline-none focus:ring-2"
      >
        Edit
      </button>
      <button
        onClick={() => handleDelete(post._id)}
        className="flex items-center justify-center rounded-2xl text-white bg-red-500 hover:bg-red-600 px-4 py-2 transition ease-in-out duration-200 focus:outline-none focus:ring-2"
      >
        Delete
      </button>
    </div>
  </td>
</tr>

              ))}
            </tbody>
          </table>
        </div>

        {/* Add/Edit Post Modal */}
        {isOpen && (
          <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50 p-4">
            <div className="bg-white rounded shadow-md w-full max-w-4xl flex flex-col max-h-[90vh]">
              <h2 className="text-xl font-bold p-6 border-b">{isEditMode ? 'Edit Post' : 'Add New Post'}</h2>
              <form onSubmit={handleSubmit} className="flex flex-col flex-grow overflow-hidden">
                <div className="flex-grow overflow-y-auto p-6">
                  <div className="mb-4">
                    <label className="block text-gray-700" htmlFor="title">Title *</label>
                    <input
                      type="text"
                      name="title"
                      id="title"
                      value={newPost.title}
                      onChange={handleInputChange}
                      required
                      placeholder="Enter post title"
                      className="w-full border border-gray-300 p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                  <div className="mb-4">
                    <label className="block text-gray-700" htmlFor="featureImage">Featured Image *</label>
                    <input
                      type="file"
                      name="featureImage"
                      id="featureImage"
                      onChange={handleFileChange}
                      required={!isEditMode}
                      className="w-full border border-gray-300 p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                  <div className="mb-4">
                    <label className="block text-gray-700" htmlFor="description">Description *</label>
                    <ReactQuill
                      value={newPost.description}
                      onChange={handleEditorChange}
                      className="h-64 mb-4"
                    />
                  </div>
                  <div className="mb-4">
                    <label className="block text-gray-700" htmlFor="source">Source *</label>
                    <input
                      type="text"
                      name="source"
                      id="source"
                      value={newPost.source}
                      onChange={handleInputChange}
                      required
                      placeholder="Enter post source"
                      className="w-full border border-gray-300 p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                  <div className="mb-4">
                    <label className="block text-gray-700" htmlFor="tags">Tags *</label>
                    <input
                      type="text"
                      name="tags"
                      id="tags"
                      value={newPost.tags}
                      onChange={handleInputChange}
                      required
                      placeholder="Enter post tags (comma-separated)"
                      className="w-full border border-gray-300 p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                </div>
                <div className="flex justify-between gap-4 p-6 border-t">
                  <button
                    type="button"
                    onClick={() => {
                      setIsOpen(false);
                      resetForm();
                    }}
                    className="px-4 py-2 bg-gray-400 text-white rounded hover:bg-gray-500"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-green-700"
                  >
                    {isEditMode ? 'Update Post' : 'Create Post'}
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Blog;

