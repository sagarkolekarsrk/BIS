const express = require("express");
const db = require("../models");
const Tutorial = db.tutorials;
const BookInfo = db.BookInfo;
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
// function getEmployees() {
//   var dbConn = new sql.Connection(dbConfig);
//   dbConn.connect().then(function () {
//       var request = new sql.Request(dbConn);
//       request.query("select * from employee").then(function (resp) {
//           console.log(resp);
//           dbConn.close();
//       }).catch(function (err) {
//           console.log(err);
//           dbConn.close();
//       });
//   }).catch(function (err) {
//       console.log(err);
//   });
// }

// Create and Save a new Tutorial
exports.createBook = (req, res) => {

      const BookName=req.body.BookName;
      const Language=req.body.Language;
      const BookType=req.body.BookType;
      const BookAuther=req.body.BookAuther;
      const NoCopiesActual=req.body.NoCopiesActual;
      const NoCopiesCurrent=req.body.NoCopiesCurrent;
      const PublicationYear=req.body.PublicationYear;
      const BookCover=req.body.BookCover;
      const BookDiscription=req.body.BookDiscription;
      const BookStatus=req.body.BookStatus;
      const ISBN=req.body.ISBN;
      function splitDate(date){
        var result = date.split('-');
        return result;        
      }      
      var splittedDate = splitDate(PublicationYear);
      var PublicationsYear = splittedDate[0];
              
      req=new sql.Request();
      req.query("INSERT INTO BookInfo (BookName, Language, BookType, BookAuther, NoCopiesActual, NoCopiesCurrent, PublicationYear, BookCover, BookDiscription, BookStatus, ISBN) VALUES ('"+BookName+"','"+Language+"','"+BookType+"','"+BookAuther+"','"+NoCopiesActual+"','"+NoCopiesCurrent+"','"+PublicationsYear+"','"+BookCover+"','"+BookDiscription+"','"+BookStatus+"','"+ISBN+"' )",(err,result)=>{
      if(err){
        console.log(err);
     res.send("Error");
     }
     else{
      console.log("Finall result of body",result.recordset);
       res.json(result.recordset);
     }
     });

 

  // Create a Book
//   const books={
//     BookName:req.body.BookName,
//     Language:req.body.Language,
//     BookType:req.body.BookType,
//     BookAuther:req.body.BookAuther,
//     NoCopiesActual:req.body.NoCopiesActual,
//     NoCopiesCurrent:req.body.NoCopiesCurrent,
//     PublicationYear:req.body.PublicationYear,
//     BookCover:req.body.BookCover,
//     BookDiscription:req.body.BookDiscription,
//     BookStatus:req.body.BookStatus,
//     ISBN:req.body.ISBN,
   
//  }


  // Save Books in the database
  // BookInfo.create(books)
  //   .then(data => {
  //     res.send(data);
  //   })
  //   .catch(err => {
  //     res.status(500).send({
  //       message:
  //         err.message || "Some error occurred while creating the Tutorial."
  //     });
  //   });
};

// Retrieve all Tutorials from the database.
exports.findAll = (req, res) => {
  const title = req.query.title;
  var condition = title ? { title: { [Op.like]: `%${title}%` } } : null;

  Tutorial.findAll({ where: condition })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving tutorials."
      });
    });
};

//Find a single Tutorial with an id
// exports.findOne = (req, res) => {
//   const id = req.params.id;

//   Tutorial.findByPk(id)
//     .then(data => {
//       res.send(data);
//     })
//     .catch(err => {
//       res.status(500).send({
//         message: "Error retrieving Tutorial with id=" + id
//       });
//     });
// };

