const { Sequelize, DataTypes } = require('sequelize');
const sequelize = new Sequelize('postgres://username:password@localhost:5432/tourismDB');  

const Details = sequelize.define('Details', {
  image1: {
    type: DataTypes.STRING,
    allowNull: false
  },
  image2: {
    type: DataTypes.STRING,
    allowNull: false
  },
  image3: {
    type: DataTypes.STRING,
    allowNull: false
  },
  image4: {
    type: DataTypes.STRING,
    allowNull: false
  },
  image5: {
    type: DataTypes.STRING,
    allowNull: false
  },
  Difficulty: {
    type: DataTypes.STRING,
    allowNull: false
  },
  Travel:{
  daytravel: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  nighttravel: {
    type: DataTypes.INTEGER,
    allowNull: false
  }}
  ,
  location: {
    type: DataTypes.STRING,
    allowNull: false
  },
  Overview: {
    type: DataTypes.STRING
  },
  TourHighlights: { 
    type: DataTypes.STRING
  },
  WhatIncluded: {
    type: DataTypes.STRING
  },
  Itinary: {
    type: DataTypes.STRING
  },
  mapImage: {
    type: DataTypes.STRING
  },
  Recommendedplace: {
    title: {
      type: DataTypes.STRING
    },
    description: {
      type: DataTypes.STRING
    },
    image: {
      type: DataTypes.STRING
    }
  },
  RecommendedFood: {
    title: {
      type: DataTypes.STRING
    },
    description: {
      type: DataTypes.STRING
    },
    image: {
      type: DataTypes.STRING
    }
  },
  RecommendedGuide: {
    title: {
      type: DataTypes.STRING
    },
    description: {
      type: DataTypes.STRING
    },
    image: {
      type: DataTypes.STRING
    }
  },
  faq: {
    question: {
      type: DataTypes.STRING
    },
    answer: {
      type: DataTypes.STRING
    }
  }
}, {
  // Define any necessary options here
});

module.exports = Details;
