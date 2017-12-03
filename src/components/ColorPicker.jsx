import React from 'react';
import { SketchPicker } from 'react-color';

export default class ColorPicker extends React.Component {
  componentWillMount() {
    console.log("TEST ME 2")
  }

  render() {
    //onChange={this.props.onChange}
    return <SketchPicker width="300px" onChange={this.props.onChange}/>;
  }
}