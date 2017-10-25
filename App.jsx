import React from 'react';

document.body.style.backgroundColor = "steelblue";
class App extends React.Component {
	render() {
		return (
			<div>
				<Header/>
				<Content/>
			</div>
		);
	}
}

class Header extends React.Component {
	render() {
		return(
			<div>
				<h1 className="headerOne" style={{ color: '#27ae60', font: '70px Tahoma, Helvetica, Arial, Sans-Serif', textShadow: '0px 2px 3px rgb(114, 220, 159)' }}>Another boring '
					<span className="amber">H</span>
					<span className="pink">e</span>
					<span className="yellow">l</span>
					<span className="blue">l</span>
					<span className="green">o</span>
					<span className=""> </span>
					<span className="lime">W</span>
					<span className="grey">o</span>
					<span className="deepOrange">r</span>
					<span className="pink">l</span>
					<span className="amber">d</span>
					<span className="deepOrange">!</span>


					' app!</h1>
			</div>
		);
	}
}

class Content extends React.Component {
	render(){
		return(
			<div id="initialDiv">
				<h2 className="headerTwo">Can we improve it?</h2>
				<p>Maybe we can together ...</p>
			</div>
		);
	}
}

export default App;
