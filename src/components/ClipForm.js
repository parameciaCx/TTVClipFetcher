import React, {Component} from "react"

/**
 * Challenge: Wire up the partially-finished travel form so that it works!
 * Remember to use the concept of controlled forms
 * https://reactjs.org/docs/forms.html
 * 
 * All information should be populating the text below the form in real-time
 * as you're filling it out
 * 
 * This exercise is adapted from the V School curriculum on vanilla JS forms:
 * https://coursework.vschool.io/travel-form/
 * 
 * All of our challenges and learning resources are open for the public
 * to play around with and learn from at https://coursework.vschool.io
 */

class ClipForm extends Component {
    
    
    constructor() {
        super()
        this.state = {
            firstName:"",
            lastName:"",
            age: "",
            gender:"",
            lactose:false,
            gluten:false,
            peanut:false
            
        }
        this.handleSubmit=this.handleSubmit.bind(this)
        this.handleChange=this.handleChange.bind(this)
    }
    
    
    handleSubmit(event){
        const {name,type,value} = event.target
        this.setState({[name]:value});
    }
    
    handleChange(event){
        const {name,type,value,checked} = event.target
        type=="checkbox" ? this.setState({[name]:checked}) : this.setState({[name]:value});
    }

    render() {
        let a=[];
                            this.state.lactose && a.push("Lactose intolerant")
                    this.state.gluten && a.push("Gluten allergy")
                    this.state.peanut && a.push("Peanut allergy")
        return (
            <main>
                <form>
                    <input                     
                    type="text" 
                    value={this.state.firstName} 
                    name="firstName" 
                    placeholder="First Name" 
                    onChange={this.handleChange} /><br />
                    <input                     
                    type="text" 
                    value={this.state.lastName} 
                    name="lastName" 
                    placeholder="Last Name" 
                    onChange={this.handleChange}  /><br />
                    <input 
                    type="text" 
                    value={this.state.age} 
                    name="age" 
                    placeholder="Age" 
                    onChange={this.handleChange}  /><br />
                    
                    {/* Create radio buttons for gender here */}
                    <input 
                    type="radio" 
                    checked={this.state.gender=="male"} 
                    value="male"
                    name="gender" 
                    onChange={this.handleChange}  />Male <br/>
                    <input 
                    type="radio" 
                    checked={this.state.gender=="female"} 
                    value="female"
                    name="gender" 
                    onChange={this.handleChange}  />Female <br/>
                    
                    {/* Create select box for location here */}                    
                    <label>Location:</label>
                    <select
                    name="destination"
                    value={this.state.destination}
                    onChange={this.handleChange}>
                    <option value="Tokyo">Tokyo</option>
                    <option value="New York">New York</option>
                    <option value="Dubai">Dubai</option>
                    
                    </select>
                    <br />
                    
                    {/* Create check boxes for dietary restrictions here */}
                    <input
                    type="checkbox"
                    name="lactose"
                    checked={this.state.lactose}
                    onChange={this.handleChange}                 
                    />Lactose Intolerant<br />
                    
                    <input
                    type="checkbox"
                    name="peanut"
                    checked={this.state.peanut}
                    onChange={this.handleChange}                 
                    />Peanut Allergy<br />

                    
                    
                    <input
                    type="checkbox"
                    name="gluten"
                    checked={this.state.gluten}
                    onChange={this.handleChange}                 
                    />Gluten Allergy<br />
                    
                    <button>Submit</button>
                </form>
                <hr />
                <h2>Entered information:</h2>
                <p>Your name: {this.state.firstName} {this.state.lastName}</p>
                <p>Your age: {this.state.age}</p>
                <p>Your gender: {this.state.gender}</p>
                <p>Your destination: {this.state.destination}</p>
                <p> Dietary Restrictions:            
                    {`${a.join(',')}.`}
                    
                    
                    </p>
            </main>
        )
    }
}

export default App
