import { geoFindMe } from './geoFindMe.js';
// search.js
document.getElementById('searchForm').addEventListener('submit', async function (event) {
    event.preventDefault();

    try {
        const { latitude, longitude } = await geoFindMe();
        const keyword = document.getElementById('keyword').value;
        const range = document.getElementById('range').value;

        // AJAXリクエストを使用してDjangoのViewからデータを取得
        const url = `/hotpepper/search/?keyword=${keyword}&range=${range}&latitude=${latitude}&longitude=${longitude}`;
        
        const response = await fetch(url);
        const data = await response.json();

        // HTMLを生成してデータを表示
        const restaurantList = document.getElementById('restaurantList');
        restaurantList.innerHTML = ''; // 以前の結果をクリア

        data.results.shop.forEach(restaurant => {
            const listItem = document.createElement('li');
            listItem.innerHTML = `
                <strong>${restaurant.name}</strong><br>
                ジャンル: ${restaurant.genre.name}<br>
                住所: ${restaurant.address}<br>
                最寄り駅: ${restaurant.station_name}<br>
                予算: ${restaurant.budget.name}<br>
                <img src="${restaurant.photo.pc.l}" alt="${restaurant.name}" width="200"><br>
                <a href="${restaurant.urls.pc}" target="_blank">詳細情報</a>
            `;
            restaurantList.appendChild(listItem);
        });
    } catch (error) {
        console.error('データの取得エラー:', error);
    }
});
