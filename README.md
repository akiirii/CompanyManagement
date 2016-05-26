
# GETTING STARTED

1. To get started just run
    ```
    npm install
    ```

2. You are provided with a small application prototype that already includes Angular, Angular-material, Restangular and ui.router (all of them MUST be used);

3. The data structure regarding the company is defined in [data.structure.js](data.structure.js) file in the root folder;

4. The necessary data for this application is found at the following end point: http://private-ec80e4-companymanagement.apiary-mock.com/ ;

5. The [app/cm.config.js](cm.config.js) file, already provides Restangular the necessary end point;


# SPECIFICATIONS

You will have to develop this application based on the following specifications:

1. As the app's user when open the application I want to see:
	* the company's name
	* the company's	description
	* a list with all the departments names

2. When clicking on a department I get redirected to the department's page where I see:
	* department's name
	* department's description
	* all the information about the team leader (including a list of all its skills with their values)
	* a list of all the members names of the department

3. When clicking on a member's name I get redirected to the member's page where I see:
	* all the information about the member (including a list of all it's skills with their values)
	* 2 buttons (initially disabled) SAVE and UNDO

4. On the member's page I have possibility to change the values of its skills:
    * the SAVE and UNDO buttons will be enabled. And the actual value change will be made only when the SAVE button is clicked
    * the UNDO button will, of course, undo that change

5. Everything you develop must be tested, karma is already added to the node_modules


# EXTRA POINTS

1. On the department's page I want to see:
    * ADD button, that will add a new member for that department
    * FORM that will open when the ADD button is clicked, containing all fields needed to create a new member (including the possibility of adding multiple skills and their values)
    * SUBMIT button on the FORM that will add the new member, once is clicked

2. On the member's page I want to see:
	* the possibility of adding a skill
	* the possibility of removing a skill

# SUGGESTIONS

1. Gulp file only provides the basic flow, you are free to add as many tasks(sequence of tasks) as you need for a smooth development process;

2. For a clear access and overview of the api requests/responses, there is a [postman collection file](CompanyManagement.postman_collection.json) in the root folder. Just import the collection in Postman and you are ready to call the available api;

3. The endpoints are on apiary-mock and, even though PUT and POST requests are allowed you will NOT change the actual data;

4. If, for any reason, you might get stuck, don't waste time, fell free to contact us for suggestions or ideas (we encourage and appreciate team work);


