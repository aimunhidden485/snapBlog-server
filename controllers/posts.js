import PostMessage from "../models/posts.js"

export const getPosts = async(req, res) =>{
   try {
      const posts=await PostMessage.find()
      res.status(200).json(posts)
   } catch (error) {
      res.status(400).json({message: error.message})
   }
}

export const createPost=async(req,res)=>{
   const post=req.body
   const newPost=new PostMessage(post)
   try {
      await newPost.save()
      res.status(201).json(newPost)
   } catch (error) {
      res.status(400).json({message: error.message})
   }
}