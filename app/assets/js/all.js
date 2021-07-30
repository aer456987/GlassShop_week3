const prodocutsTitle = document.querySelector('.js_prodocuts_title'); // 商品標題
const productNavbarLabels = document.querySelectorAll('.js_product_navbar_label'); // 商品分類表

const prodocutsListDom = document.querySelector('.js_prodocuts_list'); // 商品內容渲染列表
const pagination = document.querySelector('.js_pagination'); // 分頁
// 商品資訊
const productDatas = {
  optical: {
    title: 'Celluloid Combi',
    banners: [
      {
        id: 1,
        imgUrl: './assets/images/banners/banner-1.png',
      },
      {
        id: 2,
        imgUrl: './assets/images/banners/banner-2.png',
      },
    ],
    products: [
      {
        id: 1,
        imgUrl: './assets/images/product_Imgs/product-optical-1.jpg',
        title: 'bj41600s',
        price: '3,490',
        colors: ['prodocut_color_brown_dark', 'prodocut_color_brown'],
      },
      {
        id: 2,
        imgUrl: './assets/images/product_Imgs/product-optical-2.jpg',
        title: 'bj41600s',
        price: '3,490',
        colors: ['prodocut_color_brown_dark', 'prodocut_color_brown'],
      },
      {
        id: 3,
        imgUrl: './assets/images/product_Imgs/product-optical-3.jpg',
        title: 'bj41600s',
        price: '3,490',
        colors: ['prodocut_color_brown_dark', 'prodocut_color_brown'],
      },
      {
        id: 4,
        imgUrl: './assets/images/product_Imgs/product-optical-4.jpg',
        title: 'bj41600s',
        price: '3,490',
        colors: ['prodocut_color_brown_dark', 'prodocut_color_brown'],
      },
      {
        id: 5,
        imgUrl: './assets/images/product_Imgs/product-optical-5.jpg',
        title: 'bj41600s',
        price: '3,490',
        colors: ['prodocut_color_brown_dark', 'prodocut_color_brown'],
      },
      {
        id: 6,
        imgUrl: './assets/images/product_Imgs/product-optical-3.jpg',
        title: 'bj41600s',
        price: '3,490',
        colors: ['prodocut_color_brown_dark', 'prodocut_color_brown'],
      },
      {
        id: 7,
        imgUrl: './assets/images/product_Imgs/product-optical-6.jpg',
        title: 'bj41600s',
        price: '3,490',
        colors: ['prodocut_color_brown_dark', 'prodocut_color_brown'],
      },
      {
        id: 8,
        imgUrl: './assets/images/product_Imgs/product-optical-4.jpg',
        title: 'bj41600s',
        price: '3,490',
        colors: ['prodocut_color_brown_dark', 'prodocut_color_brown'],
      },
      {
        id: 9,
        imgUrl: './assets/images/product_Imgs/product-optical-3.jpg',
        title: 'bj41600s',
        price: '3,490',
        colors: ['prodocut_color_brown_dark', 'prodocut_color_brown'],
      },
      {
        id: 10,
        imgUrl: './assets/images/product_Imgs/product-optical-4.jpg',
        title: 'bj41600s',
        price: '3,490',
        colors: ['prodocut_color_brown_dark', 'prodocut_color_brown'],
      },
      {
        id: 11,
        imgUrl: './assets/images/product_Imgs/product-optical-2.jpg',
        title: 'bj41600s',
        price: '3,490',
        colors: ['prodocut_color_brown_dark', 'prodocut_color_brown'],
      },
      {
        id: 12,
        imgUrl: './assets/images/product_Imgs/product-optical-3.jpg',
        title: 'bj41600s',
        price: '3,490',
        colors: ['prodocut_color_brown_dark', 'prodocut_color_brown'],
      },
    ],
  },
  sunglasses: {
    title: '2020 NEW COLLECTION',
    banners: [
      {
        id: 1,
        imgUrl: './assets/images/banners/banner-3.png',
      },
      {
        id: 2,
        imgUrl: './assets/images/banners/banner-4.png',
      },
    ],
    products: [
      {
        id: 1,
        imgUrl: './assets/images/product_Imgs/product-sunglasses-1.jpg',
        title: 'bj41600s',
        price: '3,490',
        colors: ['prodocut_color_brown_dark', 'prodocut_color_brown'],
      },
      {
        id: 2,
        imgUrl: './assets/images/product_Imgs/product-sunglasses-2.jpg',
        title: 'bj41600s',
        price: '3,490',
        colors: ['prodocut_color_brown_dark', 'prodocut_color_brown'],
      },
      {
        id: 3,
        imgUrl: './assets/images/product_Imgs/product-sunglasses-3.png',
        title: 'bj41600s',
        price: '3,490',
        colors: ['prodocut_color_brown_dark', 'prodocut_color_brown'],
      },
      {
        id: 4,
        imgUrl: './assets/images/product_Imgs/product-sunglasses-4.png',
        title: 'bj41600s',
        price: '3,490',
        colors: ['prodocut_color_brown_dark', 'prodocut_color_brown'],
      },
      {
        id: 5,
        imgUrl: './assets/images/product_Imgs/product-sunglasses-5.png',
        title: 'bj41600s',
        price: '3,490',
        colors: ['prodocut_color_brown_dark', 'prodocut_color_brown'],
      },
      {
        id: 6,
        imgUrl: './assets/images/product_Imgs/product-sunglasses-6.jpg',
        title: 'bj41600s',
        price: '3,490',
        colors: ['prodocut_color_brown_dark', 'prodocut_color_brown'],
      },
    ],
  },
  functional: {
    title: 'Unique And Style',
    banners: [
      {
        id: 1,
        imgUrl: './assets/images/banners/banner-5.png',
      },
      {
        id: 2,
        imgUrl: './assets/images/banners/banner-6.png',
      },
    ],
    products: [
      {
        id: 1,
        imgUrl: './assets/images/product_Imgs/product-optical-6.jpg',
        title: 'bj41600s',
        price: '3,490',
        colors: ['prodocut_color_brown_dark', 'prodocut_color_brown'],
      },
      {
        id: 2,
        imgUrl: './assets/images/product_Imgs/product-sunglasses-1.jpg',
        title: 'bj41600s',
        price: '3,490',
        colors: ['prodocut_color_brown_dark', 'prodocut_color_brown'],
      },
      {
        id: 3,
        imgUrl: './assets/images/product_Imgs/product-sunglasses-4.png',
        title: 'bj41600s',
        price: '3,490',
        colors: ['prodocut_color_brown_dark', 'prodocut_color_brown'],
      },
      {
        id: 4,
        imgUrl: './assets/images/product_Imgs/product-optical-3.jpg',
        title: 'bj41600s',
        price: '3,490',
        colors: ['prodocut_color_brown_dark', 'prodocut_color_brown'],
      },
      {
        id: 5,
        imgUrl: './assets/images/product_Imgs/product-optical-2.jpg',
        title: 'bj41600s',
        price: '3,490',
        colors: ['prodocut_color_brown_dark', 'prodocut_color_brown'],
      },
      {
        id: 6,
        imgUrl: './assets/images/product_Imgs/product-optical-5.jpg',
        title: 'bj41600s',
        price: '3,490',
        colors: ['prodocut_color_brown_dark', 'prodocut_color_brown'],
      },
    ],
  },
};
const selectAreaDatas = [
  {
    id: 1,
    areaName: '台北中山旗艦店',
    tel: '(02)000-1234',
    time: '10:00-21:00',
    address: '台北市中山區南京東路25巷2-1號',
    imgUrl: './assets/images/locate_Imgs/locate1.jpeg',
  },
  {
    id: 2,
    areaName: '台北中山旗艦店',
    tel: '(02)000-1234',
    time: '10:00-21:00',
    address: '台北市中山區南京東路25巷2-1號',
    imgUrl: './assets/images/locate_Imgs/locate2.jpg',
  },
  {
    id: 3,
    areaName: '台北中山旗艦店',
    tel: '(02)000-1234',
    time: '10:00-21:00',
    address: '台北市中山區南京東路25巷2-1號',
    imgUrl: './assets/images/locate_Imgs/locate3.jpg',
  },
  {
    id: 4,
    areaName: '台北中山旗艦店',
    tel: '(02)000-1234',
    time: '10:00-21:00',
    address: '台北市中山區南京東路25巷2-1號',
    imgUrl: './assets/images/locate_Imgs/locate4.jpg',
  },
  {
    id: 5,
    areaName: '台北中山旗艦店',
    tel: '(02)000-1234',
    time: '10:00-21:00',
    address: '台北市中山區南京東路25巷2-1號',
    imgUrl: './assets/images/locate_Imgs/locate5.jpg',
  },
];
const faqDatas = [
  {
    id: 1,
    title: '請問可否自備鏡框單配鏡片',
  },
  {
    id: 2,
    title: '眼鏡都可以20分鐘取件嗎？',
  },
  {
    id: 3,
    title: '散光鏡片需要額外加價嗎？',
  },
  {
    id: 4,
    title: '我可以使用舊眼鏡的度數配鏡片嗎？',
  },
  {
    id: 5,
    title: '請問可以單購買鏡框嗎？',
  },
];
const faqDatas = [
  {
    id: 1,
    date: '2020/02/14',
    titile: '情人特別企劃',
    asd: '2020 Valentine’s Special',
    content: '一年一度西洋情人節即將到來，我們推出最強「情人節企劃」，為這個甜蜜的節日加溫。偶爾跟另一半來個低調情侶單品，結合彼此喜好、找出合適框型款式，在這個春夏輕鬆搭出屬於你們的甜蜜默契！<br>即日起至2/16為止，不論是熱戀情侶、自由自在一個人或是老夫老妻，只要從未來過本店的新朋友，綁定官方LINE好友，都可享專屬優惠⋯⋯',
    imgUrl: '',
  },
  {
    id: 2,
    date: '2020/02/02',
    titile: '街頭潮人訪問',
    asd: 'Street Interview',
    content: '炎熱的夏季裡，衣著選擇經常希望以簡潔的風格為主，但有時單純只穿搭 T 恤或短袖開襟襯衫，又覺得整體造型度有點不足嗎？那麼不妨可以透過「配件」，為穿搭點綴出與眾不同的視覺層次，而本季有哪些必備的配件系列呢？一起從以下推薦的 3 款單品，讓你瞬間帥氣爆棚散發型男品味⋯⋯',
    imgUrl: '',
  },
  {
    id: 3,
    date: '2020/02/02',
    titile: '春季新品上市',
    asd: 'New Selection',
    content: '2020 年春季的光學眼鏡跳脫前幾季流行的復古框型，比起圓框與小方框等文青風格，偏向個性款式的眉框眼鏡成為這一季的耀眼之星。除了經典款式如黑色眉框落在長方形鏡面上，眉宇之間露出專業莊重的特殊氣質，包覆在圓形鏡框上的貓眼型眉框則是強調出特殊設計感，俐落時髦的造型搭配一件簡單的白襯衫就相當有型，是喜愛時尚質感人士絕不能錯過的必備款式⋯⋯',
    imgUrl: '',
  },
  {
    id: 4,
    date: '2020/01/18',
    titile: '設計師獨享鏡框優惠',
    asd: 'Sales for Designer',
    content: '2020 年春季的光學眼鏡跳脫前幾季流行的復古框型，比起圓框與小方框等文青風格，偏向個性款式的眉框眼鏡成為這一季的耀眼之星。除了經典款式如黑色眉框落在長方形鏡面上，眉宇之間露出專業莊重的特殊氣質，包覆在圓形鏡框上的貓眼型眉框則是強調出特殊設計感，俐落時髦的造型搭配一件簡單的白襯衫就相當有型，是喜愛時尚質感人士絕不能錯過的必備款式⋯⋯',
    imgUrl: '',
  },
  {
    id: 5,
    date: '2019/08/07',
    titile: '抵抗夏日大作戰',
    asd: 'Summer Special',
    content: '2020 年春季的光學眼鏡跳脫前幾季流行的復古框型，比起圓框與小方框等文青風格，偏向個性款式的眉框眼鏡成為這一季的耀眼之星。除了經典款式如黑色眉框落在長方形鏡面上，眉宇之間露出專業莊重的特殊氣質，包覆在圓形鏡框上的貓眼型眉框則是強調出特殊設計感，俐落時髦的造型搭配一件簡單的白襯衫就相當有型，是喜愛時尚質感人士絕不能錯過的必備款式⋯⋯',
    imgUrl: '',
  },
];

