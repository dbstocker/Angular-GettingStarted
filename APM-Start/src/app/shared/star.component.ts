import { Component, EventEmitter, Input, OnChanges, Output } from '@angular/core';

@Component({
  selector: 'pm-stars',
  templateUrl: './star.component.html',
  styleUrls: ['./star.component.css']
})
export class StarComponent implements OnChanges {
  @Input()
  rating: number = 4.5;

  starWidth: number;

  @Output()
  ratingClicked: EventEmitter<string> = new EventEmitter<string>();

  ngOnChanges(): void {
    this.starWidth = this.rating * 75 / 5;
  }

  getStars(value: number) {
    this.starWidth = value * 75 / 5;
  }

  handleRatingClick(): void {
    this.ratingClicked.emit(`The rating ${this.rating} was clicked!`);
  }
}
