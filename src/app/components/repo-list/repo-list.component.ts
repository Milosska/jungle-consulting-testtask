import { Component, Input } from '@angular/core';
import { FetchService } from 'src/app/services/fetchService/fetch-service.service';
import { IRepo } from 'src/app/interfaces/users';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ModalComponent } from '../modal/modal.component';

@Component({
  selector: 'app-repo-list',
  templateUrl: './repo-list.component.html',
  styleUrls: ['./repo-list.component.css'],
})
export class RepoListComponent {
  repos: IRepo[] = [];
  @Input() login = '';

  constructor(
    private _fetchService: FetchService,
    private modalService: NgbModal
  ) {}

  ngOnInit() {
    if (this.login) {
      this._fetchService.getReposByUser(this.login).subscribe(
        (data) => (this.repos = data),
        (error) => console.log(error.message)
      );
    }
  }

  openModal(data: IRepo) {
    const modalRef = this.modalService.open(ModalComponent, {
      centered: true,
    });
    modalRef.componentInstance.repo = data;
  }
}
