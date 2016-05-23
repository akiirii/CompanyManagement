# COMPANY MANAGEMENT

A small application to manage the departments inside of a company.

The data structure regarding the company is defined in data.structure.js files in the root folder


# SPECIFICATIONS

1. As the app's user when open the applicantion I want to see:
	- the company's name,
	- the company's	description
	- a list with all the departments names.

2. When clicking on a department I get redirected to the department's page where I see:
	- department's name
	- department's description
	- all the informations about the team leader (including a list of all its skills with their values)
	- a list of all the members names of the department

3. When clicking on a member's name I get redirected to the member's page where I see:
	- all the informations about the member (including a list of all it's skills with their values)
	- 2 buttons (initially disabled) SAVE and UNDO

4. On the member's page I have possibility to change the values of its skills.
    - the SAVE and UNDO buttons will be enabled. And the actual value change will be made only when the SAVE button is clicked.
    - the UNDO button will, of course, undo that change.


# EXTRA POINTS

1. On the department's page I want to see:
    * ADD button, that will add a new member for that department.
    * FORM that will open when the ADD button is clicked, containing all fields needed to create a new member (including the posibility of adding multiple skills and their values).
    * SUBMIT button on the FORM that will add the new member, once is clicked.

2. On the member's page I want to see:
	* the posibility of adding a skill
	* the posibility of removing a skill
