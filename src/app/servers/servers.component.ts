import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers', // element selector
  // selector: '[app-servers]', // attribute selector
  // selector: '.app-servers', // class selector
  templateUrl: './servers.component.html', // external template
  // template: `
  //   <app-server></app-server>
  //   <app-server></app-server>
  // `, // inline template
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