// Update a Tutorial by the id in the request
exports.update = (req, res) => {
  var bookInfoId=req.params.id;
  const BookName=req.body.BookName;
  const Language=req.body.Language;
  const BookType=req.body.BookType;
  const BookAuther=req.body.BookAuther;
  const NoCopiesActual=req.body.NoCopiesActual;
  const NoCopiesCurrent=req.body.NoCopiesCurrent;
  const PublicationYear=req.body.PublicationYear;
  const BookCover=req.body.BookCover;
  const BookDiscription=req.body.BookDiscription;
  const BookStatus=req.body.BookStatus;
  const ISBN=req.body.ISBN;
  console.log(BookDiscription);
  var request=new sql.Request();
  const db="UPDATE BookInfo SET BookName='"+BookName+"',Language='"+Language+"',BookType='"+BookType+"',BookAuther='"+BookAuther+"',NoCopiesActual='"+NoCopiesActual+"',NoCopiesCurrent='"+NoCopiesCurrent+"',PublicationYear='"+PublicationYear+"',BookCover='"+BookCover+"',BookDiscription='"+BookDiscription+"',BookStatus='"+BookStatus+"',ISBN='"+ISBN+"' WHERE BookInfoId ="+ bookInfoId;
  request.query(db,(error,result)=>{
      res.json(result.recordset)
  })

 
//   console.log("bookInfoId edit cruds body",req.body);
//   const BookName=req.body.BookName;
//   const Language=req.body.Language;
//   const BookType=req.body.BookType;
//   const BookAuther=req.body.BookAuther;
//   const NoCopiesActual=req.body.NoCopiesActual;
//   const NoCopiesCurrent=req.body.NoCopiesCurrent;
//   const PublicationYear=req.body.PublicationYear;
//   const BookCover=req.body.BookCover;
//   const BookDiscription=req.body.BookDiscription;
//   const BookStatus=req.body.BookStatus;
//   const ISBN=req.body.ISBN;
//   req=new sql.Request();
//   req.query("UPDATE BookInfo SET BookName='"+BookName+"',Language='"+Language+"',BookType='"+BookType+"',BookAuther='"+BookAuther+"',NoCopiesActual='"+NoCopiesActual+"',NoCopiesCurrent='"+NoCopiesCurrent+"',PublicationYear='"+PublicationYear+"',BookCover='"+BookCover+"',BookDiscription='"+BookDiscription+"',BookStatus='"+BookStatus+"',ISBN='"+ISBN+"' WHERE BookInfoId ="+ bookInfoId,(err,result)=>{
//   if(err){
//  res.send("Error");
//  }
//  else{
//   console.log("Finall result of body",result.recordset);
//    res.json(result.recordset);
//  }


  // BookInfo.update(req.body, {
  //   where: { id: id }
  // })
  //   .then(num => {
  //     if (num == 1) {
  //       res.send({
  //         message: "Books was updated successfully."
  //       });
  //     } else {
  //       res.send({
  //         message: `Cannot update Books with id=${id}. Maybe Books was not found or req.body is empty!`
  //       });
  //     }
  //   })
  //   .catch(err => {
  //     res.status(500).send({
  //       message: "Error updating Books with id=" + id
  //     });
  //   });
  //})
};

// Delete a Tutorial with the specified id in the request
exports.delete = (req, res) => {
   var bookInfoId=req.params.id;
      req=new sql.Request();
      req.query("DELETE FROM [dbo].[BookInfo] WHERE BookInfoId ="+ bookInfoId,(err,result)=>{
     if(err){
     res.send("Error");
     }
     else{
       res.send(result.recordset);
     }
     });
  // BookInfo.destroy({
  //   where: { id: id }
  // })
  //   .then(num => {
  //     if (num == 1) {
  //       res.send({
  //         message: "Book was deleted successfully!"
  //       });
  //     } else {
  //       res.send({
  //         message: `Cannot delete Book with id=${id}. Maybe Book was not found!`
  //       });
  //     }
  //   })
  //   .catch(err => {
  //     res.status(500).send({
  //       message: "Could not delete Book with id=" + id
  //     });
  //   });
};

// Delete all Tutorials from the database.
exports.deleteAll = (req, res) => {
  BookInfo.destroy({
    where: {},
    truncate: false
  })
    .then(nums => {
      res.send({ message: `${nums} Books were deleted successfully!` });
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while removing all Books."
      });
    });
};

