import { Component, OnInit, ViewChild } from '@angular/core';
import { HomeComponent } from '../home/home.component';
import { StoreService } from '../../service/store/store.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-prompt',
  templateUrl: './prompt.component.html',
  styleUrl: './prompt.component.css'
})
export class PromptComponent implements OnInit {
  search = ''
  constructor(private _store: StoreService,private _router:Router) { }
  ngOnInit(): void {
    this._store.store.subscribe((res) => {
      this.search = res
    })
  }
  send(){
   this._router.navigate(['result']) 
  }
}
