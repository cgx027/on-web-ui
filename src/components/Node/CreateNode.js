'use strict';

import React, { Component } from 'react'; // eslint-disable-line no-unused-vars
import mixin from 'react-mixin'; // eslint-disable-line no-unused-vars

import {
//     TextField,
//     FlatButton,
//     RaisedButton
  } from 'material-ui';

import FormatHelpers from '../mixins/FormatHelpers'; // eslint-disable-line no-unused-vars
// import NodeActions from '../../actions/NodeActions';
// import JsonEditor from '../JsonEditor';

@mixin.decorate(FormatHelpers)
export default class CreateNode extends Component {

  state = {
    node: null,
    disabled: false
  };

  // disable() { this.setState({disabled: true}); }
  //
  // enable() { setTimeout(() => this.setState({disabled: false}), 500); }
  //
  // createNode() {
  //   this.disable();
  //   NodeActions.patchNode(this.state.node.id, this.state.node)
  //     .then(out => {
  //       console.log(out);
  //       this.gotoNode(out.id);
  //     })
  //     .catch(err => console.error(err));
  // }
  //
  // gotoNode(id) {
  //   window.location = '#/nodes/' + id;
  // }
  //
  // back() {
  //   window.history.back();
  // }

  // TODO: make mixin for this
  //       this is a custom version of linkState that works with a nested object
  // linkState(stateKey, key) {
  //   var obj = this.state[stateKey];
  //   return {
  //     value: obj && obj[key] || null,
  //     requestChange: (value) => {
  //       var change = {};
  //       if (obj) {
  //         obj[key] = value;
  //         change[stateKey] = obj;
  //       }
  //       else {
  //         change[stateKey] = {};
  //         change[stateKey][key] = value;
  //       }
  //       this.setState(change);
  //     }
  //   };
  // }

  // updateStateFromJsonEditor(stateChange) {
  //   this.setState({node: stateChange});
  // }

  render() {
    // if (!this.state.node) {
    //   this.state.node = this.props.nodeRef || null;
    // }
    // var nameLink = this.linkState('node', 'name'),
    //     profileLink = this.linkState('node', 'profile');
    return (
      <div className="CreateNode container">
        Hello World
        {/*<div className="row">
          <div className="one-half column">
            <TextField valueLink={nameLink} hintText="Name" floatingLabelText="Name" disabled={this.state.disabled} />
          </div>
          <div className="one-half column">
            <TextField valueLink={profileLink} hintText="Profile" floatingLabelText="Profile" disabled={this.state.disabled} />
          </div>
        </div>
        <h3>JSON Editor</h3>
        <JsonEditor initialValue={this.state.node}
                    updateParentState={this.updateStateFromJsonEditor.bind(this)}
                    disabled={this.state.disabled}
                    ref="jsonEditor" />
        <div className="buttons container">
          <FlatButton className="button" label="Delete" onClick={this.deleteNode.bind(this)} disabled={this.state.disabled} />
          <FlatButton className="button" label="Clone" onClick={this.cloneNode.bind(this)} disabled={this.state.disabled} />
          <div className="u-right">
            <FlatButton className="button" label="Cancel" onClick={this.back} disabled={this.state.disabled} />
            <RaisedButton className="button" label="Reset" onClick={this.resetNode.bind(this)} disabled={this.state.disabled} />
            <RaisedButton className="button" label="Save" primary={true} onClick={this.saveNode.bind(this)} disabled={this.state.disabled} />
          </div>
        </div>*/}
      </div>
    );
  }

}
