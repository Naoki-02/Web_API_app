// script.js
document.getElementById('loadDataButton').addEventListener('click', function () {
    // AJAXリクエストを使用してDjangoのViewからデータを取得
    fetch('/hotpepper/search/')  // Django ViewのURLに置き換える
        .then(response => response.json())
        .then(data => {
            // HTMLを生成してデータを表示
            const restaurantList = document.getElementById('restaurantList');
            data.results.shop.forEach(restaurant => {
                const listItem = document.createElement('li');
                listItem.innerHTML = `
                    <strong>${restaurant.name}</strong><br>
                    Genre: ${restaurant.genre.name}<br>
                    Address: ${restaurant.address}<br>
                    Station: ${restaurant.station_name}<br>
                    Budget: ${restaurant.budget.name}<br>
                    <img src="${restaurant.photo.pc.l}" alt="${restaurant.name}" width="200"><br>
                    <a href="${restaurant.urls.pc}" target="_blank">More Info</a>
                `;
                restaurantList.appendChild(listItem);
            });
        })
        .catch(error => console.error('Error fetching data:', error));
});
