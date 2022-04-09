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

  public clickMenu(){
   // let btn = document.querySelector("#btn");
    let sidebar = document.querySelector(".sidebar");
    sidebar?.classList.toggle("active")
  }

}

