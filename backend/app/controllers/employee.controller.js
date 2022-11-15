const db = require("../models");
const EmployeeInfo = db.EmployeeInfo;
const Op = db.Sequelize.Op;

const sql = require('mssql/msnodesqlv8');
var config = {

    database:'AlveoBookBank',

    server:'ALVEO25',

    driver:'msnodesqlv8',

    options:{

     trustedConnection:true

    }

};



//connect to database

sql.connect(config,function(err){

    if(err){
        console.log(err);
    }
    else{
        console.log("DB connected");
    }
});

// Create and Save a new Tutorial
exports.register = (req, res) => {
 
 const FirstName=req.body.FirstName
 const LastName=req.body.LastName
 const Gender=req.body.Gender
 const Email=req.body.Email
 const DOB=req.body.DOB
 const Designation=req.body.Designation
 const Password=req.body.Password
 const IsAdmin=req.body.IsAdmin
 req=new sql.Request();
 req.query("INSERT INTO EmployeeInfo (FirstName,LastName,Gender,Email,DOB,Designation,Password,IsAdmin) VALUES ('"+FirstName+"','"+LastName+"','"+Gender+"','"+Email+"','"+DOB+"','"+Designation+"','"+Password+"','"+IsAdmin+"')",(err,result)=>{
 if(err){
res.send("Error");
}
else{
 console.log("Finall result of body",result.recordset);
  res.json(result.recordset);
}
});
};



// Auth check
exports.auth = (req, res) => {
  const Email=req.body.Email
  const Password=req.body.Password
  req=new sql.Request();
  req.query("SELECT FirstName,LastName,Email,Password,IsAdmin from EmployeeInfo where Email='"+Email+"' and Password ='"+Password+"'",(err,result)=>{
  if(err){
 res.send("Error");
 }
 else{
  console.log("Auth adata",result.recordset);
   res.send(result.recordset);
 }
 });
 };
 
// exports.auth = (req, res) => {
//   var request=new sql.Request();
//   const db="SELECT FirstName,LastName,Email,Password,IsAdmin from EmployeeInfo";
//   console.log('SagarDB',db);
//   request.query(db,(error,result)=>{
//       res.json(result.recordset)
//   }).then(num => {
//     if (num == 1) {
//       res.send({
//         message: "Tutorial was updated successfully."
//       });
//     } else {
//       res.send({
//         message: `Cannot update Tutorial with id=${id}. Maybe Tutorial was not found or req.body is empty!`
//       });
//     }
//   })
//   .catch(err => {
//     res.status(500).send({
//       message: "Error updating Tutorial with id=" + id
//     });
//   });
// };


exports.allemployees = (req, res) => {
    var request=new sql.Request();
    const db="SELECT * FROM BookInfo ORDER BY BookInfoId DESC";
    request.query(db,(error,result)=>{
        res.json(result.recordset)
    })
 };
  

//Find a single Tutorial with an id
exports.findOne = (req, res) => {
  const id = req.params.id;

  EmployeeInfo.findByPk(id)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message: "Error retrieving employee with id=" + id
      });
    });
};




exports.getemployeename = (req, res) => {
    var request=new sql.Request();
    const db="SELECT  BookIssuelogs.BookIssueId, BookInfo.BookInfoId, EmployeeInfo.FirstName,EmployeeInfo.LastName, BookInfo.BookName, BookInfo.Language, BookInfo.BookAuther, BookIssuelogs.EmployeeInfoId, convert(varchar, BookIssuelogs.IssuedFrom, 105) as IssuedFrom, convert(varchar, BookIssuelogs.IssuedTo, 105) as IssuedTo, BookIssuelogs.IssuedBy, BookInfo.BookStatus FROM BookInfo INNER JOIN BookIssuelogs ON BookInfo.BookInfoId=BookIssuelogs.BookInfoId INNER JOIN EmployeeInfo ON EmployeeInfo.EmployeeInfoId=BookIssuelogs.EmployeeInfoId where BookInfo.BookStatus='Not Available'";
    request.query(db,(error,result)=>{
        res.json(result.recordset)
    })
};



// Update a Tutorial by the id in the request
exports.update = (req, res) => {
  const id = req.params.id;

  EmployeeInfo.update(req.body, {
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Employee was updated successfully."
        });
      } else {
        res.send({
          message: `Cannot update employee with id=${id}. Maybe employee was not found or req.body is empty!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Error updating employee with id=" + id
      });
    });
};

// Delete a Tutorial with the specified id in the request
exports.delete = (req, res) => {
  const id = req.params.id;

  EmployeeInfo.destroy({
    where: { id: id }
  })
    .then(num => {
      if (num == 1) {
        res.send({
          message: "Employee was deleted successfully!"
        });
      } else {
        res.send({
          message: `Cannot delete employee with id=${id}. Maybe Employee was not found!`
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Could not delete employee with id=" + id
      });
    });
};

// Delete all Tutorials from the database.
// exports.deleteAll = (req, res) => {
//   BookInfo.destroy({
//     where: {},
//     truncate: false
//   })
//     .then(nums => {
//       res.send({ message: `${nums} Books were deleted successfully!` });
//     })
//     .catch(err => {
//       res.status(500).send({
//         message:
//           err.message || "Some error occurred while removing all Books."
//       });
//     });
// };

// exports.findAllBooks = (req, res) => {

//   // var dbConn = new sql.connect(db);
//   // dbConn.connect().then(function () {
//   //     var request = new sql.Request(dbConn);
//   //     request.query("select * from BookInfo").then(function (resp) {
//   //         console.log(resp);
//   //         dbConn.close();
//   //     }).catch(function (err) {
//   //         console.log(err);
//   //         dbConn.close();
//   //     });
//   // }).catch(function (err) {
//   //     console.log(err);
//   // });


//   // const db="SELECT * FROM BookInfo ORDER BY BookInfoId DESC";
//   // req.query(db,(error,result)=>{
//   //     res.json(result.recordset)
//   //     console.log("sagars Data",result.recordset)
//   // })
//   BookInfo.findAll()
//     .then(data => {
//       res.send(data);
//       console.log("sagars Data",data)
//     })
//     .catch(err => {
//       res.status(500).send({
//         message:
//           err.message || "Some error occurred while retrieving tutorials."
//       });
//     });
// };



// Find a single Tutorial with an id
// exports.findOne = (req, res) => {
//   const id = req.params.id;

//   BookInfo.findByPk(id)
//     .then(data => {
//       res.send(data);
//     })
//     .catch(err => {
//       res.status(500).send({
//         message: "Error retrieving Tutorial with id=" + id
//       });
//     });
// };
