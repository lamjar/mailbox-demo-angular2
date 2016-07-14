import { Pipe } from '@angular/core';

import { Message } from '../models/message.model';

import * as _ from 'lodash';

@Pipe({
  name: 'filterByName'
})
export class FilterByNamePipe {

  transform (input : Message[], term : string) {
    if (!term || term.length === 0) {
      return input;
    } else {
      return _.filter(input, message => {
        return message.from.indexOf(term) !== -1;
      });
    }
  }

}
