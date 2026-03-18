import { useContext } from "react";
import { PostContext } from "../postContext";
import {getFeed} from '../services/post.api.js'

export  function usePost() {
  const context = useContext(PostContext);

  const {loading,setLoading ,feed ,setFeed  ,post ,setPost} = context

 async function getFeedHandler(navigate) {
    try {
        setLoading(true)
        const response = await getFeed(navigate)
       
        setFeed(response.posts)
        // return response.posts;
    } catch (error) {
        console.log(error)
    }
    finally{
        setLoading(false)
       console.log('this is finaly')
    }
 }
 return {loading, feed , post ,getFeedHandler ,setPost}
}