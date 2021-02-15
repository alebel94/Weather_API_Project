

/* When the user clicks on the button, 
toggle between hiding and showing the dropdown content */
function temp_button() {
    document.getElementById("celsiusDropdown").classList.toggle("show");
}

  // Close the dropdown if the user clicks outside of it
window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
        var dropdowns = document.getElementsByClassName("dropdown-content");
        var i;
        for (i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
                if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
}

// I was trying to use the button to toggle between farenheit and celsius

const apiKey = "62ee8dc084a231a6c226127ae25dcdd9"
const citySearch = document.querySelector('.submit');
citySearch.addEventListener('keypress', ( event ) => {
    function setQuery(event) {
        event.preventDefault()
        if (event.keyCode == 13) { // keycode 13 is the enter key in kyboard
            getResults(event.path[0][0].value.value);
        }
    }

    function getFarenheit(data) {
        cityName = document.getElementById('city-name').value;
        let response = fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}&units=imperial`);
        data = response.json();
        document.getElementById("city").innerHTML=data.name;
        document.getElementById("forecast").innerHTML=data.weather[0].description;
        document.getElementById("feels_like").innerHTML =`${roundNum(data.main.feels_like)} F`;
        document.getElementById("high").innerHTML = `${roundNum(data.main.temp_max)} F`;
        document.getElementById("low").innerHTML =`${roundNum(data.main.temp_min)} F`;
        console.log(data);
    }

    // function getCelsius(data) {
    //     cityName = document.getElementById('city-name').value;
    //     let response = fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}&units=metric`);
    //     data = response.json();
    //     document.getElementById("city").innerHTML=data.name;
    //     document.getElementById("forecast").innerHTML=data.weather[0].description;
    //     document.getElementById("feels_like").innerHTML =`${Math.round(data.main.feels_like)} C`;
    //     document.getElementById("high").innerHTML = `${Math.round(data.main.temp_max)} C`;
    //     document.getElementById("low").innerHTML =`${Math.round(data.main.temp_min)} C`;
    //     console.log( data);
    // }
})
