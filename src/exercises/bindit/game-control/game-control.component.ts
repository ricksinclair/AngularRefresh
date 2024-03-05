import {Component, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrl: './game-control.component.scss'
})
export class GameControlComponent {

  @Output() tally = new EventEmitter<number>()
  count: number = 0
  interval: number | undefined
  values: number[] = []


  startGame() {
    this.interval = setInterval(() => {
      this.count += 1
      this.values.push(this.count)
      this.tally.emit(this.count)
    }, 1000)
  }

  endGame() {
    clearInterval(this.interval)
    this.values = []
    this.count = 0
    this.tally.emit(0)


  }
}
