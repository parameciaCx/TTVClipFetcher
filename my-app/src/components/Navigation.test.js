import React from "react"
import {shallow} from "enzyme"
import Navigation from "./Navigation.js"
import {findDataTest} from "./../../utils" 

const setUp = (props={})=>{
	const component= shallow(<Navigation {...props}/>);
	return component;
}

describe("Navigation Component", () => {

        let component;
        beforeEach(()=>{
            component=setUp();
        })	
        it("should render navigation bar", ()=>{
        let wrapper=findDataTest(component,"navBar");
        expect(wrapper.length).toBe(1);
        });

})

