"use strict";

var prodocutsTitle = document.querySelector('.js_prodocuts_title'); // 商品標題

var productNavbarLabels = document.querySelectorAll('.js_product_navbar_label'); // 商品分類表

var prodocutsListDom = document.querySelector('.js_prodocuts_list'); // 商品內容渲染列表

var pagination = document.querySelector('.js_pagination'); // 分頁
// 頁面資料

var productDatas = {
  optical: {
    title: 'Celluloid Combi',
    banners: [{
      id: 1,
      imgUrl: './assets/images/banners/banner-1.png'
    }, {
      id: 2,
      imgUrl: './assets/images/banners/banner-2.png'
    }],
    products: [{
      id: 1,
      imgUrl: './assets/images/product_Imgs/product-optical-1.jpg',
      title: 'bj41600s',
      price: '3,490',
      colors: ['prodocut_color_brown_dark', 'prodocut_color_brown']
    }, {
      id: 2,
      imgUrl: './assets/images/product_Imgs/product-optical-2.jpg',
      title: 'bj41600s',
      price: '3,490',
      colors: ['prodocut_color_brown_dark', 'prodocut_color_brown']
    }, {
      id: 3,
      imgUrl: './assets/images/product_Imgs/product-optical-3.jpg',
      title: 'bj41600s',
      price: '3,490',
      colors: ['prodocut_color_brown_dark', 'prodocut_color_brown']
    }, {
      id: 4,
      imgUrl: './assets/images/product_Imgs/product-optical-4.jpg',
      title: 'bj41600s',
      price: '3,490',
      colors: ['prodocut_color_brown_dark', 'prodocut_color_brown']
    }, {
      id: 5,
      imgUrl: './assets/images/product_Imgs/product-optical-5.jpg',
      title: 'bj41600s',
      price: '3,490',
      colors: ['prodocut_color_brown_dark', 'prodocut_color_brown']
    }, {
      id: 6,
      imgUrl: './assets/images/product_Imgs/product-optical-3.jpg',
      title: 'bj41600s',
      price: '3,490',
      colors: ['prodocut_color_brown_dark', 'prodocut_color_brown']
    }, {
      id: 7,
      imgUrl: './assets/images/product_Imgs/product-optical-6.jpg',
      title: 'bj41600s',
      price: '3,490',
      colors: ['prodocut_color_brown_dark', 'prodocut_color_brown']
    }, {
      id: 8,
      imgUrl: './assets/images/product_Imgs/product-optical-4.jpg',
      title: 'bj41600s',
      price: '3,490',
      colors: ['prodocut_color_brown_dark', 'prodocut_color_brown']
    }, {
      id: 9,
      imgUrl: './assets/images/product_Imgs/product-optical-3.jpg',
      title: 'bj41600s',
      price: '3,490',
      colors: ['prodocut_color_brown_dark', 'prodocut_color_brown']
    }, {
      id: 10,
      imgUrl: './assets/images/product_Imgs/product-optical-4.jpg',
      title: 'bj41600s',
      price: '3,490',
      colors: ['prodocut_color_brown_dark', 'prodocut_color_brown']
    }, {
      id: 11,
      imgUrl: './assets/images/product_Imgs/product-optical-2.jpg',
      title: 'bj41600s',
      price: '3,490',
      colors: ['prodocut_color_brown_dark', 'prodocut_color_brown']
    }, {
      id: 12,
      imgUrl: './assets/images/product_Imgs/product-optical-3.jpg',
      title: 'bj41600s',
      price: '3,490',
      colors: ['prodocut_color_brown_dark', 'prodocut_color_brown']
    }]
  },
  sunglasses: {
    title: '2020 NEW COLLECTION',
    banners: [{
      id: 1,
      imgUrl: './assets/images/banners/banner-3.png'
    }, {
      id: 2,
      imgUrl: './assets/images/banners/banner-4.png'
    }],
    products: [{
      id: 1,
      imgUrl: './assets/images/product_Imgs/product-sunglasses-1.jpg',
      title: 'bj41600s',
      price: '3,490',
      colors: ['prodocut_color_brown_dark', 'prodocut_color_brown']
    }, {
      id: 2,
      imgUrl: './assets/images/product_Imgs/product-sunglasses-2.jpg',
      title: 'bj41600s',
      price: '3,490',
      colors: ['prodocut_color_brown_dark', 'prodocut_color_brown']
    }, {
      id: 3,
      imgUrl: './assets/images/product_Imgs/product-sunglasses-3.png',
      title: 'bj41600s',
      price: '3,490',
      colors: ['prodocut_color_brown_dark', 'prodocut_color_brown']
    }, {
      id: 4,
      imgUrl: './assets/images/product_Imgs/product-sunglasses-4.png',
      title: 'bj41600s',
      price: '3,490',
      colors: ['prodocut_color_brown_dark', 'prodocut_color_brown']
    }, {
      id: 5,
      imgUrl: './assets/images/product_Imgs/product-sunglasses-5.png',
      title: 'bj41600s',
      price: '3,490',
      colors: ['prodocut_color_brown_dark', 'prodocut_color_brown']
    }, {
      id: 6,
      imgUrl: './assets/images/product_Imgs/product-sunglasses-6.jpg',
      title: 'bj41600s',
      price: '3,490',
      colors: ['prodocut_color_brown_dark', 'prodocut_color_brown']
    }]
  },
  functional: {
    title: 'Unique And Style',
    banners: [{
      id: 1,
      imgUrl: './assets/images/banners/banner-5.png'
    }, {
      id: 2,
      imgUrl: './assets/images/banners/banner-6.png'
    }],
    products: [{
      id: 1,
      imgUrl: './assets/images/product_Imgs/product-optical-6.jpg',
      title: 'bj41600s',
      price: '3,490',
      colors: ['prodocut_color_brown_dark', 'prodocut_color_brown']
    }, {
      id: 2,
      imgUrl: './assets/images/product_Imgs/product-sunglasses-1.jpg',
      title: 'bj41600s',
      price: '3,490',
      colors: ['prodocut_color_brown_dark', 'prodocut_color_brown']
    }, {
      id: 3,
      imgUrl: './assets/images/product_Imgs/product-sunglasses-4.png',
      title: 'bj41600s',
      price: '3,490',
      colors: ['prodocut_color_brown_dark', 'prodocut_color_brown']
    }, {
      id: 4,
      imgUrl: './assets/images/product_Imgs/product-optical-3.jpg',
      title: 'bj41600s',
      price: '3,490',
      colors: ['prodocut_color_brown_dark', 'prodocut_color_brown']
    }, {
      id: 5,
      imgUrl: './assets/images/product_Imgs/product-optical-2.jpg',
      title: 'bj41600s',
      price: '3,490',
      colors: ['prodocut_color_brown_dark', 'prodocut_color_brown']
    }, {
      id: 6,
      imgUrl: './assets/images/product_Imgs/product-optical-5.jpg',
      title: 'bj41600s',
      price: '3,490',
      colors: ['prodocut_color_brown_dark', 'prodocut_color_brown']
    }]
  }
};
var selectAreaDatas = [{
  id: 1,
  areaName: '台北中山旗艦店',
  tel: '(02)000-1234',
  time: '10:00-21:00',
  address: '台北市中山區南京東路25巷2-1號',
  imgUrl: './assets/images/locate_Imgs/locate1.jpeg'
}, {
  id: 2,
  areaName: '台北中山旗艦店',
  tel: '(02)000-1234',
  time: '10:00-21:00',
  address: '台北市中山區南京東路25巷2-1號',
  imgUrl: './assets/images/locate_Imgs/locate2.jpg'
}, {
  id: 3,
  areaName: '台北中山旗艦店',
  tel: '(02)000-1234',
  time: '10:00-21:00',
  address: '台北市中山區南京東路25巷2-1號',
  imgUrl: './assets/images/locate_Imgs/locate3.jpg'
}, {
  id: 4,
  areaName: '台北中山旗艦店',
  tel: '(02)000-1234',
  time: '10:00-21:00',
  address: '台北市中山區南京東路25巷2-1號',
  imgUrl: './assets/images/locate_Imgs/locate4.jpg'
}, {
  id: 5,
  areaName: '台北中山旗艦店',
  tel: '(02)000-1234',
  time: '10:00-21:00',
  address: '台北市中山區南京東路25巷2-1號',
  imgUrl: './assets/images/locate_Imgs/locate5.jpg'
}];
var faqDatas = [{
  id: 1,
  title: '請問可否自備鏡框單配鏡片'
}, {
  id: 2,
  title: '眼鏡都可以20分鐘取件嗎？'
}, {
  id: 3,
  title: '散光鏡片需要額外加價嗎？'
}, {
  id: 4,
  title: '我可以使用舊眼鏡的度數配鏡片嗎？'
}, {
  id: 5,
  title: '請問可以單購買鏡框嗎？'
}];
var blogDatas = [{
  id: 1,
  date: '2020/02/14',
  title: '情人特別企劃',
  subtitle: '2020 Valentine’s Special',
  content: '一年一度西洋情人節即將到來，我們推出最強「情人節企劃」，為這個甜蜜的節日加溫。偶爾跟另一半來個低調情侶單品，結合彼此喜好、找出合適框型款式，在這個春夏輕鬆搭出屬於你們的甜蜜默契！<br>即日起至2/16為止，不論是熱戀情侶、自由自在一個人或是老夫老妻，只要從未來過本店的新朋友，綁定官方LINE好友，都可享專屬優惠⋯⋯',
  mainPointContent: '一年一度西洋情人節即將到來，我們推出最強「情人 節企劃」，為這個甜蜜的節日加溫。本次拍攝的鏡框 款式與 NEEDS CLASSIC 聯名設計款，偶爾跟另一 半來個低調情侶單品，結合彼此喜好、找出合適框型 款式，在這個春夏輕鬆搭出屬於你們的甜蜜默契！ 即日起至2/16為止，不論是熱戀情侶⋯⋯',
  imgUrl: './assets/images/blog_Imgs/blog-1.png'
}, {
  id: 2,
  date: '2020/02/02',
  title: '街頭潮人訪問',
  subtitle: 'Street Interview',
  content: '炎熱的夏季裡，衣著選擇經常希望以簡潔的風格為主，但有時單純只穿搭 T 恤或短袖開襟襯衫，又覺得整體造型度有點不足嗎？那麼不妨可以透過「配件」，為穿搭點綴出與眾不同的視覺層次，而本季有哪些必備的配件系列呢？一起從以下推薦的 3 款單品，讓你瞬間帥氣爆棚散發型男品味⋯⋯',
  mainPointContent: '炎熱的夏季裡，衣著選擇經常希望以簡潔的風格為 主，但有時單純只穿搭 T 恤或短袖開襟襯衫，又覺 得整體造型度有點不足嗎？那麼不妨可以透過「配 件」，為穿搭點綴出與眾不同的視覺層次，而本季有 哪些必備的配件系列呢？一起從以下推薦的 3 款單 品，讓你瞬間帥氣爆棚散發型男品味⋯⋯',
  imgUrl: './assets/images/blog_Imgs/blog-2.png'
}, {
  id: 3,
  date: '2020/02/02',
  title: '春季新品上市',
  subtitle: 'New Selection',
  content: '2020 年春季的光學眼鏡跳脫前幾季流行的復古框型，比起圓框與小方框等文青風格，偏向個性款式的眉框眼鏡成為這一季的耀眼之星。除了經典款式如黑色眉框落在長方形鏡面上，眉宇之間露出專業莊重的特殊氣質，包覆在圓形鏡框上的貓眼型眉框則是強調出特殊設計感，俐落時髦的造型搭配一件簡單的白襯衫就相當有型，是喜愛時尚質感人士絕不能錯過的必備款式⋯⋯',
  mainPointContent: '2020 年春季的光學眼鏡跳脫前幾季流行的復古框 型，比起圓框與小方框等文青風格，偏向個性款式的 眉框眼鏡成為這一季的耀眼之星。除了經典款式如 黑色眉框落在長方形鏡面上，眉宇之間露出專業莊重 的特殊氣質，包覆在圓形鏡框上的貓眼型眉框則是強 調出特殊設計感，俐落時髦的造型搭配⋯⋯',
  imgUrl: './assets/images/blog_Imgs/blog-3.png'
}, {
  id: 4,
  date: '2020/01/18',
  title: '設計師獨享鏡框優惠',
  subtitle: 'Sales for Designer',
  content: '2020 年春季的光學眼鏡跳脫前幾季流行的復古框型，比起圓框與小方框等文青風格，偏向個性款式的眉框眼鏡成為這一季的耀眼之星。除了經典款式如黑色眉框落在長方形鏡面上，眉宇之間露出專業莊重的特殊氣質，包覆在圓形鏡框上的貓眼型眉框則是強調出特殊設計感，俐落時髦的造型搭配一件簡單的白襯衫就相當有型，是喜愛時尚質感人士絕不能錯過的必備款式⋯⋯',
  mainPointContent: '2020 年春季的光學眼鏡跳脫前幾季流行的復古框 型，比起圓框與小方框等文青風格，偏向個性款式的 眉框眼鏡成為這一季的耀眼之星。除了經典款式如 黑色眉框落在長方形鏡面上，眉宇之間露出專業莊重 的特殊氣質，包覆在圓形鏡框上的貓眼型眉框則是強 調出特殊設計感，俐落時髦的造型搭配⋯⋯',
  imgUrl: './assets/images/blog_Imgs/blog-4.png'
}, {
  id: 5,
  date: '2019/08/07',
  title: '抵抗夏日大作戰',
  subtitle: 'Summer Special',
  content: '2020 年春季的光學眼鏡跳脫前幾季流行的復古框型，比起圓框與小方框等文青風格，偏向個性款式的眉框眼鏡成為這一季的耀眼之星。除了經典款式如黑色眉框落在長方形鏡面上，眉宇之間露出專業莊重的特殊氣質，包覆在圓形鏡框上的貓眼型眉框則是強調出特殊設計感，俐落時髦的造型搭配一件簡單的白襯衫就相當有型，是喜愛時尚質感人士絕不能錯過的必備款式⋯⋯',
  mainPointContent: '2020 年春季的光學眼鏡跳脫前幾季流行的復古框 型，比起圓框與小方框等文青風格，偏向個性款式的 眉框眼鏡成為這一季的耀眼之星。除了經典款式如 黑色眉框落在長方形鏡面上，眉宇之間露出專業莊重 的特殊氣質，包覆在圓形鏡框上的貓眼型眉框則是強 調出特殊設計感，俐落時髦的造型搭配⋯⋯',
  imgUrl: './assets/images/blog_Imgs/blog-5.png'
}]; // 商品頁  banner & 分類 & 字串
// bannerImg 渲染用字串

