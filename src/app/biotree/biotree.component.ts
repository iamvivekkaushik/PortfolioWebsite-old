import { Component, OnInit } from '@angular/core';
import {BiotreeLink} from '../models/biotree-link';

@Component({
  selector: 'app-biotree',
  templateUrl: './biotree.component.html',
  styleUrls: ['./biotree.component.css']
})
export class BiotreeComponent implements OnInit {
  biotreeLinks: BiotreeLink[] = [
    {name: 'Biotree', desc: 'A product to create and share links of your projects just like this one.', link: 'https://biotree.netlify.app/'},
    {name: 'OTP Text Field', desc: 'A flutter package for the OTP Field widget.', link: 'https://github.com/iamvivekkaushik/OTPTextField'},
    {name: 'Android Emulator Skin', desc: 'Skins for Android Emulator.', link: 'https://github.com/iamvivekkaushik/AndroidEmulatorSkin'},
    {name: 'Portfolio Website Code', desc: 'Source Code for my Portfolio Website.', link: 'https://github.com/iamvivekkaushik/PortfolioWebsite'},
    {name: 'Awesome Card', desc: 'A Flutter package to easily create a Credit Card in your application.', link: 'https://github.com/iamvivekkaushik/AwesomeCard'},
    {name: 'Date Picker Timeline', desc: 'Flutter Date Picker Library that provides a calendar as a horizontal timeline.', link: 'https://github.com/iamvivekkaushik/DatePickerTimelineFlutter'},
    {name: 'Portfolio', desc: 'Check Out My Portfolio Website.', link: 'https://vivekkaushik.com'},
  ];

  constructor() { }

  ngOnInit() {
  }

}
