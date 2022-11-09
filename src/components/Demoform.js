import React, { Component } from 'react'

class DemoForm extends Component {
    constructor(props) {
        super(props)
        
        this.state = {
            username: '',
            comment: '',
            gender:'',
            language: 'angular',
            languages:{
                hindi:false,
                marathi:false,
                english:false,
                german:false
            }
        }
    }

    handleUserChange = e => {
        this.setState({
            username: e.target.value
        })
    }

    handleCommentChange = e => {
        this.setState({
            comment: e.target.value
        })
    }

    handleLangChange = e => {
        this.setState({
            language: e.target.value
        })
    }

    handleSubmit = e => {
        e.preventDefault();
        console.log(this.state);
    }
     
    handleCheckbox =e=>{
    let state=this.state;
    state.languages[e.target.value]=e.target.checked;
    this.setState(state);
    }

    handleRadioButton=e=>{
        this.setState({
            gender: e.target.value
        })
    }
    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <div>
                    <label htmlFor="username">Username </label>
                    <input type="text" id="username" value={this.state.username} onChange={this.handleUserChange} />
                </div>
                <br />
                <div>
                    <label htmlFor="comment">Comment </label>
                    <textarea id="comment" value={this.state.comment} onChange={this.handleCommentChange}></textarea>
                </div>
                <br />
                <div>
                    <label htmlFor="language">Language </label>
                    <select id="language" value={this.state.language} onChange={this.handleLangChange}>
                        <option value="react">React</option>
                        <option value="react-native">React Native</option>
                        <option value="angular">Angular</option>
                    </select>
                </div>
                <br />
                <div>
                    Hindi: <input type="checkbox"  value="hindi" name="languages" onChange={this.handleCheckbox} checked={this.state.languages.hindi}/><br/>
                    Marathi: <input type="checkbox"  value="marathi" name="languages" onChange={this.handleCheckbox} checked={this.state.languages.marathi}/><br/>
                    English: <input type="checkbox"  value="english" name="languages" onChange={this.handleCheckbox} checked={this.state.languages.english}/><br/>
                    German: <input type="checkbox"  value="german" name="languages" onChange={this.handleCheckbox} checked={this.state.languages.german}/><br/>
                </div>
                <div>
                    <h1>Gender</h1>
                   Male: <input type="radio"  value="male" name="gender" onChange={this.handleRadioButton} /><br/>
                   Female :<input type="radio"  value="female" name="gender" onChange={this.handleRadioButton} />
                </div>
                <button type="submit">Submit</button>
            </form>
        )
    }
}

export default DemoForm
