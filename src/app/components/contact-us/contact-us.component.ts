import { Component, inject } from '@angular/core';
import { TagModule } from 'primeng/tag';
import { FormBuilder, FormGroup, ReactiveFormsModule, ValidatorFn, Validators } from '@angular/forms';
import { CalendarModule } from 'primeng/calendar';
import { DataserviceService } from '../services/dataservice.service';
import { MessageService } from 'primeng/api';
import { ToastModule } from 'primeng/toast';
import { ButtonModule } from 'primeng/button';
import { RippleModule } from 'primeng/ripple';
import { MapComponentComponent } from '../map-component/map-component.component';
import { CommonModule } from '@angular/common';
import emailjs from '@emailjs/browser'

@Component({
  selector: 'app-contact-us',
  standalone: true,
  imports: [TagModule, ReactiveFormsModule, CalendarModule, ToastModule, ButtonModule, RippleModule, MapComponentComponent, CommonModule], // This should include GMapModule
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.scss'], // Corrected to styleUrls
  providers: [MessageService]
})
export class ContactUsComponent {
  contactFrom: any = new FormGroup({});
  formData!: any[];
  submitted: boolean = false;
  spinner: boolean = false;
  private dataService = inject(DataserviceService);
  private _fb = inject(FormBuilder);
  constructor(private messageService: MessageService) { }

  ngOnInit() {
    this.formData = this.dataService.getContactFormData();
    this.bindControls();
  }

  bindControls() {
    let validators: ValidatorFn[] = [];
    this.formData.forEach(control => {
      if (control?.validation_rule) {
        validators = [];
        validators = this.getValidationRules(control);
        const formControl = this._fb.control(null, validators);
        this.contactFrom.addControl(control.control_name, formControl);
      }
    })
  }

  getValidationRules(element: any) {
    let validators: any = [];
    element.validation_rule.forEach((val: any) => {
      if (val.mandation) validators.push(Validators.required)
      if (val.min) validators.push(Validators.minLength(val.min.column_minlength as number))
      if (val.max) validators.push(Validators.maxLength(val.max.column_maxlength as number))
      if (val.phone) validators.push(Validators.pattern(/^\+?\d{10,15}$/));
      if (val.email) validators.push(Validators.email);
    });
    return validators;
  }
  isControlInvalid(controlName: string) {
    return this.contactFrom.get(controlName.toString())?.invalid && this.submitted;
  }

  isInvalid(controlName: string) {
    return this.contactFrom.get(controlName.toString())?.invalid
  }

  getErrorType(controlName: string): string {
    const error = this.contactFrom.get(controlName.toString())?.errors;
    if (error?.required) {
      return 'Mandatory Field';
    } else if (error?.pattern) {
      return 'Invalid Mobile Number';
    } else if (error?.email) {
      return 'Invalid Email';
    }
    return ''
  }

  async onSubmit() {
    this.submitted = true;
    if (this.contactFrom.valid) {
      emailjs.init('hh_IUs_3aBeuzxZNX')
      this.spinner = true;
      let response = await emailjs.send("service_y04bg3k", "template_qnatw0y", {
        from_name: this.contactFrom.value.name,
        message: this.contactFrom.value.message,
        contact: this.contactFrom.value.phone,
        email: this.contactFrom.value.email,
      })
      if (response.status === 200) {
        this.sendReplyMail();
        this.showSucessPopup()
        this.contactFrom.reset();
        this.spinner = false;
      } else {
        this.showErrorPopup()
      }
    }
  }
  async sendReplyMail() {
    await emailjs.send("service_y04bg3k", "template_n7m9ahj", {
      from_name: this.contactFrom.value.name,
      email: this.contactFrom.value.email,
    });
  }

  showSucessPopup() {
    this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Enquiry Submitted' });
    this.submitted = false;
  }

  showErrorPopup() {
    this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Please retry submitting' });
  }

}


