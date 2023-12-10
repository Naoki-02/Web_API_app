import { geoFindMe } from './geoFindMe.js';

document.addEventListener('DOMContentLoaded', async function () {
    try {
        const { latitude, longitude } = await geoFindMe();
        
        const keyword = document.getElementById('keyword').value;
        const range = 5;

        // AJAXリクエストを使用してDjangoのViewからデータを取得
        const url = `/hotpepper/search/?keyword=${keyword}&range=${range}&latitude=${latitude}&longitude=${longitude}`;

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
                } else {
                    window.location.href = 'restaurant-detail/';
                }
            });

            restaurantList.appendChild(listItem);
        });
    } catch (error) {
        console.error('データの取得エラー:', error);
    }
});