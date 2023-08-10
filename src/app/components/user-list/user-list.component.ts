import {
  Component,
  Input,
  SimpleChanges,
  Output,
  EventEmitter,
} from '@angular/core';
import { Router } from '@angular/router';
import { FetchService } from 'src/app/services/fetchService/fetch-service.service';
import { IUser } from 'src/app/interfaces/users';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css'],
})
export class UserListComponent {
  users: IUser[] = [];
  errorMessage: string = '';
  @Input() query: string = '';
  @Output() public dataSet = new EventEmitter();

  constructor(
    private _fetchUsersService: FetchService,
    private router: Router
  ) {}

  ngOnChanges(changes: SimpleChanges) {
    const currentQuery = changes['query'].currentValue;
    if (currentQuery === '') {
      this._fetchUsersService.getUsers().subscribe(
        (data) => {
          this.users = data;
          this.errorMessage = '';
          this.dataSet.emit({
            errorMessage: this.errorMessage,
            dataLength: this.users.length,
          });
        },
        (error: Error) => {
          this.errorMessage = error.message;
          this.dataSet.emit({ errorMessage: this.errorMessage });
        }
      );
    }

    if (currentQuery && currentQuery !== changes['query'].previousValue) {
      this._fetchUsersService.getUsersByQuery(this.query).subscribe(
        (data) => {
          this.users = data.items;
          this.errorMessage = '';
          this.dataSet.emit({
            errorMessage: this.errorMessage,
            dataLength: this.users.length,
          });
        },
        (error: Error) => {
          this.errorMessage = error.message;
          this.dataSet.emit({ errorMessage: this.errorMessage });
        }
      );
    }
  }

  handleCardClick(login: string) {
    this.router.navigate([login, 'repos']);
  }
}
