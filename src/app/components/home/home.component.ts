import { Component, EventEmitter, Output, } from '@angular/core';
import { StoreService } from '../../service/store/store.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  event = new EventEmitter<string>()

  products!: any[]
  constructor(private _store: StoreService) { }

  responsiveOptions: any[] | undefined;



  ngOnInit() {

    this.products = [
      {
        name: 'Find restaurants near me',

      },
      {
        name: 'Find carpenter in Saravanampatti',

      },
      {
        name: 'Show me the top pubs in coimbatore',

      },
      {
        name: 'Find restaurants near me',

      },
      {
        name: 'Find carpenter in Saravanampatti',

      },
      {
        name: 'Show me the top pubs in coimbatore',

      }
    ];


    this.responsiveOptions = [
      {
        breakpoint: '1199px',
        numVisible: 1,
        numScroll: 1
      },
      {
        breakpoint: '991px',
        numVisible: 2,
        numScroll: 1
      },
      {
        breakpoint: '767px',
        numVisible: 1,
        numScroll: 1
      }
    ];
  }

  toPrompt(text: string) {
    this._store.toPrompt(text)
  }

}
