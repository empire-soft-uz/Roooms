export const productData: ProductData = {
    id: 1,
    name: 'Yangi choshtepa uylari',
    typeKey: "multi_storey",
    images: [
        {
            id: 1,
            image: "/cards/bg1.jpeg",
            image360: "https://kuula.co/share/N6kn9?logo=1&info=1&fs=1&vr=0&zoom=1&sd=1&gyro=0&thumbs=1",
        },
        {
            id: 2,
            image: "/cards/bg2.jpeg",
            image360: "https://kuula.co/share/NB8b5?logo=1&info=1&fs=1&vr=0&zoom=1&sd=1&gyro=0&autorotate=0.75&thumbs=1",
        },
        {
            id: 3,
            image: "/cards/bg3.jpeg",
            image360: "https://kuula.co/share/NjV1w?logo=1&info=1&fs=1&vr=0&zoom=1&sd=1&gyro=0&autorotate=0.75&thumbs=1",
        },
        {
            id: 4,
            image: "/cards/bg4.jpeg",
            image360: "https://kuula.co/share/NjV1w?logo=1&info=1&fs=1&vr=0&zoom=1&sd=1&gyro=0&autorotate=0.75&thumbs=1",
        },
    ],
    type: '1',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl nec ultricies lacinia, nunc nisl aliquam massa, eget aliquam nisl nisl sit amet nisl. Sed euismod, nisl nec ultricies lacinia, nunc nisl aliquam massa, eget aliquam nisl nisl sit amet nisl.',
    itemRooms: [
        {
            rooms: 2,
            itemRoomsKeys: '1',
        },
        {
            rooms: 1,
            itemRoomsKeys: '2',
        },
        {
            rooms: 1,
            itemRoomsKeys: '3',
        },
        {
            rooms: 1,
            itemRoomsKeys: '4',
        }
    ],
    roomPrice: {
        price: 35000,
        priceType: '24h',
        areaPrice: 500,
    },
    owner: {
        name: 'Olimjon',
        phone: '+998 97 777 77 77',
        email: '',
        telegram: '@olimjon',
        whatsapp: '+998 97 777 77 77',
    },
    address: {
        city: 'Toshkent',
        street: 'Olmazor',
        house: '72',
        apartment: '47',
        target: 'Yangi choshtepa',
        yandexMap: 'https://yandex.uz/maps/-/CCUWuJbTPD',
    },
    mainFeatures: [
        '1','2','3'
    ],
    additionalFeatures: [
        '1','2','3','4','5','6','7'
    ]
}

type ProductData = {
    id: number
    name: string
    description: string
    images: {
        id: number
        image: string
        image360: string
    }[]
    typeKey: string
    type: string,
    itemRooms:{
            rooms: number,
            itemRoomsKeys: string
    }[],
    roomPrice: {
        price: number,
        priceType: string, // 24h or total
        areaPrice: number, // 500$ / m2
    },
    owner: {
        name: string,
        phone: string,
        email: string,
        telegram: string,
        whatsapp: string,
    },
    address: {
        city: string,
        street: string,
        house: string,
        apartment: string,
        target: string,
        yandexMap: string,
    },
    mainFeatures: string[],
    additionalFeatures: string[],
}