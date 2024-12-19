import Post from "../models/postModel.js"

export const getAllPosts = async (req, res) => {
   const post = await Post.find()
   res.status(200).json(post)
}

export const getSinglePost = async (req, res) => {
    const post = await Post.findOne({ slug: req.params.slug })
    res.status(200).json(post)

    /* A BETTER ALTERNATIVE METHOD
    const { slug } = req.params; // Destructure slug from req.params
    try {
        const post = await Post.findOne({ slug });
        if (!post) {
            return res.status(404).json({ message: "Post not found" });
        }
        res.status(200).json(post);
    } catch (error) {
        res.status(500).json({ message: "Server error", error: error.message });
    } */
}

export const createPost = async (req, res) => {
    const { title, slug, user, content,  } = req.body;
    const post = await Post.create({
        title,
        slug,
        user,
        content,
    })
    console.log("Post added successfully", post)
    res.status(200).json({ message: "Post is added Successfully", post })
 }

 export const deletePost = async (req, res) => {
    const { id } = req.params.id;
    const post = await Post.findByIdAndDelete( id )
    res.status(200).json("Post Deleted Successfully")
 }