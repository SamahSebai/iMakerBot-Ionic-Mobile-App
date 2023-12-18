import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss'],
})
export class MenuPage implements OnInit {
  choseMenu='Intelegence';
  menus=[{
    title:'Dashboard',
    categorie:'Builder',
    description:'Review the overall results of your chatbot',
    url:'/menu/dashboard',


  },
  {
    title:'Custom reports',
    categorie:'Builder',
    description:'Create a custom report to examine the results of your chatbot',
    url:'/menu/custom-reports',


  },
  {
    title:'Contacts journey',
    categorie:'Builder',
    description:'Analyse the behavior of your contacts when they interact with your chatbot',
    url:'/menu/contacts-journey',


  },
  {
    title:'AI Providers',
    categorie:'Intelegence',
    description:'Choose and configure your artificial intelligence provider',
    url:'/menu/ai-provider',


  },
  {
    title:'Intents',
    categorie:'Intelegence',
    description:'Define how your bot should interpret and respnd to the user',
    url:'/menu/intents'


  },
  {
    title:'Entities',
    categorie:'Intelegence',
    description:'Define the entities present iun user phrases',
    url:'/menu/entities'


  },
  {
    title:'enhancement',
    categorie:'Intelegence',
    description:'Use the user conservation history to improve your AI model ',
    url:'/menu/enhancement',


  },
  {
    title:'AI model analysis',
    categorie:'Intelegence',
    description:'Get an overview of your model from an full review ',
    url:'/menu/ai-model-anlysis',


  },
  {
    title:'Publication',
    categorie:'Intelegence',
    description:'Train , test and publish your AI model ',
    url:'/menu/publication',


  },


];
  constructor(private route: Router) { }

  ngOnInit() {
  }
  onLoadItem(m){
    this.route.navigateByUrl(m.url);


}
}