function bannerImgSrt(bannerImg) {
  return "\n    <li class=\"product_banner\">\n      <img\n        src=\"".concat(bannerImg.imgUrl, "\"\n        alt=\"banner \u5716\u7247").concat(bannerImg.id, "\"\n        class=\"product_banner_img\"\n      >\n    </li>\n  ");
} // bannerImg 渲染 Fn


function renderBannerImg(bannerImg) {
  var prodocutsBannerDom = document.querySelector('.js_product_banners_lists');
  var str = '';
  bannerImg.forEach(function (item) {
    str += bannerImgSrt(item);
  });
  prodocutsBannerDom.innerHTML = str;
} // 商品渲染 - opticals 渲染用字串


function productOpticalsStr(product) {
  // 渲染字串
  return "\n    <li class=\"prodocuts_list_item prodocut_opticals maxWidth_sm maxWidth_sm_sm maxWidth_md_sm\">\n      <div class=\"prodocuts_list_img\">\n        <img\n          src=\"".concat(product.imgUrl, "\"\n          alt=\"\u5546\u54C1\u5716\u7247_").concat(product.id, "\"\n        >\n      </div>\n      <div class=\"d_flex flex_wrap_wrap flex_justify_space_between\">\n        <h2 class=\"prodocuts_list_content_title\">\n          ").concat(product.title, "\n        </h2>\n        <p class=\"fw_md prodocuts_list_content_price text_color_primary\">\n          ntd").concat(product.price, "\n        </p>\n        <ul class=\"prodocut_colors\">\n          <li class=\"prodocut_color ").concat(product.colors[0], "\"></li>\n          <li class=\"prodocut_color ").concat(product.colors[1], "\"></li>\n        </ul>\n      </div>\n    </li>\n  ");
} // 商品渲染 - sunglasses 渲染用字串


