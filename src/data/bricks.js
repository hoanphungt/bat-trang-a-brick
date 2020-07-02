// Codes of brick types should be updated here:
// 1: bricks
// 2: wall tiles
// 3: floor tiles
// 4: decor
// (to be updated)

export const allBricks = {
  sample4: {
    id: 4,
    name: 'gạch sần Mỹ',
    popular: true,
    urls: {
      brickUrl: '/products/sample4/brick.jpg',
      buildingUrl1: '/products/sample4/building-1.jpg',
      buildingUrl2: '/products/sample4/building-2.jpg',
      buildingUrl3: '/products/sample4/building-3.jpg',
      buildingUrl4: '/products/sample4/building-4.jpg',
      buildingUrl5: '/products/sample4/building-5.jpg',
    },
    brickIntro: `
      The raw materials are excavated in Weichsel loam layers, the local loam of Aeolian origin dating from the Ice Age.
      This Loess mainly consists of a silt-like fraction, suited ideally for the manufacturing of hand form bricks.
      By using specific sand types for surface covering, the desired colour is achieved.
    `,
    specifications: {
      code: 'BB 8328',
      color: 'Orange brown with dark shades.',
      format: 'WF ± 210 x 100 x 50 mm'
    },
    type: [1, 2, 4]
  },
  sample9: {
    id: 9,
    name: 'gạch vồ',
    popular: true,
    urls: {
      brickUrl: '/products/sample9/brick.jpg',
      buildingUrl1: '/products/sample9/building-1.jpg',
      buildingUrl2: '/products/sample9/building-2.jpg',
      buildingUrl3: '/products/sample9/building-3.jpg',
    },
    brickIntro: `
      The raw materials are excavated in Weichsel loam layers, the local loam of Aeolian origin dating from the Ice Age.
      This Loess mainly consists of a silt-like fraction, suited ideally for the manufacturing of hand form bricks.
      By using specific sand types for surface covering, the desired colour is achieved.
    `,
    specifications: {
      code: 'BB 8328',
      color: 'Orange brown with dark shades.',
      format: 'WF ± 210 x 100 x 50 mm'
    },
    type: [1, 4]
  },
  sample2: {
    id: 2,
    name: 'gạch đặc Anh',
    popular: true,
    urls: {
      brickUrl: '/products/sample2/brick.jpg',
      buildingUrl1: '/products/sample2/building-1.jpg',
      buildingUrl2: '/products/sample2/building-2.jpg',
      buildingUrl3: '/products/sample2/building-3.jpg',
      buildingUrl4: '/products/sample2/building-4.jpg',
      buildingUrl5: '/products/sample2/building-5.jpg',
      buildingUrl6: '/products/sample2/building-6.jpg',
    },
    brickIntro: `
      The raw materials are excavated in Weichsel loam layers, the local loam of Aeolian origin dating from the Ice Age.
      This Loess mainly consists of a silt-like fraction, suited ideally for the manufacturing of hand form bricks.
      By using specific sand types for surface covering, the desired colour is achieved.
    `,
    specifications: {
      code: 'BB 8328',
      color: 'Orange brown with dark shades.',
      format: 'WF ± 210 x 100 x 50 mm'
    },
    type: [1, 4]
  },
  sample3: {
    id: 3,
    name: 'gạch thẻ Anh',
    popular: true,
    urls: {
      brickUrl: '/products/sample3/brick.jpg',
      buildingUrl1: '/products/sample3/building-1.jpg',
      buildingUrl2: '/products/sample3/building-2.jpg',
      buildingUrl3: '/products/sample3/building-3.jpg',
    },
    brickIntro: `
      The raw materials are excavated in Weichsel loam layers, the local loam of Aeolian origin dating from the Ice Age.
      This Loess mainly consists of a silt-like fraction, suited ideally for the manufacturing of hand form bricks.
      By using specific sand types for surface covering, the desired colour is achieved.
    `,
    specifications: {
      code: 'BB 8328',
      color: 'Orange brown with dark shades.',
      format: 'WF ± 210 x 100 x 50 mm'
    },
    type: [2, 4]
  },
  sample10: {
    id: 10,
    name: 'gạch thất cổ',
    popular: false,
    urls: {
      brickUrl: '/products/sample10/brick.jpg',
      buildingUrl1: '/products/sample10/building-1.jpg',
      buildingUrl2: '/products/sample10/building-2.jpg',
      buildingUrl3: '/products/sample10/building-3.jpg',
    },
    brickIntro: `
      The raw materials are excavated in Weichsel loam layers, the local loam of Aeolian origin dating from the Ice Age.
      This Loess mainly consists of a silt-like fraction, suited ideally for the manufacturing of hand form bricks.
      By using specific sand types for surface covering, the desired colour is achieved.
    `,
    specifications: {
      code: 'BB 8328',
      color: 'Orange brown with dark shades.',
      format: 'WF ± 210 x 100 x 50 mm'
    },
    type: [1, 2, 4]
  },
  sample12: {
    id: 12,
    name: 'gạch mẫu',
    popular: false,
    urls: {
      brickUrl: '/products/sample12/brick.jpg',
      buildingUrl1: '/products/sample12/building-1.jpg',
      buildingUrl2: '/products/sample12/building-2.jpg',
      buildingUrl3: '/products/sample12/building-3.jpg',
    },
    brickIntro: `
      The raw materials are excavated in Weichsel loam layers, the local loam of Aeolian origin dating from the Ice Age.
      This Loess mainly consists of a silt-like fraction, suited ideally for the manufacturing of hand form bricks.
      By using specific sand types for surface covering, the desired colour is achieved.
    `,
    specifications: {
      code: 'BB 8328',
      color: 'Orange brown with dark shades.',
      format: 'WF ± 210 x 100 x 50 mm'
    },
    type: [2]
  },
  sample1: {
    id: 1,
    name: 'gạch hoa văn',
    popular: true,
    urls: {
      brickUrl: '/products/sample1/brick.jpg',
      buildingUrl1: '/products/sample1/ghv-1.jpg',
      buildingUrl2: '/products/sample1/ghv-2.jpg',
      buildingUrl3: '/products/sample1/ghv-3.jpg',
      buildingUrl4: '/products/sample1/ghv-4.jpg',
      buildingUrl5: '/products/sample1/ghv-5.jpg',
      buildingUrl6: '/products/sample1/ghv-6.jpg',
      buildingUrl7: '/products/sample1/ghv-7.jpg',
      buildingUrl8: '/products/sample1/ghv-8.jpg',
      buildingUrl9: '/products/sample1/ghv-9.jpg',
      buildingUrl10: '/products/sample1/ghv-10.jpg',
      buildingUrl11: '/products/sample1/ghv-11.jpg',
      buildingUrl12: '/products/sample1/ghv-12.jpg',
      buildingUrl13: '/products/sample1/ghv-13.jpg',
      buildingUrl14: '/products/sample1/ghv-14.jpg',
      buildingUrl15: '/products/sample1/ghv-15.jpg',
      buildingUrl16: '/products/sample1/ghv-16.jpg',
    },
    brickIntro: `
      The raw materials are excavated in Weichsel loam layers, the local loam of Aeolian origin dating from the Ice Age.
      This Loess mainly consists of a silt-like fraction, suited ideally for the manufacturing of hand form bricks.
      By using specific sand types for surface covering, the desired colour is achieved.
    `,
    specifications: {
      code: 'BB 8328',
      color: 'Orange brown with dark shades.',
      format: 'WF ± 210 x 100 x 50 mm'
    },
    type: [4]
  },
  sample13: {
    id: 13,
    name: 'gạch Bát Tràng cổ',
    popular: true,
    urls: {
      // max 4 urls are allowed as explained in the top
      brickUrl: '/products/sample13/brick.jpg',
      buildingUrl1: '/products/sample13/building-1.jpg',
      buildingUrl2: '/products/sample13/building-2.jpg',
      buildingUrl3: '/products/sample13/building-3.jpg',
      buildingUrl4: '/products/sample13/building-4.jpg',
      buildingUrl5: '/products/sample13/building-5.jpg',
    },
    brickIntro: `
      The raw materials are excavated in Weichsel loam layers, the local loam of Aeolian origin dating from the Ice Age.
      This Loess mainly consists of a silt-like fraction, suited ideally for the manufacturing of hand form bricks.
      By using specific sand types for surface covering, the desired colour is achieved.
    `,
    specifications: {
      code: 'BB 8328',
      color: 'Orange brown with dark shades.',
      format: 'WF ± 210 x 100 x 50 mm'
    },
    type: [3]
  },
  sample8: {
    id: 8,
    name: 'gạch lát nền',
    popular: false,
    urls: {
      brickUrl: '/products/sample8/brick.jpg',
      buildingUrl1: '/products/sample8/building-1.jpg',
      buildingUrl2: '/products/sample8/building-2.jpg',
      buildingUrl3: '/products/sample8/building-3.jpg',
    },
    brickIntro: `
      The raw materials are excavated in Weichsel loam layers, the local loam of Aeolian origin dating from the Ice Age.
      This Loess mainly consists of a silt-like fraction, suited ideally for the manufacturing of hand form bricks.
      By using specific sand types for surface covering, the desired colour is achieved.
    `,
    specifications: {
      code: 'BB 8328',
      color: 'Orange brown with dark shades.',
      format: 'WF ± 210 x 100 x 50 mm'
    },
    type: [3]
  },
  sample6: {
    id: 6,
    name: 'gạch lục lăng',
    popular: false,
    urls: {
      brickUrl: '/products/sample6/brick.jpg',
      buildingUrl1: '/products/sample6/building-1.jpg',
    },
    brickIntro: `
      The raw materials are excavated in Weichsel loam layers, the local loam of Aeolian origin dating from the Ice Age.
      This Loess mainly consists of a silt-like fraction, suited ideally for the manufacturing of hand form bricks.
      By using specific sand types for surface covering, the desired colour is achieved.
    `,
    specifications: {
      code: 'BB 8328',
      color: 'Orange brown with dark shades.',
      format: 'WF ± 210 x 100 x 50 mm'
    },
    type: [3]
  },
  sample5: {
    id: 5,
    name: 'gạch bát giác',
    popular: false,
    urls: {
      brickUrl: '/products/sample5/brick.jpg',
      buildingUrl1: '/products/sample5/building-1.jpg',
    },
    brickIntro: `
      The raw materials are excavated in Weichsel loam layers, the local loam of Aeolian origin dating from the Ice Age.
      This Loess mainly consists of a silt-like fraction, suited ideally for the manufacturing of hand form bricks.
      By using specific sand types for surface covering, the desired colour is achieved.
    `,
    specifications: {
      code: 'BB 8328',
      color: 'Orange brown with dark shades.',
      format: 'WF ± 210 x 100 x 50 mm'
    },
    type: [3]
  },
  sample7: {
    id: 7,
    name: 'gạch chữ thọ',
    popular: false,
    urls: {
      brickUrl: '/products/sample7/brick.jpg',
      buildingUrl1: '/products/sample7/building-1.jpg',
      buildingUrl2: '/products/sample7/building-2.jpg',
    },
    brickIntro: `
      The raw materials are excavated in Weichsel loam layers, the local loam of Aeolian origin dating from the Ice Age.
      This Loess mainly consists of a silt-like fraction, suited ideally for the manufacturing of hand form bricks.
      By using specific sand types for surface covering, the desired colour is achieved.
    `,
    specifications: {
      code: 'BB 8328',
      color: 'Orange brown with dark shades.',
      format: 'WF ± 210 x 100 x 50 mm'
    },
    type: [4]
  },
  sample11: {
    id: 11,
    name: 'gạch hoa chanh',
    popular: false,
    urls: {
      brickUrl: '/products/sample11/brick.jpg',
      buildingUrl1: '/products/sample11/building-1.jpg',
    },
    brickIntro: `
      The raw materials are excavated in Weichsel loam layers, the local loam of Aeolian origin dating from the Ice Age.
      This Loess mainly consists of a silt-like fraction, suited ideally for the manufacturing of hand form bricks.
      By using specific sand types for surface covering, the desired colour is achieved.
    `,
    specifications: {
      code: 'BB 8328',
      color: 'Orange brown with dark shades.',
      format: 'WF ± 210 x 100 x 50 mm'
    },
    type: [4]
  },
}