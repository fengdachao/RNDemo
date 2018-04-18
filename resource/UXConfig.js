const contactFormSection = [{
  "type": "lzHeader",
  "showmiddlename": "true",
  "input": [{
      "name": "nickname"
    },
    {
      "name": "title",
      "displaybydefault": "false"
    },
    {
      "name": "department",
      "displaybydefault": "false"
    },
    {
      "name": "company",
      "displaybydefault": "false"
    }
  ]
},
{
  "type": "lzEmail",
  "title": "Email",
  "validator": "email",
  "input": [{
      "name": "home",
      "defaultemail": "true"
    },
    {
      "name": "work"
    },
    {
      "name": "other"
    }
  ]
},
{
  "type": "lzPhone_mobile",
  "title": "Mobile",
  "validator": "phone",
  "input": [{
      "name": "home"
    },
    {
      "name": "work"
    },
    {
      "name": "other"
    }
  ]
},
{
  "type": "lzPhone",
  "title": "Phone",
  "validator": "phone",
  "input": [{
      "name": "home"
    },
    {
      "name": "work"
    },
    {
      "name": "other"
    }
  ]
},
{
  "type": "lzAddress",
  "title": "Address",
  "grouplabel": "home,work,other",
  "showmap": "true",
  "input": [{
      "name": "street",
      "type": "textarea",
      "rows": 2
    },
    {
      "name": "city"
    },
    {
      "name": "state"
    },
    {
      "name": "zip"
    },
    {
      "name": "country"
    }
  ]
},
{
  "type": "lzPersonal",
  "title": "Personal",
  "allowduplicates": "false",
  "input": [{
      "name": "birthday",
      "type": "date"
    },
    {
      "name": "anniversary",
      "type": "date"
    }
  ]
},
{
  "type": "lzPhone_fax",
  "title": "Fax",
  "validator": "phone",
  "displaybydefault": "false",
  "input": [{
      "name": "home"
    },
    {
      "name": "work"
    },
    {
      "name": "other"
    }
  ]
},
{
  "type": "lzPhone_pager",
  "title": "Pager",
  "validator": "pager",
  "displaybydefault": "false",
  "input": [{
      "name": "home"
    },
    {
      "name": "work"
    },
    {
      "name": "other"
    }
  ]
},
{
  "type": "lzIM",
  "title": "Chat address",
  "displaybydefault": "false",
  "input": [{
      "name": "google"
    },
    {
      "name": "msn"
    },
    {
      "name": "yahoo"
    },
    {
      "name": "aim"
    },
    {
      "name": "skype"
    },
    {
      "name": "qq"
    },
    {
      "name": "icq"
    },
    {
      "name": "jabber"
    }
  ]
},
{
  "type": "lzWeb",
  "title": "Website",
  "displaybydefault": "false",
  "validator": "url",
  "input": [{
      "name": "home"
    },
    {
      "name": "work"
    },
    {
      "name": "other"
    }
  ]
},
{
  "type": "lzNote",
  "title": "Notes",
  "displaybydefault": "false",
  "allowduplicates": "false",
  "input": [{
    "name": "notes",
    "type": "textarea"
  }]
},
{
  "type": "lzOther",
  "title": "Other",
  "displaybydefault": "false",
  "input": [{
    "name": "other"
  }]
}
]
const extensionnametypemap = {
"item": [{
    "type": "img_generic",
    "preview": "true",
    "transcode": "false",
    "extensionnames": [
      "jpg",
      "jpeg"
    ]
  },
  {
    "type": "img_png",
    "preview": "true",
    "transcode": "false",
    "extensionnames": [
      "png"
    ]
  },
  {
    "type": "img_gif",
    "preview": "true",
    "transcode": "false",
    "extensionnames": [
      "gif"
    ]
  },
  {
    "type": "psd",
    "preview": "false",
    "transcode": "false",
    "extensionnames": [
      "psd"
    ]
  },
  {
    "type": "doc",
    "preview": "true",
    "transcode": "true",
    "extensionnames": [
      "doc",
      "docm",
      "docx",
      "dotm",
      "dotx",
      "rtf",
      "xlt"
    ]
  },
  {
    "type": "txt",
    "preview": "true",
    "transcode": "true",
    "extensionnames": [
      "txt"
    ]
  },
  {
    "type": "ppt",
    "preview": "true",
    "transcode": "true",
    "extensionnames": [
      "ppt",
      "pot",
      "potm",
      "potx",
      "pps",
      "pptx"
    ]
  },
  {
    "type": "sheets",
    "preview": "true",
    "transcode": "true",
    "extensionnames": [
      "xls",
      "xlsb",
      "xlsm",
      "xlsx",
      "xlt",
      "xltm",
      "xltx",
      "xlw"
    ]
  },
  {
    "type": "pdf",
    "preview": "true",
    "transcode": "true",
    "extensionnames": [
      "pdf"
    ]
  },
  {
    "type": "java",
    "preview": "true",
    "transcode": "true",
    "extensionnames": [
      "java"
    ]
  },
  {
    "type": "eml",
    "preview": "true",
    "extensionnames": [
      "eml"
    ]
  },
  {
    "type": "ics",
    "preview": "true",
    "extensionnames": [
      "ics"
    ]
  },
  {
    "type": "vcf",
    "preview": "true",
    "extensionnames": [
      "vcf"
    ]
  },
  {
    "type": "audio",
    "preview": "false",
    "extensionnames": [
      "mp3",
      "wav"
    ]
  },
  {
    "type": "mov",
    "preview": "false",
    "extensionnames": [
      "mov"
    ]
  },
  {
    "type": "video",
    "preview": "false",
    "extensionnames": [
      "mp4",
      "3gp",
      "3g2",
      "mpeg",
      "avi"
    ]
  },
  {
    "type": "zip",
    "preview": "false",
    "extensionnames": [
      "zip",
      "rar",
      "7z",
      "tar",
      "iso"
    ]
  },
  {
    "type": "exe",
    "preview": "false",
    "extensionnames": [
      "exe"
    ]
  },
  {
    "type": "mms",
    "preview": "false",
    "extensionnames": [
      "mms"
    ]
  },
  {
    "type": "xml",
    "preview": "true",
    "transcode": "true",
    "extensionnames": [
      "    xml"
    ]
  },
  {
    "type": "csv",
    "preview": "true",
    "transcode": "true",
    "extensionnames": [
      "    csv"
    ]
  }
]
}

