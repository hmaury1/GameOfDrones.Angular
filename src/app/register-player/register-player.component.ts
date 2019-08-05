import { Component, OnInit } from '@angular/core';
import { FormControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { RegisterPlayerService } from './register-player.service';
import { AppStore } from '../app-store';

@Component({
  selector: 'app-register-player',
  templateUrl: './register-player.component.html',
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
    this.service.start(
      playersData.namePlayer1Control,
      (playersData.namePlayer2Control === playersData.namePlayer1Control
      ? playersData.namePlayer2Control + '_2'
      : playersData.namePlayer2Control)
    ).subscribe((data: Game) => {
      AppStore.GAME = data;
      this.router.navigate(['/rounds']);
    }, error => {
      AppStore.ERROR = error;
      this.router.navigate(['/error']);
    });
  }

}
