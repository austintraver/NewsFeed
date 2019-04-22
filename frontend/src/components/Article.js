import React, { Component } from 'react'
import stock from '../img/stock.jpg'
import '../css/ArticleThumbnail.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faCommentAlt, faArrowCircleUp, faArrowCircleDown, faPaperPlane} from '@fortawesome/free-solid-svg-icons'
import CommentsPopup from './CommentsPopup'
import SharePopup from './SharePopup'

class Article extends Component
{
  constructor(props) {
    super(props)

    this.state = {
      articlescore: 29,
      loggedIn: this.props.loggedIn,
      isMouseInside1: false,
      isMouseInside2: false,
      scoreIncreased: false,
      scoreDecreased: false,
      color1: false,
      color2: false
    }

    this.increaseScore = this.increaseScore.bind(this);
    this.decreaseScore = this.decreaseScore.bind(this);
    this.hoverOn1 = this.hoverOn1.bind(this);
    this.hoverOn2 = this.hoverOn2.bind(this);
    this.hoverOff1 = this.hoverOff1.bind(this);
    this.hoverOff2 = this.hoverOff2.bind(this);

  }
  //increment article score member variable
  increaseScore(e){
    e.preventDefault()
    if(this.state.loggedIn && !this.state.scoreDecreased && !this.state.scoreIncreased){
      this.setState({ articlescore: this.state.articlescore + 1, scoreIncreased: true, color1:true });
    }
    else if(this.state.loggedIn && this.state.scoreIncreased){
      this.setState({ articlescore: this.state.articlescore - 1, scoreIncreased: false, color1: false });
    }

  }
  //decrement article score member variable
  decreaseScore(e){
    e.preventDefault()
    if(this.state.loggedIn && !this.state.scoreDecreased && !this.state.scoreIncreased){
      this.setState({ articlescore: this.state.articlescore - 1, scoreDecreased:true, color2:true });
    }
    else if(this.state.loggedIn && this.state.scoreDecreased){
      this.setState({ articlescore: this.state.articlescore + 1, scoreDecreased: false, color2: false });
    }

  }
  hoverOn1(e){
    e.preventDefault()
    if(this.state.loggedIn){
      this.setState({ isMouseInside1: true })
    }
  }
  hoverOff1(e){
    e.preventDefault()
    this.setState({ isMouseInside1: false})
  }
  hoverOn2(e){
    e.preventDefault()
    if(this.state.loggedIn){
      this.setState({ isMouseInside2: true })
    }
  }
  hoverOff2(e){
    e.preventDefault()
    this.setState({ isMouseInside2: false})
  }
  render(){
    var imageUrl
    if(!this.props.article.urlToImage){
      imageUrl=stock
    }
    else{
      imageUrl=this.props.article.urlToImage
    }
    return(
      <div id="articlethumbnail" class="col-sm-4 card">
        <a href="/articlepage">
          <img class="card-img-top" alt="article thumbnail" src={imageUrl}/>
        </a>
        <div class="card-body">
          <a href="/articlepage">
            <h5 class="text-center card-title">{this.props.article.title}</h5>
          </a>
          <p class="card-text">{this.props.article.description}</p>
        </div>

        <div class="card-body row text-center" id="comments">
          <div id="iconcoltn" class="col-sm-4">
            &nbsp; <a  id="commentstn" href="/" data-toggle="modal" data-target="#commentsModal"><FontAwesomeIcon icon={faCommentAlt}/>&nbsp; Comments</a>
          </div>
          <div id="iconcoltn" class="col-sm-4">
            <span class="incdec" id="comments" style={{color: (this.state.isMouseInside1 || this.state.color1) ? 'royalblue' : 'black' }} onMouseEnter={this.hoverOn1} onMouseLeave={this.hoverOff1} onClick={this.increaseScore.bind(this)}><FontAwesomeIcon icon={faArrowCircleUp}/></span>&nbsp; {this.state.articlescore} &nbsp;
            <span class="incdec" id="comments" style={{color: (this.state.isMouseInside2 || this.state.color2) ? 'royalblue' : 'black' }} onMouseEnter={this.hoverOn2} onMouseLeave={this.hoverOff2} onClick={this.decreaseScore.bind(this)}><FontAwesomeIcon icon={faArrowCircleDown}/>  </span>
          </div>
          <div id="iconcoltn" class="col-sm-4">
            <a id="commentstn" href="/"data-toggle="modal" data-target="#shareModal"><FontAwesomeIcon icon={faPaperPlane}/>&nbsp; Share link</a>&nbsp;
          </div>
        </div>

        <CommentsPopup loggedIn={this.state.loggedIn}/>

        <SharePopup/>
      </div>

    )
  }
}
export default Article