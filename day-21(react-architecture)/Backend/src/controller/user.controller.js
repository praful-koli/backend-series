const followModel = require('../models/follow.model.js')
const userModel = require('../models/user.model.js')


async function followUserController(req, res) {
    const userFollower = req.user.username
    const userFollowee = req.params.username


    if(userFollowee == userFollower) {
       return res.status(400).json({
            message : "You cannot follow yourself"
        })
    }
  
    const isFolloweeExist = await userModel.findOne({
        username: userFollowee
    })
 
    if(!isFolloweeExist){
        return res.status(404).json({
            message : "User are you try to follow does not exist"
        })
    }

    const userIsAlreadyFollowing = await followModel.findOne({
        follower : userFollower,
        followee : userFollowee,
       
    })
   
    if(userIsAlreadyFollowing){
        return res.status(200).json({
            message : `You are already following  ${userFollowee}`
        })
    }


   const followRecord = await followModel.create({
     follower : userFollower,
     followee : userFollowee,
     status : 'pending'
   })

   res.status(200).json({
     message : `${userFollower} is following to ${userFollowee}`,
     followRecord
   })
}

async function unfollowUserController(req , res) {
    const followerUsername = req.user.username
    const followeeUsername = req.params.username

    const isUserFollowing =  await followModel.findOne({
        follower : followerUsername,
        followee : followeeUsername
    })

   

    isUserFollowing.status = 'rejected'
    await isUserFollowing.save()

    if(!isUserFollowing){
        return res.status(200).json({
            message: `You are not following ${followeeUsername}`
        })
    }

    await followModel.findByIdAndDelete(isUserFollowing._id)

    res.status(200).json({
          message: `You have unfollowed ${followeeUsername}`,
          isUserFollowing
    })
}

async function getFollowRequestController(req, res) {
    
   const followRequest = await followModel.find({
      followee : req.user.username
   })
   if(!followRequest.length === 0) {
      return res.status(200).json({
         message : "No follower request you have !"
      })
   }
   res.status(200).json({
      message : "follow request" ,
      followRequest
   })
}

async function acceptFollowRequestController(req , res) {
   
    followerUsername = req.params.username
    followeeUsername = req.user.username

    const userFollowRequest= await followModel.findOne({
        follower : followerUsername,
        followee : followeeUsername
    })
    
    if (!userFollowRequest) {
      return res.status(404).json({ message: "Follow request not found" });
    }


    userFollowRequest.status = 'accepted'
    await userFollowRequest.save()

    res.status(200).json({
        message : `${followerUsername} request to ${followeeUsername} is accepted`,
        userFollowRequest
    })

}




module.exports = {
    followUserController,
    unfollowUserController,
    getFollowRequestController,
    acceptFollowRequestController
}