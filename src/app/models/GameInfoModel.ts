export class GameInfo {
	_id: string;
	grid: string[][];

	constructor(obj: any = null) {
		if(obj != null) {
			Object.assign(this, obj);
		}
	}
}