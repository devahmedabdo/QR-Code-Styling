import {
  Component,
  ElementRef,
  OnInit,
  ViewChild,
  ViewEncapsulation,
} from '@angular/core';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import {
  faLink,
  faCommentSms,
  faPhone,
  faAt,
  faWifi,
  faIdCard,
  faPlus,
  faClose,
  faArrowDown,
  faArrowUp,
} from '@fortawesome/free-solid-svg-icons';
import QRCodeStyling from 'qr-code-styling';
import SwiperCore, { Pagination, SwiperOptions } from 'swiper';
SwiperCore.use([Pagination]);

@Component({
  selector: 'app-generate',
  templateUrl: './generate.component.html',
  styleUrls: ['./generate.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class GenerateComponent implements OnInit {
  constructor() {}

  faLink = faLink;
  faSms = faCommentSms;
  faPhone = faPhone;
  faAt = faAt;
  faWhatsApp = faWhatsapp;
  faWifi = faWifi;
  faIdCard = faIdCard;
  add = faPlus;
  close = faClose;
  up = faArrowUp;
  down = faArrowDown;
  //
  formatLabel(value: number) {
    return value;
  }
  //
  step = 0;
  setStep(index: number) {
    this.step = index;
  }
  nextStep() {
    this.step++;
  }
  prevStep() {
    this.step--;
  }
  initialStep() {
    this.step = 0;
  }
  config: SwiperOptions = {
    direction: 'horizontal',
    slidesPerView: 7,
    spaceBetween: 10,
    pagination: {
      el: '.swiper-pagination',
      dynamicBullets: true,
    },
  };
  dataType?: string = 'url';
  data?: string = '';
  text?: string = 'ahmed-abdo.live';
  // if sms or phone or whatsApp we need
  countryKey: string = '20';
  phone?: number;
  sms: string = '';
  // if gmail we need
  // we get email message from sms either
  email: string = '';
  emailSubject: string = '';
  // if WIFI we need
  wifiName: string = 'Ahmed';
  wifiPass: string = '12345678';
  wifiSecurity: string = 'WPA';
  wifiHidden: boolean = false;
  hide = true;
  // if vcard we need
  firstName: string = '';
  lastName: string = '';
  workPhone: string = '';
  mobilePhone: string = '';
  street: string = '';
  city: string = '';
  gov: string = '';
  organization: string = '';
  note: string = '';
  //////////////////////      logo      /////////////////////////
  logo?: any;
  hideLogoBg: boolean = true;
  logoSize: number = 0.4;
  logoCross: string = 'anonymous';
  logoMargin: number = 10;
  setLogo(event: any) {
    if (event.target.files.length == 1) {
      this.logo = window.URL.createObjectURL(event.target.files[0]);
    } else {
      this.logo = undefined;
    }
  }
  resetLogo() {
    let logoInput = document.getElementById('logo') as HTMLInputElement;
    logoInput.value = '';
    this.logo = undefined;
    this.makeqrcode();
  }
  //////////////////////      Dots      /////////////////////////
  dotsColor: any = '#4c1d95';
  dotsType: string = 'rounded';
  isGredient: boolean = false;
  dotsOptionsGredientColor1: string = '#4c1d95';
  dotsOptionsGredientColor2: string = '#0fbbd2';
  dotsOptionsGredientType: string = 'linear';
  dotsOptionsGredientRotaion: number = 22;
  dotsOptionsGredient: any;
  //////////////////////      Background      /////////////////////////
  bgColor: any = '#ffffff';
  isBgGredient: boolean = false;
  bgOptionsGredientColor1: string = '#e0f5ff';
  bgOptionsGredientColor2: string = '#dedede';
  bgOptionsGredientType: string = 'linear';
  bgOptionsGredientRotaion: number = 12;
  bgOptionsGredient: any;
  //////////////////////      Corner Dots      /////////////////////////
  cornerColor: any = '#4c1d95';
  cornerType: any = 'dots';
  isCornerGredient: boolean = false;
  cornerOptionsGredientColor1: string = '#8378de';
  cornerOptionsGredientColor2: string = '#b3aaff';
  cornerOptionsGredientType: string = 'linear';
  cornerOptionsGredientRotaion: number = 12;
  cornerOptionsGredient: any;
  //////////////////////      Corner square      /////////////////////////
  squareColor: any = '#4c1d95';
  squareType: any = 'dots';
  isSquareGredient: boolean = false;
  squareOptionsGredientColor1: string = '#8378de';
  squareOptionsGredientColor2: string = '#b3aaff';
  squareOptionsGredientType: string = 'linear';
  squareOptionsGredientRotaion: number = 12;
  squareOptionsGredient: any;

  // qrcodeLogo: boolean = true;
  width?: number = 700;
  type?: String;
  margin: number = 5;
  shape: string = 'square';
  extension: string = 'png';
  name?: string;
  @ViewChild('canvas', { static: true }) canvas!: ElementRef;
  setEditQrcode = async () => {
    let qrEdit = window.localStorage.getItem('editQrcode');
    if (qrEdit) {
      let qr = await JSON.parse(qrEdit);
      this.dataType = qr.dataType;
      this.name = qr.name;
      this.width = qr.qrconfig.width;
      this.type = qr.qrconfig.type;
      this.margin = qr.qrconfig.margin;
      this.shape = qr.qrconfig.shape;
      this.extension = qr.extension;
      this.data = qr.qrconfig.data;
      this.text = qr.text;
      // if sms or phone or whatsApp we need
      this.countryKey = qr.countryKey;
      this.phone = qr.phone;
      this.sms = qr.sms;
      // if gmail we need
      // we get email message from sms either
      this.email = qr.email;
      this.emailSubject = qr.emailSubject;
      // if WIFI we need
      this.wifiName = qr.wifiName;
      this.wifiPass = qr.wifiPass;
      this.wifiSecurity = qr.wifiSecurity;
      this.wifiHidden = qr.wifiHidden;
      this.hide = qr.hide;
      // if vcard we need
      this.firstName = qr.firstName;
      this.lastName = qr.lastName;
      this.workPhone = qr.workPhone;
      this.mobilePhone = qr.mobilePhone;
      this.street = qr.street;
      this.city = qr.city;
      this.gov = qr.gov;
      this.organization = qr.organization;
      this.note = qr.note;
      this.isGredient = qr.isGredient;
      this.isBgGredient = qr.isBgGredient;
      this.isCornerGredient = qr.isCornerGredient;
      this.isSquareGredient = qr.isSquareGredient;
      this.dotsColor = qr.qrconfig.dotsOptions.color;
      this.dotsType = qr.qrconfig.dotsOptions.type;
      if (this.isGredient) {
        this.dotsOptionsGredientColor1 =
          qr.qrconfig.dotsOptions.gradient['colorStops'][0].color;
        this.dotsOptionsGredientColor2 =
          qr.qrconfig.dotsOptions.gradient['colorStops'][1].color;
        this.dotsOptionsGredientType = qr.qrconfig.dotsOptions.gradient.type;
        this.dotsOptionsGredientRotaion =
          qr.qrconfig.dotsOptions.gradient.rotation;
      }
      //////////////////////      Background      ///////////////////////
      this.bgColor = qr.qrconfig.backgroundOptions.color;
      if (qr.isBgGredient) {
        this.bgOptionsGredientColor1 =
          qr.qrconfig.backgroundOptions.gradient.colorStops[0].color;
        this.bgOptionsGredientColor2 =
          qr.qrconfig.backgroundOptions.gradient.colorStops[1].color;
        this.bgOptionsGredientType =
          qr.qrconfig.backgroundOptions.gradient.type;
        this.bgOptionsGredientRotaion =
          qr.qrconfig.backgroundOptions.gradient.rotation;
      }
      // //////////////////////      Corner Dots      /////////////////////////
      this.cornerColor = qr.qrconfig.cornersDotOptions.color;
      this.cornerType = qr.qrconfig.cornersDotOptions.type;
      if (qr.isCornerGredient) {
        this.cornerOptionsGredientColor1 =
          qr.qrconfig.cornersDotOptions.gradient.colorStops[0].color;
        this.cornerOptionsGredientColor2 =
          qr.qrconfig.cornersDotOptions.gradient.colorStops[1].color;
        this.cornerOptionsGredientType =
          qr.qrconfig.cornersDotOptions.gradient.type;
        this.cornerOptionsGredientRotaion =
          qr.qrconfig.cornersDotOptions.gradient.rotation;
      }
      // //////////////////////      Corner square      /////////////////////////
      this.squareColor = qr.qrconfig.cornersSquareOptions.color;
      this.squareType = qr.qrconfig.cornersSquareOptions.type;
      if (qr.isSquareGredient) {
        this.squareOptionsGredientColor1 =
          qr.qrconfig.cornersSquareOptions.gradient.colorStops[0].color;
        this.squareOptionsGredientColor2 =
          qr.qrconfig.cornersSquareOptions.gradient.colorStops[1].color;
        this.squareOptionsGredientType =
          qr.qrconfig.cornersSquareOptions.gradient.type;
        this.squareOptionsGredientRotaion =
          qr.qrconfig.cornersSquareOptions.gradient.rotation;
      }
    }
    this.makeqrcode();
    window.localStorage.removeItem('editQrcode');
  };
  utf8_encode = function (s: any) {
    return unescape(encodeURIComponent(s));
  };
  makeqrcode(): any {
    switch (this.dataType) {
      case 'email':
        this.data = `mailto:${this.email}?&subject=${this.emailSubject}&body=${this.sms}`;
        break;
      case 'sms':
        this.data = `sms:${this.phone}?&body=${this.sms}`;
        break;
      case 'phone':
        this.data = `tel:${this.phone}`;
        break;
      case 'whatsapp':
        this.data = `https://wa.me/+${this.countryKey}${this.phone}`;
        break;
      case 'wifi':
        this.data = `WIFI:S:${this.wifiName};T:${this.wifiSecurity};P:${this.wifiPass};H:${this.wifiHidden}`;
        break;
      case 'email':
        this.data = `sms:${this.phone}?&body=${this.sms}`;
        break;
      case 'vcard':
        this.data = `BEGIN:VCARD;
VERSION:2.1;
FN:${this.firstName || ''} ${this.lastName || ''};
TEL;CELL:${this.mobilePhone || ''};
TEL;WORK:${this.workPhone || ''};
ORG:${this.organization || ''};
EMAIL;WORK:${this.email || ''};
ADR;HOME:${this.street || ''} - ${this.city || ''} - ${this.gov || ''};
NOTE;${this.note || ''};
BDAY:1998-11-15;
URL:https://ahmed-abdo.live;
END:VCARD`;
        break;

      default:
        this.data = this.text;
        break;
    }
    switch (this.isGredient) {
      case false:
        this.dotsOptionsGredient = undefined;
        break;

      case true:
        this.dotsOptionsGredient = {
          type: this.dotsOptionsGredientType,
          rotation: this.dotsOptionsGredientRotaion,
          colorStops: [
            { offset: 0, color: this.dotsOptionsGredientColor1 },
            { offset: 1, color: this.dotsOptionsGredientColor2 },
          ],
        };
        break;
    }
    switch (this.isCornerGredient) {
      case false:
        this.cornerOptionsGredient = undefined;
        break;

      case true:
        this.cornerOptionsGredient = {
          type: this.cornerOptionsGredientType,
          rotation: this.cornerOptionsGredientRotaion,
          colorStops: [
            { offset: 0, color: this.cornerOptionsGredientColor1 },
            { offset: 1, color: this.cornerOptionsGredientColor2 },
          ],
        };
        break;
    }
    switch (this.isSquareGredient) {
      case false:
        this.squareOptionsGredient = undefined;
        break;

      case true:
        this.squareOptionsGredient = {
          type: this.squareOptionsGredientType,
          rotation: this.squareOptionsGredientRotaion,
          colorStops: [
            { offset: 0, color: this.squareOptionsGredientColor1 },
            { offset: 1, color: this.squareOptionsGredientColor2 },
          ],
        };
        break;
    }
    switch (this.isBgGredient) {
      case false:
        this.bgOptionsGredient = undefined;
        break;

      case true:
        this.bgOptionsGredient = {
          type: this.bgOptionsGredientType,
          rotation: this.bgOptionsGredientRotaion,
          colorStops: [
            { offset: 0, color: this.bgOptionsGredientColor1 },
            { offset: 1, color: this.bgOptionsGredientColor2 },
          ],
        };
        break;
    }
    const qrcodeConfig: object = {
      width: this.width,
      height: this.width,
      shape: this.shape,
      type: 'canvas',
      data: this.utf8_encode(this.data),
      image: this.logo,
      imageOptions: {
        crossOrigin: this.logoCross,
        margin: this.logoMargin,
        hideBackgroundDots: this.hideLogoBg,
        imageSize: this.logoSize,
      },
      dotsOptions: {
        color: this.dotsColor,
        type: this.dotsType,
        gradient: this.dotsOptionsGredient,
      },
      backgroundOptions: {
        color: this.bgColor,
        gradient: this.bgOptionsGredient,
      },
      cornersSquareOptions: {
        color: this.squareColor,
        type: this.squareType,
        gradient: this.squareOptionsGredient,
      },
      cornersDotOptions: {
        color: this.cornerColor,
        type: this.cornerType,
        gradient: this.cornerOptionsGredient,
      },
      margin: this.margin,
    };
    if (this.data != '') {
      const qrCode = new QRCodeStyling(qrcodeConfig);
      this.canvas.nativeElement.children[0]?.remove();
      qrCode.append(this.canvas.nativeElement);
      return { qrCode, qrcodeConfig };
    }
  }
  download() {
    let qrCode = this.makeqrcode();

    let myObject = new Object({
      qrconfig: qrCode.qrcodeConfig,
      name: this.name || 'Qr-Code With Love',
      extension: this.extension,
      dataType: this.dataType,
      isGredient: this.isGredient,
      isBgGredient: this.isBgGredient,
      isCornerGredient: this.isCornerGredient,
      isSquareGredient: this.isSquareGredient,
    }) as any;
    switch (this.dataType) {
      case 'url':
        myObject.text = this.text;
        break;
      case 'sms':
        myObject.phone = this.phone;
        myObject.sms = this.sms;
        break;
      case 'phone':
        myObject.phone = this.phone;
        break;
      case 'whatsapp':
        myObject.countryKey = this.countryKey;
        myObject.phone = this.phone;
        break;
      case 'wifi':
        myObject.wifiName = this.wifiName;
        myObject.wifiPass = this.wifiPass;
        myObject.wifiSecurity = this.wifiSecurity;
        myObject.wifiHidden = this.wifiHidden;
        break;
      case 'email':
        myObject.email = this.email;
        myObject.emailSubject = this.emailSubject;
        myObject.sms = this.sms;
        break;
      case 'vcard':
        myObject.firstName = this.firstName;
        myObject.lastName = this.lastName;
        break;
    }
    this.saveNewQrcode(myObject);
    qrCode.qrCode.download({
      name: this.name,
      extension: this.extension,
    });
  }
  saveNewQrcode = async (newQr: any) => {
    let myQrcodes: any = window.localStorage.getItem('qrcodes') || '[]';
    // string array
    let myQrArray = await JSON.parse(myQrcodes);
    //  Array from localstorage
    myQrArray.push(newQr);
    //  New Array After added qrcode
    let myStringArray = await JSON.stringify(myQrArray);
    //  New Array After convert to string
    window.localStorage.setItem('qrcodes', myStringArray);
  };

  ngOnInit(): void {
    if (window.innerWidth <= 620) {
      this.config.direction = 'horizontal';
      this.config.slidesPerView = 4;
      this.config.loop = true;
    } else {
      this.config.direction = 'vertical';
    }
    this.setEditQrcode();
    this.makeqrcode();
    let myinputs = document.querySelectorAll('input:not(.data-type input)');
    myinputs.forEach((e) => {
      e.addEventListener('change', () => {
        this.makeqrcode();
      });
    });
  }
}
