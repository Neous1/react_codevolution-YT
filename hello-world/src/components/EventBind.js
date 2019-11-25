import React, { Component } from 'react'

class EventBind extends Component {
    constructor(props){
        super()

        this.state = {
            message: 'Hello'
        }

        // this.clickHandler = this.clickHandler.bind(this);
    }

    // clickHandler(){
    //     this.setState({
    //         message: 'Goodbye'
    //     })

    //     console.log(this)
    // }
    

    clickHandler = ()=>{
        this.setState({
            message:'Goodbye!'
        })
    }


  render() {
    return (
      <div>
          <div>{this.state.message}</div>
          {/* <button onClick={this.clickHandler.bind(this)}>click</button> */}
          {/* <button onClick={()=>this.clickHandler()}>click</button>  */}
          <button onClick={this.clickHandler}>click</button>
      </div>
    )
  }
}

export default EventBind