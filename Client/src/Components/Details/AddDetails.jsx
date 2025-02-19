import React, { useState } from 'react';

const AddDetails = () => {
  const [details, setDetails] = useState({
    images1: [''],
    images2: [''],
    images3: [''],
    images4: [''],
    images5: [''],
    location: '',
    difficulty: '',
    duration: '',
    tour_overview: '',
    tour_highlights: [''],
    whats_included: [{ item: '', description: '' }],
    itinerary: [{ day: '', title: '', description: '' }],
    map_image: '',
    recommendations: [{ title: '', description: '', image: '' }],
    must_try_food: [{ title: '', short_description: '' }],
    recommended_guides: [{ name: '', description: '', image: '' }],
    faqs: [{ question: '', answer: '' }],
    category: '',
    place: '',
    t: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setDetails({
      ...details,
      [name]: value,
    });
  };

  const handleArrayChange = (e, key, index) => {
    const { name, value } = e.target;
    const updatedArray = [...details[key]];
    updatedArray[index] = { ...updatedArray[index], [name]: value };
    setDetails({
      ...details,
      [key]: updatedArray,
    });
  };

  const handleAddItem = (key, defaultValue) => {
    setDetails({
      ...details,
      [key]: [...details[key], defaultValue],
    });
  };

  const handleRemoveItem = (key, index) => {
    const updatedArray = details[key].filter((_, i) => i !== index);
    setDetails({
      ...details,
      [key]: updatedArray,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(details);
    // Handle form submission logic (e.g., send the details to your backend)
  };

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-semibold mb-6">Add Tour Details</h1>
      <form onSubmit={handleSubmit} className="space-y-6">
        
        {/* Location */}
        <div className="space-y-2">
          <label className="block text-lg">Location</label>
          <input
            type="text"
            name="location"
            value={details.location}
            onChange={handleChange}
            className="w-full p-2 border rounded"
            required
          />
        </div>

        {/* Difficulty */}
        <div className="space-y-2">
          <label className="block text-lg">Difficulty</label>
          <input
            type="text"
            name="difficulty"
            value={details.difficulty}
            onChange={handleChange}
            className="w-full p-2 border rounded"
            required
          />
        </div>

        {/* Duration */}
        <div className="space-y-2">
          <label className="block text-lg">Duration (days)</label>
          <input
            type="number"
            name="duration"
            value={details.duration}
            onChange={handleChange}
            className="w-full p-2 border rounded"
            required
          />
        </div>

        {/* Tour Overview */}
        <div className="space-y-2">
          <label className="block text-lg">Tour Overview</label>
          <textarea
            name="tour_overview"
            value={details.tour_overview}
            onChange={handleChange}
            className="w-full p-2 border rounded"
            required
          />
        </div>

        {/* Tour Highlights */}
        <div className="space-y-2">
          <label className="block text-lg">Tour Highlights</label>
          {details.tour_highlights.map((highlight, index) => (
            <div key={index} className="flex space-x-2">
              <input
                type="text"
                name="tour_highlights"
                value={highlight}
                onChange={(e) => handleArrayChange(e, 'tour_highlights', index)}
                className="w-full p-2 border rounded"
                placeholder="Add a highlight"
              />
              <button
                type="button"
                onClick={() => handleRemoveItem('tour_highlights', index)}
                className="p-2 bg-red-500 text-white rounded"
              >
                Remove
              </button>
            </div>
          ))}
          <button
            type="button"
            onClick={() => handleAddItem('tour_highlights', '')}
            className="p-2 bg-blue-500 text-white rounded"
          >
            Add Highlight
          </button>
        </div>

        {/* Itinerary */}
        <div className="space-y-2">
          <label className="block text-lg">Itinerary</label>
          {details.itinerary.map((dayItem, index) => (
            <div key={index} className="flex space-x-2">
              <input
                type="text"
                name="day"
                value={dayItem.day}
                onChange={(e) => handleArrayChange(e, 'itinerary', index)}
                className="w-full p-2 border rounded"
                placeholder="Day"
              />
              <input
                type="text"
                name="title"
                value={dayItem.title}
                onChange={(e) => handleArrayChange(e, 'itinerary', index)}
                className="w-full p-2 border rounded"
                placeholder="Title"
              />
              <input
                type="text"
                name="description"
                value={dayItem.description}
                onChange={(e) => handleArrayChange(e, 'itinerary', index)}
                className="w-full p-2 border rounded"
                placeholder="Description"
              />
              <button
                type="button"
                onClick={() => handleRemoveItem('itinerary', index)}
                className="p-2 bg-red-500 text-white rounded"
              >
                Remove
              </button>
            </div>
          ))}
          <button
            type="button"
            onClick={() => handleAddItem('itinerary', { day: '', title: '', description: '' })}
            className="p-2 bg-blue-500 text-white rounded"
          >
            Add Itinerary Item
          </button>
        </div>

        {/* Map Image URL */}
        <div className="space-y-2">
          <label className="block text-lg">Map Image URL</label>
          <input
            type="url"
            name="map_image"
            value={details.map_image}
            onChange={handleChange}
            className="w-full p-2 border rounded"
          />
        </div>

        {/* Recommendations */}
        <div className="space-y-2">
          <label className="block text-lg">Recommendations</label>
          {details.recommendations.map((recommendation, index) => (
            <div key={index} className="flex space-x-2">
              <input
                type="text"
                name="title"
                value={recommendation.title}
                onChange={(e) => handleArrayChange(e, 'recommendations', index)}
                className="w-full p-2 border rounded"
                placeholder="Title"
              />
              <input
                type="text"
                name="description"
                value={recommendation.description}
                onChange={(e) => handleArrayChange(e, 'recommendations', index)}
                className="w-full p-2 border rounded"
                placeholder="Description"
              />
              <input
                type="text"
                name="image"
                value={recommendation.image}
                onChange={(e) => handleArrayChange(e, 'recommendations', index)}
                className="w-full p-2 border rounded"
                placeholder="Image URL"
              />
              <button
                type="button"
                onClick={() => handleRemoveItem('recommendations', index)}
                className="p-2 bg-red-500 text-white rounded"
              >
                Remove
              </button>
            </div>
          ))}
          <button
            type="button"
            onClick={() => handleAddItem('recommendations', { title: '', description: '', image: '' })}
            className="p-2 bg-blue-500 text-white rounded"
          >
            Add Recommendation
          </button>
        </div>

        {/* Must Try Food */}
        <div className="space-y-2">
          <label className="block text-lg">Must Try Food</label>
          {details.must_try_food.map((food, index) => (
            <div key={index} className="flex space-x-2">
              <input
                type="text"
                name="title"
                value={food.title}
                onChange={(e) => handleArrayChange(e, 'must_try_food', index)}
                className="w-full p-2 border rounded"
                placeholder="Title"
              />
              <input
                type="text"
                name="short_description"
                value={food.short_description}
                onChange={(e) => handleArrayChange(e, 'must_try_food', index)}
                className="w-full p-2 border rounded"
                placeholder="Short Description"
              />
              <button
                type="button"
                onClick={() => handleRemoveItem('must_try_food', index)}
                className="p-2 bg-red-500 text-white rounded"
              >
                Remove
              </button>
            </div>
          ))}
          <button
            type="button"
            onClick={() => handleAddItem('must_try_food', { title: '', short_description: '' })}
            className="p-2 bg-blue-500 text-white rounded"
          >
            Add Must Try Food
          </button>
        </div>

        {/* Recommended Guides */}
        <div className="space-y-2">
          <label className="block text-lg">Recommended Guides</label>
          {details.recommended_guides.map((guide, index) => (
            <div key={index} className="flex space-x-2">
              <input
                type="text"
                name="name"
                value={guide.name}
                onChange={(e) => handleArrayChange(e, 'recommended_guides', index)}
                className="w-full p-2 border rounded"
                placeholder="Guide Name"
              />
              <input
                type="text"
                name="description"
                value={guide.description}
                onChange={(e) => handleArrayChange(e, 'recommended_guides', index)}
                className="w-full p-2 border rounded"
                placeholder="Guide Description"
              />
              <input
                type="text"
                name="image"
                value={guide.image}
                onChange={(e) => handleArrayChange(e, 'recommended_guides', index)}
                className="w-full p-2 border rounded"
                placeholder="Guide Image URL"
              />
              <button
                type="button"
                onClick={() => handleRemoveItem('recommended_guides', index)}
                className="p-2 bg-red-500 text-white rounded"
              >
                Remove
              </button>
            </div>
          ))}
          <button
            type="button"
            onClick={() => handleAddItem('recommended_guides', { name: '', description: '', image: '' })}
            className="p-2 bg-blue-500 text-white rounded"
          >
            Add Recommended Guide
          </button>
        </div>

        {/* FAQs */}
        <div className="space-y-2">
          <label className="block text-lg">FAQs</label>
          {details.faqs.map((faq, index) => (
            <div key={index} className="flex space-x-2">
              <input
                type="text"
                name="question"
                value={faq.question}
                onChange={(e) => handleArrayChange(e, 'faqs', index)}
                className="w-full p-2 border rounded"
                placeholder="Question"
              />
              <input
                type="text"
                name="answer"
                value={faq.answer}
                onChange={(e) => handleArrayChange(e, 'faqs', index)}
                className="w-full p-2 border rounded"
                placeholder="Answer"
              />
              <button
                type="button"
                onClick={() => handleRemoveItem('faqs', index)}
                className="p-2 bg-red-500 text-white rounded"
              >
                Remove
              </button>
            </div>
          ))}
          <button
            type="button"
            onClick={() => handleAddItem('faqs', { question: '', answer: '' })}
            className="p-2 bg-blue-500 text-white rounded"
          >
            Add FAQ
          </button>
        </div>

        {/* Category */}
        <div className="space-y-2">
          <label className="block text-lg">Category</label>
          <input
            type="text"
            name="category"
            value={details.category}
            onChange={handleChange}
            className="w-full p-2 border rounded"
            required
          />
        </div>

        {/* Place */}
        <div className="space-y-2">
          <label className="block text-lg">Place</label>
          <input
            type="text"
            name="place"
            value={details.place}
            onChange={handleChange}
            className="w-full p-2 border rounded"
            required
          />
        </div>

        {/* Submit */}
        <div className="mt-6">
          <button
            type="submit"
            className="w-full p-3 bg-blue-500 text-white rounded hover:bg-blue-600"
          >
            Submit Details
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddDetails;
