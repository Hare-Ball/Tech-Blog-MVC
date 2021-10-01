const User = require('./User');
const Blog = require('./Blog');
const Comments = require('./Comments')

User.hasMany(Blog, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE'
});

Blog.belongsTo(User, {
  foreignKey: 'user_id'
});

Comments.belongsTo(User, {
  foreignKey: 'user_id'
});

User.hasMany(Comments, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE'
})

Blog.hasMany(Comments,{
  foreignKey:'blogPost_id',
})
Comments.belongsTo(Blog, {
  foreignKey:'blogPost_id',
})

module.exports = { User, Blog, Comments };