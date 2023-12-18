import { Component, OnInit , EventEmitter, Output} from '@angular/core';
import { AlertController, ModalController } from '@ionic/angular';
import { FormBuilder, FormGroup, Validators  } from '@angular/forms';
import { AddBlockService } from '../services/add-block.service';
import { ChatBot } from '../_models/chatBot';
import { BotChatService } from '../services/bot-chat.service';
import { UserMsgs } from '../_models/userMessages';
import { FlowBlock } from '../_models/FlowBlock';
import { ComponentModel } from '../_models/component';
import { BuilderSettings } from '../_models/builder-settings';
import { BuilderSettingsService } from '../services/builder-settings.service';

@Component({
  selector: 'app-builder-menu',
  templateUrl: './builder-menu.page.html',
  styleUrls: ['./builder-menu.page.scss'],
})
export class BuilderMenuPage implements OnInit {
  oldAuth=false;
  appId=false;
  isActivated=true;
  selectedId = 'overview';
  overview=true;
  configuration: any;
  isblockOpened = false;
  issearchOpened = false;
  issettingsOpened = false;
  isactive1 = false;
  isactive2 = false;
  isactive3 = false;
  isactive4 = false;
  isactive5 = false;
  isactive6 = false;

  isChatOpen = false;
  isTextOpened = false;
  isPopupTextOpened = false;
  isNewBlockOpened = false;
  isNewBlockPopupOpened = false;
  isCompDescOpened = false;

  isactive7 = false;
  class = ' active';
  classnotactive = '';
  chatForm!: FormGroup;
  msgs: UserMsgs[] = [];

  showAddTitle!: boolean;

  secblockObj: ComponentModel = new ComponentModel();
  secblockArr: ComponentModel[] = [];
  blockObj: FlowBlock = new FlowBlock();
  blockArr: FlowBlock[] = [];
  addBlockValue = '';
  sessionExObj: BuilderSettings = new BuilderSettings();
  sessionExArr: BuilderSettings[] = [];

  chatBot: ChatBot = {
    chatbotname: 'iMakerBot',
    image: `/assets/header_dropdown.png`,
    message: 'Hi there my name is ',
  };
  blocks: [
    {
      'id': 1;
      'description': 'bonjour';
      'name': 'fatma';
      'components': [
        {
          'componentType': 1;
          'description': 'voici ton chatbot';
        }
      ];
    },
    {
      'description': 'molk';
      'name': 'oui';
      'id': 2;
    }
  ];
  formValue!: FormGroup;
  blockData!: any;
  sessionExData!: any;
  sessionExForm!: FormGroup;

  // chatBot: ChatBot;
  testBlock: FlowBlock = {
    id: 0,
    description: 'testing add block front',
    name: 'layla',
    components: [],
  };

  newBlock: FlowBlock[];
  testSetting: BuilderSettings = {
    id: 0,
    aiReliability: 20,
    automaticTracking: true,
    useRouterContext: true,
    sessionExpiration: 50,
    actionTimeout: 20,
    flowIdentifier: 8,
    configurationVariables: 'config',
    flowBlock: this.testBlock,
  };
  searchText = '';
  router: any;
  constructor(
    private fb: FormBuilder,
    private fB: FormBuilder,
    private sessionBuild: FormBuilder,
    private botChatservice: BotChatService,

    private settingsService: BuilderSettingsService,
    private addBlockService: AddBlockService
  ) {}


  addMsg() {
    this.msgs.push({
      message: this.chatForm.value.msg,
    });
  }

  getAllBlocks() {
    this.addBlockService.getData().subscribe(
      (res) => {
        this.blockData = res;
      },
      (err) => {
        console.log(err);
      }
    );
  }
  getAllSessionEx() {
    this.settingsService.getAllSettingData().subscribe(
      (res) => {
        this.sessionExData = res;
      },
      (err) => {
        console.log(err);
      }
    );
  }

