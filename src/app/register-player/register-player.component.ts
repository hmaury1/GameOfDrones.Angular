import { Component, OnInit } from '@angular/core';
import { FormControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { RegisterPlayerService } from './register-player.service';

@Component({
  selector: 'app-register-player',
  template: `
  <div class="row center-xs">
    <div class="col-xs-11">
      <h2>Players registration</h2>
      <p>Please enter players name</p>
      <form [formGroup]="registerForm" (ngSubmit)="onSubmit(registerForm.value)">
        <div class="row">
          <div class="col-xs-12 col-sm-6">
            Player 1: <input type="text" placeholder="please enter the player's one name" formControlName="namePlayer1Control">
          </div>
          <div class="col-xs-12 col-sm-6">
            Player 2: <input type="text" placeholder="please enter the player's two name" formControlName="namePlayer2Control">
          </div>
        </div>
        <br>
        <button [disabled]="registerForm.status != 'VALID'" class="btn default" type="submit">Play</button>
      </form>
      <p>
      </p>
    </div>
  </div>
  `,
  styleUrls: ['./register-player.component.scss'],
  providers: [RegisterPlayerService]
})
export class RegisterPlayerComponent implements OnInit {

  registerForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private service: RegisterPlayerService
  ) {

    this.registerForm = new FormGroup({
      namePlayer1Control: new FormControl('', [
        Validators.required]
      ),
      namePlayer2Control: new FormControl('', [
        Validators.required]
      ),
    });
  }

  ngOnInit() {
  }

  onSubmit(playersData: any) {
    this.service.start(playersData.namePlayer1Control, playersData.namePlayer2Control).subscribe(data => {
      this.router.navigate(['/rounds']);
    }, error => {

    });
  }

}
