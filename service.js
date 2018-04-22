var myService = angular.module("eitservices", [])
myService.service("eitService", function eitService() {
    this.eits = {};
    this.COUNTER = 1;
    this.editState = false;
    this.addEit = (newEit) => {
        newEit["id"] = this.COUNTER;
        this.eits[this.COUNTER] = newEit;
        this.COUNTER += 1;
        this.editState = false;
    }
    this.updateEit = (updatedEit) => {
        var temp = this.getActiveEitEdit()
        this.eits[this.activeEitEdit].firstname = updatedEit.firstname ? updatedEit.firstname : temp.firstname;
        this.eits[this.activeEitEdit].lastname = updatedEit.lastname ? updatedEit.lastname : temp.lastname;
        this.eits[this.activeEitEdit].dob = updatedEit.dob ? updatedEit.dob : temp.dob;
        this.eits[this.activeEitEdit].gender = updatedEit.gender ? updatedEit.gender : temp.gender;
        this.editState = false;

    }
    this.activeEit;
    this.activeEitEdit;
    this.removeEit = (id) => {
        delete this.eits[id];
    }
    this.setEditState = (value) => {
        this.editState = value;
    }
    this.setActiveEit = (id) => {
        this.activeEit = id;
    }
    this.setActiveEitEdit = (id) => {
        this.activeEitEdit = id;
    }
    this.getEits = () => {
        return this.eits;
    }
    this.getEditState = () => {
        return this.editState;
    }
    this.getActiveEit = () => {
        return this.eits[this.activeEit];
    }
    this.getActiveEitEdit = () => {
        return this.eits[this.activeEitEdit];
    }
    this.loadEits = () => {
        this.eits = {
            1: { id: 1, firstname: "Angel", lastname: "Mbeda", dob: new Date(1992, 4, 9), gender: "Female" },
            2: { id: 2, firstname: "Kevin", lastname: "Systrom", dob: new Date(1992, 4, 9), gender: "Male" },
            3: { id: 3, firstname: "Arden", lastname: "Jess", dob: new Date(1992, 4, 9), gender: "Female" },
            4: { id: 4, firstname: "King", lastname: "Kaka", dob: new Date(1992, 4, 9), gender: "Male" },
            5: { id: 5, firstname: "Lost", lastname: "Hope", dob: new Date(1992, 4, 9), gender: "Female" },
            6: { id: 6, firstname: "Hannibal", lastname: "Lecter", dob: new Date(1992, 4, 9), gender: "Male" }
        }
        this.COUNTER = 7;
    }
    this.ms = {
        msPerYear: 31536000000,
        msPerMonth: 2628000000,
        msPerDay: 86400000,
        msPerHour: 3600000,
        msPerMinute: 60000,
        msPerSecond: 1000
    };
    this.getFullName = (eit) => {
        return eit.firstname + " " + eit.lastname;
    }
    this.getAge = (eit) => {
        var yob = new Date(eit.dob);
        var currentDate = new Date();
        return Math.floor((currentDate - yob) / 31536000000);
    }
    this.getFullAge = (eit) => {
        var currentDate = new Date();
        var yob = new Date(eit.dob);
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

        if (eit.dob) {
            return years + " years, " + months + " months, " + days + " days, " + hours + " hours, " + minutes + " minutes, " + seconds + " seconds"
        }
        return 0
    }
})