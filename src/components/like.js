import React from 'react';

export class Like extends React.Component {
 
  constructor(props) {
    super(props);
    this.state = {likesCount : 0};
    this.onLike = this.onLike.bind(this);
  }

  onLike () {
    let newLikesCount = this.state.likesCount + 1;
    this.setState({likesCount: newLikesCount});
	if (newLikesCount>9){alert("people really like us")};
  }

  render() {
    return (
      <div>
	   <h1 className="page-header">Click to Like</h1>
        Like is : <span>{this.state.likesCount}</span>
        <div><button onClick={this.onLike}>Like us</button></div>
      </div>
    );
  }
}

