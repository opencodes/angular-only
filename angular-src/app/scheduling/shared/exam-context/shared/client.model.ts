export class Exam {
	id: string;
	code: string;
	uri: string;
	name: string;
	memo: string;
	idRequirement: string;
	schedule: any;
	testing: any;
	countries: any;
	demographics: any;
}

export class Countries{
	id: string;
	uri: string;
}

export class Schedule{
	startDate: Date;
	endDate: any;
	candidateCentric: boolean
	requiresBiometricConsent: boolean;
}