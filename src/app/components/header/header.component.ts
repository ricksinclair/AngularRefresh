import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent implements OnInit{

  @Output() sendMode:EventEmitter<string> = new EventEmitter<string>()
  viewMode: string = "Recipes"

  ngOnInit() {
    this.sendMode.emit(this.viewMode)
  }

  toggleMode(mode:string){
   this.viewMode = mode
    this.sendMode.emit(this.viewMode)
  }

}
