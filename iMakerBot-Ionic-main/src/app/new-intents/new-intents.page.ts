/* eslint-disable @typescript-eslint/naming-convention */
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-intents',
  templateUrl: './new-intents.page.html',
  styleUrls: ['./new-intents.page.scss'],
})
export class NewIntentsPage implements OnInit {
  variableAnswersToggler = false;
  sideLinks=[
    {
      title:'AI Providers',
      categorie:'Intelegence',
      Description:'Choose and configure your artificial intelligence provider',
      url:'ai-provider',
    },
    {
      title:'Intents',
      categorie:'Intelegence',
      Description:'Define how your bot should interpret and respond to the user',
      url:'intents'
    },
    {
      title:'Entities',
      categorie:'Intelegence',
      Description:'Define the entities present in user phrases',
      url:'entities'
    },
    {
      title:'Content assistant',
      categorie:'Intelegence',
      Description:'Manage your content using combination',
      url:'content-assistant'
    },
    {
      title:'Enhancement',
      categorie:'Intelegence',
      Description:'Use the user conversation history to improve your AI model',
      url:'enhancement',
    },
    {
      title:'AI model analysis',
      categorie:'Intelegence',
      Description:'Get an overview of your model from a full review',
      url:'ai-model-analysis',
    },
    {
      title:'Publication',
      categorie:'Intelegence',
      Description:'Train, test and publish your AI model',
      url:'publication',
    },
  ];

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  load(m: any){
    this.router.navigateByUrl(m.url);

  }
}
