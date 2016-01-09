System.register(['angular2/core', './dorm-room.service', './dorm-list.component'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, dorm_room_service_1, dorm_list_component_1;
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (dorm_room_service_1_1) {
                dorm_room_service_1 = dorm_room_service_1_1;
            },
            function (dorm_list_component_1_1) {
                dorm_list_component_1 = dorm_list_component_1_1;
            }],
        execute: function() {
            AppComponent = (function () {
                function AppComponent(_dormRoomService) {
                    this._dormRoomService = _dormRoomService;
                }
                AppComponent.prototype.getRooms = function () {
                    var _this = this;
                    this._dormRoomService.serveRooms().then(function (rooms) { return _this.rooms = rooms; });
                };
                AppComponent.prototype.ngOnInit = function () { this.getRooms(); };
                AppComponent = __decorate([
                    core_1.Component({
                        selector: 'my-app',
                        template: "\n\t\t<dorm-list [rooms] = 'rooms'></dorm-list>\n\t",
                        directives: [dorm_list_component_1.DormListComponent],
                        providers: [dorm_room_service_1.DormRoomService]
                    }), 
                    __metadata('design:paramtypes', [dorm_room_service_1.DormRoomService])
                ], AppComponent);
                return AppComponent;
            })();
            exports_1("AppComponent", AppComponent);
        }
    }
});
//# sourceMappingURL=app.component.js.map