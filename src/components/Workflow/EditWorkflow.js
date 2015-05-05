'use strict';

import React, { Component } from 'react'; // eslint-disable-line no-unused-vars
import mixin from 'react-mixin'; // eslint-disable-line no-unused-vars

import {
    TextField,
    FlatButton,
    RaisedButton
  } from 'material-ui';

import FormatHelpers from '../mixins/FormatHelpers'; // eslint-disable-line no-unused-vars
import WorkflowActions from '../../actions/WorkflowActions';
import JsonEditor from '../JsonEditor';

@mixin.decorate(FormatHelpers)
export default class EditWorkflow extends Component {

  state = {
    workflow: null,
    disabled: false
  };

  disable() { this.setState({disabled: true}); }

  enable() { setTimeout(() => this.setState({disabled: false}), 500); }

  saveWorkflow() {
    this.disable();
    WorkflowActions.patchWorkflow(this.state.workflow.id, this.state.workflow)
      .then(out => {
        console.log(out);
        this.resetWorkflow();
      })
      .catch(err => console.error(err));
  }

  // deleteWorkflow() {
  //   if (!window.confirm('Are you sure want to delete: ' + this.state.workflow.id)) { // eslint-disable-line no-alert
  //     return;
  //   }
  //   this.disable();
  //   WorkflowActions.deleteWorkflow(this.state.workflow.id)
  //     .then(out => {
  //       console.log(out);
  //       this.back();
  //     })
  //     .catch(err => console.error(err));
  // }

  resetWorkflow() {
    this.disable();
    WorkflowActions.getWorkflow(this.state.workflow.id)
      .then(workflow => {
        this.setState({workflow: workflow});
        this.enable();
      })
      .catch(err => console.error(err));
  }

  cloneWorkflow() {}// TODO

  back() {
    window.history.back();
  }

  // TODO: make mixin for this
  //       this is a custom version of linkState that works with a nested object
  linkState(stateKey, key) {
    var obj = this.state[stateKey];
    return {
      value: obj && obj[key] || null,
      requestChange: (value) => {
        var change = {};
        if (obj) {
          obj[key] = value;
          change[stateKey] = obj;
        }
        else {
          change[stateKey] = {};
          change[stateKey][key] = value;
        }
        this.setState(change);
      }
    };
  }

  updateStateFromJsonEditor(stateChange) {
    this.setState({workflow: stateChange});
  }

  render() {
    if (!this.state.workflow) {
      this.state.workflow = this.props.workflowRef || null;
    }
    var nameLink = this.linkState('workflow', 'name');
    return (
      <div className="EditWorkflow container">
        <div className="row">
          <div className="one-half column">
            <TextField valueLink={nameLink} hintText="Name" floatingLabelText="Name" disabled={this.state.disabled} />
          </div>
        </div>
        <h3>JSON Editor</h3>
        <JsonEditor initialValue={this.state.workflow}
                    updateParentState={this.updateStateFromJsonEditor.bind(this)}
                    disabled={this.state.disabled}
                    ref="jsonEditor" />
        <div className="buttons container">
          {/*<FlatButton className="button" label="Delete" onClick={this.deleteWorkflow.bind(this)} disabled={this.state.disabled} />*/}
          <FlatButton className="button" label="Clone" onClick={this.cloneWorkflow.bind(this)} disabled={this.state.disabled} />
          <div className="u-right">
            <FlatButton className="button" label="Cancel" onClick={this.back} disabled={this.state.disabled} />
            <RaisedButton className="button" label="Reset" onClick={this.resetWorkflow.bind(this)} disabled={this.state.disabled} />
            <RaisedButton className="button" label="Save" primary={true} onClick={this.saveWorkflow.bind(this)} disabled={this.state.disabled} />
          </div>
        </div>
      </div>
    );
  }

}
