import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})
export class ServerComponent implements OnInit {

  allowNewServer=false;
  serverCreationStatus='No Server Created';
  serverName='TestServer';

  constructor() {
  setTimeout(()=>{this.allowNewServer=true},2000
); }

  ngOnInit() {
  }
  onCreateServer(){
    this.serverCreationStatus='Server Created! Name is : '+this.serverName;
  }
  onUpdateServerName(event:any){
    this.serverName=(<HTMLInputElement>event.target).value;
  }
}
