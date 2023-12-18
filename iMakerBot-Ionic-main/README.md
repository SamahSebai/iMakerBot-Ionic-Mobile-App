# iMakerBot-Ionic
iMakerBot-Ionic a mobile project.

## File Structure

Within the download you'll find the following directories and files:

```
Project Structure:
├── e2e
├── node_modules
├── src
│   ├── app
│   │   ├── app-routing.module.ts
│   │   ├── app.component.html
│   │   ├── app.component.scss
│   │   ├── app.component.spec.ts
│   │   ├── app.component.ts
│   │   ├── app.module.ts
│   │   ├── home
│   │   │   ├── home.page.ts
│   │   │   ├── home.page.spec.ts
│   │   │   ├── home.page.scss
│   │   │   ├── home.page.html
│   │   │   ├── home.module.ts
│   │   │   └── home-routing.module.ts
│   │   ├── _models
│   │   │   ├── builder-settings.ts
│   │   │   ├── chatBot.ts
│   │   │   ├── component.ts
│   │   │   ├── FlowBlock.ts
│   │   │   ├── index.ts
│   │   │   ├── message.spec.ts
│   │   │   ├── message.ts
│   │   │   ├── user.ts
│   │   │   ├── user1.spec.ts
│   │   │   ├── user1.ts
│   │   │   └── userMessages.ts
│   │   ├── ai-model-anlysis
│   │   │   ├── ai-model-anlysis-routing.module.ts
│   │   │   ├── ai-model-anlysis.module.ts
│   │   │   ├── ai-model-anlysis.page.html
│   │   │   ├── ai-model-anlysis.page.scss
│   │   │   ├── ai-model-anlysis.page.spec.ts
│   │   │   └── ai-model-anlysis.page.ts
│   │   ├── ai-provider
│   │   │   ├── ai-provider-routing.module.ts
│   │   │   ├── ai-provider.module.ts
│   │   │   ├── ai-provider.page.html
│   │   │   ├── ai-provider.page.scss
│   │   │   ├── ai-provider.page.spec.ts
│   │   │   └── ai-provider.page.ts
│   │   ├── analytiques
│   │   │   ├── analytiques-routing.module.ts
│   │   │   ├── analytiques.module.ts
│   │   │   ├── analytiques.page.html
│   │   │   ├── analytiques.page.scss
│   │   │   ├── analytiques.page.spec.ts
│   │   │   └── analytiques.page.ts
│   │   ├── application
│   │   │   ├── application-routing.module.ts
│   │   │   ├── application.module.ts
│   │   │   ├── application.page.html
│   │   │   ├── application.page.scss
│   │   │   ├── application.page.spec.ts
│   │   │   └── application.page.ts
│   │   ├── builder-menu
│   │   │   ├── builder-menu-routing.module.ts
│   │   │   ├── builder-menu.module.ts
│   │   │   ├── builder-menu.page.html
│   │   │   ├── builder-menu.page.scss
│   │   │   ├── builder-menu.page.spec.ts
│   │   │   └── builder-menu.page.ts
│   │   ├── channels
│   │   │   ├── channels-routing.module.ts
│   │   │   ├── channels.module.ts
│   │   │   ├── channels.page.html
│   │   │   ├── channels.page.scss
│   │   │   ├── channels.page.spec.ts
│   │   │   └── channels.page.ts
│   │   ├── create-chatbot
│   │   │   ├── create-chatbot-routing.module.ts
│   │   │   ├── create-chatbot.module.ts
│   │   │   ├── create-chatbot.page.html
│   │   │   ├── create-chatbot.page.scss
│   │   │   ├── create-chatbot.page.spec.ts
│   │   │   └── create-chatbot.page.ts
│   │   ├── dashboard
│   │   │   ├── dashboard-routing.module.ts
│   │   │   ├── dashboard.module.ts
│   │   │   ├── dashboard.page.html
│   │   │   ├── dashboard.page.scss
│   │   │   ├── dashboard.page.spec.ts
│   │   │   └── dashboard.page.ts
│   │   ├── entities
│   │   │   ├── entities-routing.module.ts
│   │   │   ├── entities.module.ts
│   │   │   ├── entities.page.html
│   │   │   ├── entities.page.scss
│   │   │   ├── entities.page.spec.ts
│   │   │   └── entities.page.ts
│   │   ├── ex
│   │   │   ├── ex-routing.module.ts
│   │   │   ├── ex.module.ts
│   │   │   ├── ex.page.html
│   │   │   ├── ex.page.scss
│   │   │   ├── ex.page.spec.ts
│   │   │   └── ex.page.ts
│   │   ├── intents
│   │   │   ├── intents-routing.module.ts
│   │   │   ├── intents.module.ts
│   │   │   ├── intents.page.html
│   │   │   ├── intents.page.scss
│   │   │   ├── intents.page.spec.ts
│   │   │   └── intents.page.ts
│   │   ├── login
│   │   │   ├── login-routing.module.ts
│   │   │   ├── login.module.ts
│   │   │   ├── login.page.html
│   │   │   ├── login.page.scss
│   │   │   ├── login.page.spec.ts
│   │   │   └── login.page.ts
│   │   ├── menu
│   │   │   ├── menu-routing.module.ts
│   │   │   ├── menu.module.ts
│   │   │   ├── menu.page.html
│   │   │   ├── menu.page.scss
│   │   │   ├── menu.page.spec.ts
│   │   │   └── menu.page.ts
│   │   ├── messanger
│   │   │   ├── messanger-routing.module.ts
│   │   │   ├── messanger.module.ts
│   │   │   ├── messanger.page.html
│   │   │   ├── messanger.page.scss
│   │   │   ├── messanger.page.spec.ts
│   │   │   └── messanger.page.ts
│   │   ├── msg-chart
│   │   │   ├── msg-chart-routing.module.ts
│   │   │   ├── msg-chart.module.ts
│   │   │   ├── msg-chart.page.html
│   │   │   ├── msg-chart.page.scss
│   │   │   ├── msg-chart.page.spec.ts
│   │   │   └── msg-chart.page.ts
│   │   ├── new-entities
│   │   │   ├── new-entities-routing.module.ts
│   │   │   ├── new-entities.module.ts
│   │   │   ├── new-entities.page.html
│   │   │   ├── new-entities.page.scss
│   │   │   ├── new-entities.page.spec.ts
│   │   │   └── new-entities.page.ts
│   │   ├── new-intents
│   │   │   ├── new-intents-routing.module.ts
│   │   │   ├── new-intents.module.ts
│   │   │   ├── new-intents.page.html
│   │   │   ├── new-intents.page.scss
│   │   │   ├── new-intents.page.spec.ts
│   │   │   └── new-intents.page.ts
│   │   ├── register
│   │   │   ├── register-routing.module.ts
│   │   │   ├── register.module.ts
│   │   │   ├── register.page.html
│   │   │   ├── register.page.scss
│   │   │   ├── register.page.spec.ts
│   │   │   └── register.page.ts
│   │   ├── resetPassword
│   │   │   ├── confirme-email
│   │   │   │   ├── confirme-email-routing.module.ts
│   │   │   │   ├── confirme-email.module.ts
│   │   │   │   ├── confirme-email.page.html
│   │   │   │   ├── confirme-email.page.scss
│   │   │   │   ├── confirme-email.page.spec.ts
│   │   │   │   └── confirme-email.page.ts
│   │   │   ├── create-password
│   │   │   │   ├── create-password-routing.module.ts
│   │   │   │   ├── create-password.module.ts
│   │   │   │   ├── create-password.page.html
│   │   │   │   ├── create-password.page.scss
│   │   │   │   ├── create-password.page.spec.ts
│   │   │   │   └── create-password.page.ts
│   │   │   ├── create-password
│   │   │   │   ├── create-password-routing.module.ts
│   │   │   │   ├── create-password.module.ts
│   │   │   │   ├── create-password.page.html
│   │   │   │   ├── create-password.page.scss
│   │   │   │   ├── create-password.page.spec.ts
│   │   │   │   └── create-password.page.ts
│   │   │   ├── resend-email
│   │   │   │   ├── resend-email-routing.module.ts
│   │   │   │   ├── resend-email.module.ts
│   │   │   │   ├── resend-email.page.html
│   │   │   │   ├── resend-email.page.scss
│   │   │   │   ├── resend-email.page.spec.ts
│   │   │   │   └── resend-email.page.ts
│   │   │   ├── try-again
│   │   │   │   ├── try-again-routing.module.ts
│   │   │   │   ├── try-again.module.ts
│   │   │   │   ├── try-again.page.html
│   │   │   │   ├── try-again.page.scss
│   │   │   │   ├── try-again.page.spec.ts
│   │   │   │   └── try-again.page.ts
│   │   ├── services
│   │   │   ├── add-block.service.spec.ts
│   │   │   ├── add-block.service.ts
│   │   │   ├── bot-chat.service.spec.ts
│   │   │   ├── bot-chat.service.ts
│   │   │   ├── builder-settings.service.spec.ts
│   │   │   ├── builder-settings.service.ts
│   │   │   ├── login-service.service.spec.ts
│   │   │   ├── login-service.service.ts
│   │   │   ├── message.service.spec.ts
│   │   │   ├── message.service.ts
│   │   │   ├── messanger.service.spec.ts
│   │   │   ├── messanger.service.ts
│   │   │   ├── register-service.service.spec.ts
│   │   │   ├── register-service.service.ts
│   │   │   ├── reset-password-service.service.spec.ts
│   │   │   ├── reset-password-service.service.ts
│   │   │   ├── user.service.spec.ts
│   │   │   ├── user.service.ts
│   │   │   ├── watson-service.service.spec.ts
│   │   │   └── watson-service.service.ts
│   │   ├── watson
│   │   │   ├── watson-routing.module.ts
│   │   │   ├── watson.module.ts
│   │   │   ├── watson.page.html
│   │   │   ├── watson.page.scss
│   │   │   ├── watson.page.spec.ts
│   │   │   └── watson.page.ts
│   ├── assets
│   │   ├── icon
│   ├── environments
│   │   │   ├── environment.prod.ts
│   │   │   ├── environment.ts
│   ├── theme
│   │   │   ├── variables.scss
│   ├── global.scss
│   ├── index.html
│   ├── main.ts
│   ├── polyfills.ts
│   ├── test.ts
│   ├── zone-flags.ts
├── .browserslistrc
├── .editorconfig
├── .eslintrc.json
├── .gitignore
├── angular.json
├── datatest.json
├── ionic.config.json
├── karma.conf.js
├── package-lock.json
├── package.json
├── README.md
├── tsconfig.app.json
├── tsconfig.json
└── tsconfig.spec.json

```
## Browser Support

