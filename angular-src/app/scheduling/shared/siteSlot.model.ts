
export class Direction {
    name: string;
    generalMemo: string;
    schedulingMemo: string;
    direction: string;
}
export class Contact {
    phoneNumber: string;
    faxNumber: string;
}
export class Address {
    addressLine: string[];
    locality: string;
    adminDistrict: string;
    postalCode: string;
    country: string;
    formattedAddress: string;
}

export class Slot {
    id: string;
    uri: string;
    startDateTime: any;
    duration: number;
}

export class SiteLocation {
    address: Address;
    coordinates: number[];
    contact: Contact;
    directions: Direction;
    distance: number;
}

export class SiteSlot {
    id: string;
    uri: string;
    type: string;
    prefix: string;
    location: SiteLocation;
    slots: Slot[];

}
