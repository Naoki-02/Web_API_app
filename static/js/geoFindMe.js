// geoFindMe.js
export function geoFindMe() {
    return new Promise((resolve, reject) => {
        const success = (position) => {
            const latitude = position.coords.latitude;
            const longitude = position.coords.longitude;
            resolve({ latitude, longitude });
        };

        const error = () => {
            reject(new Error("Unable to retrieve your location"));
        };

        if (!navigator.geolocation) {
            reject(new Error("Geolocation is not supported in this browser"));
        } else {
            navigator.geolocation.getCurrentPosition(success, error);
        }
    });
}
