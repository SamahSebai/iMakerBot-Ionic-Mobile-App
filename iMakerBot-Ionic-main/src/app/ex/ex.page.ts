import { Component, ViewChild} from '@angular/core';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-ex',
  templateUrl: './ex.page.html',
  styleUrls: ['./ex.page.scss'],

})
export class ExPage {
  @ViewChild('hrzLineChart2') hrzLineChart2;
  hrzLines2: any;
  colorArray: any;
  constructor() { }

  ionViewDidEnter() {
    this.createGroupLineChart();
  }
  createGroupLineChart() {
    this.hrzLines2 = new Chart(this.hrzLineChart2.nativeElement, {
      type: 'line',
      data: {
        labels: ['0', '8Jul', '11Jul', '14JUL', '17jUL'],
        datasets: [{
          label: 'Active User',
          data: [0, 1, 2, 3, 4],
          backgroundColor: 'rgba(38, 194, 129, 0.5)',
          borderColor: 'rgb(38, 194, 129)',
          borderWidth: 1
        },
        {
          label: 'Engaged User',
          data: [4,3,2,1,0],
          backgroundColor: 'rgba(242, 38, 19, 0.5)',
          borderColor: 'rgb(242, 38, 19)',
          borderWidth: 1
        }]
      },
      options: {
        scales: {
          yAxes: [{
            ticks: {
              beginAtZero: true
            }
          }]
        }
      }
    });
  }


}
