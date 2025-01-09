const express = require("express");
const Category = require("./models/Category"); // Assuming your model is in a folder named 'models'
const { Sequelize } = require("sequelize");

// Initialize Express app
const app = express();
const PORT = 8001;

// Middleware to parse JSON
app.use(express.json());

// Establish database connection
const sequelize = new Sequelize('postgres://username:password@localhost:5432/tourismDB');

// Route: Get all categories
app.get("/categories", async (req, res) => {
    try {
        const categories = await Category.findAll();
        res.status(200).json(categories);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Route: Get a single category by ID
app.get("/categories/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const category = await Category.findByPk(id);
        if (!category) {
            return res.status(404).json({ message: "Category not found" });
        }
        res.status(200).json(category);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Route: Create a new category
app.post("/categories", async (req, res) => {
    try {
        const { name, image } = req.body;
        if (!name || !image) {
            return res.status(400).json({ message: "Name and image are required" });
        }
        const newCategory = await Category.create({ name, image });
        res.status(201).json(newCategory);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Route: Update a category by ID
app.put("/categories/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const { name, image } = req.body;
        const category = await Category.findByPk(id);
        if (!category) {
            return res.status(404).json({ message: "Category not found" });
        }
        category.name = name || category.name;
        category.image = image || category.image;
        await category.save();
        res.status(200).json(category);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Route: Delete a category by ID
app.delete("/categories/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const category = await Category.findByPk(id);
        if (!category) {
            return res.status(404).json({ message: "Category not found" });
        }
        await category.destroy();
        res.status(204).send(); // Send no content on successful deletion
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Sync the database and start the server
sequelize
    .authenticate()
    .then(async () => {
        console.log("Database connected...");
        await Category.sync(); // Synchronizes the model with the database
        app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
    })
    .catch((error) => {
        console.error("Unable to connect to the database:", error.message);
    });
