import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class HomeComponent implements OnInit {
  title: any[] = 'Free QR Code Generator'.split('');
  constructor() {}
  ngOnInit(): void {
    setTimeout(() => {
      document.querySelector('.home > div h1')?.classList.add('active');
      setTimeout(() => {
        document
          .querySelector('app-loader section')
          ?.classList.remove('loading');
      });
    });
  }
}
