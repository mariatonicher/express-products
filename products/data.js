const posts = [
  {
    id: 1,
    title: "express tutotial",
    content: "lorem ipsum",
    date: new Date("2020-04-23"),
    tags: ["tag1", "tag2"],
  },
];

function insert(post) {
  const newPost = {
    id: posts.length + 1,
    ...post,
  };

  posts.push(newPost);

  return newPost;
}

module.exports = {
  insert,
};
