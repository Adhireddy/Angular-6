import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})
export class ServerComponent implements OnInit {

  allowNewServer=false;
  serverCreated=false;
  serverCreationStatus='No Server Created';
  serverName='TestServer';

  constructor() {
  setTimeout(()=>{this.allowNewServer=true},2000
);
 }

  ngOnInit() {
  }
  onCreateServer(){
    console.log(this.serverCreationStatus);
    this.serverCreationStatus='Server Created! Name is : '+this.serverName;
    this.serverCreated=true;
    console.log(this.serverCreationStatus);
  }
  onUpdateServerName(event:any){
    this.serverName=(<HTMLInputElement>event.target).value;
  }
}
