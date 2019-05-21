import React from "react"
import {shallow} from "enzyme"
import GetClips from "./GetClips.js"
import {findDataTest} from "../../utils" 

const setUp = (props={})=>{
	const component= shallow(<GetClips {...props}/>);
	return component;
}

describe("GetClips Component", () => {

    describe("Has props", () => {
        
        let component;
        beforeEach(()=>{
            const props={
                button: "Fetch Clips",
                description: "Grabs clips from Twitch.tv"
            };
            component=setUp(props);
        })	

        it("should render a header", ()=>{
            let head=findDataTest(component,"getClipComp");
            expect(head.length).toBe(1);
        });

        it("should render a button", ()=>{
        let button=findDataTest(component,"getClipButton");
        expect(button.length).toBe(1);
        });



        it("should render description", ()=>{
        let desc=findDataTest(component,"getClipDesc");
        expect(desc.length).toBe(1);
        });


    });

    describe("no props", () => {
        let component;
        beforeEach(()=>{
            component=setUp();
        })	
        it("should render header", ()=>{
        let wrapper=findDataTest(component,"getClipComp");
        expect(wrapper.length).toBe(1);
        });
    });

})

