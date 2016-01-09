import {Component} from 'angular2/core';
import {Room} from './room';
import {DormDetailComponent} from './dorm-detail.component'

@Component({
	selector: 'dorm-list',
	directives: [DormDetailComponent],
	inputs: ['rooms'],
	template: `
		<div>
			<h1>{{header}}</h1>
			<ul>
				<li *ngFor='#room of rooms'
				(click)="onSelect(room)"
				>
					<span> {{room.name}} </span>
				</li>
			</ul>
	</div>
	<room-detail [room] = 'selectedRoom'></room-detail>
	`
})

export class DormListComponent {
	public header = 'Available Rooms'
	public rooms: Room;
	public selectedRoom: Room;

	onSelect(room: Room) { this.selectedRoom = room; }

}
