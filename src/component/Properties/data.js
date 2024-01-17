import Property1 from "../../assets/images/property/1.jpg";
import Property2 from "../../assets/images/property/2.jpg";
import Property3 from "../../assets/images/property/3.jpg";
import Property4 from "../../assets/images/property/4.jpg";
import Property5 from "../../assets/images/property/5.jpg";
import Property6 from "../../assets/images/property/6.jpg";

import SubProperty1 from "../../assets/images/property/single/1.jpg";
import SubProperty2 from "../../assets/images/property/single/2.jpg";
import SubProperty3 from "../../assets/images/property/single/3.jpg";
import SubProperty4 from "../../assets/images/property/single/4.jpg";
import SubProperty5 from "../../assets/images/property/single/5.jpg";

const properties = [
    {
        id: 1,
        image: Property1,
        name: '10765 Hillshire Ave, Baton Rouge, LA 70810, USA',
        square: 8000,
        beds: 4,
        baths: 4,
        price: 5000,
        rating: 5.0,
        detail: [SubProperty1, SubProperty2, SubProperty3, SubProperty4, SubProperty5]
    },
    {
        id: 2,
        image: Property2,
        name: '59345 STONEWALL DR, Plaquemine, LA 70764, USA',
        square: 8000,
        beds: 4,
        baths: 4,
        price: 5000,
        rating: 5.0,
        detail: [SubProperty1, SubProperty2, SubProperty3, SubProperty4, SubProperty5]
    },
    {
        id: 3,
        image: Property3,
        name: '3723 SANDBAR DR, Addis, LA 70710, USA',
        square: 8000,
        beds: 4,
        baths: 4,
        price: 5000,
        rating: 5.0,
        detail: [SubProperty1, SubProperty2, SubProperty3, SubProperty4, SubProperty5]
    },
    {
        id: 4,
        image: Property4,
        name: 'Lot 21 ROYAL OAK DR, Prairieville, LA 70769, USA',
        square: 8000,
        beds: 4,
        baths: 4,
        price: 5000,
        rating: 5.0,
        detail: [SubProperty1, SubProperty2, SubProperty3, SubProperty4, SubProperty5]
    },
    {
        id: 5,
        image: Property5,
        name: '710 BOYD DR, Unit #1102, Baton Rouge, LA 70808, USA',
        square: 8000,
        beds: 4,
        baths: 4,
        price: 5000,
        rating: 5.0,
        detail: [SubProperty1, SubProperty2, SubProperty3, SubProperty4, SubProperty5]
    },
    {
        id: 6,
        image: Property6,
        name: '5133 MCLAIN WAY, Baton Rouge, LA 70809, USA',
        square: 8000,
        beds: 4,
        baths: 4,
        price: 5000,
        rating: 5.0,
        detail: [SubProperty1, SubProperty2, SubProperty3, SubProperty4, SubProperty5]
    }
];

export default properties;