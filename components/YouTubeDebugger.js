const React = require('react')

class YouTubeDebugger extends React.Component {
  constructor(){
    super();

    this.setBitrate = this.setBitrate.bind(this)
    this.setRes = this.setRes.bind(this)

    this.state = {
      errors: [],
      user: null,
      settings: {
        bitrate: 8,
        video: {
          resolution: '1080p'
        }
      }
    }
  }

  setBitrate() {
    this.setState({settings: Object.assign({}, this.state.settings, {bitrate: 12})})
  }

  setRes(){
    this.setState({settings: Object.assign({}, this.state.settings, { video: {resolution: '720p'} })})
  }

  render() {
    return(
      <div>
        <button className="bitrate" onClick={this.setBitrate} />
        <button className="resolution" onClick={this.setRes} />
      </div>
    )
  }

}

module.exports = YouTubeDebugger
