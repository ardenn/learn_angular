var myApp = angular.module("index", ["eitservices"]);
myApp.controller("PersonController", ["eitService",
    function PersonController(eitService) {
        this.firstname;
        this.lastname;
        this.dob;
        this.gender;
        this.getEitList = () => {
            return eitService.eits;
        };

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
            years = Math.floor(remainder / eitService.ms.msPerYear);
            remainder %= eitService.ms.msPerYear;
            months = Math.floor(remainder / eitService.ms.msPerMonth);
            remainder %= eitService.ms.msPerMonth;
            days = Math.floor(remainder / eitService.ms.msPerDay);
            remainder %= eitService.ms.msPerDay;
            hours = Math.floor(remainder / eitService.ms.msPerHour);
            remainder %= eitService.ms.msPerHour;
            minutes = Math.floor(remainder / eitService.ms.msPerMinute);
            remainder %= eitService.ms.msPerMinute;
            seconds = Math.floor(remainder / eitService.ms.msPerSecond);

            if (this.dob) {
                return years + " years, " + months + " months, " + days + " days, " + hours + " hours, " + minutes + " minutes, " + seconds + " seconds"
            }
            return 0
        }
        this.addEit = (fname, lname, dob, gender) => {
            eitService.addEit(fname, lname, dob, gender);
            this.firstname = null;
            this.lastname = null;
            this.dob = null;
            this.gender = null;
        }
        this.removeEit = (eit) => {
            eitService.eits.splice(this.getEitList().indexOf(eit), 1);
        }

    }])