const externalMailBoxService = [
{
  name: 'yahoo',
  display: 'Yahoo Plus (IMAP)',
  protocol: [
    {
      port: 993,
      type: 'imap',
      server: 'imap.mail.yahoo.com',
      usessl: true,
    }, {
      name: 'yahoo',
      port: 465,
      type: 'smtp',
      server: 'smtp.mail.yahoo.com',
      usessl: true,
    },
  ],
  type: 'imap',
}, {
  name: 'yahoo',
  display: 'Yahoo Plus (POP)',
  protocol: [
    {
      port: 995,
      type: 'pop',
      server: 'pop.mail.yahoo.com',
      usessl: true,
    }, {
      name: 'yahoo',
      port: 465,
      type: 'smtp',
      server: 'smtp.mail.yahoo.com',
      usessl: true,
    },
  ],
  type: 'pop',
},
]

const mailFilter = {
enabled: true,
filterActions: "move,copy,redirect,markasread,deleteimmediately",
filterConditionInputs: "subject,from,to,cc,toCc",
filterConditionMatches: "contains,!contains",
filterConditionsMatches: "and,or",
limit: 0,
maxFilterConditions: 15,
maxFilters: 30,
}

var Webtop = {
  config: {
    extensionnametypemap: {
      extensionnametypemap: extensionnametypemap,
    },
    contacts: {
      contactform: {
        section: contactFormSection,
      },
    },
    mail: {
      enableMessageCategories: true,
      externalmailbox: {
        service: externalMailBoxService,
      },
      maxblockedsenders: 10,
      maxtrustedsenders: 10,
    },
    user: {
      mailFilter,
      userControlSettings: {
        supportedControls: '',
      },
    }
  }
}

