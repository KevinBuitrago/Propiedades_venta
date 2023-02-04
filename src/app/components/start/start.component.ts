import { Component } from '@angular/core';
import { ApiService } from "../../service/api.service";
import { GetHome } from "../../../modules/getDataHomeSale";
import {Router} from '@angular/router'

@Component({
  selector: 'app-start',
  templateUrl: './start.component.html',
  styleUrls: ['./start.component.css']
})
export class StartComponent {

  dataHomeSale: Array<GetHome> = [];

  constructor(private api: ApiService, private router: Router) { }
  
  ngOnInit(): void {
    this.api.getHome().subscribe(dta => {
        this.dataHomeSale= Object.values(dta);
    })
  }

  changeOfView(id: string){
    this.router.navigate(["detail", id]);
  }

}
