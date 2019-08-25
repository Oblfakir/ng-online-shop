export class AppError {
	description: string;
	status: '404' | '403' | '500' | null;

	constructor(description: string = 'Something went wrong', status: '404' | '403' | '500' | null = null) {
		this.description = description;
		this.status = status;
	}
}