exports.findAllBooks = (req, res) => {

  // var dbConn = new sql.connect(db);
  // dbConn.connect().then(function () {
  //     var request = new sql.Request(dbConn);
  //     request.query("select * from BookInfo").then(function (resp) {
  //         console.log(resp);
  //         dbConn.close();
  //     }).catch(function (err) {
  //         console.log(err);
  //         dbConn.close();
  //     });
  // }).catch(function (err) {
  //     console.log(err);
  // });
  var request=new sql.Request();
  const db="SELECT * FROM BookInfo ORDER BY BookInfoId DESC";
  request.query(db,(error,result)=>{
      res.json(result.recordset)
  })

  // const db="SELECT * FROM BookInfo ORDER BY BookInfoId DESC";
  // req.query(db,(error,result)=>{
  //     res.json(result.recordset)
  //     console.log("sagars Data",result.recordset)
  // })
  // BookInfo.findAll()
  //   .then(data => {
  //     res.send(data);
  //     console.log("sagars Data",data)
  //   })
  //   .catch(err => {
  //     res.status(500).send({
  //       message:
  //         err.message || "Some error occurred while retrieving tutorials."
  //     });
  //   });
};



// Find a single Tutorial with an id
exports.findOne = (req, res) => {
  const BookInfoId = req.params.id;
  var request=new sql.Request();
  const db="Select * FROM [dbo].[BookInfo] WHERE BookInfoId ="+ BookInfoId;
  request.query(db,(error,result)=>{
      res.json(result.recordset)
  })
  };


// Find a books in my my list
exports.booksinmylist = (req, res) => {
req=new sql.Request();
  const db="SELECT BookInfo.BookInfoId,BookInfo.BookName, BookInfo.Language, BookInfo.BookAuther, BookIssuelogs.EmployeeInfoId,BookIssuelogs.IssuedFrom,BookIssuelogs.IssuedTo ,BookIssuelogs.IssuedBy,BookInfo.BookStatus, BookIssuelogs.IsIssuedBook FROM BookInfo INNER JOIN BookIssuelogs ON BookInfo.BookInfoId=BookIssuelogs.BookInfoId where BookIssuelogs.EmployeeInfoId=2 AND BookInfo.BookStatus='Not Available' AND BookIssuelogs.IsIssuedBook=1";
  req.query(db,(err,result)=>{
 if(err){
 res.send("Error");
 }
 else{
   res.send(result.recordset);
 }
 });
};



//get return book individual data
exports.booksreturn = (req, res) => {
  var bookinfoid=req.params.bookinfoid;
  req=new sql.Request();
  const db="SELECT  BookIssuelogs.BookIssueId,BookInfo.BookInfoId, BookInfo.BookName, BookInfo.Language, BookInfo.BookAuther, BookIssuelogs.EmployeeInfoId, convert(varchar, BookIssuelogs.IssuedFrom, 105) as IssuedFrom,convert(varchar, BookIssuelogs.IssuedTo, 105) as IssuedTo,BookIssuelogs.IssuedBy,BookInfo.BookStatus FROM BookInfo INNER JOIN BookIssuelogs ON BookInfo.BookInfoId=BookIssuelogs.BookInfoId where BookInfo.BookInfoId ="+ bookinfoid;
  req.query(db,(err,result)=>{
 if(err){
 res.send("Error");
 }
 else{
   res.send(result.recordset);
 }
 });
};


//get return book individual data
exports.updatebook = (req, res) => {
  var bookInfoId=req.params.BookInfoId;
  const BookName=req.body.BookName;
  const Language=req.body.Language;
  const BookType=req.body.BookType;
  const BookAuther=req.body.BookAuther;
  const NoCopiesActual=req.body.NoCopiesActual;
  const NoCopiesCurrent=req.body.NoCopiesCurrent;
  const PublicationYear=req.body.PublicationYear;
  const BookCover=req.body.BookCover;
  const BookDiscription=req.body.BookDiscription;
  const BookStatus=req.body.BookStatus;
  const ISBN=req.body.ISBN;
  req=new sql.Request();
  req.query("UPDATE BookInfo SET BookName='"+BookName+"',Language='"+Language+"',BookType='"+BookType+"',BookAuther='"+BookAuther+"',NoCopiesActual='"+NoCopiesActual+"',NoCopiesCurrent='"+NoCopiesCurrent+"',PublicationYear='"+PublicationYear+"',BookCover='"+BookCover+"',BookDiscription='"+BookDiscription+"',BookStatus='"+BookStatus+"',ISBN='"+ISBN+"' WHERE BookInfoId ="+ bookInfoId,(err,result)=>{
  if(err){
 res.send("Error");
 }
 else{
  console.log("Finall result of body",result.recordset);
   res.json(result.recordset);
 }
 });
};




