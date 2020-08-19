import { Component, OnInit } from '@angular/core';
import { Bar } from '../models/bar.model';
import { BarService } from '../services/bar.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-add-bar',
  templateUrl: './add-bar.component.html',
  styleUrls: ['./add-bar.component.css']
})
export class AddBarComponent implements OnInit {

  newPub: Bar;
  pubs: Bar[];
  validCuit: boolean;
  constructor(private route: ActivatedRoute,
    private router: Router,
    private barService: BarService) {
    this.validCuit = null;
    this.pubs = new Array<Bar>();
  }

  ngOnInit() {
  }

  async onSubmit(data) {
    this.newPub = data;
    this.validCuit = true;
    this.barService.getPubs().subscribe(result => {
      this.pubs = result;
      result.find(ar => {
        if (ar.cuit === this.newPub.cuit) {
          this.validCuit = false;
        }
      });
    });

    await this.delay(200);
    
    if (this.validCuit === true) {
      this.barService.addPubs(this.newPub).subscribe(result => this.gotoPubsList());
    }
  }

  delay(ms: number) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  gotoPubsList() {
    this.router.navigate(['']);
  }

}