function productSunglassesStr(product) {
  // 渲染字串
  return "\n    <li class=\"prodocuts_list_item prodocut_sunglasses maxWidth_md\">\n      <div class=\"prodocuts_list_img\">\n        <img\n          src=\"".concat(product.imgUrl, "\"\n          alt=\"\u5546\u54C1\u5716\u7247_").concat(product.id, "\"\n        >\n      </div>\n      <div class=\"d_flex flex_wrap_wrap flex_justify_space_between\">\n        <h2 class=\"prodocuts_list_content_title\">\n          ").concat(product.title, "\n        </h2>\n        <p class=\"fw_md prodocuts_list_content_price text_color_primary\">\n          ntd").concat(product.price, "\n        </p>\n        <ul class=\"prodocut_colors\">\n          <li class=\"prodocut_color ").concat(product.colors[0], "\"></li>\n          <li class=\"prodocut_color ").concat(product.colors[1], "\"></li>\n        </ul>\n      </div>\n    </li>\n  ");
} // 商品渲染 - functional 渲染用字串


function productFunctionalStr(product) {
  // 渲染字串
  return "\n  <li class=\"prodocuts_list_item prodocut_sunglasses maxWidth_md\">\n    <div class=\"prodocuts_list_img\">\n      <img\n        src=\"".concat(product.imgUrl, "\"\n        alt=\"\u5546\u54C1\u5716\u7247_").concat(product.id, "\"\n      >\n    </div>\n    <div class=\"d_flex flex_wrap_wrap flex_justify_space_between\">\n      <h2 class=\"prodocuts_list_content_title\">\n        ").concat(product.title, "\n      </h2>\n      <p class=\"fw_md prodocuts_list_content_price text_color_primary\">\n        ntd").concat(product.price, "\n      </p>\n      <ul class=\"prodocut_colors\">\n        <li class=\"prodocut_color ").concat(product.colors[0], "\"></li>\n        <li class=\"prodocut_color ").concat(product.colors[1], "\"></li>\n      </ul>\n    </div>\n  </li>\n  ");
} // 商品渲染 Fn


