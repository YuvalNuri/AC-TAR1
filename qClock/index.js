class Clock {
    constructor(Country, Hours, Minutes, Seconds) {
        this.Country = Country;
        this.Hours = this.validateTime(Hours, 24);
        this.Minutes = this.validateTime(Minutes, 60);
        this.Seconds = this.validateTime(Seconds, 60);
    }

    ConvertToSeconds() {
        return this.Hours * 3600 + this.Minutes * 60 + this.Seconds;
    }

    Show(){
        return `${this.Hours.toString().padStart(2, "0")}:${this.Minutes.toString().padStart(2, "0")}:${this.Seconds.toString().padStart(2, "0")}`;
    }

    validateTime(value, max) {
        value = parseInt(value);
        if (value >= 0 && value <= max)
            return value;
        else
            return 0;
    }
}

clocks=[];

function init(){
    document.getElementById("submitBTN").addEventListener("click", () => {
        let country=document.getElementById("countryIN");
        let hours=document.getElementById("hoursIN");
        let minutes=document.getElementById("minutesIN");
        let seconds=document.getElementById("secondsIN");
        c=new Clock(country.value,hours.value,minutes.value,seconds.value);
        country.value="";
        hours.value="";
        minutes.value="";
        seconds.value="";
        clocks.push(c);
        console.log(clocks);
        if(clocks.length==5)
        {
            $("table").after(`<p id="clockSH">At ${c.Country} the time is ${c.Show()}<br/>In seconds: ${c.ConvertToSeconds()}</p>`);
        }
        else if(clocks.length>5){
            document.getElementById("clockSH").innerHTML=c.Show();
        }
    })
}