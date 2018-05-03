class Twitter extends React.Component {

    render() {
        return (
          <div>
          <img src={this.props.profile_image} />
          <h6><a href={this.props.links}>{this.props.username}</a></h6>
          <p>{this.props.text}</p>
          <hr />
          </div>

        );
    }
}

class Tweeting extends React.Component {

    render() {
        let tweetElements = this.props.tweets.map( (tweet, index) => {
                              return <Twitter text={tweet.text} username={tweet.user.name} profile_image={tweet.user.profile_image_url}
                              links={tweet.user.entities.url.urls[0].expanded_url} ></Twitter>;
                            });
        return (
          <ul>
            {tweetElements}
          </ul>
        );
    }
}



ReactDOM.render(
    <Tweeting tweets={tweets} />,
    document.getElementById('root')
);
