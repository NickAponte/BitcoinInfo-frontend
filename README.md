# BitcoinInfoFrontend  
<img width="1402" alt="Screen Shot 2021-04-26 at 8 21 28 AM" src="https://user-images.githubusercontent.com/42632220/116082459-6ae37300-a669-11eb-8d65-031547fc7eae.png">
This is the frontend for the BitInfo forum!  

It uses Angular to render data from an express/node.js server on top of a MongoDB database. https://github.com/NickAponte/BitcoinInfo-backend. 

Inside the app, users can create accounts and post/answer questions of other users of the forum.   

## Future Features. 
I plan on adding a news feature once a suitable free option is found. I originally had a working news page set up using a great news api, that sadly has.    restrictions on free use limiting it to localhost only.  So sadly, this feature can not cross over to a productiomn environment.    
I also look forward to adding Moderator account features that enable them to delete questions or answers that are unrelated/abusive/spam.  
Yhere are also many minor cosmetic/user experience edits I would liek ot make, like properly giving users notice when creating an account or signing in on.  success/failiure. It would be a trivial addition that would add a good amount of user friendliness to the forum.  

## Run the app live on Heroko (takes a few seconds to spin up)
First, click this link and open it in a new tab, It will take a few seconds to spin up.   
There is a visual bug on startup, if you see error Cannot /Get, the backend is actually running, I have yet to find a solution to this error. 

deployed backend (live API): https://shrouded-atoll-63514.herokuapp.com/. 

Then, do the same for this link on another tab. Again, wait a little for the heroku instance to spin up on their servers.  
You will see the Homepage if successfull.  
From there, create an account and login to add forum questions/answers!  
Link to your deployed frontend (live application): https://bitinfo-frontend.herokuapp.com/. 

## Local Installation Instructions 
To use the app, simply fork and clone the Repo, npi i to install dependencies, and grab your own news api key from here https://newsapi.org/. 

You will need a backend build to serve the data from a database,   
so head over to the Github link above and fork and clone that down as well. npm i to grab those dependencies and create a database to host your data.  
I used https://cloud.mongodb.com/. 

After that, the project can be run locally by navigating to the root directiory of the front and back end in seperate cli terminals and running. 
ng serve --open on the front end, and node index.js on the backend. 
Next, open a browser and open localhost:4200  to see the project running.   


<img width="1402" alt="Screen Shot 2021-04-26 at 8 21 28 AM" src="https://user-images.githubusercontent.com/42632220/116082459-6ae37300-a669-11eb-8d65-031547fc7eae.png">







<img width="1427" alt="Screen Shot 2021-04-26 at 8 16 48 AM" src="https://user-images.githubusercontent.com/42632220/116082319-46879680-a669-11eb-9641-24023c565492.png">


