'use strict';
module.exports = (sequelize, DataTypes) => {
  const Blog = sequelize.define('Blog', {
    date: DataTypes.DATE,
    title: DataTypes.STRING,
    content: DataTypes.TEXT
  }, {});
  Blog.associate = function(models) {
    // associations can be defined here
  };
  return Blog;
};