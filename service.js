var myService = angular.module("eitservices", [])
myService.service("eitService", function eitService() {
    this.eits = [];
    this.addEit = (fname, lname, dob, gender) => {
        if (fname) {
            this.eits.push({
                id: this.eits.length > 0 ? this.eits[this.eits.length - 1].id + 1 : 1,
                firstname: fname,
                lastname: lname,
                dob: dob,
                gender: gender
            })
        }
    }
    this.ms = {
        msPerYear: 31536000000,
        msPerMonth: 2628000000,
        msPerDay: 86400000,
        msPerHour: 3600000,
        msPerMinute: 60000,
        msPerSecond: 1000
    };
})