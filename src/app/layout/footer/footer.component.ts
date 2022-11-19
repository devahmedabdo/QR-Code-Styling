import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import {
  faBehance,
  faCodepen,
  faFacebookF,
  faGithub,
  faLinkedinIn,
  faWhatsapp,
} from '@fortawesome/free-brands-svg-icons';
import { faAt } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class FooterComponent implements OnInit {
  constructor() {}
  links: any[] = [
    {
      icon: faGithub,
      link: 'https://github.com/devahmedabdo',
    },
    {
      icon: faLinkedinIn,
      link: 'https://www.linkedin.com/in/dev-ahmedabdo',
    },
    {
      icon: faFacebookF,
      link: 'https://www.facebook.com/cheahmedabdo',
    },
    {
      icon: faWhatsapp,
      link: 'https://wa.me/+201114345007',
    },
    {
      icon: faAt,
      link: 'mailto:devahmedabdo@gmail.com',
    },
    {
      icon: faBehance,
      link: 'https://behance.net/cheahmedabdo',
    },
    {
      icon: faCodepen,
      link: 'https://codepen.io/devahmedabdo',
    },
  ];
  year: number = new Date().getFullYear();
  ngOnInit(): void {}
}
