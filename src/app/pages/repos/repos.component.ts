import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-repos',
  templateUrl: './repos.component.html',
  styleUrls: ['./repos.component.css'],
})
export class ReposComponent {
  userLogin: string = '';

  constructor(private route: ActivatedRoute) {
    let login = route.snapshot.paramMap.get('login');
    if (login) {
      this.userLogin = login;
    }
  }
}
