The Phone Cave

A simple App to know more and in detail about phones.

Cretor: Lara Lorenzo Iglesias.

Type: responsive ReactJS app, based in the CRUD system:

- Create
- Read
- Update
- Delete

Although some of this actions are not available yet for the user, the bases for it are there.




What would you need to create it?

- Install create-react-app
- Install react-router-dom.
- Install axios.
- Install bootstrap, react-bootstrap and import CSS.
- Install MongoDB.
- Install Postman.
- Install React Developer Tools.



Languages used:

- JavaScrip
- CSS
- HTML



API REST endpoint:

Id	Method	Path	    Description

1	get	    /		        Show the index
2	get     /profile	    Show profiles

3	post    /signup 	    Upload the user on the database
4	post    /login  	    Manage login
5	post    /logout		    Close session
6   get     /loggedin

7   get     /phones         Show all phones
8   get     /onePhone       Show one phone details
9   patch   /editPhone      Show edit form
10  delete  /deletePhone    Delete a phone