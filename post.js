const express = require("express");
const router = express.Router();
const Posts = require("./models/post");

router.get("/", async (req, res) => {
  try {
    const posts = await Posts.find();
    res.json(posts);
  } catch (err) {
    res.json({ message: err });
  }
});

router.get("/:id", async (req, res) => {
  try {
    const posts = await Posts.findById(req.params.id);
    res.json(posts);
  } catch (err) {
    res.json({ message: err });
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const posts = await Posts.remove({ _id: req.params.id });
    res.json(posts);
  } catch (err) {
    res.json({ message: err });
  }
});

router.patch("/:id", async (req, res) => {
  try {
    const updatePost = await Posts.updateOne(
      {
        _id: req.params.id,
      },
      { $set: { title: req.body.title } }
    );
    res.json(updatePost);
  } catch (err) {
    res.json({ message: err });
  }
});

router.get("/spl", (req, res) => {
  res.send("we are on spl");
});

router.post("/", (req, res) => {
  const post = new Posts({
    title: req.body.title,
    description: req.body.description,
  });

  post
    .save()
    .then((data) => res.json(data))
    .catch((err) => {
      res.json({ message: err });
    });
  res.send(req.body);
});
module.exports = router;
