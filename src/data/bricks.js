// Codes of brick types should be updated here:
// 1: bricks
// 2: wall tiles
// 3: floor tiles
// 4: decor
// (to be updated)

export const allBricks = {
  gachSanMy: {
    id: 4,
    name: 'gạch sần Mỹ',
    popular: true,
    urls: {
      brickUrl: '/products/gach-san-my/brick.jpg',
      buildingUrl1: '/products/gach-san-my/building-1.jpg',
      buildingUrl2: '/products/gach-san-my/building-2.jpg',
      buildingUrl3: '/products/gach-san-my/building-3.jpg',
      buildingUrl4: '/products/gach-san-my/building-4.jpg',
      buildingUrl5: '/products/gach-san-my/building-5.jpg',
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
  gachVo: {
    id: 9,
    name: 'gạch vồ',
    popular: true,
    urls: {
      brickUrl: '/products/gach-vo/brick.jpg',
      buildingUrl1: '/products/gach-vo/building-1.jpg',
      buildingUrl2: '/products/gach-vo/building-2.jpg',
      buildingUrl3: '/products/gach-vo/building-3.jpg',
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
  gachDacAnh: {
    id: 2,
    name: 'gạch đặc Anh',
    popular: true,
    urls: {
      brickUrl: '/products/gach-dac-anh/brick.jpg',
      buildingUrl1: '/products/gach-dac-anh/building-1.jpg',
      buildingUrl2: '/products/gach-dac-anh/building-2.jpg',
      buildingUrl3: '/products/gach-dac-anh/building-3.jpg',
      buildingUrl4: '/products/gach-dac-anh/building-4.jpg',
      buildingUrl5: '/products/gach-dac-anh/building-5.jpg',
      buildingUrl6: '/products/gach-dac-anh/building-6.jpg',
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
  gachTheAnh: {
    id: 3,
    name: 'gạch thẻ Anh',
    popular: true,
    urls: {
      brickUrl: '/products/gach-the-anh/brick.jpg',
      buildingUrl1: '/products/gach-the-anh/building-1.jpg',
      buildingUrl2: '/products/gach-the-anh/building-2.jpg',
      buildingUrl3: '/products/gach-the-anh/building-3.jpg',
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
  gachThatCo: {
    id: 10,
    name: 'gạch thất cổ',
    popular: false,
    urls: {
      brickUrl: '/products/gach-that-co/brick.jpg',
      buildingUrl1: '/products/gach-that-co/building-1.jpg',
      buildingUrl2: '/products/gach-that-co/building-2.jpg',
      buildingUrl3: '/products/gach-that-co/building-3.jpg',
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
  // Sample product from BrickBurger.nl
  // sample: {
  //   id: 12,
  //   name: 'gạch mẫu',
  //   popular: false,
  //   urls: {
  //     brickUrl: '/products/sample/brick.jpg',
  //     buildingUrl1: '/products/sample/building-1.jpg',
  //     buildingUrl2: '/products/sample/building-2.jpg',
  //     buildingUrl3: '/products/sample/building-3.jpg',
  //   },
  //   brickIntro: `
  //     The raw materials are excavated in Weichsel loam layers, the local loam of Aeolian origin dating from the Ice Age.
  //     This Loess mainly consists of a silt-like fraction, suited ideally for the manufacturing of hand form bricks.
  //     By using specific sand types for surface covering, the desired colour is achieved.
  //   `,
  //   specifications: {
  //     code: 'BB 8328',
  //     color: 'Orange brown with dark shades.',
  //     format: 'WF ± 210 x 100 x 50 mm'
  //   },
  //   type: [2]
  // },
  gachHoaVan: {
    id: 1,
    name: 'gạch hoa văn',
    popular: true,
    urls: {
      brickUrl: '/products/gach-hoa-van/brick.jpg',
      buildingUrl1: '/products/gach-hoa-van/ghv-1.jpg',
      buildingUrl2: '/products/gach-hoa-van/ghv-2.jpg',
      buildingUrl3: '/products/gach-hoa-van/ghv-3.jpg',
      buildingUrl4: '/products/gach-hoa-van/ghv-4.jpg',
      buildingUrl5: '/products/gach-hoa-van/ghv-5.jpg',
      buildingUrl6: '/products/gach-hoa-van/ghv-6.jpg',
      buildingUrl7: '/products/gach-hoa-van/ghv-7.jpg',
      buildingUrl8: '/products/gach-hoa-van/ghv-8.jpg',
      buildingUrl9: '/products/gach-hoa-van/ghv-9.jpg',
      buildingUrl10: '/products/gach-hoa-van/ghv-10.jpg',
      buildingUrl11: '/products/gach-hoa-van/ghv-11.jpg',
      buildingUrl12: '/products/gach-hoa-van/ghv-12.jpg',
      buildingUrl13: '/products/gach-hoa-van/ghv-13.jpg',
      buildingUrl14: '/products/gach-hoa-van/ghv-14.jpg',
      buildingUrl15: '/products/gach-hoa-van/ghv-15.jpg',
      buildingUrl16: '/products/gach-hoa-van/ghv-16.jpg',
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
  gachBatTrangCo: {
    id: 13,
    name: 'gạch Bát Tràng cổ',
    popular: false,
    urls: {
      brickUrl: '/products/gach-bat-trang-co/brick.jpg',
      buildingUrl1: '/products/gach-bat-trang-co/building-1.jpg',
      buildingUrl2: '/products/gach-bat-trang-co/building-2.jpg',
      buildingUrl3: '/products/gach-bat-trang-co/building-3.jpg',
      buildingUrl4: '/products/gach-bat-trang-co/building-4.jpg',
      buildingUrl5: '/products/gach-bat-trang-co/building-5.jpg',
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
  gachLatNen: {
    id: 8,
    name: 'gạch lát nền',
    popular: false,
    urls: {
      brickUrl: '/products/gach-lat-nen/brick.jpg',
      buildingUrl1: '/products/gach-lat-nen/building-1.jpg',
      buildingUrl2: '/products/gach-lat-nen/building-2.jpg',
      buildingUrl3: '/products/gach-lat-nen/building-3.jpg',
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
  gachLucLang: {
    id: 6,
    name: 'gạch lục lăng',
    popular: false,
    urls: {
      brickUrl: '/products/gach-luc-lang/brick.jpg',
      buildingUrl1: '/products/gach-luc-lang/building-1.jpg',
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
  gachBatGiac: {
    id: 5,
    name: 'gạch bát giác',
    popular: false,
    urls: {
      brickUrl: '/products/gach-bat-giac/brick.jpg',
      buildingUrl1: '/products/gach-bat-giac/building-1.jpg',
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
  gachChuTho: {
    id: 7,
    name: 'gạch chữ thọ',
    popular: false,
    urls: {
      brickUrl: '/products/gach-chu-tho/brick.jpg',
      buildingUrl1: '/products/gach-chu-tho/building-1.jpg',
      buildingUrl2: '/products/gach-chu-tho/building-2.jpg',
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
  gachHoaChanh: {
    id: 11,
    name: 'gạch hoa chanh',
    popular: false,
    urls: {
      brickUrl: '/products/gach-hoa-chanh/brick.jpg',
      buildingUrl1: '/products/gach-hoa-chanh/building-1.jpg',
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