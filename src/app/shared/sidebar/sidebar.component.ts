import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from 'src/app/models/User.model';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  userData$!: Observable<User>;
  name: string = "";
  roleName: string = "";
  role!: boolean;
  constructor(private readonly authF: AuthService) { }

  ngOnInit(): void {
     this.authF.user$.subscribe((data) =>{
        this.name = data!.name,
        this.role = data!.roles.admin
     })

     if(this.role){
      this.roleName = "Administrador"
     }else{
       this.roleName = "Empleado"
     }
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

