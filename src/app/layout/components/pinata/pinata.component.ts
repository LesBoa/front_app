import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pinata',
  templateUrl: './pinata.component.html',
  styleUrls: ['./pinata.component.scss']
})
export class PinataComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  onPinataClick(): void {
      console.log('click');
      this.router.navigate(['victoire-royale']);
  }

}
