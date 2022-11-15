module.exports = (sequelize, Sequelize) => {
    const BookInfo = sequelize.define("BookInfo", {
    BookName:{
        type: Sequelize.STRING
    },
    Language:{
        type: Sequelize.STRING
    },
    BookType:{
        type: Sequelize.STRING
    },
    BookAuther:{
        type: Sequelize.STRING
    },
    NoCopiesActual:{
        type: Sequelize.INTEGER
    },
    NoCopiesCurrent:{
        type: Sequelize.INTEGER
    },
    PublicationYear:{
        type: Sequelize.INTEGER
    },
    BookCover:{
        type: Sequelize.STRING
    },
    BookDiscription:{
        type: Sequelize.STRING
    },
     BookStatus:{
        type: Sequelize.STRING
    },    
     ISBN:{
        type: Sequelize.STRING
    },
    });
  
    return BookInfo;
  };
  