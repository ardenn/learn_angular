var myApp = angular.module("index", ["eitservices"]);
myApp.controller("AddController", ["eitService",
    function AddController(eitService) {
        this.firstname;
        this.lastname;
        this.dob;
        this.gender;
        this.editing = () => {
            return eitService.editing;
        }
        this.addEit = (fname, lname, dob, gender) => {
            if (fname) {
                eitService.addEit(fname, lname, dob, gender);
                this.firstname = null;
                this.lastname = null;
                this.dob = null;
                this.gender = null;
            }
        }
        this.loadEits = () => {
            eitService.loadEits();
        }
    }])
myApp.controller("ViewController", ["eitService",
    function ViewController(eitService) {
        this.getActiveEit = () => {
            return eitService.getActiveEit();
        };
        this.getFullName = (eit) => {
            return eitService.getFullName(eit);
        }
        this.getAge = (eit) => {
            return eitService.getAge(eit);
        }
        this.getFullAge = (eit) => {
            return eitService.getFullAge(eit);
        }
        this.clearActiveView = () => {
            eitService.activeEit = null;
        }
    }
])
myApp.controller("ListController", ["eitService",
    function ListController(eitService) {
        this.getEitList = () => {
            return Object.values(eitService.eits);
        }
        this.removeEit = (id) => {
            delete eitService.eits[id];
        }
        this.loadEits = () => {
            eitService.loadEits();
        }
        this.viewEit = (id) => {
            eitService.activeEit = id;
        }
        this.editEit = (id) => {
            eitService.activeEitEdit = id;
        }

    }
])