function renderProductData(data, fn) {
  // 產品資料渲染
  var str = '';
  data.forEach(function (item) {
    str += fn(item);
  });
  prodocutsListDom.innerHTML = str;
} // 商品渲染事件


function clickProductRenderEvent() {
  var productCategory, renderStr;
  productNavbarLabels.forEach(function (item) {
    item.addEventListener('click', function (e) {
      if (e.target.innerText === 'OPTICAL') {
        productCategory = productDatas.optical;
        renderStr = productOpticalsStr;
        prodocutsTitle.textContent = productCategory.title;
        renderProductData(productCategory.products, renderStr);
        renderBannerImg(productCategory.banners);
        pagination.setAttribute('style', 'display: block;');
      } else if (e.target.innerText === 'SUNGLASSES') {
        productCategory = productDatas.sunglasses;
        renderStr = productSunglassesStr;
        prodocutsTitle.textContent = productCategory.title;
        renderProductData(productCategory.products, renderStr);
        renderBannerImg(productCategory.banners);
        pagination.removeAttribute('style');
      } else if (e.target.innerText === 'FUNCTIONAL') {
        productCategory = productDatas.functional;
        renderStr = productFunctionalStr;
        prodocutsTitle.textContent = productCategory.title;
        renderProductData(productCategory.products, renderStr);
        renderBannerImg(productCategory.banners);
        pagination.removeAttribute('style');
      }
    });
  });
} // 其他頁面字串
// 門市據點


