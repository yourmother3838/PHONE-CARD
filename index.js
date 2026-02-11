//СОЗДАЕМ ДАННЫЕ ТОВАРА
const products = [
    {
      id: 1,
      title: "Apple iPhone 17 Pro Max, 256 ГБ, «космический оранжевый»",
      price: "150 000",
      discountPrice: "135 000",
      image: "https://avatars.mds.yandex.net/i?id=5ed9af6d08339ed0d017766eb9d44f3cc78c1720-4809878-images-thumbs&n=13"
    },
    {
      id: 2,
      title: "Apple iPhone 17 Pro Max, 512 ГБ, «титановый чёрный»",
      price: "165 000",
      discountPrice: "149 000",
      image: "https://img.championat.com/i/s/v/1739876347855877761.jpg"
    },
    {
      id: 3,
      title: "Apple iPhone 17 Pro, 256 ГБ, «серебристый»",
      price: "140 000",
      discountPrice: "125 000",
      image: "https://optim.tildacdn.com/tild3963-6462-4263-b630-393765356236/-/contain/407x407/center/center/-/format/webp/image.png.webp"
    },
    {
      id: 4,
      title: "Apple iPhone 17, 128 ГБ, «голубой»",
      price: "110 000",
      discountPrice: "99 000",
      image: "https://avatars.mds.yandex.net/get-goods_pic/10608491/hat459d9fc627d57cd647c8b47531473c3b/orig"
    },
    {
      id: 5,
      title: "Apple iPhone 16 Pro Max, 256 ГБ, «натуральный титан»",
      price: "135 000",
      discountPrice: "120 000",
      image: "https://avatars.mds.yandex.net/get-goods_pic/13844246/hat384b988b6944a91504ac03f87abf2dd4/orig"
    },
    {
      id: 6,
      title: "Apple iPhone 16 Pro, 128 ГБ, «чёрный титан»",
      price: "120 000",
      discountPrice: "108 000",
      image: "https://avatars.mds.yandex.net/get-goods_pic/14235733/hat4cd9feb4fd9bb37051737a2c486746ad/orig"
    },
    {
      id: 7,
      title: "Apple iPhone 15 Pro Max, 512 ГБ, «синий титан»",
      price: "130 000",
      discountPrice: "115 000",
      image: "https://avatars.mds.yandex.net/get-mpic/5207395/2a0000019247e2e0c0b4c4c6b25597512459/orig"
    },
    {
      id: 8,
      title: "Apple iPhone 15 Pro, 256 ГБ, «белый титан»",
      price: "115 000",
      discountPrice: "102 000",
      image: "https://avatars.mds.yandex.net/get-goods_pic/13316763/hatfcb758235f631851b9a7d051f365d0f4/orig"
    },
    {
      id: 9,
      title: "Apple iPhone 14 Pro Max, 256 ГБ, «глубокий фиолетовый»",
      price: "100 000",
      discountPrice: "89 000",
      image: "https://ir.ozone.ru/s3/multimedia-n/6840040883.jpg"
    },
    {
      id: 10,
      title: "Apple iPhone 14, 128 ГБ, «сияющая звезда»",
      price: "85 000",
      discountPrice: "75 000",
      image: "https://cdn1.ozone.ru/s3/multimedia-f/c600/6495314907.jpg"
    }
  ];
  

//создаем карточку HTML


 

    for (let i = 0; i < 10; i++) {

        const cardHTML = `  <!-- карточка твари --> 
        <div class="card">
            <!-- верхняя часть карточки -->
             <div class="card-top">
                <a class="card_image" href="https://xn--90aala0adcvdb6p.xn--p1ai/apple-iphone/iphone-17-pro-max/iphone-17-pro-max-256-gb-cosmic-orange/">
                <img  src=${products[i].image}>
            </a>
             </div>
             <!-- нижняя часть карточки -->
              <div class="card_bottom">
                <div class="card_prices">
                    <div class="card_price card_price-discount">
                        ${products[i].discountPrice}
                    </div>
                    <div class="card_price card_price-common">
                        ${products[i].price}
                    </div>
                </div>
                <a class="card_title"  href="https://xn--90aala0adcvdb6p.xn--p1ai/apple-iphone/iphone-17-pro-max/iphone-17-pro-max-256-gb-cosmic-orange/"
                "> ${products[i].title}
            </a>
                    <!-- кнопка добавить в корзину -->
                     <button class="card_add">в корзину</button>
              </div>
        </div>`
        const container = document.querySelector(".container")
        container.innerHTML += cardHTML
    }