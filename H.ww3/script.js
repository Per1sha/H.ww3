document.querySelector('form').onsubmit = (event) => { 
    event.preventDefault();
    const cityName = document.querySelector('input').value;
    fetch('http://api.weatherapi.com/v1/current.json?key=7013c0154c9a44a892430916230407&q=' + cityName)
        .then((response) => {
            if (!response.ok) {
                throw new Error('Плохое соединение, или такого города нет');
            }
            return response.json();
        })
        .then((data) => {
            console.log(data);
            document.querySelector('section').innerHTML = `
                <h2>Название страны: ${data.location.country}</h2>
                <h2>Название города: ${data.location.region}</h2>
                <h2>Температура: ${data.current.temp_c} Градусов</h2>
                <h2>Скорость ветра: ${data.current.wind_kph} км/час</h2>
                <img src="https:${data.current.condition.icon}">
            `;
        })
        .catch((error) => {
            document.querySelector('section').innerHTML = `<p>${error.message}</p>`;
        });
};