function locateSrt(locate) {
  return "\n    <li class=\"location_list_item maxWidth_md\">\n      <div class=\"location_list_img\">\n        <a\n          href=\"locate.html\"\n        >\n          <img\n            src=\"".concat(locate.imgUrl, "\"\n            alt=\"\u5546\u54C1\u5716\u7247_").concat(locate.id, "\"\n          >\n          <img\n            src=\"./assets/images/icons/icon-search.svg\"\n            alt=\"\u641C\u5C0Bicon\"\n            class=\"search_icon\"\n          >\n        </a>\n      </div\n      <div>\n        <h3 class=\"location_list_content_title border\">\n          ").concat(locate.areaName, "\n        </h3>\n        <ul class=\"location_list_content border\">\n          <li>\n            <p class=\"location_list_content_text\n              d_flex\n              flex_align_items_center\"\n            >\n              <i class=\"location_list_content_icon\">\n                <img\n                  src=\"./assets/images/icons/icon-phone-black.svg\"\n                  alt=\"tel icon\"\n                >\n              </i>\n              \u96FB\u8A71\uFF1A").concat(locate.tel, "\n            </p>\n          </li>\n          <li>\n            <p class=\"location_list_content_text\n              d_flex\n              flex_align_items_center\"\n            >\n              <i class=\"location_list_content_icon\">\n                <img\n                  src=\"./assets/images/icons/icon-clock-black.svg\"\n                  alt=\"time icon\"\n                >\n              </i>\n              \u71DF\u696D\u6642\u9593\uFF1A").concat(locate.time, "\n            </p>\n          </li>\n          <li>\n            <p class=\"location_list_content_text d_flex flex_align_items_start\">\n              <i class=\"location_list_content_icon\">\n                <img\n                  src=\"./assets/images/icons/icon-map.svg\"\n                  alt=\"address icon\"\n                >\n              </i>\n              \u5730\u5740\uFF1A").concat(locate.address, "\n            </p>\n          </li>\n        </ul>\n        <a\n          href=\"locate.html\"\n          class=\"location_list_btn\"\n        >\n          \u8A73\u7D30\u8CC7\u8A0A\n        </a>\n      </div>\n    </li>\n  ");
} // 常見問題


