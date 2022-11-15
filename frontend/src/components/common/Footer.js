
import React, { Component }  from 'react';

const Footer = () => {
	const link = "https://www.alveosoftware.com";
	const target = "_blank";

	return (
		<div className="fixed-bottom mt-5 p-2" style={{backgroundColor:'#b9c6d7',textAlign:"center"}}>
			Copyright © <small>{new Date().getFullYear()}</small> Alveo Software{" "}
			<a href={link} target={target}>
				www.alveosoftware.com
			</a>
		</div>
	);
};

export default Footer;
