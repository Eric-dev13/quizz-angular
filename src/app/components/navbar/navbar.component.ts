import { Component } from '@angular/core';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { CategoryService } from 'src/app/services/category.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {

  categories: any;
  API_URL_AUTH = environment.API_URL_AUTH;

  constructor(private categoryService: CategoryService, protected authenticated: AuthenticationService) {}

  ngOnInit() {
    this.categories = this.findAll();
  }

  findAll = () => {
    this.categoryService.findAll().subscribe({
      next: (data) => {
        this.categories = data;
      }
    })
  }

  // Deconnexion
  logout(){
    this.authenticated.doLogout();
  }

}
