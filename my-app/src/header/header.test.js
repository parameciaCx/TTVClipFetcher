import {shallow} from "enzyme"
import React from "react"
import Header from "./Header"
import {findDataTest} from "../../utils" 

const setUp = (props={})=>{
	const component= shallow(<Header {...props}/>);
	return component;
}

describe("Header Component", () => {

	let component;
	beforeEach(()=>{
		component=setUp();
	})	

	it("should render header", ()=>{
		console.log(component.debug())
		let wrapper=findDataTest(component,'headerComp');
		expect(wrapper.length).toBe(1);
	});

})

