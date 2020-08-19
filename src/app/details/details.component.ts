import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Bar } from '../models/bar.model';
import { BarService } from '../services/bar.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  //@Input() id: string;
  pub:Bar;
  selectedPub: Bar;
  allDataFetched: boolean = false;
  constructor(private route: ActivatedRoute,
              private barService: BarService) {
              }

  ngOnInit() {
    this.barService.getPubs().subscribe((data) => {
      this.pub = data.find(x => x.id.toString() == this.route.snapshot.paramMap.get('id'));
      console.log(this.pub);
    });
  }
}
