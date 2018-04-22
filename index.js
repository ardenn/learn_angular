var myApp = angular.module("index", ["eitservices"]);
myApp.controller("AddController", ["eitService",
    function AddController(eitService) {
        this.eit;
        this.getEditState = () => {
            return eitService.getEditState();
        }
        this.getActiveEitEdit = () => {
            this.eit = eitService.getEditState() ? angular.copy(eitService.getActiveEitEdit()) : null;
        }
        this.addEit = () => {
            if (this.eit.firstname) {
                eitService.addEit(this.eit);
                console.log(this.eit.dob)
                this.eit = null;
            }
        }
        this.updateEit = () => {
            eitService.updateEit(this.eit);
            this.eit = null;
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
            eitService.removeEit(id);
        }
        this.loadEits = () => {
            eitService.loadEits();
        }
        this.viewEit = (id) => {
            eitService.setActiveEit(id);
        }
        this.editEit = (id) => {
            eitService.setActiveEitEdit(id);
            eitService.setEditState(true);
        }

    }
])