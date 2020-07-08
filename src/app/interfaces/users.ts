interface Igeo {
    lat: number,
    lng: number
}

interface IAddress {
    street: string;
    suite: string;
    city: string;
    zipcode: number
    geo: Igeo
};
interface Icompany {
    name: string,
    catchPhrase: string,
    bs: string
}

export interface Iuser {
    id: number;
    name: string;
    username: string;
    email: string;
    address: IAddress,
    phone: number,
    website: string,
    company: Icompany
}