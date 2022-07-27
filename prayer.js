function getData() {
    let input = document.getElementById('city').value;

    axios.get(`https://api.aladhan.com/v1/timingsByCity?city=${input}&country=pakistan&method=1`)
        .then(function (response) {
            const data = response.data;
            console.log(data);

            let gregorian = data.data.date.gregorian.date
            let hijri = data.data.date.hijri.date
            let month = data.data.date.hijri.month.en
            let urduMonth = data.data.date.hijri.month.ar
            let fajr = data.data.timings.Fajr;
            let sunrise = data.data.timings.Sunrise;
            let dhuhr = data.data.timings.Dhuhr;
            let asr = data.data.timings.Asr;
            let sunset = data.data.timings.Sunset
            let maghrib = data.data.timings.Maghrib;
            let isha = data.data.timings.Isha;
            let midnight = data.data.timings.Midnight
            console.log(fajr, sunrise, dhuhr, asr, maghrib, isha);
            // get date
            let date = data.data.date.readable;
            console.log(date);

            document.getElementById(`hijri`).innerHTML = hijri
            document.getElementById(`gregorian`).innerHTML = gregorian
            document.getElementById(`month`).innerHTML = month
            document.getElementById(`urdu`).innerHTML = urduMonth
            document.getElementById("fajr-time").innerHTML = `${fajr} Am`;
            document.getElementById("sunrise-time").innerHTML = `${sunrise} Am`;
            document.getElementById("zuhr-time").innerHTML = `${dhuhr} Pm`;
            document.getElementById("asr-time").innerHTML = ` ${asr} Pm`;
            document.getElementById("sunset").innerHTML = `${sunset} Pm`;
            document.getElementById("maghrib-time").innerHTML = `${maghrib} Pm`;
            document.getElementById("isha-time").innerHTML = `${isha} Pm`;
            document.getElementById("midnight").innerHTML = midnight;

            document.getElementById('no').classList.remove('hide')
        }
        )
}