At present, we officially aim to support the last two versions of the following browsers:

<img src="https://github.com/creativetimofficial/public-assets/blob/master/logos/chrome-logo.png?raw=true" width="64" height="64"> <img src="https://raw.githubusercontent.com/creativetimofficial/public-assets/master/logos/firefox-logo.png" width="64" height="64"> <img src="https://raw.githubusercontent.com/creativetimofficial/public-assets/master/logos/edge-logo.png" width="64" height="64"> <img src="https://raw.githubusercontent.com/creativetimofficial/public-assets/master/logos/safari-logo.png" width="64" height="64"> <img src="https://raw.githubusercontent.com/creativetimofficial/public-assets/master/logos/opera-logo.png" width="64" height="64">

## Test CRUD Requests with JSON Server (Mockserver)

### Setup up of JSON server

- Install and run JSON Server using `npx json-server --watch db.json`

- `datatest.json` file outside your src folder to connect it as your database

- JSON Server has built in mapping and the port 3000 so in the server will be used with all tests you need to set all you tables in the `datatest.json`file so for example to setup the URL in the HttpService would be : `http://localhost3000/${TableName}`
- If you make POST, PUT, PATCH or DELETE requests, changes will be automatically and safely saved to `datatest.json`

- Id values are not mutable. Any `id` value in the body of your PUT or PATCH request will be ignored. Only a value set in a POST request will be respected, but only if not already taken.
6- A POST, PUT or PATCH request should include a `Content-Type: application/json` header to use the JSON in the request body. Otherwise it will return a 2XX status code, but without changes being made to the data.

