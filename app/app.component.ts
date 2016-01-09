//angular components
import {Component} from 'angular2/core';
import {OnInit} from 'angular2/core'

//app specific stuff
import {Room} from './room';
import {DormRoomService} from './dorm-room.service';
import {DormDetailComponent} from './dorm-detail.component';
import {DormListComponent} from './dorm-list.component';
import {TestComponent} from './test.component'
import {MultipleTestComponent} from './multipletest.component'



@Component({
	selector: 'my-app',

	template: `
		<dorm-list [rooms] = 'rooms'></dorm-list>
	`,
	
	directives: [DormListComponent],
	providers: [DormRoomService]

})
export class AppComponent implements OnInit{ 
	
	public rooms: Room[]

	constructor(private _dormRoomService: DormRoomService){}

	getRooms() { this._dormRoomService.serveRooms().then(rooms => this.rooms = rooms);}

	ngOnInit() { this.getRooms();}
}