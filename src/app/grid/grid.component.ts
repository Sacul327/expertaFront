import { Component, OnInit } from '@angular/core';
import { BarService } from '../services/bar.service'
import { Bar } from '../models/Bar.model';

@Component({
  selector: 'grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.css']
})
export class GridComponent implements OnInit {

  constructor(private barService: BarService) { }
  pubs: Bar[];

  ngOnInit() {
    this.barService.getPubs().subscribe((data) => {
      this.pubs = data;
    });
  }
  
  delete(data:Bar){
    this.barService.deletePubs(data.id).subscribe(() => this.ngOnInit());
  }
  
}