//Update books status Which is Not-Available
exports.updatebookstatus = (req, res) => {
  const bookInfoId=req.params.id;
  const BookName=req.body.BookName;
  const Language=req.body.Language;
  const BookType=req.body.BookType;
  const BookAuther=req.body.BookAuther;
  const NoCopiesActual=req.body.NoCopiesActual;
  const NoCopiesCurrent=req.body.NoCopiesCurrent;
  const PublicationYear=req.body.PublicationYear;
  const BookCover=req.body.BookCover;
  const BookDiscription=req.body.BookDiscription;
  const BookStatus='Not Available';
  const ISBN=req.body.ISBN;
  req=new sql.Request();
  req.query("UPDATE BookInfo SET BookName='"+BookName+"',Language='"+Language+"',BookType='"+BookType+"',BookAuther='"+BookAuther+"',NoCopiesActual='"+NoCopiesActual+"',NoCopiesCurrent='"+NoCopiesCurrent+"',PublicationYear='"+PublicationYear+"',BookCover='"+BookCover+"',BookDiscription='"+BookDiscription+"',BookStatus='"+BookStatus+"',ISBN='"+ISBN+"' WHERE BookInfoId ="+ bookInfoId,(err,result)=>{
  if(err){
 res.send("Error");
 }
 else{
  console.log("Finall result of body",result.recordset);
   res.json(result.recordset);
 }
 });
};

//Update books status Which is Not-Available
exports.statusavailable = (req, res) => {
  var bookInfoId=req.params.id;
    const BookStatus="Available";
    req=new sql.Request();
    req.query("UPDATE BookInfo SET BookStatus='"+BookStatus+"' WHERE BookInfoId ="+ bookInfoId,(err,result)=>{
     if(err){
   res.send("Error");
   }
   else{
    console.log("Finall result of body",result.recordset);
     res.json(result.recordset);
   }
   });
};



//Update acualreturndt
exports.acualreturndt = (req, res) => {
  var BookInfoId=req.body.BookInfoId;
  const ActualReturnDate=req.body.ActualReturnDate;
  const IsIssuedBook=0;
  req=new sql.Request();
  req.query("UPDATE BookIssuelogs SET ActualReturnDate='"+ActualReturnDate+"',IsIssuedBook='"+IsIssuedBook+"' WHERE BookInfoId ="+ BookInfoId,(err,result)=>{
  if(err){
 res.send("Error");
 }
 else{
  console.log("Finall result of body",result.recordset);
   res.json(result.recordset);
 }
 });
};

exports.issuebook = (req, res) => {
  const BookInfoId=req.body.BookInfoId;
  const EmployeeInfoId=req.body.EmployeeInfoId;
  const IssuedFrom=req.body.IssuedFrom;
  const IssuedTO=req.body.IssuedTO;
  const ActualReturnDate=req.body.ActualReturnDate;
  const IssuedBy=req.body.IssuedBy; 
  const IsIssuedBook=1; 
  req=new sql.Request();
  req.query("INSERT INTO BookIssuelogs (BookInfoId, EmployeeInfoId, IssuedFrom, IssuedTO, ActualReturnDate, IssuedBy,IsIssuedBook) VALUES ('"+BookInfoId+"','"+EmployeeInfoId+"','"+IssuedFrom+"','"+IssuedTO+"','"+ActualReturnDate+"','"+IssuedBy+"' ,'"+IsIssuedBook+"')",(err,result)=>{
  if(err){
 res.send("Error test");
 }
 else{
  console.log("Finall result of body",result.recordset);
   res.json(result.recordset);
 }
 });
 };


 