  addBlock() {
    this.blockObj.description = this.formValue.value.description;
    this.blockObj.name = this.formValue.value.name;
    this.secblockObj.cdescription = this.formValue.value.Cdescription;
    this.addBlockService.addBlock(this.blockObj).subscribe(
      (res) => {
        console.log(res);
        console.log('Record inserted successfully');
        this.formValue.reset();
        this.getAllBlocks();
      },
      (err) => {
        console.log(err);
      }
    );
  }
  addSessionEx() {
    this.sessionExObj.sessionExpiration =
      this.sessionExForm.value.session_expiration;

    this.settingsService.addSetting(this.sessionExObj).subscribe(
      (res) => {
        console.log(res);
        console.log('session expiration Record inserted successfully');
        this.sessionExForm.reset();
        this.getAllSessionEx();
      },
      (err) => {
        console.log(err, 'session expiration Failed');
      }
    );
  }

  deleteBlock(eblock: any) {
    this.addBlockService.deleteData(eblock.id).subscribe(
      (res) => {
        console.log('Record Deleted Succesfully');
        this.getAllBlocks();
      },
      (err) => {
        console.log(err);
      }
    );
  }

  addSettings(newsetting: BuilderSettings) {
    this.settingsService.addSetting(newsetting).subscribe({
      next: (data) => {
        console.log(data);
      },
      error: (err) => {
        console.log(err);
      },
      complete: () => {
        console.log('success');
      },
    });
  }

  onSearchTextEntred(searchValue: string) {
    this.searchText = searchValue;
    console.log(this.searchText);
  }
  toggleblock(): void {
    this.isblockOpened = !this.isblockOpened;
  }
  toggletext(): void {
    // eslint-disable-next-line @typescript-eslint/no-unused-expressions
    (this.isTextOpened = !this.isTextOpened) &&
      (this.isblockOpened = !this.isblockOpened);
  }
  togglesearch(): void {
    this.issearchOpened = !this.issearchOpened;
  }
  togglesettings(): void {
    this.issettingsOpened = !this.issettingsOpened;
  }
  toggleChat(): void {
    this.isChatOpen = !this.isChatOpen;
  }
  togglePopupText(): void {
    this.isPopupTextOpened = !this.isPopupTextOpened;
  }
  toggleNewBlock(): void {
    this.isNewBlockOpened = !this.isNewBlockOpened;
  }
  toggleNewPopupBlock(): void {
    this.isNewBlockPopupOpened = !this.isNewBlockPopupOpened;
  }
  toggleCompDesc(): void {
    this.isCompDescOpened = !this.isCompDescOpened;
  }

  load(m: any){
    this.router.navigateByUrl(m.url);

  }
  selectHandler(id){
    this.selectedId=id;
  }
  oldAuthHandler(){
    this.oldAuth=!this.oldAuth;
  }

  appIdHandler(){
    this.appId=!this.appId;
  }

  ngOnInit(): void {
    this.formValue = this.fB.group({
      description: [''],
      name: [''],
    });
    this.sessionExForm = this.sessionBuild.group({
      sessionExpiration: [],
    });

    this.getbotMsgs();
    this.chatForm = this.fb.group({
      msg: ['', Validators.required],
    });
    this.addBlockValue = '';
    this.blockObj = new FlowBlock();
    this.blockArr = [];
    this.secblockObj = new ComponentModel();
    this.secblockArr = [];
    this.getAllBlocks();

    this.sessionExObj = new BuilderSettings();
    this.sessionExArr = [];
    this.getAllSessionEx();
  }
  private getbotMsgs() {
    this.botChatservice.getBotMsgs().subscribe((data) => {
      console.log(data);
    });
  }
  // getSettingsById(id: number) {
  //   this.settingsService.getSettingById(id).subscribe({
  //     next: (data) => {
  //       console.log(data);
  //     },
  //     error: (err) => {
  //       console.log(err);
  //     },
  //     complete: () => {
  //       console.log("success");
  //     },
  //   });
  // }
  // getAllSettings() {
  //   this.settingsService.getAllSettings().subscribe({
  //     next: (data) => {
  //       console.log(data);
  //     },
  //     error: (err) => {
  //       console.log(err);
  //     },
  //     complete: () => {
  //       console.log("success");
  //     },
  //   });
  // }
  // deleteSetting(id: number) {
  //   this.settingsService.deleteSetting(id).subscribe({
  //     next: (data) => {
  //       console.log(data);
  //     },
  //     error: (err) => {
  //       console.log(err);
  //     },
  //     complete: () => {
  //       console.log("success");
  //     },
  //   });
  // }
}
