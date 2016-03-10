import {Control} from 'angular2/common';

export class CustomValidators {
  static textFormat(control: Control): [[key: string]: boolean] {
    let pattern:RegExp = /^[a-zA-Z0-9?\s]{3,}$/;
    return pattern.test(control.value) ? null : {"textFormat": true};
  }
  static textAreaFormat(control: Control): [[key: string]: boolean] {
    let pattern:RegExp = /^[a-zA-Z0-9?$@#()'!,+\-=_:.&€£*%\s]{15,}$/;
    return pattern.test(control.value) ? null : {"textFormat": true};
  }
  static emailFormat(control: Control): [[key: string]: boolean] {
    let pattern:RegExp = /\S+@\S+\.\S+/;
    return pattern.test(control.value) ? null : {"emailFormat": true};
  }
}
