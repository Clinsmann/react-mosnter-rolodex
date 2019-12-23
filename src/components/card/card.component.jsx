import React from "react";
import "./card.styles.css";

export const Card = props => (
	<div className="card-container">
		<img
			src={ `https://robohash.org/${props.monster.id}?set=set5` }
			width="220"
			alt={ `monster ${props.monster.id}` }
		/>
		<h3>{ props.monster.name }</h3>
		<p>{ props.monster.email }</p>
	</div>
);
