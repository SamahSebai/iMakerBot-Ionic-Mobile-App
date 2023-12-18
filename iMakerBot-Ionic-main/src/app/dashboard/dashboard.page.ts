/* eslint-disable @typescript-eslint/no-unused-expressions */
import { Component, OnInit , ViewChild} from '@angular/core';
import { Router } from '@angular/router';
import { MessageService } from '../services/message.service';
import { UserService } from '../services/user.service';
import { Message } from '../_models/message';
import { User1 } from '../_models/user1';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
})
export class DashboardPage implements OnInit {
  @ViewChild('hrzLineChart2') hrzLineChart2;
  @ViewChild('hrzLineChart3') hrzLineChart3;

  hrzLines2: any;
  colorArray: any;
  hrzLines3: any;
  //colorArray: any;
  users: User1[];
  msg: Message[];
  constructor(private router: Router , private userservice: UserService , private messageservice: MessageService) { }
  ionViewDidEnter() {
    this.createGroupLineChart();
    this.createGroupLineChart3();
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
  createGroupLineChart3() {
    this.hrzLines3 = new Chart(this.hrzLineChart3.nativeElement, {
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

  ngOnInit(): void {
    this.getuser();
    this.getmsg();
  }
  private getuser(){
    this.userservice.getUser().subscribe(data =>{
      console.log(data);
      this.users=data;
      this.getuser();
    }),
    console.error;
  }
  private getmsg(){
    this.messageservice.getmsg().subscribe(data =>{
      this.msg=data;
      this.getmsg();
    }),
    console.error;
  }
}