Also, You can start JSON Server on other ports with the `--port` flag:

```bash
$ json-server --watch datatest.json --port 3004
```

For more info you can read more in json-server doc [Checkout] (https://github.com/typicode/json-server)json-server


## Quelques interfaces 
  #### Register Page
  ![This is an image](https://github.com/gdcollectdata/iMakerBot-Ionic/blob/main/src/assets/json-server/register.png)
  
  
  #### Login Page
   ![This is an image](https://github.com/gdcollectdata/iMakerBot-Ionic/blob/main/src/assets/json-server/login.png)
 
  #### Dashboard Page 
![This is an image](https://github.com/gdcollectdata/iMakerBot-Ionic/blob/main/src/assets/json-server/Dashborad1.png)
![This is an image](https://github.com/gdcollectdata/iMakerBot-Ionic/blob/main/src/assets/json-server/Dashborad2.png)

  #### Builder Menu Page 
  ![This is an image](https://github.com/gdcollectdata/iMakerBot-Ionic/blob/main/src/assets/json-server/builder-menu.png)
  ![This is an image](https://github.com/gdcollectdata/iMakerBot-Ionic/blob/main/src/assets/json-server/builder-menu1.png)
  ![This is an image](https://github.com/gdcollectdata/iMakerBot-Ionic/blob/main/src/assets/json-server/builder-menu2.png)
  ![This is an image](https://github.com/gdcollectdata/iMakerBot-Ionic/blob/main/src/assets/json-server/builder-menu3.png)
  
  #### Demo Builder Menu Page 

  ![This is an image](https://github.com/gdcollectdata/iMakerBot-Ionic/blob/main/src/assets/json-server/demo%20(1).gif)
