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

  responsiveOptions = [
    {
        breakpoint: '1536px', // 2XL
        numVisible: 4,        // Show 4 items
        numScroll: 1          // Scroll 1 item at a time
    },
    {
        breakpoint: '1200px',  // XL
        numVisible: 4,         // Show 4 items
        numScroll: 1
    },
    {
        breakpoint: '992px',   // LG
        numVisible: 3,         // Show 3 items
        numScroll: 1
    },
    {
        breakpoint: '768px',   // MD
        numVisible: 2,         // Show 2 items
        numScroll: 1
    },
    {
        breakpoint: '576px',   // SM
        numVisible: 1,         // Show 1 item
        numScroll: 1
    },
    {
        breakpoint: '440px',   // XS
        numVisible: 1,         // Show 1 item
        numScroll: 1
    }
];



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
  }

  toPrompt(text: string) {
    this._store.toPrompt(text)
  }

}
