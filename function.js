// function declaration
// function ismChiqarish() {
//   console.log("Alisher");
// }
// ismChiqarish();
// function daraja(a,b){
//     console.log(a**b);

// }
// daraja(9,2)
// function qoshish(a,b,c,d,e,f,g,h,i){
// console.log(a*b*c*d*e*f*g*h*i);

// }
// qoshish(999999999999999,999999999999999,999999999999999,999999999999999,999999999999999,999999999999999,999999999999999,999999999999999,999999999999999)
// function ismqoshish(ism, familiya) {
//   let a = ism.slice(0, 1).toUpperCase() + ism.slice(1, ism.length);
//   let b =
//     familiya.slice(0, 1).toUpperCase() + familiya.slice(1, familiya.length);
//   console.log(a, b);
// }
// ismqoshish("otabek", "abduxakimov");
// //---------------------------------------------------------------
// function oo(ism) {
//   let a = ism.slice(0, 1).toUpperCase() +ism.slice(1,ism.length-1)+ism.slice(-1,).toUpperCase();
//   console.log(a);
// }
// oo("otabek");
// let container = document.querySelector(".container");
// function htmlText(ism, text) {
//   container.innerHTML += `
//       <div class="box bg-blue-400 p-5 rounded-md">
//         <h1 class="text-white text-3xl font-mono">${ism}</h1>
//         <p class="text-white mt-2 font-mono text-justify">
//          ${text}
//         </p>
//       </div>
// `;
// }
// htmlText(
//   "Otabek 😎",
//   ` Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt nam
//           facere officia in. Consequatur necessitatibus veniam nobis,
//           dignissimos, placeat similique inventore incidunt corporis et nesciunt
//           qui sunt. Doloribus, veritatis dolorum.`
// );
// htmlText(
//   "Anasxon 😀",
//   ` Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt nam
//           facere officia in. Consequatur necessitatibus veniam nobis,
//           dignissimos, placeat similique inventore incidunt corporis et nesciunt
//           qui sunt. Doloribus, veritatis dolorum.`
// );
// htmlText(
//   "Jobirxon 🤪",
//   ` Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt nam
//           facere officia in. Consequatur necessitatibus veniam nobis,
//           dignissimos, placeat similique inventore incidunt corporis et nesciunt
//           qui sunt. Doloribus, veritatis dolorum.`
// );
// htmlText(
//   "Usmonxon ☝",
//   ` Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt nam
//           facere officia in. Consequatur necessitatibus veniam nobis,
//           dignissimos, placeat similique inventore incidunt corporis et nesciunt
//           qui sunt. Doloribus, veritatis dolorum.`
// );
// let container = document.querySelector(".container");
// function card(a, b, c, d) {
//   container.innerHTML += `
//       <div class="card bg-white">
//         <img
//           src="${a}"
//           alt=""
//           class="w-full h-60 object-cover"
//         />
//         <article class="p-4">
//           <h1 class="text-2xl font bold">${b}</h1>
//           <p class="text-sm font mono mt-2">
// ${c}
//           </p>
//           <a
//             target="_blank"
//             href="${d}"
//             class="bg-blue-400 p-2 text-center block mt-4 font-mono text-white"
//             >Visit</a
//           >
//         </article>
//       </div>
//   `;
// }
// card(
//   "https://i.ytimg.com/vi/3p5_x5_ksrk/maxresdefault.jpg",
//   "Muxammadjon",
//   `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Atque
//  facere ipsam dolor. Vero nobis reiciendis amet deserunt aut qui
// quaerat eaque impedit dolorum, ratione adipisci voluptatem, mollitia
// veritatis doloribus eligendi.`
// );
// card(
//   "https://i.ytimg.com/vi/3p5_x5_ksrk/maxresdefault.jpg",
//   "Otabek",
//   `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Atque
// facere ipsam dolor. Vero nobis reiciendis amet deserunt aut qui
// quaerat eaque impedit dolorum, ratione adipisci voluptatem, mollitia
// veritatis doloribus eligendi.`
// );
// card(
//   "https://i.ytimg.com/vi/3p5_x5_ksrk/maxresdefault.jpg",
//   "Kamron",
//   `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Atque
// facere ipsam dolor. Vero nobis reiciendis amet deserunt aut qui
// quaerat eaque impedit dolorum, ratione adipisci voluptatem, mollitia
// veritatis doloribus eligendi.`
// );
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
