import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  constructor(private readonly authF: AuthService) { }

  ngOnInit(): void {
  }

  public exit() {
    this.authF.SafelogOut();
  }

}
