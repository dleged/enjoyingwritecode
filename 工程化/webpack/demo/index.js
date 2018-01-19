import React from 'react';
import ReactDOM from 'react-dom';

let people = ['Henly','Anil','Casetd'];

ReactDOM.render(
	<ul>
		<li>{people[0]}<li/>
		<li>{people[1]}<li/>
		<li>{people[2]}<li/>
	<ul/>,
	document.getElementById("root")
);
