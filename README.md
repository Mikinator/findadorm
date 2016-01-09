# findadorm
overview:
what we have here is an app that is made in order to find a place to stay in any city with a university - for college students

you can list your dorm room, and what you want in return for letting people crash
	it can be totally free
	cost $100 a night
	or maybe you have to take out the trash

technical notes:
 
 the main app.component is a shell for the single page app(SPA) structure of this website

right now it's retrieving dorm room data from a variable that's just an array containing a bunch of data. however because the main app component is not responsible for that, and it's running through the dorm-room.service - this can be expanded and made to run on a server as long as the fundamental data that is being stored remains the same.


todo:

have a form to list rooms
location based search
accounts
mad styling/design
etc...
