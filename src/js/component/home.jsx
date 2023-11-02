import React from "react";
import Navbar from "./Navbar/navbar.jsx";
import Jumbotron from "./Jumbotron/jumbotron.jsx";
import {Cards} from "./Cards/cards";
import {Footer} from "./Footer/footer";


//create your first component
const Home = () => {
	return (
		<div>
			<Navbar />
			<div className = "container">
				<Jumbotron/>
				<div className = "d-flex">
					<Cards/>
					<Cards/>
					<Cards/>
					<Cards/>
				</div>
			</div>
			<Footer/>
		</div>
);
};

export default Home;

