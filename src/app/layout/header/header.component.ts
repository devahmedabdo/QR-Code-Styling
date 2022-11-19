import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { faMoon, faQrcode, faSun } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class HeaderComponent implements OnInit {
  constructor() {}
  logo = faQrcode;
  sun = faSun;
  moon = faMoon;
  closeMenu() {
    document.querySelector('.nav-menu')?.classList.remove('active');
    document.querySelector('.toggle-icon')?.classList.remove('active');
  }
  menu: NodeListOf<HTMLElement> = document.querySelectorAll(
    '.nav-menu , .toggle-icon'
  );
  darkBtn: NodeListOf<HTMLElement> = document.querySelectorAll(
    '.dark-mode'
  ) as NodeListOf<HTMLElement>;
  toggleActive(arr: NodeListOf<HTMLElement>) {
    arr.forEach((e: HTMLElement) => {
      e.classList.toggle('active');
    });
  }
  // theme?: string;

  changeTheme(theme: string) {
    window.localStorage.setItem('theme', theme);
    document.documentElement.className = theme;
  }
  ngOnInit(): void {
    this.menu = document.querySelectorAll('.nav-menu , .toggle-icon');
    this.darkBtn = document.querySelectorAll(
      '.dark-mode'
    ) as NodeListOf<HTMLElement>;
    window.addEventListener('scroll', () => {
      this.closeMenu();
    });
    let userTheme = window.matchMedia('(prefers-color-scheme:dark)').matches;
    let preferTheme = window.localStorage.getItem('theme');
    if (preferTheme == 'dark' || (userTheme && preferTheme !== '')) {
      this.changeTheme('dark');
      document.querySelector('.dark-mode')?.classList.add('active');
    } else {
      this.changeTheme('');
    }
  }
}
