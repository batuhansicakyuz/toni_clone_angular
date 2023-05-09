import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'header-root',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
  title = 'ng_clone_online_reader';

  toHome(){
    document.getElementById("home")?.scrollIntoView({behavior:"smooth"});
  }
  toThird(){
    document.getElementById("thirdbehavior")?.scrollIntoView({behavior:"smooth"});
  }

}
