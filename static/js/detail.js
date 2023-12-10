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
                <img src="${restaurantData.photo.pc.l}" alt="${restaurantData.name}" width="200"><br>
                <strong class="restaurant_name">${restaurantData.name}</strong><br>
                <div class="name_border"></div>
                <h2 class="heading-016">${restaurantData.catch}</h2>
                <div class="restaurant_status">
                    <ul class="list-006">
                        <li>予算: ${restaurantData.budget.name}</li>
                        <li>カード: ${restaurantData.card}</li>
                        <li>住所: ${restaurantData.address}</li>
                        <li>アクセス: ${restaurantData.access}</li>
                        <li>禁煙・喫煙: ${restaurantData.non_smoking}</li>
                        <li>営業時間: ${restaurantData.open}</li>
                        <li>定休日: ${restaurantData.close}</li>
                        
                    </ul>   
                </div>
                <div id="link">
                    <button class="button-028" aria-label="link" onclick="window.location.href='${restaurantData.urls.pc}'">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
                            <path fill="#ffffff" d="M15.3 8.7c2.8 2.8 2.8 7.3 0 10.1l-3.1 3.1c-2.8 2.8-7.3 2.8-10.1 0s-2.8-7.3 0-10.1l1.7-1.7c.5-.5 1.3-.2 1.3.5 0 .8.2 1.7.5 2.5.1.3 0 .6-.2.8l-.6.6c-1.3 1.3-1.4 3.5-.1 4.8 1.3 1.3 3.5 1.3 4.8 0l3.1-3.1c1.3-1.3 1.3-3.5 0-4.8-.2-.2-.3-.3-.5-.4-.2-.1-.3-.4-.3-.6 0-.5.2-1 .5-1.4l1-1c.3-.3.7-.3 1-.1.4.2.7.5 1 .8zm6.6-6.6c-2.8-2.8-7.3-2.8-10.1 0L8.7 5.2C6 8 5.9 12.5 8.7 15.3c.3.3.6.6 1 .8.3.2.7.2 1-.1l1-1c.4-.4.6-.9.5-1.4 0-.2-.1-.5-.3-.6-.1-.1-.3-.2-.5-.4-1.3-1.3-1.3-3.5 0-4.8l3.1-3.1c1.3-1.3 3.5-1.3 4.8 0 1.3 1.3 1.3 3.5-.1 4.8l-.6.6c-.2.2-.3.5-.2.8.3.8.4 1.6.5 2.5 0 .7.8 1 1.3.5l1.7-1.7c2.8-2.8 2.8-7.3 0-10.1z"/>
                        </svg>
                    </button>
                </div>
                
            `;
            // <div id="catch"></div><br></br>
            // console.log(restaurantData.open)
        } else {
            console.error('データがありません。');
        }
    } catch (error) {
        console.error('JSONデータのパース中にエラーが発生しました:', error);
    }
});
