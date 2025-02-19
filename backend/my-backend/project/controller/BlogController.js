const Blog = require('../models/BlogModel');


// Get all blogs
const getAllBlogs = async (req, res) => {
  try {
    const blogs = await Blog.find();
    res.status(200).json(blogs);
  } catch (error) {
    console.error('Error fetching blogs:', error);
    res.status(500).json({ message: 'Failed to fetch blogs.' });
  }
};

// Get a blog by ID
const getBlogById = async (req, res) => {
  try {
    const blog = await Blog.findById(req.params.id);
    if (!blog) {
      return res.status(404).json({ message: 'Blog not found.' });
    }
    res.status(200).json(blog);
  } catch (error) {
    console.error('Error fetching blog:', error);
    res.status(500).json({ message: 'Failed to fetch blog.' });
  }
};

// Update a blog
const updateBlog = async (req, res) => {
  try {
    const { title, writtenBy, description } = req.body;
    const image = req.file ? req.file.path : null;

    const updatedBlog = await Blog.findByIdAndUpdate(
      req.params.id,
      { title, writtenBy, description, image },
      { new: true }
    );

    if (!updatedBlog) {
      return res.status(404).json({ message: 'Blog not found.' });
    }

    res.status(200).json({ message: 'Blog updated successfully!', blog: updatedBlog });
  } catch (error) {
    console.error('Error updating blog:', error);
    res.status(500).json({ message: 'Failed to update blog.' });
  }
};

// Delete a blog
const deleteBlog = async (req, res) => {
  try {
    const deletedBlog = await Blog.findByIdAndDelete(req.params.id);
    if (!deletedBlog) {
      return res.status(404).json({ message: 'Blog not found.' });
    }
    res.status(200).json({ message: 'Blog deleted successfully!' });
  } catch (error) {
    console.error('Error deleting blog:', error);
    res.status(500).json({ message: 'Failed to delete blog.' });
  }
};


// Add a new blog
const addBlog = async (req, res) => {
  try {
    const { title, writtenBy, description } = req.body;
    const image = req.file ? req.file.path : null;

    if (!title || !writtenBy || !description || !image) {
      return res.status(400).json({ message: 'Title, Written By, Description, and Image are required!' });
    }

    const newBlog = new Blog({ title, writtenBy, description, image });
    await newBlog.save();

    res.status(201).json({ message: 'Blog added successfully!', blog: newBlog });
  } catch (error) {
    console.error('Error adding blog:', error);
    res.status(500).json({ message: 'Failed to add blog.' });
  }
};

// Other blog CRUD operations (getAllBlogs, getBlogById, updateBlog, deleteBlog)...
module.exports = { addBlog, getAllBlogs, getBlogById, updateBlog, deleteBlog };
