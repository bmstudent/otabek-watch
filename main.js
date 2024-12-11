let products = document.querySelector("#products");
let data = [
  {
    img: "https://static.alltime.ru/obj/article/image-blog/kakoy_vy_kinogeroy/kakoy_vy_kinogeroy_2.jpg",
    title: "WATCH",
    price: "150 $",
  },
  {
    img: "https://avatars.mds.yandex.net/i?id=25362b7699552728e0f981dbc591e22f_l-10385057-images-thumbs&n=13",
    title: "WATCH",
    price: "200 $",
  },
  {
    img: "https://avatars.mds.yandex.net/i?id=093f0c6800aa898d427e482e2ff01228_l-5332625-images-thumbs&n=13",
    title: "WATCH",
    price: "300 $",
  },
  {
    img: "https://cache3.youla.io/files/images/780_780/5a/40/5a40d31c2138bb4aab4f20a4.jpg",
    title: "WATCH",
    price: "400 $",
  },
  {
    img: "https://i.ebayimg.com/images/g/e~UAAOSwPq5hexX-/s-l1600.png",
    title: "WATCH",
    price: "500 $",
  },
  {
    img: "https://img.joomcdn.net/7528a357ddcb7a63297d446d11b73492cf4f5e01_original.jpeg",
    title: "WATCH",
    price: "600 $",
  },

  {
    img: "https://avatars.mds.yandex.net/i?id=e45ab921345ea29446ec142a3ceced38_l-8216803-images-thumbs&n=13",
    title: "WATCH",
    price: "700 $",
  },
  {
    img: "https://avatars.mds.yandex.net/i?id=1870729ab9998111bbdb5b9637213b4b_l-4399580-images-thumbs&n=13",
    title: "WATCH",
    price: "800 $",
  },
  {
    img: "https://cdn1.ozone.ru/s3/multimedia-9/6260828865.jpg",
    title: "WATCH",
    price: "200 $",
  },
  {
    img: "https://avatars.mds.yandex.net/i?id=da2c46dcf5ad733c2f32348509366e91_l-5235412-images-thumbs&n=13",
    title: "WATCH",
    price: "100 $",
  },
  {
    img: "https://avatars.mds.yandex.net/i?id=8ac29b0de0e160a3eb32efa4496bfa0f_l-4275701-images-thumbs&n=13",
    title: "WATCH",
    price: "200 $",
  },
  {
    img: "https://www.online-outlet.ru/wp-content/uploads/2023/11/AR1970_front.jpg",
    title: "WATCH",
    price: "100 $",
  },
];
for (let item of data) {
  products.innerHTML += `        <article class="border rounded-lg bg-white owerflow-hidden">
          <img src="${item.img}" alt="" class="w-full h-44 object-cover">
          <div class="p-2"><h1 class="text-lg font-medium text-gray-900">${item.title}</h1>
          <h2 class="text-blue-500 font-bold text-xl my-1">${item.price}</h2>
          <button class="bg-gray-900  text-white p-1 w-full rounded-md mt-2 active:scale-95 duration-300">Add to Cart</button>
          </div>
        </article>`;
}
