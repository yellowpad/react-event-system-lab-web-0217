import React from 'react'

export default class Keypad extends React.Component{
	constructor(){
		super();
		this.KeyUp = this.KeyUp.bind(this)
	}
	KeyUp(){
		console.log("Entering password...")
	}
	render(){
		return (
			<div>
			<input onKeyUp={this.KeyUp} type="password" />
			</div>
		)
	}
}