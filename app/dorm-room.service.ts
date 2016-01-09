import {Injectable} from 'angular2/core';
import {Room} from './room';// should be able to get rid of this
import {ROOMS} from './rooms-list';

@Injectable()

export class DormRoomService{
	serveRooms(){
		return Promise.resolve(ROOMS);
	}

}