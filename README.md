**Intro**


For our mandatories in System Integrations we have to make some integration to an already existing system.


**To get up and running make sure that you have the following installed:**

- Python 3.7 or above
	- sqlite3
	- requests
	- json
	- pandas
	- xml-python
	- msgpack

To install these packages run this command: sudo pip install requests pandas xml-python msgpack

- NodeJS 14.5 or above and NPM
	- express
	- axios
	- express-xml-bodyparser
	- sqlite3
	- readline-sync
	- request

To install these packages run this command: npm install express axios express-xml-bodyparser sqlite3 readline-sync request

**Guide**

To run node.js files write in terminal: node node.js 	
- NodeJS files:
	- nemid_esb
	- nemid_CodeGenerator
	- nemid_PasswordGenerator
	- nemid_UserGenerator
       
To run python.py files write in terminal: "python python.py" or "py python.py"
- Python files:
	- Client
	- Legacy
	
Insert user exampel:
- When you want to create an user/client to the database use the client.py script.
- Here you will met with simpel text UI in the Terminal where you can fill the userinfo.
- Then use the legacy.py to write to the database.
- You can open the database and view the table list to see if the user is there with his new CPR number.
       
