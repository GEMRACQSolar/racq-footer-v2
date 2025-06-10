module.exports = {
  editor: {
    label: {
      en: 'RACQ Footer v2'
    },
    icon: 'fas fa-copyright',
    bubble: {
      icon: 'fas fa-copyright'
    }
  },
  triggerEvents: [
    {
      name: 'footer:loaded',
      label: { en: 'On footer loaded' },
      event: {}
    }
  ],
  properties: {
    backgroundColor: {
      label: {
        en: 'Background Color'
      },
      type: 'Color',
      defaultValue: '#4b5869'
    },
    textColor: {
      label: {
        en: 'Text Color'
      },
      type: 'Color',
      defaultValue: '#FFE600'
    },
    copyrightText: {
      label: {
        en: 'Copyright Text'
      },
      type: 'Text',
      defaultValue: '© 2025 RACQ. All rights reserved.'
    },
    showLinks: {
      label: {
        en: 'Show Footer Links'
      },
      type: 'OnOff',
      defaultValue: true
    },
    links: {
      label: {
        en: 'Footer Links'
      },
      type: 'Array',
      defaultValue: [
        { text: 'Privacy Policy', url: '#privacy' },
        { text: 'Terms of Service', url: '#terms' },
        { text: 'Contact Us', url: '#contact' }
      ],
      options: {
        item: {
          type: 'Object',
          defaultValue: { text: 'Link Text', url: '#' },
          options: {
            text: {
              label: { en: 'Link Text' },
              type: 'Text'
            },
            url: {
              label: { en: 'Link URL' },
              type: 'Text'
            }
          }
        }
      },
      hidden: content => !content.showLinks
    }
  }
}