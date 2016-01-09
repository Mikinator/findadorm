System.register(['angular2/core', './dorm-detail.component'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, dorm_detail_component_1;
    var DormListComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (dorm_detail_component_1_1) {
                dorm_detail_component_1 = dorm_detail_component_1_1;
            }],
        execute: function() {
            DormListComponent = (function () {
                function DormListComponent() {
                    this.header = 'Available Rooms';
                }
                DormListComponent.prototype.onSelect = function (room) { this.selectedRoom = room; };
                DormListComponent = __decorate([
                    core_1.Component({
                        selector: 'dorm-list',
                        directives: [dorm_detail_component_1.DormDetailComponent],
                        inputs: ['rooms'],
                        template: "\n\t\t<div>\n\t\t\t<h1>{{header}}</h1>\n\t\t\t<ul>\n\t\t\t\t<li *ngFor='#room of rooms'\n\t\t\t\t(click)=\"onSelect(room)\"\n\t\t\t\t>\n\t\t\t\t\t<span> {{room.name}} </span>\n\t\t\t\t</li>\n\t\t\t</ul>\n\t</div>\n\t<room-detail [room] = 'selectedRoom'></room-detail>\n\t"
                    }), 
                    __metadata('design:paramtypes', [])
                ], DormListComponent);
                return DormListComponent;
            })();
            exports_1("DormListComponent", DormListComponent);
        }
    }
});
//# sourceMappingURL=dorm-list.component.js.map