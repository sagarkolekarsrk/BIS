module.exports = (sequelize, Sequelize) => {
    const employee = sequelize.define("EmployeeInfo", {
    FirstName:{
        type: Sequelize.STRING
    },
    LastName:{
        type: Sequelize.STRING
    },
    Gender:{
        type: Sequelize.STRING
    },
    Email:{
        type: Sequelize.STRING
    },
    DOB:{
        type: Sequelize.DATE
    },
    Designation:{
        type: Sequelize.STRING
    },
    Password:{
        type: Sequelize.STRING
    },
    IsAdmin:{
        type: Sequelize.BOOLEAN
    },
 });
  
    return employee;
  };
  