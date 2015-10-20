// Copyright 2015, EMC, Inc.

'use strict';

/* eslint-disable no-unused-vars */
import React, { Component } from 'react';
import mixin from 'common-web-ui/lib/mixin';
import PageHelpers from 'common-web-ui/mixins/PageHelpers';
/* eslint-enable no-unused-vars */

import EditPoller from './EditPoller';
import {} from 'material-ui';

@mixin(PageHelpers)
export default class CreatePoller extends Component {

  state = {
    poller: null
  };

  componentDidMount() {}

  componentWillUnmount() { }

  render() {
    return (
      <div className="Poller">
        {this.props.params.nodeId ?
          this.renderBreadcrumbs(
            {href: '', label: 'Dashboard'},
            {href: 'nodes', label: 'Nodes'},
            {href: 'nodes/' + this.props.params.nodeId, label: this.props.params.nodeId},
            {href: 'pollers/n/' + this.props.params.nodeId, label: 'Pollers'},
            'Create Poller'
          ) : this.renderBreadcrumbs(
            {href: '', label: 'Dashboard'},
            {href: 'pollers', label: 'Pollers'},
            'Create Poller'
          )
        }
        <EditPoller poller={{config: {}}} />
      </div>
    );
  }

}
