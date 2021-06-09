import React, { Component } from "react"

class Chatline extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            value: ""
        }
        this.handleChange=this.handleChange.bind(this)
        this.handleSubmit=this.handleSubmit.bind(this)
    }

    handleChange(event){
        event.preventDefault()
        this.setState({value : event.target.value})
        this.props.onChange(event.target.value)
    }

    handleSubmit(event){
        event.preventDefault()
        console.log({event})
        this.props.onSubmit()

    }

    render(){
        return(
            <form onSubmit={handleSubmit}>
                <label>
                    Text :
                        <input 
                        type = "text"
                        value = {this.state.value}
                        onChange = {this.handleChange}     
                        />
                </label>
                
                <input 
                type="submit" 
                value={send}
                />
            </form>
        )
    }
}


