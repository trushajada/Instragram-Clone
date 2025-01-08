const express = require('express');
const router = express.Router();
const mongoose = require("mongoose");
const RequireLogin = require('../middleware/RequireLogin');
const POST = mongoose.model("POST")



router.get("/allposts", RequireLogin, (req, res) => {
    POST.find()
        .populate("postedBy", "_id name Photo")
        .then(posts => res.json(posts))
        .catch(err => console.log(err))
})

router.post("/Createpost", RequireLogin, (req, res) => {
    const { body, pic } = req.body;
    console.log(pic)
    if (!body || !pic) {
        return res.status(422).json({ error: "Please add all the fields" })
    }
    console.log(req.user)
    const post = new POST({
        body,
        photo: pic,
        postedBy: req.user
    })
    post.save().then((result) => {
        return res.json({ post: result })
    }).catch(err => console.log(err))
})

router.get("/myposts", RequireLogin, (req, res) => {
    POST.find({ postedBy: req.user_id })
        .populate("postedBy", "_id name")
        .then(myposts => {
            res.json(myposts)
        })
})

router.put("/likes", RequireLogin, (req, res) => {
    POST.findByIdAndUpdate(req.body.postId, {
        $push: { likes: req.user._id }
    }, {
        new: true
    }).exec((err, result) => {
        if (err) {
            return res.status(422).json({ error: err })
        } else {
            res.json(result)
        }
    })
})

router.put("/unlike", RequireLogin, (req, res) => {
    POST.findByIdAndUpdate(req.body.postId, {
        $pull: { likes: req.user._id }
    }, {
        new: true
    }).exec((err, result) => {
        if (err) {
            return res.status(422).json({ error: err })
        } else {
            res.json(result)
        }
    })
})

router.put('/comment', RequireLogin, async (req, res) => {
    const comment = {
        text: req.body.text,
        postedBy: req.user._id,
    };

    try {
        const result = await POST.findByIdAndUpdate(req.body.postId, { $push: { comments: comment } }, { new: true })
            .populate("postedBy", "_id name")
            .populate("comments.postedBy", "_id name");

        if (!result) {
            return res.status(404).json({ error: "Post not found" });
        }

        res.json(result);
    } catch (err) {
        console.error("Error updating comment:", err);
        res.status(500).json({ error: "Failed to update comment" });
    }
});
module.exports = router