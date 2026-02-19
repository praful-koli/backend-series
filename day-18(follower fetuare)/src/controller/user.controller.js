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
        followee : userFollowee
    })
   
    if(userIsAlreadyFollowing){
        return res.status(200).json({
            message : `You are already following  ${userFollowee}`
        })
    }


   const followRecord = await followModel.create({
     follower : userFollower,
     followee : userFollowee
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

    if(!isUserFollowing){
        return res.status(200).json({
            message: `You are not following ${followeeUsername}`
        })
    }

    await followModel.findByIdAndDelete(isUserFollowing._id)

    res.status(200).json({
          message: `You have unfollowed ${followeeUsername}`
    })
}


module.exports = {
    followUserController,
    unfollowUserController
}