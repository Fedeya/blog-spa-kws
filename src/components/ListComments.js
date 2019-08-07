import React, { Component } from "react";
import axios from "axios";
import Timeago from "react-timeago";
import ReactLoading from "react-loading";


class ListComments extends Component{

  state = {
    comments: [],
    isReady: false,
    isReadyNewComment: false,
    creating: false,
    name: "",
    email: "",
    comment: ""
  }

  getComments = async () => {
    const comments = await axios.get("http://localhost:4000/posts/getComments/"+this.props.id);
    this.setState({comments: comments.data, isReady: true, isReadyNewComment: true});
  }

  changeCreatingState = () => {
    const creating = !this.state.creating;
    this.setState({creating});
  }

  addComment = async (e) => {
    e.preventDefault();

    const { name, email, comment } = this.state;

    await axios.post(`http://localhost:4000/posts/comment/${this.props.id}`, {
      name, email, comment
    });
    
    this.setState({isReadyNewComment: false})
    await this.getComments();
    this.setState({name: "", email: "", comment: "", creating: false});
  }

  onInputChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }
  
  componentDidMount(){
    this.getComments();
  }

  render(){
    if(!this.state.isReady){
      return <ReactLoading type="bars" className="mx-auto" color="#000" />
    }

    return (
      <div>
        <div className="d-flex justify-content-between">
          <button className="btn btn-primary mb-3" onClick={this.changeCreatingState}>Añadir un Comentario</button>
          {!this.state.isReadyNewComment ? <ReactLoading type="bars"  color="#000" /> : "" }
        </div>
        {
          this.state.creating ? (
            <card className="card-body">
              <form onSubmit={this.addComment}>
                <div className="form-group">
                  <input type="text" className="form-control" name="name" onChange={this.onInputChange} placeholder="Nombre"/>
                </div>
                <div className="form-group">
                  <input type="email" className="form-control" name="email" onChange={this.onInputChange} placeholder="Email"/>
                </div>
                <div className="form-group">
                  <textarea name="comment" placeholder="Comentario" onChange={this.onInputChange} className="form-control"></textarea>
                </div>
                <button className="btn btn-success">Comentar</button>
              </form>
            </card>
          ) : ""
        }
        {
          this.state.comments.map(({email, name, comment, createdAt, gravatar}, index) => (
            <div className="row mb-3" key={index}>
              <div className="col-1">
                <img src={`https://www.gravatar.com/avatar/${gravatar}`} alt="Avatar" className="d-flex mr-3 rounded"/>
              </div>
              <div className="col">
                <div className="d-flex justify-content-between">
                  <h3>{name}</h3>
                  <Timeago date={createdAt} className="ml-4 mt-2" live={true} />
                </div>
                <div className="d-flex justify-content-start">
                  <p className="d-flex align-self-end ml-0">{comment}</p>
                </div>
              </div>
            </div>
          ))
        }
      </div>
    )
  }
}

export default ListComments;