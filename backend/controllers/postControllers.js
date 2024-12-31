import dotenv from 'dotenv';
dotenv.config();
import ImageKit from "imagekit"
import Post from "../models/postModel.js"
import User from "../models/userModel.js"

export const getAllPosts = async (req, res) => {
    try {
        const page = parseInt(req.query.page) || 1;
        const limit = parseInt(req.query.limit) || 2;

        const posts = await Post.find().populate("user", "username").limit(limit).skip((page - 1) * limit);
        const totalPosts = await Post.countDocuments();
        const hasMore = page * limit < totalPosts;

        res.status(200).json({ posts, hasMore });
    } catch (error) {
        console.error('Error fetching posts:', error); // Log the error
        res.status(500).json({ message: 'Internal Server Error' }); // Send error response
    }
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
    const clerkUserId = req.auth.userId;
    console.log("Authenticated User ID:", clerkUserId); //Debugging

    console.log(req.headers)

    if (!clerkUserId) {
        return res.status(401).json({ message: "User not authenticated" });
    }

    const userIdentity = await User.findOne({clerkUserId})
    console.log("User  Identity:", userIdentity); // Debugging
    if (!userIdentity) {
        return res.status(404).json({ message: "User not found" });
    }

    const { title, content, img, desc, category } = req.body;

    let slug = req.body.title.replace(/ /g, "-").toLowerCase()
    let existingPost = await Post.findOne({ slug });
    let counter = 2
    
    while (existingPost) {
        slug = `${slug}-${counter}`
        existingPost = await Post.findOne({ slug });
        counter++
    }

    const post = await Post.create({
        user: userIdentity._id,
        title,
        slug,
        content,
        img,
        desc,
        category
    })
    console.log("Post added successfully", post)
    res.status(200).json({ message: "Post is added Successfully", post })
}

export const deletePost = async (req, res) => {
    const clerkUserId = req.auth.userId;
    console.log("Authenticated User ID:", clerkUserId); // Debugging
    
    const { id } = req.params;

     // Check if the user is authenticated
     if (!clerkUserId) {
        return res.status(401).json({ message: "User  not authenticated" });
    }

    try {
        // Find the user in your database using the Clerk user ID
        const userIdentity = await User.findOne({ clerkUserId: clerkUserId });
        if (!userIdentity) {
            return res.status(404).json({ message: "User  not found" });
        }

        // Find the post by ID
        const post = await Post.findById(id);
        
        // Check if the post exists
        if (!post) {
            return res.status(404).json({ message: "Post not found" });
        }

        console.log("Post User ID:", post.user.toString()); // Log the post's user ID
        console.log("Clerk User ID:", clerkUserId); // Log the authenticated user's ID


        // Check if the authenticated user is the owner of the post
        if (post.user.toString() !== userIdentity._id.toString()) {
            return res.status(403).json({ message: "You are not authorized to delete this post" });
        }

        // Delete the post
        await Post.findByIdAndDelete(id);
        res.status(200).json({ message: "Post deleted successfully" });
    } catch (error) {
        console.error("Error deleting post:", error);
        res.status(500).json({ message: "Server error", error: error.message });
    }
}


// ImageKit Configuration
console.log("Public Key:", process.env.IK_PUBLIC_KEY);
console.log("Private Key:", process.env.IK_PRIVATE_KEY);
console.log("URL Endpoint:", process.env.IK_URL_ENDPOINT);

const imagekit = new ImageKit({
    urlEndpoint: process.env.IK_URL_ENDPOINT,
    publicKey: process.env.IK_PUBLIC_KEY,
    privateKey: process.env.IK_PRIVATE_KEY, 
});


export const uploadAuth = async (req, res) => {
    const result = imagekit.getAuthenticationParameters();
    res.send(result);
}