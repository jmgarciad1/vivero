import { Component, OnInit } from '@angular/core';
import { Planta } from './planta';
import { PlantaService } from './planta.service';

@Component({
  selector: 'app-planta',
  templateUrl: './planta.component.html',
  styleUrls: ['./planta.component.css'],
})
export class PlantaComponent implements OnInit {
  public plantas: Array<Planta> = [];
  public plantasInterior: number = 0;
  public plantasExterior: number = 0;

  constructor(private plantaService: PlantaService) {}

  getPlantas() {
    this.plantaService.getPlantas().subscribe((plantas) => {
      this.plantas = plantas;
      this.plantas.forEach((planta) => {
        if (planta.tipo == 'Interior') {
          this.plantasInterior++;
        } else {
          this.plantasExterior++;
        }
      });
    });
  }

  ngOnInit() {
    this.getPlantas();
  }
}
