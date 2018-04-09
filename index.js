var myApp = angular.module("index", []);
myApp.controller("PersonController", function PersonController() {
    this.firstname;
    this.lastname;
    this.dob;
    this.gender;
    this.ms = {
        msPerYear: 31536000000,
        msPerMonth: 2628000000,
        msPerDay: 86400000,
        msPerHour: 3600000,
        msPerMinute: 60000,
        msPerSecond: 1000
    }

    this.getFullName = () => {
        return this.firstname + " " + this.lastname;
    }
    this.getAge = () => {
        var yob = new Date(this.dob);
        var currentDate = new Date();
        return Math.floor((currentDate - yob) / 31536000000);
    }
    this.getFullAge = () => {
        var currentDate = new Date();
        var yob = new Date(this.dob);
        var years, days, hours, minutes, seconds;

        var remainder = (currentDate - yob);
        years = Math.floor(remainder / this.ms.msPerYear);
        remainder %= this.ms.msPerYear;
        months = Math.floor(remainder / this.ms.msPerMonth);
        remainder %= this.ms.msPerMonth;
        days = Math.floor(remainder / this.ms.msPerDay);
        remainder %= this.ms.msPerDay;
        hours = Math.floor(remainder / this.ms.msPerHour);
        remainder %= this.ms.msPerHour;
        minutes = Math.floor(remainder / this.ms.msPerMinute);
        remainder %= this.ms.msPerMinute;
        seconds = Math.floor(remainder / this.ms.msPerSecond);

        if (this.dob) {
            return years + " years, " + months + " months, " + days + " days, " + hours + " hours, " + minutes + " minutes, " + seconds + " seconds"
        }
        return 0
    }
})