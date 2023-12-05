// geoFindMe.js
export function geoFindMe() {
    return new Promise((resolve, reject) => {
        const success = (position) => {
            const latitude = position.coords.latitude;
            const longitude = position.coords.longitude;
            resolve({ latitude, longitude });
        };

        const error = () => {
            reject(new Error("現在地を取得できません。"));
        };

        if (!navigator.geolocation) {
            reject(new Error("このブラウザではサポートされていません"));
        } else {
            navigator.geolocation.getCurrentPosition(success, error);
        }
    });
}
