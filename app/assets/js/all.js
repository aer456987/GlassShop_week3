const productDatas = [
  {
    id: 1,
    imgUrl: './assets/images/product_Imgs/products-1.jpg',
    title: 'bj41600s',
    price: '3,490',
    colors: ['prodocut_color_brown_dark', 'prodocut_color_brown']
  },
  {
    id: 2,
    imgUrl: './assets/images/product_Imgs/products-2.jpg',
    title: 'bj41600s',
    price: '3,490',
    colors: ['prodocut_color_brown_dark', 'prodocut_color_brown']
  },
  {
    id: 3,
    imgUrl: './assets/images/product_Imgs/products-3.jpg',
    title: 'bj41600s',
    price: '3,490',
    colors: ['prodocut_color_brown_dark', 'prodocut_color_brown']
  },
  {
    id: 4,
    imgUrl: './assets/images/product_Imgs/products-4.jpg',
    title: 'bj41600s',
    price: '3,490',
    colors: ['prodocut_color_brown_dark', 'prodocut_color_brown']
  },
  {
    id: 5,
    imgUrl: './assets/images/product_Imgs/products-5.jpg',
    title: 'bj41600s',
    price: '3,490',
    colors: ['prodocut_color_brown_dark', 'prodocut_color_brown']
  },
  {
    id: 6,
    imgUrl: './assets/images/product_Imgs/products-6.jpg',
    title: 'bj41600s',
    price: '3,490',
    colors: ['prodocut_color_brown_dark', 'prodocut_color_brown']
  },
  {
    id: 7,
    imgUrl: './assets/images/product_Imgs/products-7.jpg',
    title: 'bj41600s',
    price: '3,490',
    colors: ['prodocut_color_brown_dark', 'prodocut_color_brown']
  },
  {
    id: 8,
    imgUrl: './assets/images/product_Imgs/products-8.jpg',
    title: 'bj41600s',
    price: '3,490',
    colors: ['prodocut_color_brown_dark', 'prodocut_color_brown']
  },
  {
    id: 9,
    imgUrl: './assets/images/product_Imgs/products-5.jpg',
    title: 'bj41600s',
    price: '3,490',
    colors: ['prodocut_color_brown_dark', 'prodocut_color_brown']
  },
  {
    id: 10,
    imgUrl: './assets/images/product_Imgs/products-7.jpg',
    title: 'bj41600s',
    price: '3,490',
    colors: ['prodocut_color_brown_dark', 'prodocut_color_brown']
  },
  {
    id: 11,
    imgUrl: './assets/images/product_Imgs/products-8.jpg',
    title: 'bj41600s',
    price: '3,490',
    colors: ['prodocut_color_brown_dark', 'prodocut_color_brown']
  },
  {
    id: 12,
    imgUrl: './assets/images/product_Imgs/products-3.jpg',
    title: 'bj41600s',
    price: '3,490',
    colors: ['prodocut_color_brown_dark', 'prodocut_color_brown']
  },
];

str = `
  <li class="prodocuts_list_item">
    <div class="prodocuts_list_img">
      <img
        src="${xx.imgUrl}"
        alt="商品圖片_${xx.id}"
      >
    </div>
    <div class="prodocuts_list_content">
      <h2 class="prodocuts_list_content_title">
        ${xx.title}
      </h2>
      <p class="prodocuts_list_content_price text_color_red">
        ntd${xx.price}
      </p>
      <ul class="prodocut_colors">
        <li class="prodocut_color ${xx.colors[0]}"></li>
        <li class="prodocut_color ${xx.colors[1]}"></li>
      </ul>
    </div>
  </li>
`;