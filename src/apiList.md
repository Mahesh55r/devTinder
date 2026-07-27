##APIList

#authRouter

-POST /signUp
-POST /login
-POST /logout

#profileRouter

-GET /profile/view
-PATCH /profile/edit
-PATCH /profile/password

#connectRequestRouter

-POST /request/send/interested/:userId
-POST /request/send/accepted/:userId
-POST /request/send/ignored/:userId
-POST /request/send/rejected/:userId

#userRouter

-GET /user/connections
-GET /user/requests
-GET /user/feed