function faqSrt(faq) {
  return "\n  <li class=\"faq_list\">\n    <h3 class=\"fw_lg faq_heading\">\n      Q".concat(faq.id, ".").concat(faq.title, "\n    </h3>\n    <ul class=\"faq_answer\">\n      <li>\n        <p>\n          A").concat(faq.id, ".\u6211\u724C\u93E1\u6846\u642D\u914D\u8584\u578B\u975E\u7403\u9762\u93E1\u72471480\u5143\uFF0C\u642D\u914D\u529F\u80FD\u578B\u93E1\u7247\u5247\u4F9D\u93E1\u7247\u7A2E\u985E\u52A0\u50F9\u8CFC\u8CB7\u3002\n        </p>\n      </li>\n      <li>\n        <p>\n          \u7576\u65E5\u8CFC\u8CB7JINS\u76D2\u88DD\u773C\u93E1\uFF0C\u642D\u914D\u8584\u578B\u975E\u7403\u9762\u93E1\u7247980\u5143(\u9694\u65E5\u5F8C\u5247\u70BA1480\u5143)\uFF0C\u642D\u914D\u529F\u80FD\u578B\u93E1\u7247\u5247\u4F9D\u93E1\u7247\u7A2E\u985E\u52A0\u50F9\u8CFC\u8CB7\u3002\n        </p>\n      </li>\n      <li>\n        <p>\n          \u4ED6\u724C\u93E1\u6846\uFF0C\u642D\u914D\u8584\u578B\u975E\u7403\u9762\u93E1\u72471980\u5143\uFF0C\u642D\u914D\u529F\u80FD\u578B\u93E1\u7247\u5247\u4F9D\u93E1\u7247\u7A2E\u985E\u52A0\u50F9\u8CFC\u8CB7\u3002\n        </p>\n      </li>\n    </ul>\n  </li>\n  ");
} // 部落格


