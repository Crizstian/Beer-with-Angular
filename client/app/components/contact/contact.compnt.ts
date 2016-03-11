import {Component} from 'angular2/core';
import {FormBuilder,FORM_DIRECTIVES,
        ControlGroup,Control,
        Validators}           from 'angular2/common';
import {RouteParams, Router,
        RouterLink}           from 'angular2/router';
import {CustomValidators}     from '../../Validators/custom-validators';
import {EmailService}         from '../../services/email.service';

@Component({
  selector   : 'contact',
  directives : [FORM_DIRECTIVES,RouterLink],
  templateUrl: 'app/components/contact/templates/contacto.html'
})
export class ContactCompnt{

  group: ControlGroup;
  formulario:any = {};

  constructor(
    private _builder: FormBuilder,
    private _emailService: EmailService,
    private _router: Router
  ) {
    this.formulario = {
      nombre: '',
      email: '',
      asunto: '',
      mensaje: ''
    };

    this.group = this._builder.group({
      nombre: ['',
        Validators.compose([Validators.required, CustomValidators.textFormat])
      ],
      email: ['',
        Validators.compose([Validators.required, CustomValidators.emailFormat])
      ],
      asunto: ['',
        Validators.compose([Validators.required, CustomValidators.textFormat])
      ],
      mensaje: ['',
        Validators.compose([Validators.required, CustomValidators.textAreaFormat])
      ]
    });
  }

  submitForm(){
    this._emailService.send(this.formulario).subscribe(
      (data) => console.log(data),
      (err)  => console.log(err),
      ()     => console.log('email sent')
    );
  }

}