// ===============商品頁渲染設定===============
// bannerImg 渲染用字串
function bannerImgSrt(bannerImg) {
  return `
    <li class="product_banner">
      <img
        src="${bannerImg.imgUrl}"
        alt="banner 圖片${bannerImg.id}"
        class="product_banner_img"
      >
    </li>
  `;
}
// bannerImg 渲染 Fn
function renderBannerImg(bannerImg) {
  const prodocutsBannerDom = document.querySelector('.js_product_banners_lists');

  let str = '';
  bannerImg.forEach((item) => {
    str += bannerImgSrt(item);
  });
  prodocutsBannerDom.innerHTML = str;
}

// 商品渲染 - opticals 渲染用字串
function productOpticalsStr(product) { // 渲染字串
  return `
    <li class="prodocuts_list_item prodocut_opticals maxWidth_sm maxWidth_sm_sm maxWidth_md_sm">
      <div class="prodocuts_list_img">
        <img
          src="${product.imgUrl}"
          alt="商品圖片_${product.id}"
        >
      </div>
      <div class="d_flex flex_wrap_wrap flex_justify_space_between">
        <h2 class="prodocuts_list_content_title">
          ${product.title}
        </h2>
        <p class="fw_md prodocuts_list_content_price text_color_primary">
          ntd${product.price}
        </p>
        <ul class="prodocut_colors">
          <li class="prodocut_color ${product.colors[0]}"></li>
          <li class="prodocut_color ${product.colors[1]}"></li>
        </ul>
      </div>
    </li>
  `;
}
// 商品渲染 - sunglasses 渲染用字串
function productSunglassesStr(product) { // 渲染字串
  return `
    <li class="prodocuts_list_item prodocut_sunglasses maxWidth_md">
      <div class="prodocuts_list_img">
        <img
          src="${product.imgUrl}"
          alt="商品圖片_${product.id}"
        >
      </div>
      <div class="d_flex flex_wrap_wrap flex_justify_space_between">
        <h2 class="prodocuts_list_content_title">
          ${product.title}
        </h2>
        <p class="fw_md prodocuts_list_content_price text_color_primary">
          ntd${product.price}
        </p>
        <ul class="prodocut_colors">
          <li class="prodocut_color ${product.colors[0]}"></li>
          <li class="prodocut_color ${product.colors[1]}"></li>
        </ul>
      </div>
    </li>
  `;
}
// 商品渲染 - functional
function productFunctionalStr(product) { // 渲染字串
  return `
  <li class="prodocuts_list_item prodocut_sunglasses maxWidth_md">
    <div class="prodocuts_list_img">
      <img
        src="${product.imgUrl}"
        alt="商品圖片_${product.id}"
      >
    </div>
    <div class="d_flex flex_wrap_wrap flex_justify_space_between">
      <h2 class="prodocuts_list_content_title">
        ${product.title}
      </h2>
      <p class="fw_md prodocuts_list_content_price text_color_primary">
        ntd${product.price}
      </p>
      <ul class="prodocut_colors">
        <li class="prodocut_color ${product.colors[0]}"></li>
        <li class="prodocut_color ${product.colors[1]}"></li>
      </ul>
    </div>
  </li>
  `;
}
// 商品渲染 Fn
function renderProductData(data, fn){ // 產品資料渲染
  let str = '';
  data.forEach((item) => {
    str += fn(item);
  });
  prodocutsListDom.innerHTML = str;
}
// 商品渲染事件
function clickProductRenderEvent() {
  let productCategory, renderStr;

  productNavbarLabels.forEach((item) => {

    item.addEventListener('click', (e) => {

      if (e.target.innerText === 'OPTICAL') {
        productCategory = productDatas.optical;
        renderStr = productOpticalsStr;
        
        prodocutsTitle.textContent = productCategory.title;
        renderProductData(productCategory.products, renderStr);
        renderBannerImg(productCategory.banners);
        pagination.setAttribute('style', 'display: block;')

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
}

// ===============門市據點渲染設定===============
function locateSrt(locate) {
  return `
    <li class="location_list_item maxWidth_md">
      <img
        src="${locate.imgUrl}"
        alt="商品圖片_${locate.id}"
      >
      <div>
        <h3 class="location_list_content_title border">
          ${locate.areaName}
        </h3>
        <ul class="location_list_content border">
          <li>
            <p class="location_list_content_text
              d_flex
              flex_align_items_center"
            >
              <i class="location_list_content_icon">
                <img
                  src="./assets/images/icons/icon-phone-black.svg"
                  alt="tel icon"
                >
              </i>
              電話：${locate.tel}
            </p>
          </li>
          <li>
            <p class="location_list_content_text
              d_flex
              flex_align_items_center"
            >
              <i class="location_list_content_icon">
                <img
                  src="./assets/images/icons/icon-clock-black.svg"
                  alt="time icon"
                >
              </i>
              營業時間：${locate.time}
            </p>
          </li>
          <li>
            <p class="location_list_content_text d_flex flex_align_items_start">
              <i class="location_list_content_icon">
                <img
                  src="./assets/images/icons/icon-map.svg"
                  alt="address icon"
                >
              </i>
              地址：${locate.address}
            </p>
          </li>
        </ul>
        <a
          href="locate.html"
          class="location_list_btn"
        >
          詳細資訊
        </a>
      </div>
    </li>
  `;
}

// ===============常見問題渲染設定===============
function faqSrt(faq) {
  return `
  <li class="faq_list">
    <h3 class="fw_lg faq_heading">
      Q${faq.id}.${faq.title}
    </h3>
    <ul class="faq_answer">
      <li>
        <p>
          A${faq.id}.我牌鏡框搭配薄型非球面鏡片1480元，搭配功能型鏡片則依鏡片種類加價購買。
        </p>
      </li>
      <li>
        <p>
          當日購買JINS盒裝眼鏡，搭配薄型非球面鏡片980元(隔日後則為1480元)，搭配功能型鏡片則依鏡片種類加價購買。
        </p>
      </li>
      <li>
        <p>
          他牌鏡框，搭配薄型非球面鏡片1980元，搭配功能型鏡片則依鏡片種類加價購買。
        </p>
      </li>
    </ul>
  </li>
  `;
}

// ===============常見問題渲染設定===============
function blogSrt(faq) {
  return `
  // <li class="faq_list">
  //   <h3 class="fw_lg faq_heading">
  //     Q${faq.id}.${faq.title}
  //   </h3>
  //   <ul class="faq_answer">
  //     <li>
  //       <p>
  //         A${faq.id}.我牌鏡框搭配薄型非球面鏡片1480元，搭配功能型鏡片則依鏡片種類加價購買。
  //       </p>
  //     </li>
  //     <li>
  //       <p>
  //         當日購買JINS盒裝眼鏡，搭配薄型非球面鏡片980元(隔日後則為1480元)，搭配功能型鏡片則依鏡片種類加價購買。
  //       </p>
  //     </li>
  //     <li>
  //       <p>
  //         他牌鏡框，搭配薄型非球面鏡片1980元，搭配功能型鏡片則依鏡片種類加價購買。
  //       </p>
  //     </li>
  //   </ul>
  // </li>
  `;
}

// ===============進入畫面後預設渲染函式===============
// 商品頁面 - 進入畫面後預設渲染函式
function initProduct() {
  if (prodocutsTitle) {
    prodocutsTitle.textContent = productDatas.optical.title;
    renderBannerImg(productDatas.optical.banners);
    renderProductData(productDatas.optical.products, productOpticalsStr);
    pagination.setAttribute('style', 'display: block;')
    clickProductRenderEvent();
  }
}

// 門市據點 - 進入畫面後預設渲染函式
function initLocate() {
  const locateListDom = document.querySelector('.js_location_lists');

  if (locateListDom) {
    let str = '';
    selectAreaDatas.forEach((item) => {
      str += locateSrt(item);
    });
    locateListDom.innerHTML = str;
  }
}

// 常見問題 - 進入畫面後預設渲染函式
function initFaq() {
  const faqListsDom = document.querySelector('.js_faq_lists');

  if (faqListsDom) {
    let str = '';
    faqDatas.forEach((item) => {
      str += faqSrt(item);
    });
    faqListsDom.innerHTML = str;
  }
}

// 部落格 - 進入畫面後預設渲染函式
function initBlog() {
  const blogListsDom = document.querySelector('.js_blog_lists');

  if (blogListsDom) {
    pagination.setAttribute('style', 'display: block;');

    let str = '';
    // faqDatas.forEach((item) => {
    //   str += faqSrt(item);
    // });
    // blogListsDom.innerHTML = str;
  }
}

// ===================================
// 初始化  
function init(){
  initProduct();
  initLocate();
  initFaq();
  initBlog();
}

init();