function blogSrt(blog) {
  return "\n  <li class=\"blog_list d_flex\">\n    <div class=\"blog_list_img maxWidth_6\">\n      <a href=\"blog_article.html\">\n        <img\n          src=\"".concat(blog.imgUrl, "\"\n          alt=\"\u6587\u7AE0\u5716\u7247_").concat(blog.id, "\"\n        >\n        <img\n          src=\"./assets/images/icons/icon-search.svg\"\n          alt=\"\u641C\u5C0Bicon\"\n          class=\"search_icon\"\n        >\n      </a>\n    </div>\n\n    <ul class=\"blog_list_content maxWidth_4\">\n      <li>\n        <h3 class=\"blog_list_heading\">\n          <a\n            href=\"blog_article.html\"\n            class=\"text_color_primary_dark\"\n          >\n            ").concat(blog.title, "\n          </a>\n        </h3>\n      </li>\n\n      <li class=\"d_flex flex_justify_space_between flex_align_items_center\">\n        <p class=\"blog_list_subtitle fw_md\">\n          ").concat(blog.subtitle, "\n        </p>\n        <p class=\"blog_list_date fw_md\">\n          ").concat(blog.date, "\n        </p>\n      </li>\n\n      <li class=\"blog_list_text_content\"\n      >\n        <p class=\"blog_list_text\">\n          ").concat(blog.content, "\n        </p>\n        <a\n          href=\"blog_article.html\"\n          class=\"blog_list_more fw_xl text_color_primary_dark\"\n        >\n          MORE\n        </a>\n      </li>\n\n      <li class=\"blog_list_text_content\"\n      >\n        <p class=\"blog_list_text\">\n          ").concat(blog.mainPointContent, "\n          <a\n            href=\"blog_article.html\"\n            class=\"fw_xl blog_list_more\n            text_color_primary_dark\"\n          >\n            MORE\n          </a>\n        </p>\n      </li>\n    </ul>\n  </li>\n  ");
} // 畫面初始渲染
// 商品頁面


function initProduct() {
  if (prodocutsTitle) {
    prodocutsTitle.textContent = productDatas.optical.title;
    renderBannerImg(productDatas.optical.banners);
    renderProductData(productDatas.optical.products, productOpticalsStr);
    pagination.setAttribute('style', 'display: block;');
    clickProductRenderEvent();
  }
} // 門市據點


function initLocate() {
  var locateListDom = document.querySelector('.js_location_lists');

  if (locateListDom) {
    var str = '';
    selectAreaDatas.forEach(function (item) {
      str += locateSrt(item);
    });
    locateListDom.innerHTML = str;
  }
} // 常見問題


function initFaq() {
  var faqListsDom = document.querySelector('.js_faq_lists');

  if (faqListsDom) {
    var str = '';
    faqDatas.forEach(function (item) {
      str += faqSrt(item);
    });
    faqListsDom.innerHTML = str;
  }
} // 部落格


function initBlog() {
  var blogListsDom = document.querySelector('.js_blog_lists');

  if (blogListsDom) {
    pagination.setAttribute('style', 'display: block;');
    var str = '';
    blogDatas.forEach(function (item) {
      str += blogSrt(item);
    });
    blogListsDom.innerHTML = str;
  }
} // 初始化  


function init() {
  initProduct();
  initLocate();
  initFaq();
  initBlog();
}

init();
//# sourceMappingURL=all.js.map
