export interface EventLocation {
    address: string;
    city: string;
    country: string;
}

export interface Event {
    id: string;
    name: string;
    description: string;
    price: number;
    date: string;
    time: string;
    location: EventLocation;
    image: string;
}
