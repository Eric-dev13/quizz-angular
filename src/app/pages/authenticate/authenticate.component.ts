import { Component} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { faUser, faEnvelope, faLock } from '@fortawesome/free-solid-svg-icons';



@Component({
  selector: 'app-authenticate',
  templateUrl: './authenticate.component.html',
  styleUrls: ['./authenticate.component.scss']
})
export class AuthenticateComponent{

  faUser = faUser;
  faEnvelope = faEnvelope;
  faLock = faLock;

  // Déclaration de constantes
  readonly API_URL_AUTH: string = environment.API_URL_AUTH;

  constructor(
    private http: HttpClient,
    private router: Router,
    private route: ActivatedRoute,
    protected authenticationService: AuthenticationService,
    ) {}

  errors: { [key: string]: string } = {};

  loggedIn = (formAuth: NgForm) => {
    // POST :  Si l'utilisateur est enregistrer dans la base de données le serveur lui renverra un token
    // a chaque fois que l'on souhaite acceder a une route privée on dois envoyer le token
    // le serveur decode le token verifie la validité de la signature puis renvoie les infos demandées
    if (formAuth.valid) {
      this.authenticationService.loggedIn(formAuth).subscribe({
        next: (data) => {
          // console.log('Utilisateur: ', data.user);
          // console.log('token: ', data.token);
          // console.log('token: ', data);
          // Enregistre le token et redirige vers la page d'acceuil
          this.authenticationService.doLogged(data);
        },
        error: (errors: Error) => {
          // console.log('Observer got an error: ' + err);
          // Gestion des erreurs de validation provenat de l'API
          this.checkDataConstraints(errors);
        },
        complete: () => console.log('Observer got a complete notification')
      });
    }
  }

  registration = (formRegister: NgForm) => {
    // POST :  findAll
    console.log(formRegister.value);
    if (formRegister.valid) {
      this.authenticationService.registration(formRegister).subscribe({
        next: (data) => {
          // console.log('Utilisateur: ', data.user);
          // console.log('token: ', data.token);
          // Enregistre le token et redirige vers la page d'acceuil
          this.authenticationService.doLogged(data);
        },
        error: (errors: Error) => {
          //console.log('Observer got an error: ', errors);
          this.checkDataConstraints(errors);
        },
        complete: () => console.log('Observer got a complete notification')
      });
    }
  }

  checkDataConstraints = (err: any) => {
    this.emptyErrors();
    if (err.error) {
      for (const fieldName in err.error) {
        if (err.error.hasOwnProperty(fieldName)) {
          // Mise à jour de la structure de données "errors" avec les messages d'erreur
          // errors: { [key: string]: string } = {};
          this.errors[fieldName] = err.error[fieldName];
        }
      }
    }
  }

  // Vide la liste d'erreurs.
  emptyErrors = (): void => {
    this.errors = {};
  }

} 
