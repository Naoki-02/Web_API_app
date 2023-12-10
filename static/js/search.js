import { geoFindMe } from './geoFindMe.js';

document.getElementById('search-form-005').addEventListener('submit', async function (event) {
    event.preventDefault();

    try {
        const { latitude, longitude } = await geoFindMe();
        const keyword = document.getElementById('keyword').value;
        const range = document.getElementById('range').value;
        const free_food = document.getElementById('free_food').checked ? 1 : 0;
        const private_room = document.getElementById('private_room').checked ? 1 : 0;
        const card = document.getElementById('card').checked ? 1 : 0;
        const english = document.getElementById('english').checked ? 1 : 0;
        const child = document.getElementById('child').checked ? 1 : 0;
        const parking = document.getElementById('parking').checked ? 1 : 0;

        // console.log(free_food);
        // console.log(private_room);
        // console.log(card);
        // console.log(english);
        // console.log(child);
        // console.log(parking);

        // AJAXリクエストを使用してDjangoのViewからデータを取得
        const url = `/hotpepper/search/?keyword=${keyword}&range=${range}&latitude=${latitude}&longitude=${longitude}&free_food=${free_food}&private_room=${private_room}&card=${card}&english=${english}&child=${child}&parking=${parking}`;

        const response = await fetch(url);
        const data = await response.json();

        // HTMLを生成してデータを表示
        const restaurantList = document.getElementById('restaurantList');
        restaurantList.innerHTML = ''; // 以前の結果をクリア

        data.results.shop.forEach(restaurant => {
            const listItem = document.createElement('div');
            listItem.classList.add('restaurant-container'); // クラスを追加
            listItem.innerHTML = `
            <div class="restaurant-link" data-restaurant-id="${restaurant.id}">
                <img src="${restaurant.photo.pc.l}" alt="${restaurant.name}" width="200"><br>
                <strong class="restaurant_name">${restaurant.name}</strong><br>
            </div>
            <div class="name_border"></div>
            <div class="restaurant_status">
                アクセス: ${restaurant.access}<br>
                <br>
                予算: ${restaurant.budget.name}<br>
                営業: ${restaurant.open}<br>
            </div>
            
            `;

            // クリック時の処理を追加
            listItem.querySelector('.restaurant-link').addEventListener('click', function (clickEvent) {
                clickEvent.preventDefault();

                // クッキーにJSONデータを保存
                document.cookie = `restaurantData=${JSON.stringify(restaurant)}; path=/`;

                // ページ遷移
                const currentUrl = window.location.href;

                // 現在のURLに "detail" が含まれていた場合に遷移
                if (currentUrl.includes('restaurant-detail')) {
                    window.location.href = currentUrl;
                }else{
                    window.location.href = 'restaurant-detail/';
                }
            });

            restaurantList.appendChild(listItem);
        });
    } catch (error) {
        console.error('データの取得エラー:', error);
    }
});
