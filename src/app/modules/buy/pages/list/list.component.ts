import { Component , OnInit} from '@angular/core';
import { Buy } from 'src/app/interfaces/buy';
import { BuyService } from 'src/app/shared/services/buy.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.sass']
})
export class ListComponent implements OnInit {
  buys: Buy[] | undefined;

  constructor(
    private service: BuyService
  ) {}

  ngOnInit(): void {
    this.getBuys();
  }

  getBuys() {
    this.service.getBuys().subscribe((data) => {
      this.buys = data.filter(e => e.username === JSON.parse(localStorage.getItem('user')!).username);
    })
  }

}
