document.addEventListener('DOMContentLoaded', function () {
    let CookieValue = document.cookie
        .split('; ')
        .find(row => row.startsWith('restaurantData='))
        .split('restaurantData=')[1];

    try {
        // JSONデータをオブジェクトにパース
        const restaurantData = JSON.parse(CookieValue);
        console.log("restaurantData:", restaurantData);

        if (restaurantData) {
            // 詳細情報を表示
            const restaurantDetails = document.getElementById('restaurantDetails');
            restaurantDetails.innerHTML = `
                <strong>${restaurantData.name}</strong><br>
                予算: ${restaurantData.budget.name}<br>
                住所: ${restaurantData.address}<br>
                アクセス: ${restaurantData.access}<br>
                営業時間: ${restaurantData.open}<br>
                <img src="${restaurantData.photo.pc.l}" alt="${restaurantData.name}" width="200"><br>
                <a href="${restaurantData.urls.pc}" target="_blank">クーポンを見る</a>
            `;
            console.log(restaurantData.open)
            // 営業時間: ${restaurantData.open}<br></br>
            // <img src="${restaurant.photo.pc.l}" alt="${restaurant.name}" width="200"><br>
        } else {
            console.error('データがありません。');
        }
    } catch (error) {
        console.error('JSONデータのパース中にエラーが発生しました:', error);
    }
});
