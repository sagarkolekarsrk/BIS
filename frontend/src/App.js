import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/common/Navbar";
import Home from "./components/pages/Home";
import BooksAdd from "./components/books/Create";
import BooksTable from "./components/books/BooksList";
// import CrudListView from "./components/books/CrudListView";
// import CrudGridView from "./components/books/CrudGridView";
import Details from "./components/books/Details";
import Update from "./components/books/Update";
import Delete from "./components/books/Delete";
import IssueBook from "./components/books/IssueBook";
import BookIssueDetails from "./components/books/BookIssueDetails";
import BooksInMyList from "./components/books/BooksInMyList";
import BookReturn from "./components/books/BooksReturn";
import Footer from "./components/common/Footer";
import Register from "./components/pages/Register";
import Login from "./components/pages/Login";

function App() {
	return (
		<div className="App">
			<Router>
				<Navbar />

				<Routes className="mt-5">
					{/* <Route exact path="/" element={<Home />} />
					<Route exact path="/api/" element={<Home />} />
					<Route exact path="/books" element={<CrudTable />} />					
					<Route exact path="/cruds/list-view" element={<CrudListView />} />
					<Route exact path="/cruds/grid-view" element={<CrudGridView />} />
					<Route exact path="/book/new" element={<CrudAdd />} />
					<Route exact path="/books/:BookInfoId" element={<CrudDetails />} />
					<Route exact path="/book/edit/:BookInfoId" element={<CrudEdit />} />
					<Route exact path="/book/delete/:BookInfoId" element={<CrudDelete />} />
					<Route exact path="/book/issue" element={<IssueBook />} />
					<Route exact path="/issue/:BookInfoId" element={<IssueBook />} />
					<Route exact path="/issueDetails/:BookInfoId" element={<BookIssueDetails />} />
					<Route exact path="/issueDetails" element={<BookIssueDetails />} />
					<Route exact path="/bookInMyList" element={<BooksInMyList />} />
					<Route exact path="/bookReturn/:BookInfoId" element={<BookReturn />} />
					<Route exact path="/register" element={<Register/>} />
					<Route exact path="/login" element={<Login/>} /> */}
					<Route exact path="/" element={<Home />} />
					<Route exact path="/api/" element={<Home />} />
					<Route exact path="/books/list" element={<BooksTable />} />					
					{/* <Route exact path="/cruds/list-view" element={<CrudListView />} />
					<Route exact path="/cruds/grid-view" element={<CrudGridView />} /> */}
					<Route exact path="/books/create" element={<BooksAdd />} />
					<Route exact path="/books/:id" element={<Details />} />
					<Route exact path="/books/:id/edit" element={<Update />} />
					<Route exact path="/books/:id/delete" element={<Delete />} />
					<Route exact path="/books/issue" element={<IssueBook />} />
					<Route exact path="/books/:id/issue" element={<IssueBook />} />
					<Route exact path="/books/:id/details" element={<BookIssueDetails />} />
					<Route exact path="/books/mylist" element={<BooksInMyList />} />
					<Route exact path="/books/:id/return" element={<BookReturn />} />
					<Route exact path="/register" element={<Register/>} />
					<Route exact path="/login" element={<Login/>} />
				</Routes>
				
			</Router>
			<Footer />
		</div>
	);
}

export default App;
