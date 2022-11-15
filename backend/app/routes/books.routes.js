module.exports = app => {
  const tutorials = require("../controllers/tutorial.controller.js");
  const books = require("../controllers/books.controller.js");
  const employee = require("../controllers/employee.controller.js");
  var router = require("express").Router();


   // Retrieve all Books
   router.get("/list", books.findAllBooks);
   // Create a new book
  router.post("/create", books.createBook);
    // Update a Bookd with id
  router.patch("/:id/update", books.update);

  // Retrieve a single Book with id
   router.get("/:id", books.findOne);

   // Books in my list
   router.get("/issue/mylist", books.booksinmylist);

   // Books in my list
   router.get("/:bookinfoid/return", books.booksreturn);
   
   //Update Actual retun date
   router.put("/:bookinfoid/update/", books.updatebook);

   //Change book status Not Available 
   router.patch("/:id/status/notavailable", books.updatebookstatus);

   //Change book status Available
   router.patch("/:id/status/available", books.statusavailable);

    //Update book return date
    router.patch("/:id/acualreturndt", books.acualreturndt);

    //Get employees name whis issued book


  //Save record in issue log table
  router.post("/issue", books.issuebook);

  // Delete a Books with id
  router.delete("/:id/delete", books.delete);

   // Delete all Books
  router.delete("/", books.deleteAll);







  //Employee Routes
  
   // Retrieve all employees
   router.post("/register", employee.register);

   router.post("/auth/login", employee.auth)

  // Retrieve all Employees
  router.get("/employees/all", employee.allemployees);

   //Get employees name who issued book
   router.get("/employees/empname", employee.getemployeename);

  // Retrieve a single Book with id
   router.get("/:id/employees", employee.findOne);

   // Update a Bookd with id
  router.put("/:id", employee.update);

  // Delete a Books with id
  router.delete("/employees/:id/delete", employee.delete);
  
  
 




  // // Create a new Tutorial
   router.post("/", tutorials.create);

  // Retrieve all Tutorials
  router.get("/", tutorials.findAll);

  // Retrieve all published Tutorials
  router.get("/published", tutorials.findAllPublished);

  // Retrieve a single Tutorial with id
  router.get("/:id", tutorials.findOne);

  // Update a Tutorial with id
  router.put("/:id", tutorials.update);

  // Delete a Tutorial with id
  router.delete("/:id", tutorials.delete);

  // Delete all Tutorials
  router.delete("/", tutorials.deleteAll);

  app.use('/api/books', router);
  app.use('/api/employees', router);
};
