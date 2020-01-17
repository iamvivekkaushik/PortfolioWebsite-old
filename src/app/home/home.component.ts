import {Component, ElementRef, HostListener, OnInit, Renderer2, ViewChild} from '@angular/core';
import {Project} from '../models/project';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  date: Date = new Date();
  projects: Project[] = [
    {
      name: 'Router Manager JioFi', image: 'assets/projects/jiofi_manager.png', desc: 'This was the first app I published. Initially I ' +
        'made this app for my own use, in India there is this portable wifi device called JioFi. I was using it to connect to the ' +
        'internet, but it was a pain to know the status for network or battery level of the device. So, I created this app to make it ' +
        'easier for me to manage the JioFi device. Then I added more features to it and published it on Google Play Store for others to ' +
        'use.', demo: 'https://play.google.com/store/apps/details?id=com.vivek.jiofimanager&hl=en_IN', source: ''
    },
    {
      name: 'Date Picker Timeline', image: 'assets/projects/date_picker_timeline.png', desc: 'This is a flutter library I made for an app' +
        ' I was working on. I needed a date picker as a timeline. I searched online for any prebuilt library that could do something that' +
        ' I wanted, but couldn\'t find any! So I decided to build a library of my own.',
      demo: 'https://pub.dev/packages/date_picker_timeline', source: 'https://github.com/iamvivekkaushik/DatePickerTimelineFlutter'
    },
    {
      name: 'Awesome Card', image: 'assets/projects/awesome_card.png', desc: 'Another Flutter library to create a credit card Widget. ' +
        'This one I build just for fun. I was looking at some design inspirations on the internet and a lot of designs used a credit ' +
        'cards. This was a really fun project and the result was worth it. I published this package on pub.dev and the code is available ' +
        'on github.', demo: 'https://pub.dev/packages/awesome_card', source: 'https://github.com/iamvivekkaushik/AwesomeCard'
    },
    {
      name: 'Baby Saffron', image: 'assets/projects/baby_saffron.png', desc: 'This is an e-commerce website created using TypeScript and ' +
        'angular framework. This project was create while I was working in the company. Demo version is hosted on the company\'s domain' +
        ' in case there is an issue with the demo link, let me know.', demo: 'https://babysaffron.civilmachines.com', source: ''
    },
    {
      name: 'Resumify', image: 'assets/projects/resumify.png', desc: 'This is a native Android app created using Java. This app can ' +
        'generate resume with pre-built templates. User can select a template into the app fill up the information that they want on ' +
        'their resume and the app will generate and save it as a pdf file.',
      demo: 'https://play.google.com/store/apps/details?id=com.vivekkaushik.resumify&hl=en', source: ''
    },
  ];

  showScrollButton = false;

  constructor() {
  }

  ngOnInit() {
  }

  @HostListener('window:scroll', ['$event']) // for window scroll events
  onScroll(event) {
    this.showScrollButton = window.pageYOffset > 500;
  }

  moveToTop() {
    window.scrollTo({ left: 0, top: 0, behavior: 'smooth' });
    window.scroll()
  }
}
