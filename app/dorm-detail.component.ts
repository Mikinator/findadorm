import {Component} from 'angular2/core';
import {Room} from './room';

@Component({
	selector: 'room-detail',
	inputs: ['room'],
	template: `
		<div *ngIf='room'>
			<h1>{{room.name}}</h1>
			<div>campus:{{room.campus}}</div>
			<div>distance:{{room.distance}}</div>

		</div>
	`
})

export class DormDetailComponent{
	public room: Room;
}