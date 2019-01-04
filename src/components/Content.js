import React, { Component } from 'react'

export class Content extends Component {
  render() {
    return (
      <div className="row container border border-black mx-auto justify-text-center">
      <div className="col-lg-12 col-md-8 col-sm-4 col-xs-4 mx-auto border border-black justify-text-center">
      <h3 className=" p-2">{ this.props.todo.id } <span className="ml-2">{this.props.todo.title}</span></h3>
      </div>
      </div>
    )
  }
}

export default Content
