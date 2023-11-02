import React from "react";
import {Navbar} from "../component/Navbar/navbar";
import {Jumbotron} from "../component/Jumbotron/jumbotron";
import {Cards} from "../component/Cards/cards";
import {Footer} from "../component/Footer/footer";
import { container } from "webpack";


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
)};

export default Home;

