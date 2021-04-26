# BitcoinInfoFrontend  

This is the frontend for the BitInfo forum!  

It uses Angular to render data from an express/node.js server on top of a MongoDB database. https://github.com/NickAponte/BitcoinInfo-backend. 

Inside the app, users can create accounts and post/answer questions of other users of the forum.   

##Future Features. 
I plan on adding a news feature once a suitable free option is found. I originally had a working news page set up using a great news api, that sadly has.  restrictions on free use limiting it to localhost only.  So sadly, this feature can not cross over to a productiomn environment.   

To use the app, simply fork and clone the Repo, npi i to install dependencies, and grab your own news api key from here https://newsapi.org/. 

You will need a backend build to serve the data from a database,   
so head over to the Github link above and fork and clone that down as well. npm i to grab those dependencies and create a database to host your data.  
I used https://cloud.mongodb.com/. 

After that, the project can be run locally by navigating to the root directiory of the front and back end in seperate cli terminals and running. 
ng serve --open on the front end, and node index.js on the backend. 
Next, open a browser and open localhost:4200  to see the project running.   
