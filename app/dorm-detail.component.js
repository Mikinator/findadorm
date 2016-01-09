System.register(['angular2/core'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1;
    var DormDetailComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            DormDetailComponent = (function () {
                function DormDetailComponent() {
                }
                DormDetailComponent = __decorate([
                    core_1.Component({
                        selector: 'room-detail',
                        inputs: ['room'],
                        template: "\n\t\t<div *ngIf='room'>\n\t\t\t<h1>{{room.name}}</h1>\n\t\t\t<div>campus:{{room.campus}}</div>\n\t\t\t<div>distance:{{room.distance}}</div>\n\n\t\t</div>\n\t"
                    }), 
                    __metadata('design:paramtypes', [])
                ], DormDetailComponent);
                return DormDetailComponent;
            })();
            exports_1("DormDetailComponent", DormDetailComponent);
        }
    }
});
//# sourceMappingURL=dorm-detail.component.js.map