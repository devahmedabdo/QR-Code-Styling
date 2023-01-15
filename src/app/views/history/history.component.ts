import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import {
  faCircleArrowDown,
  faGear,
  faInfoCircle,
  faTrash,
} from '@fortawesome/free-solid-svg-icons';
import QRCodeStyling from 'qr-code-styling';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class HistoryComponent implements OnInit {
  constructor(public router: Router) {}
  faEdit = faGear;
  faDelete = faTrash;
  faDownload = faCircleArrowDown;
  faInfo = faInfoCircle;
  myQrArray: any[] = [];
  creatQrcode = async () => {
    for (let i = 0; i < this.myQrArray.length; i++) {
      const qrcodeConfig = this.myQrArray[i].qrconfig;
      qrcodeConfig.image = undefined;
      console.log(qrcodeConfig);
      // qrcodeConfig.data = await decodeURIComponent(qrcodeConfig.data);
      const qrCode = await new QRCodeStyling(qrcodeConfig);
      let qrDiv = document.querySelector(
        '.qr' + i + '> div > div'
      ) as HTMLElement;
      if (qrDiv) {
        await qrCode.append(qrDiv);
        let canvas = document.querySelector(
          '.qr' + i + '>div >div > canvas'
        ) as HTMLElement;
        canvas.classList.add('qrcode');
      }
    }
  };
  getQrcode = async () => {
    let myQrCodes: any = window.localStorage.getItem('qrcodes') || '[]';
    this.myQrArray = await JSON.parse(myQrCodes);
  };
  ////////
  updateMyQrArray = async () => {
    let myStringArray = await JSON.stringify(this.myQrArray);
    //  New Array After convert to string
    window.localStorage.setItem('qrcodes', myStringArray);
  };
  deleteQrcode(index: number) {
    this.myQrArray.splice(index, 1);
    this.updateMyQrArray();
  }
  downloadQrcode(index: number) {
    let qr = this.myQrArray[index];
    const qrcode = new QRCodeStyling(qr.qrconfig);
    qrcode.download({ name: qr.name, extension: qr.extension });
  }
  editQrcode = async (index: number) => {
    let qr = this.myQrArray[index];
    window.localStorage.setItem('editQrcode', JSON.stringify(qr));
    await this.router.navigateByUrl('/generate');
  };
  areYouShureDeleteAll(status: boolean) {
    if (status) {
      this.clearAll();
      this.unActive();
    } else {
      this.unActive();
    }
  }
  active() {
    document.querySelector('.shure-div')?.classList.add('active');
  }
  unActive() {
    document.querySelector('.shure-div')?.classList.remove('active');
  }
  clearAll() {
    this.myQrArray = [];
    this.updateMyQrArray();
  }
  qrcodeInfo(index: any) {
    let qr = document.querySelector('.qr' + index) as HTMLElement;
    if (qr) {
      qr.classList.toggle('active');
    }
  }
  /////////
  ngOnInit(): void {
    this.getQrcode();
    setTimeout(() => {
      this.creatQrcode();
      setTimeout(() => {
        document
          .querySelector('app-loader section')
          ?.classList.remove('loading');
        console.log(this.myQrArray);
      }, 100);
    });
  }
}
