import {Component} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterOutlet} from '@angular/router';
import {VerbItem} from "../shared/models/verbItem";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  tableHeaders = {
    first: '1-ая форма',
    second: '2-ая форма',
    third: '3-ая форма',
    translation: 'Перевод'
  }

  items: VerbItem[] = [
    new VerbItem(
      'be',
      'was/were',
      'been',
      'быть, являться, находиться',
      'Don\'t <b>be</b> late.',
      'I <b>was</b> tired after work.',
      'I\'ve never <b>been</b> this happy.',
    ),
    new VerbItem(
      'do',
      'did',
      'done',
      'делать, выполнять',
      'What <b>do</b> you do? <br>\I can\'t <b>do',
      'You <b>did</b> a great job!',
      'I\'ve never <b>done</b> this before.',
    ),
    new VerbItem(
      'go',
      'went',
      'gone',
      'идти',
      'I <b>go</b> to the store every other day',
      'I <b>went</b> to the store yesterday.',
      'Tom\'s not here. He\'s <b>gone</b> to the store.',
    ),
  ]

}
