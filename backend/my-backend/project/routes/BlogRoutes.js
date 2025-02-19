const express = require("express");
const Blog = require("../models/BlogModel");
const upload = require("../middlewear/upload"); // Use multer or your upload middleware
const router = express.Router();

// Create a new blog
router.post("/add", upload, async (req, res) => {
    try {
      const { title, content, author } = req.body;
  
      if (!req.files || !req.files.images || req.files.images.length === 0) {
        return res.status(400).json({ message: "At least one image is required." });
      }
  
      // Get the image file paths
      const imagePaths = req.files.images.map(file => file.path);
  
      // Create and save the new blog
      const newBlog = new Blog({
        title,
        content,
        author,
        images: imagePaths, // Store image paths in the images array
      });
  
      await newBlog.save();
      res.status(201).json(newBlog);
    } catch (error) {
      console.error('Error creating blog:', error);
      res.status(500).json({ message: "Error creating blog", error: error.message });
    }
  });
  
// Get all blogs
router.get("/all", async (req, res) => {
  try {
    const blogs = await Blog.find();
    res.status(200).json(blogs);
  } catch (error) {
    res.status(500).json({ message: "Error fetching blogs", error: error.message });
  }
});

// Get a single blog by ID
router.get("/:id", async (req, res) => {
  try {
    const blog = await Blog.findById(req.params.id);
    if (!blog) {
      return res.status(404).json({ message: "Blog not found" });
    }
    res.status(200).json(blog);
  } catch (error) {
    res.status(500).json({ message: "Error fetching blog", error: error.message });
  }
});

// Update a blog by ID
router.put("/:id", upload, async (req, res) => {
    try {
      const { title, content, author } = req.body;
      const updatedData = {
        title,
        content,
        author,
        images: req.files ? req.files.images.map(file => file.path) : [], // Update image paths if new images are uploaded
      };
  
      const updatedBlog = await Blog.findByIdAndUpdate(req.params.id, updatedData, { new: true });
      if (!updatedBlog) {
        return res.status(404).json({ message: "Blog not found" });
      }
  
      res.status(200).json(updatedBlog);
    } catch (error) {
      res.status(500).json({ message: "Error updating blog", error: error.message });
    }
  });
  
// Delete a blog by ID
router.delete("/:id", async (req, res) => {
  try {
    const deletedBlog = await Blog.findByIdAndDelete(req.params.id);
    if (!deletedBlog) {
      return res.status(404).json({ message: "Blog not found" });
    }
    res.status(200).json({ message: "Blog deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Error deleting blog", error: error.message });
  }
});

module.exports = router;
