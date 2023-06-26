import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
navState=false  
@Output() stateNavMenu = new EventEmitter();
toggle(){
 this.navState=!this.navState
 this.stateNavMenu.emit(this.navState)
}





}
