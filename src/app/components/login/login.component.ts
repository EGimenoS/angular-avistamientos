import { Component, OnInit } from "@angular/core";
import { User } from "src/app/interfaces/user.interface";
import { LoginService } from "../../services/login.service";
import { NgForm } from "@angular/forms";
import { Router } from "@angular/router";
import { MatSnackBar } from "@angular/material";

@Component({
  selector: "login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"]
})
export class LoginComponent implements OnInit {
  constructor(
    private loginService: LoginService,
    private router: Router,
    private snackBar: MatSnackBar
  ) {}

  model: User = {
    user: "",
    password: "",
    id: ""
  };

  hide = true;

  loginUser(form: NgForm) {
    if (form.valid) {
      this.loginService.callService(Object.assign({}, this.model)).subscribe(
        response => {
          if (response.status === "OK") {
            this.loginService.setUserId(response.id);
            this.openSnackBar(
              `Login Realizado con éxito: ${this.model.user} ${
                //controlamos caso en que el servicio responde con OK status
                this.model.password
              }`,
              "X"
            );

            this.router.navigate(["/menu"]);
          } else {
            //controlamos caso en que servicio con status NOK
            this.openSnackBar(
              `Se ha producido un error: ${response.message}`,
              "X"
            );
          }
        },
        err => alert(err)
      ); //controlamos los casos en el Observable retorne un error por otros motivos (404 Not found, servidor no responde etc)
    } else this.loginService.destroyUser();
  }
  openSnackBar(message: string, action: string): void {
    this.snackBar.open(message, action, {
      duration: 3000
    });
  }

  ngOnInit() {}
}
