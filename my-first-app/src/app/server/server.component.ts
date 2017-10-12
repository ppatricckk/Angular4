import { Component,OnInit }//Component is a exported decorator in '@angular/core'
 from '@angular/core' 

@Component({
    // selector -> name by which you use them in html files

  /* selector:'app-server',    */   /* (Element Style) used as <app-server></app-server> */
 /*  selector:'[app-server]', */   /* (Attribute Style) used as <div app-server></div> */
    selector:'.app-server',    /* (Class Style) used as <div class='app-server'></div> */
    templateUrl:'./server.component.html',
    styleUrls: ['./server.component.css']
})
export class ServerComponent implements OnInit{

    serverID:number = 10;
    status:String = 'Online';

    allowNewServer = false;
    createServerStatus= 'No server was created';

    serverName = "Test Server";
  
    constructor(){
      setTimeout(()=>{
          this.allowNewServer = true;
      },2000)}
  
      onCreateServer(){
        this.createServerStatus = "Server was created with name :" + this.serverName;
  
      }

    getServerStatus(){
        return this.status;
    }

    onUpdateServerName(event:any)
    {
       this.serverName = event.target.value;
    }
     ngOnInit(){}

}