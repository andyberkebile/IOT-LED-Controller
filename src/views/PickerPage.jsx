import ColorPicker from '../../lib/components/ColorPicker';

var React = require('react');
var handleChange;

var ws

class PickerPage extends React.Component {
  componentWillMount() {
    console.log("TEST ME 2")

    ws = new WebSocket("ws://192.168.1.64:3000/update");
    console.log(ws)

    handleChange = function(color, event) {
      console.log("*******************")
      console.log(color.rgb)
      ws.send(JSON.stringify(color.rgb))
    }
  }
  render() {
    return <div>
        <div><h1>Hey {this.props.name}</h1></div>
        <ColorPicker onChange={handleChange} />
        </div>
  }
}

module.exports = PickerPage;