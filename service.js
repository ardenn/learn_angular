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
    var INITIAL = [
        { id: 1, firstname: "Angel", lastname: "Mbeda", dob: "Apr 09 1992", gender: "Female" },
        { id: 2, firstname: "Kevin", lastname: "Systrom", dob: "Apr 09 1992", gender: "Male" },
        { id: 3, firstname: "Arden", lastname: "Jess", dob: "Apr 09 1992", gender: "Female" },
        { id: 4, firstname: "King", lastname: "Kaka", dob: "Apr 09 1992", gender: "Male" },
        { id: 5, firstname: "Lost", lastname: "Hope", dob: "Apr 09 1992", gender: "Female" },
        { id: 6, firstname: "Hannibal", lastname: "Lecter", dob: "Apr 09 1992", gender: "Male" }
    ]
    this.loadEits = () => {
        this.eits = INITIAL.slice();
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