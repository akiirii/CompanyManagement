/**
 * Created by:  Dinca Roberto
 * On:          21/05/2016
 * For project: companyManagement
 * Description:  - this is just an example and should not be used inside of the application
 *               - check the README.md file to see how the access the data
 */

var structure = {
    name: "CompanyName", //String - max 100 ch
    description: "Short text describing the company", //String - max 255 ch

    //the company has 0, 1 or more departments  //Array
    departments: [

        //each department has the following fields
        {
            name: "DepartmentName", //String  - max 100 ch
            description: "Department's activity", //String - max 255 ch

            //just one team leader for each department
            teamLeader:{
                name: "Name0", //String  - max 100 ch
                gender: "M/F", //String  - 1 ch  - M or F
                job: "JobType", //String  - max 100 ch
                description: "Short description", //String - max 255 ch

                //a team leader has 0, 1 or more skills with values between 0 and 100 //Object
                skills: {
                    communication: 6, //Number 0 - 100
                    math: 1,
                    teamPlayer: 7
                }
            },

            //a department has 0, 1 or more members //Array
            members: [
                {
                    name: "Name1", //String  - max 100 ch
                    gender: "M/F", //String  - 1 ch  - M or F
                    job: "JobType", //String  - max 100 ch
                    description: "Short description of the employ", //String - max 255 ch

                    //a member has 0, 1 or more skills with values between 0 and 100 //Object
                    skills: {
                        charisma: 3, //Number 0 - 100
                        math: 9,
                        sales: 4,
                        creativity: 12
                    }
                }
            ]
        }
    ]
};