var UXConfig = {
  common: {
    ad: {
      interval: 30000,
    },
    links: {
      redirectLoginURL: '',
      redirectLogoutURL: '',
      redirectTimeoutURL: '',
      logoURL: '',
    },
    time: {
      timeFormat: 'HH/MM',
      dateFormat: 'YYYY/MM/DD',
    },
    timezone: {
      useDevice: false,
    },
    regexp: {
      emailRegularExp: /^(?:[a-z0-9!#$%&'*+\/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+\/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9\u00C0-\u024f](?:[a-z0-9-\u00C0-\u024f]*[a-z0-9\u00C0-\u024f])?\.)+[a-z0-9\u00C0-\u024f](?:[a-z0-9-\u00C0-\u024f]*[a-z0-9\u00C0-\u024f])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])$/i,
      emailDomainRegularExp: /^((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9\u00C0-\u024f]+\.)+[a-zA-Z]{2,}))$/,
      phoneRegularExp: /^([0-9\(\)\/\+ \-]*)$/,
      pagerRegularExp: /^([0-9\(\)\/\+ \-]*)$/,
      urlRegularExp: /^(?:(?:https?|ftp):\/\/)(?:\S+(?::\S*)?@)?(?:(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})))(?::\d{2,5})?(?:\/\S*)?$/i,
      contactNameRegularExp: /^[^,;"]*$/,
      notEmptyTextRegularExp: /^\s*[^\s]+.*\s*$/,
      emailLocalPartRegularExp: /^[^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*$/,
      emailLocalSuffixPartRegularExp: /^[^<>()[\],;:\s@\"]+$/,
      folderNameDisableChars: /[/<>#&\\\*\%]|^{|^\s/,
    },
    textMaxLength: 255,
    extensionNameTypeMap: Webtop.config.extensionnametypemap.extensionnametypemap,
  },
  header: {
    rui: {
      iframeUri: '',
      divId: '',
      initFnName: '',
    },
  },
  cloud: {
    enabled: true,
  },
  theme: {
    available: ['default', 'blue', 'green', 'yellow', 'red'],
  },
  mail: {
    auto: null,
    save: {
      autoInterval: 60000,
    },
    recipients: {
      max: 100,
    },
    forward: null,
    sender: {
      max: 10,
      maxTrusted: Webtop.config.mail.maxtrustedsenders,
      maxBlocked: Webtop.config.mail.maxblockedsenders,
    },
    folder: {
      maxNameSize: 60,
      maxDeepth: 30,
    },
    message: {
      maxSize: 307200,
      maxSubjectSize: 998,
      maxAttachmentCount: 10,
      maxAttachmentSize: 5242880,
      timeoutUpload: 180000,
    },
    signature: {
      limit: 10,
      maxContentSize: 1024,
      maxLabelSize: 128,
    },
    alias: {
      enable: false,
      limit: 0,
    },
    externalAccount: {
      enable: true,
      limit: 10,
      service: Webtop.config.mail.externalmailbox.service,
      externalAccountOAuthRedirectUrl: 'http://joey.com:8080/MX3.0-daily/index-rui.jsp?v=3.0.001.0#/settings',
    },
    rtc: {
      enable: false,
      chart: null,
      video: null,
      audio: null,
      storage: null,
      quota: null,
    },
    presence: {
      enable: false,
      presenseId: null,
      token: null,
    },
    conversation: {
      enable: true,
    },
    compose: {
      max: 30,
      width: 960,
      height: 800,
    },
    rule: {
      filterConditionInputs: Webtop.config.user.mailFilter.filterConditionInputs,
      filterConditionMatches: Webtop.config.user.mailFilter.filterConditionMatches,
      filterActions: Webtop.config.user.mailFilter.filterActions,
    },
    whitelisting: true,
  },
  contacts: {
    sendMailAddressOrder: 'home,work,other',
    regexp: {
      folderNameInvalidChars: /[\/<>&:"\|\?\\\*\%]/,
    },
    addressBook: {
      max: 9,
      maxNameSize: 63,
      enableTrash: true,
      displayCount: true,
      maxCollectedEmails: 2000,
      displayAutoCompleteAtBottom: true,
    },
    group: {
      enable: true,
      max: 50,
      allowDuplicateName: false,
    },
    list: {
      max: 3000,
      pageSize: 300,
      defaultGroupBy: 'lastName',
      defaultSortBy: 'ASC',
      searchFields: 'firstName,lastName,lzEmail,lzPhone',
      enablePartialCriteriaFilter: true,
      displayNameOrder: 'firstName,lastName',
      enableMove: true,
      disableAvatar: true,
      enableContextMenu: true,
      enableMergeAndDedup: true,
    },
    contactForm: {
      sections: {
        contact: Webtop.config.contacts.contactform.section,
      },
      maxFields: 20,
      maxSizeOfAvatar: 500,
      imageAcceptTypes: 'image/pjpeg,image/jpeg,image/x-png,image/png,image/gif',
    },
    autoSuggest: {
      matchFields: 'lzHeader.middlename',
    },
    import: {
      enabledFileTypes: 'csv,vcf',
    },
    export: {
      enabledFileTypes: 'csv,vcard',
      defaultFileType: 'csv',
    },
  },
  calendar: {
    enabled: true,
    recurrence: {
      defaultOptions: ['none', 'daily', 'weekly', 'monthly', 'yearly', 'weekday', 'custom'],
      frequencyOptions: ['daily', 'weekly', 'monthly', 'yearly'],
      dayList: ['su', 'mo', 'tu', 'we', 'th', 'fr', 'sa'],
    },
    reminder: {
      options: [1000, 0, -5, -15, -30, -60, -120, -1440, -2880, -10080],
    },
    // enableInviteContactToEvent: true,
    // ATTENDEE_ENABLED: true,
    TRASH_SUPPORT: false,
    SMS_SUPPORT: false,
    CATEGORY_OPTIONS: ['General', 'Invite', 'Work', 'School', 'Red', 'Yellow', 'Green', 'Birthday', 'Anniversary', 'Date', 'Vacation', 'Fun', 'Bills', 'Phone', 'Doctor', 'Flag', 'Pet', 'Sport'],
    // EVENT_REMIND_OPTIONS: ['', 0, 5, 15, 30, 60, 120, 1440, 2880, 10080],
    importAcceptFileTypes: ['.ics', '.ical', '.icalendar', '.ifb'],
    calendarColors: [
      'E51C23', 'E91E63', '9C27B0', '673AB7', '3F51B5',
      '5677FC', '03A9F4', '00BCD4', '009688', '259B24',
      '88C34A', 'CDDC39', 'FFEB3B', 'FFC107', 'FF9800'],
    // exportFileNameInvalidCharsReg: /[/<>&:"\|\?\\\*\%]/,
    // subscribeUrlReg: /^((https?)|(webcals?)):\/\/([A-Za-z0-9\-\._~:\/?#\[\]@!$&'()*+,;=]|%[A-Fa-f0-9]{2})+$/,
    pageSizeOfPrintEventPDF: 'a4',
  },
  tasks: {
    enabled: true,
    enableTaskGroup: true,
    defaultTaskReminderUnit: 'minute',
    defaultTaskSortType: 'priority',
    defaultTaskViewType: 'single',
    groupNameInvalidChars: /[/<>#&\\\*\%]/,
    groupNameSize: 64,
    toDoNameSize: 64,
    toDoDescriptionSize: 256,
    toDoStructure: {
      summary: 'summary',
      group: 'group',
      priority: 'priority',
      status: 'status',
      url: 'url',
      description: 'description',
      due: {
        hasDueTime: 'hasDueTime',
        date: 'date',
        time: 'time',
        reminder: 'reminder',
      },
    },
  },
  settings: {
    preference: {
      messageCategories: {
        key: 'enableMessageCategories',
        enable: !!Webtop.config.mail.enableMessageCategories,
        defaultValue: 'false',
      },
      localeLanguage: {
        key: 'attr.user.LocaleLanguage',
        defaultValue: 'en_US',
        available: [
          {
            value: 'en_US',
            text: 'English',
            files: 'sdk/en_US.js',
          },
          {
            value: 'zh_CN',
            text: '中文 (简体)',
            files: 'sdk/zh_CN.js',
          },
          {
            value: 'zh_TW',
            text: '中文 (繁體)',
            files: 'sdk/zh_TW.js',
          },
          {
            value: 'ja_JP',
            text: '日本語',
            files: 'sdk/ja_JP.js',
          },
          {
            value: 'it_IT',
            text: 'Italiano',
            files: 'sdk/it_IT.js',
          },
          {
            value: 'fr_FR',
            text: 'Français',
            files: 'sdk/fr_FR.js',
          },
          {
            value: 'de_DE',
            text: 'Deutsch',
            files: 'sdk/de_DE.js',
          },
          {
            value: 'es_ES',
            text: 'Español',
            files: 'sdk/es_ES.js',
          },
          {
            value: 'ar_AE',
            text: 'العربية (UAE)',
            files: 'sdk/ar_AE.js',
            direction: 'rtl',
            extendsFramework: true,
          },
          {
            value: 'en_RTL',
            text: 'English (RTL)',
            files: 'sdk/en_US.js',
            direction: 'rtl',
            extendsFramework: true,
          },
        ],
      },
    },
  },
  user: {
    settings: {
      supportedControls: Webtop.config.user.userControlSettings.supportedControls,
    },
  },
  helper: {
    url: 'help/Default.htm',
  },
  introductionWin: {
    rui: {
      items: [
        {
          id: 'rui01',
          enabled: false,
          width: 520,
          height: 470,
          endDate: '',
          showNeverShowFlag: true,
          showTimes: -1,
          openEvent: 'login',
          periodicTime: 14400,
          url: 'introduction/introductionRUI.html',

        }, {
          id: 'rui02',
          enabled: false,
          width: 520,
          height: 470,
          endDate: '',
          showNeverShowFlag: true,
          showTimes: -1,
          openEvent: 'mail',
          periodicTime: 14400,
          url: 'introduction/introductionRUIMAIL.html',

        },
      ],
    },
    tui: {
      items: [
        {
          id: 'tui01',
          enabled: true,
          showUntilDate: '',
          showUntilClick: true,
          showTimes: -1,
          openEvent: 'login',
          periodicTime: 14400,
          url: 'introduction/introductionTUI.html',
          phone: {
            width: '100%',
            height: '100%',
          },
          tablet: {
            width: '80%',
            height: '60%',
          },
        },
      ],
    },
  },
}

if (window) {
  window.UXConfig = UXConfig
}
