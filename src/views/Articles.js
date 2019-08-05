import React, { Component } from "react";
import axios from "axios";
import ReactLoading from "react-loading";
import PostList from "../components/PostList";
import { Link } from "react-router-dom";

class Articles extends Component{

  state = {
    page: null,
    pages: [],
    isReady: false,
  }

  changePage = async (page) => {
    this.setState({
      page: page || this.props.match.params.page || 1,
      isReady: false
    })
    await setTimeout(() => {}, 500)
    this.setState({isReady: true})
  }

  getAllPublications = async () => {
    const posts = await axios.get("http://localhost:4000/posts/getAll/");
    let lenPages = Math.ceil(posts.data.length / 5) ;
    let pages = []
    for(let i = 1; i <= lenPages; i++){
      pages.push(i)
    }
    this.setState({pages})
  }

  componentWillMount(){
    this.changePage();
    this.getAllPublications();
  }

  render(){
    if(!this.state.isReady){
      return <ReactLoading color="#000" type="bars" className="mx-auto" />
    }

    return (
      <div className="mt-3">
        <PostList page={this.state.page}/>
        <div className="btn-toolbar" role="toolbar">
          <div className="btn-group text-center mx-auto mb-3" role="group">
            {
              this.state.pages.map((page, index) => (
                <Link key={index} onClick={() => this.changePage(page)} className="btn btn-secondary mx-auto text-center" to={`/articles/${page}`}>{page}</Link>
              ))
            }
          </div>
        </div>
      </div>
    )
  }
}

export default Articles;