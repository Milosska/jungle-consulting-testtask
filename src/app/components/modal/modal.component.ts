import { Component, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { IRepo } from 'src/app/interfaces/users';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css'],
})
export class ModalComponent {
  @Input() repo: IRepo = {
    name: '',
    description: null,
    language: '',
    has_issues: false,
    html_url: '',
  };

  constructor(public activeModal: NgbActiveModal) {}
}
