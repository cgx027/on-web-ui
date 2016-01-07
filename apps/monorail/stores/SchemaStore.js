// Copyright 2015, EMC, Inc.

'use strict';

import Store from 'common-web-ui/lib/Store';

import MonoRailRestAPIv1_1 from '../messengers/MonoRailRestAPIv1_1';

export default class SchemaStore extends Store {

  read(id) {
    return MonoRailRestAPIv1_1.schemas.get(id)
      .then(item => this.change(id, item))
      .catch(err => this.error(id, err));
  }

  list() {
    return MonoRailRestAPIv1_1.schemas.list()
      .then(list => this.recollect(list))
      .catch(err => this.error(null, err));
  }

}
