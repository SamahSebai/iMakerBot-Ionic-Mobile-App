import { Component, ViewChild } from '@angular/core';
import { Chart } from 'chart.js';
@Component({
  selector: 'app-msg-chart',
  templateUrl: './msg-chart.page.html',
  styleUrls: ['./msg-chart.page.scss'],
})
export class MsgChartPage {


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
          label: 'Sent Message',
          data: [0, 1, 3, 2, 4],
          backgroundColor: 'rgba(38, 194, 129, 0.5)',
          borderColor: 'rgb(38, 194, 129)',
          borderWidth: 1
        },
        {
          label: 'Received Message',
          data: [0,3,2,1,4],
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

