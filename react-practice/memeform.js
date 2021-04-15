import React, {Component} from "react"

class MemeGenerator extends Component{
    constructor(){
        super()
        this.state = {
            topText: "",
            bottomText: "",
            randomImg: "http://i.imgflip.com/1bij.jpg"
        }
        this.state.handleChange = this.handleChange.bind(this)
        this.state.handleSubmit = this.handleSubmit.bind(this)

    }
    
    componentDidMount(){
        fetch("https://api.imgflip.om/get_memes")
        .then(r=> r.json())
        .then(r => {
            const {memes} = r.data
            this.setState({allMemeImgs: memes})
        })
    }
    
    handleChange(event){
        const {name, event} = event.target
        this.setState ({
            [name]: value
        })
    }
    
    handleSubmit(event){
        event.preventDefault()
        const randNum = Math.floor(Math.random() * this.state.allMemeImgs.length)
        const randMemeImg = this.state.all.allMemeImgs[randNum].url
        this.setState({ randomImg: randMemeImg})
        
      // get random # 
      //get the meme from index
      //set 'random img' tp the url of the random item  
    }
    
    render (){
        return (
            <div>
                <form onSubmit = {this.handleSubmit}>
                    <input
                    type = "text"
                    name="topText"
                    placeholder="top"
                    value= {this.state.topText}
                    onChange = {this.handleChange}
                    />
                    <input
                    type = "text"
                    name="bottomText"
                    placeholder="bottom"
                    value= {this.state.bottomText}
                    onChange = {this.handleChange}
                    />
                    <button>add one </button>
                </form>
                <div>
                    <img src={this.state.randomImg} alt = " "/>
                    <h2 className="top">{this.state.topText}</h2>
                    <h2 className="bottom">{this.state.bottomText}</h2>
                </div>
            </div>
        )
    }
    
}

export default MemeGenerator