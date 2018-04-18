const mock = {
  // apiURL: 'http://rwc-hinoki06.owmessaging.com:8080/kiwi-uxlab/',
  // apiURL: 'http://10.49.58.19:8080/MX2.3-release/',
  // apiURL: 'http://10.49.58.19:8080/MX3.0-daily/',
  apiURL: 'http://localhost:3001/',
  component: {
    App: {
      basic: {
        isAuthenticated: true
      },
    },
    MailFolder: {
      basic: {
        defaultCollapsed: false,
        childrenKey: 'children',
        actions:[
                {
                  name: 'edit',
                  displayName: 'RENAME',
                  icon: 'edit-folder',
                },
                {
                  name: 'remove',
                  displayName: 'DELETE',
                  icon: 'delete-folder',
                },
                {
                  name: 'add',
                  displayName: 'ADD',
                  icon: 'add-folder',
                },
              ],
        node: {
          name: "RootFolder",
          selectable: true,
          children: [{
              name: "mail-folder-inbox",
              children: [{
                name: "level2-subfolder"
              }, ]
            },
            {
              name: "mail-folder-draft"
            },
            {
              name: "mail-folder-sent"
            },
            {
              name: "mail-folder-junk"
            },
            {
              name: "mail-folder-trash",
              children: [{
                  name: "level2-subfolderA"
                },
                {
                  name: "level2-subfolderB"
                },
              ],
            },
            {
              name: "folder",
              children: [{
                  name: "level2-subfolderA"
                },
                {
                  name: "level2-subfolderB"
                },
              ],
            }
          ],
        },
      },
    },
    Login: {
      basic: {},
    },
    Projection: {
      basic: {}
    },
    MailAccountCntr: {
      basic: {},
    },
    CollapseTabs: {
      basic: {
        tabs: [{
            label: '1'
          },
          {
            label: '2'
          },
          {
            label: '3'
          },
        ]
      }
    },
    Mail: {
      basic: {},
    },
    Contacts: {
      basic: {},
    },
    MailFolderCntr: {
      basic: {},
    },
    // MailFolder: {
    //   basic: {
    //     name: 'mail folder',
    //     status: {
    //       unreadMessageCount: 999
    //     },
    //     subfolders: [],
    //     selectable: true,
    //     enableMenu: true
    //   },
    //   actions: {
    //     name: 'mail folder',
    //     status: {
    //       unreadMessageCount: 999
    //     },
    //     actions: [{
    //       name: 'add-folder'
    //     }, {
    //       name: 'edit-folder'
    //     }, {
    //       name: 'trash-folder'
    //     }, {
    //       name: 'delete-folder'
    //     }]
    //   },
    // },
    Folder: {
      2: {
        defaultCollapsed: false,
        childrenKey: 'children',
        actions: [
                {
                  name: 'edit',
                  displayName: 'RENAME',
                  icon: 'edit-folder',
                },
                {
                  name: 'remove',
                  displayName: 'DELETE',
                  icon: 'delete-folder',
                },
                {
                  name: 'add',
                  displayName: 'ADD',
                  icon: 'add-folder',
                },
              ],
        node: {
          name: "RootFolder",
          selectable: true,
          children: [{
              name: "mail-folder-inbox",
              children: [{
                name: "level2-subfolder"
              }, ]
            },
            {
              name: "mail-folder-draft"
            },
            {
              name: "mail-folder-sent"
            },
            {
              name: "mail-folder-junk"
            },
            {
              name: "mail-folder-trash",
              children: [{
                  name: "level2-subfolderA"
                },
                {
                  name: "level2-subfolderB"
                },
              ],
            },
            {
              name: "folder",
              children: [{
                  name: "level2-subfolderA"
                },
                {
                  name: "level2-subfolderB"
                },
              ],
            }
          ],
        },
      },
      basic: {
        name: "RootFolder"
      },
      selectable: {
        name: "RootFolder",
        selectable: true
      },
      enableMenu: {
        name: "RootFolder",
        enableMenu: true
      },
      subfolders: {
        name: "RootFolder",
        selectable: true,
        subfolders: [{
            name: "level1-subfolderA",
            subfolders: [{
              name: "level2-subfolder"
            }, ]
          },
          {
            name: "level1-subfolderB"
          },
          {
            name: "level1-subfolderC",
            subfolders: [{
                name: "level2-subfolderA"
              },
              {
                name: "level2-subfolderB"
              },
            ]
          },
        ]
      },
      "uncollapse folder on one level": {
        name: "RootFolder",
        subfolders: [{
            name: "level1-subfolderB"
          },
          {
            name: "level1-subfolderC",
            subfolders: [{
                name: "level2-subfolderA"
              },
              {
                name: "level2-subfolderB"
              },
            ]
          },
        ],
        collapsed: false,
        get onCollapse() {
          return typeof UX === 'undefined' ? 'onCollapse' : function (collapsed) {
            console.log('collapsed', collapsed)
          }
        },
        // get onRename(newName) { return typeof UX === 'undefined' ? 'onRename' : new Promise((res, rej) => setTimeout(() => {})},
      },
      'custom element with MailFolderItem': {
        name: 'mail Inbox',
        status: {
          unreadMessageCount: 10
        },
        subfolders: [{
            status: {
              unreadMessageCount: 0
            },
            name: "level1-subfolderB"
          },
          {
            status: {
              unreadMessageCount: 8
            },
            name: "level1-subfolderC",
            subfolders: [{
                status: {
                  unreadMessageCount: 1
                },
                name: "level2-subfolderA"
              },
              {
                status: {
                  unreadMessageCount: 1
                },
                name: "level2-subfolderB"
              },
            ]
          },
        ],
        get itemComponent() {
          return typeof UX !== 'undefined' ? UX.default.components.MailFolderItem : 'MailFolderItem'
        },
      }
    },
    Icon: {
      'by name': {
        name: 'tool-right'
      },
      'by glyph': {
        glyph: 'editor-insert-image'
      },
      'by src': {
        src: '//synchronoss.com/wp-content/uploads/synchronoss-logo-225-1.png'
      },
    },
    MailPreviewEventGrid: {
      allday: {
        inviteEvent: {
          startMillis: 1494518400000,
          endMillis: 1494604800000,
          startTime: '20170512T000000',
          endTime: '20170513T000000',
          summary: 'allday',
          allDay: true,
        },
      },
      normal: {
        inviteEvent: {
          startMillis: 1494575700000,
          endMillis: 1494580200000,
          startTime: '20170512T155500',
          endTime: '20170512T171000',
          allDay: false,
          summary: 'other Timezone',
        },
        events: [{
            startMillis: 1494575100000,
            endMillis: 1494664800000,
            startTime: '20170512T154500',
            endTime: '20170513T164000',
            allDay: false,
            summary: 'Calendar reminder',
          },
          {
            startMillis: 1494575700000,
            endMillis: 1494580200000,
            startTime: '20170512T155500',
            endTime: '20170512T171000',
            summary: 'other Timezone',
            allDay: false,
          },
          {
            startMillis: 1494518400000,
            endMillis: 1494604800000,
            startTime: '20170512T000000',
            endTime: '20170513T000000',
            summary: 'allday',
            allDay: true,
          },
        ],
      },

    },
    MailPreviewHeader: {
      has_message: {
        mailSummary: {
          uid: 1181,
          folderPath: 'INBOX',
          subject: 'Mail System Error - Returned Mail with Subject: Re: Event updated: name9999999999',
          receivedDate: 1491810212000,
          from: {
            name: 'Mail Administrator',
            address: 'Postmaster@owmessaging.com',
          },
          recipients: {
            to: [{
              address: 'lily@rwc-hinoki05.owmessaging.com',
            }],
          },
          priority: 1,
        },
      },
    },
    MailPreviewAttachments: {
      has_noinfo_att: {
        totalCount: 8,
        data: [{
            uid: 1001,
            folderPath: 'Inbox',
            filename: 'bbb.txt',
            size: 1500,
            part: '5',
            contentType: {
              baseType: 'txt',
            },
          },
          {
            uid: 1001,
            folderPath: 'Inbox',
            filename: 'aaa.txt',
            // size: 100,
            part: '6',
            contentType: {
              baseType: 'txt',
            },
          },
          {
            uid: 1001,
            folderPath: 'Inbox',
            filename: 'bbb.txt',
            size: 1500,
            part: '7',
            contentType: {
              baseType: 'txt',
            },
          },
          {
            uid: 1001,
            folderPath: 'Inbox',
            filename: 'bbb.txt',
            size: 1500,
            part: '8',
            contentType: {
              baseType: 'txt',
            },
          },
        ],
      },
    },
    MailPreviewDetail: {
      empty_message: {
        hideBody: true,
        hideSubject: true,
      },
      normal_message: {
        previewedMessage: {
          folderPath: 'INBOX',
          uid: 1181,
          messageId: '20170410074327.CQL7746.rwc-hinoki05.owmessaging.com@rwc-hinoki05',
          inReplyTo: null,
          references: null,
          draftProperties: {},
          promptReturnReceipt: false,
          from: {
            name: 'Mail Administrator',
            address: 'Postmaster@owmessaging.com',
          },
          replyTo: {
            address: 'Postmaster@owmessaging.com',
          },
          recipients: {
            to: [{
              address: 'lily@rwc-hinoki05.owmessaging.com',
            }],
          },
          sentDate: 1491810207000,
          receivedDate: 1491810212000,
          size: 14947,
          flags: {
            seen: true,
          },
          subject: 'Mail System Error - Returned Mail with Subject: Re: Event updated: name9999999999',
          body: {
            mangled: false,
            truncated: false,
            blockedImages: false,
            imageDisplayOption: 'none',
            format: 'html',
            originalFormat: 'plaintext',
            content: 'This Message was undeliverable due to the following reason:<br>\r\n<br>',
          },
          attachments: [{
              '@resolver': 'Mail',
              estimatedSize: 379,
              filename: 'Part 1',
              contentType: 'message/delivery-status',
              folder: 'INBOX',
              uid: 1181,
              part: '1',
            },
            {
              '@resolver': 'Mail',
              estimatedSize: 13035,
              filename: 'Re: Event updated: name9999999999.eml',
              contentType: 'message/rfc822',
              folder: 'INBOX',
              uid: 1181,
              part: '2',
            },
          ],
        },
      },
    },
    MailPreviewSharedCalendar: {
      normal: {
        sharedCalenderInfo: {
          type: 'NORMAL',
          calid: 'http://bjdevmx02:5229/calendars/lily01@openwave.com/7130128696855919138@QwFpzjhFtAQH',
          ownername: 'lily01',
          name: 'lily01%40openwave.com%27s+main+calendar',
        },
      },
      cancel: {
        sharedCalenderInfo: {
          type: 'CANCEL',
          calid: 'http://bjdevmx02:5229/calendars/lily01@openwave.com/7130128696855919138@QwFpzjhFtAQH',
          ownername: 'lily01',
          name: 'lily01%40openwave.com%27s+main+calendar',
        },
      },
    },
    MailCompose: {
      default: {
        maxRecipients: 2,
        id: 'test',
        message: {
          accountId: '',
          from: '',
          recipients: {
            to: [],
            cc: [],
            bcc: []
          },
          to: '',
          cc: '',
          bcc: '',
          subject: '', // required
          body: 'bla bla bla', // required
          bodyType: 'html',
          attachments: [],
          priority: 3,
          inReplyTo: '',
          references: '',
          draftUidsToDelete: [],
        },
        isSaved: false,
      },
      only_subject: {
        subject: 'only subject',
      },
      demo: {
        subject: 'demo',
      },
      autosave: {
        subject: 'auto save',
        autoSaveInterval: 2000,
      },

    },
    Editor: {
      no_props: {},
      emojiContent: {
        content: '<div><p>sdfasdfasdf<b>sdfasdfasfasdf<i>sdfsadfsdf</i></b></p><p style=\'text-align: right;\'><b><i>sdfasdfa</i></b>🙍😡😱😨😲😃<b><i>sdfasdfa</i></b></p><p style=\'text-align: right;\'><b><i>sdfasdf</i></b></p><p style=\'text-align: right;\'><b><i>asdf</i></b></p><p style=\'text-align: right;\'><b><i>asdf</i></b></p><p style=\'text-align: right;\'><b><i><br></i></b></p></div> ',
      },
      disableFont: {
        disableFont: true,
      },
      disableFontSize: {
        disableFontSize: true,
      },
    },
    InlineImage: {
      no_props: {},
      loading: {
        status: 'inline_image_status_uploading',
      },
      fail: {
        status: 'inline_image_status_upload_fail',
      },
      image: {
        source: '//www.baidu.com/img/bd_logo1.png',
      },
    },
    List: {
      dev: {},
      no_props: {},
    },
    Toolbar: {
      dev: {},
      no_props: {},
    },
    DevToolbarWrapper: {
      dev: {},
    },
    MailToolbar: {
      no_props: [],
    },
    DevWrapper: {
      dev: {},
    },
    MailModeSwitcherCntr: {
      no_props: [],
    },
    ContactPreviewToolbarCntr: {
      no_props: [],
    },
    ContactListSortCntr: {
      no_props: [],
    },
    ContactListSearchCntr: {
      no_props: [],
    },
  },
}

if (typeof module !== 'undefined') module.exports = mock
else window.mock = mock