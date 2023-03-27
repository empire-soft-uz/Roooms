export type ItemsType = {
    id: number,
    images: {
        id: number
        image: string,
        image360: string
    }[],
    for: string,
    forKey: string;
    name: string,
    price: number | string,
    type: string,
    typeKey: string,
    size: string,
    many: string,
    floor: string,
    location: string,
    squarePrice: string,
    room: string,
    kitchen: string,
    time?: string,
    bedroom: string,
    hall: string,
    owner: string,
    contact: string,
    entire: string,
    entireIcon: string,
    entireText: string,
    clean: string,
    cleanIcon: string,
    cleanText: string,
    self: string,
    selfIcon: string,
    selfText: string,
    free: string,
    freeIcon: string,
    garden: string,
    gardenIcon: string,
    wifi: string,
    wifiIcon: string,
    washer: string,
    washerIcon: string,
    air: string,
    airIcon: string,
    refrigerator: string,
    refrigeratorIcon: string,
    kit: string,
    kitIcon: string,
    pets: string,
    petsIcon: string,
    dryer: string,
    dryerIcon: string,
    camera: string,
    cameraIcon: string,
    bike: string,
    bikeIcon: string,
    text: string,
}


export const ItemsData: ItemsType[] = [
    {
        id: 1,
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
        for: "Sotiladi",
        forKey: "Sotiladi",
        name: "Yangi choshtepa uylari",
        price: "53 000",
        type: "Ko'p qavatli",
        typeKey: "multi_storey",
        size: "56 m",
        many: "2 xonali",
        floor: "2 / 7 qavat",
        location: "Tashkent, Yangi Choshtepa , 46 -uy",
        squarePrice: "5 000",
        room: "4 xonali",
        kitchen: "1 oshxona",
        bedroom: "2 yotoqxona ",
        hall: "1 zal",
        owner: "Baxrom Shokirov",
        contact: "+ 998 99 310 37 63",
        entire: "Entire home",
        entireIcon: "/icons/room3.svg",
        entireText: "You’ll have the apartment to yourself",
        clean: "Enhanced Clean",
        cleanIcon: "/icons/clean.svg",
        cleanText: "This Host committed to Airbnb’s 5-step enhanced cleaning process. Show more",
        self: "Self check-in",
        selfIcon: "/icons/self.svg",
        selfText: "Check yourself in with the keypad.",
        free: "Free cancellation before Feb 14",
        freeIcon: "/icons/calendar1.svg",
        garden: "Garden view",
        gardenIcon: "/icons/garden.svg",
        wifi: "Wifi",
        wifiIcon: "/icons/wifi.svg",
        washer: "Free washer - in building",
        washerIcon: "/icons/washer.svg",
        air: "Central air conditioning",
        airIcon: "/icons/air.svg",
        refrigerator: "Refrigerator",
        refrigeratorIcon: "/icons/refrigerator.svg",
        kit: "Kitchen",
        kitIcon: "/icons/kitchen.svg",
        pets: "Pets allowed",
        petsIcon: "/icons/pets.svg",
        dryer: "Dryer",
        dryerIcon: "/icons/dryer.svg",
        camera: "Security cameras on property",
        cameraIcon: "/icons/camera.svg",
        bike: "Bicycles",
        bikeIcon: "/icons/bike.svg",
        text: `Come and stay in this superb duplex T2, in the heart 
        of the historic center of Bordeaux.
        Spacious and bright, in a real Bordeaux building in
        exposed stone, you will enjoy all the charms of the city thanks 
        to its ideal location. Close to many shops, bars and restaurants,
        you can access the apartment by tram A and C and bus routes 27 and 44.`,
    },
    {
        id: 2,
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
        for: "Dam olish",
        forKey: "Ijaraga",
        name: "Yangi choshtepa uylari",
        price: "53 000",
        type: "Dam olish",
        typeKey: "multi_storey",
        size: "56 m",
        many: "2 xonali",
        floor: "2 / 7 qavat",
        location: "Tashkent, Yangi Choshtepa , 46 -uy",
        squarePrice: "5 000",
        room: "4 xonali",
        kitchen: "1 oshxona",
        bedroom: "2 yotoqxona ",
        hall: "1 zal",
        owner: "Baxrom Shokirov",
        contact: "+ 998 99 310 37 63",
        entire: "Entire home",
        entireIcon: "/icons/room3.svg",
        entireText: "You’ll have the apartment to yourself",
        clean: "Enhanced Clean",
        cleanIcon: "/icons/clean.svg",
        cleanText: "This Host committed to Airbnb’s 5-step enhanced cleaning process. Show more",
        self: "Self check-in",
        selfIcon: "/icons/self.svg",
        selfText: "Check yourself in with the keypad.",
        free: "Free cancellation before Feb 14",
        freeIcon: "/icons/calendar1.svg",
        garden: "Garden view",
        gardenIcon: "/icons/garden.svg",
        wifi: "Wifi",
        wifiIcon: "/icons/wifi.svg",
        washer: "Free washer - in building",
        washerIcon: "/icons/washer.svg",
        air: "Central air conditioning",
        airIcon: "/icons/air.svg",
        refrigerator: "Refrigerator",
        refrigeratorIcon: "/icons/refrigerator.svg",
        kit: "Kitchen",
        kitIcon: "/icons/kitchen.svg",
        pets: "Pets allowed",
        petsIcon: "/icons/pets.svg",
        dryer: "Dryer",
        dryerIcon: "/icons/dryer.svg",
        camera: "Security cameras on property",
        cameraIcon: "/icons/camera.svg",
        bike: "Bicycles",
        bikeIcon: "/icons/bike.svg",
        text: `Come and stay in this superb duplex T2, in the heart 
        of the historic center of Bordeaux.
        Spacious and bright, in a real Bordeaux building in
        exposed stone, you will enjoy all the charms of the city thanks 
        to its ideal location. Close to many shops, bars and restaurants,
        you can access the apartment by tram A and C and bus routes 27 and 44.`,
    },
    {
        id: 3,
        images: [
            {
                id: 1,
                image: "/cards/bg5.jpeg",
                image360: "https://kuula.co/share/N6kn9?logo=1&info=1&fs=1&vr=0&zoom=1&sd=1&gyro=0&thumbs=1",
            },
            {
                id: 2,
                image: "/cards/bg6.jpeg",
                image360: "https://kuula.co/share/NB8b5?logo=1&info=1&fs=1&vr=0&zoom=1&sd=1&gyro=0&autorotate=0.75&thumbs=1",
            },
            {
                id: 3,
                image: "/cards/bg7.jpeg",
                image360: "https://kuula.co/share/NjV1w?logo=1&info=1&fs=1&vr=0&zoom=1&sd=1&gyro=0&autorotate=0.75&thumbs=1",
            }
        ],
        for: "Dam olish",
        forKey: "Ijaraga",
        name: "Yangi choshtepa uylari",
        price: "300",
        type: "Dam olish",
        typeKey: "rest",
        size: "56 m",
        many: "2 xonali",
        time: "24 soat",
        floor: "1 / 1 qavat",
        location: "Tashkent, Chorvow, 46 -uy",
        squarePrice: "5 000",
        room: "4 xonali",
        kitchen: "1 oshxona",
        bedroom: "2 yotoqxona ",
        hall: "1 zal",
        owner: "Baxrom Shokirov",
        contact: "+ 998 99 310 37 63",
        entire: "Entire home",
        entireIcon: "/icons/room3.svg",
        entireText: "You’ll have the apartment to yourself",
        clean: "Enhanced Clean",
        cleanIcon: "/icons/clean.svg",
        cleanText: "This Host committed to Airbnb’s 5-step enhanced cleaning process. Show more",
        self: "Self check-in",
        selfIcon: "/icons/self.svg",
        selfText: "Check yourself in with the keypad.",
        free: "Free cancellation before Feb 14",
        freeIcon: "/icons/calendar1.svg",
        garden: "Garden view",
        gardenIcon: "/icons/garden.svg",
        wifi: "Wifi",
        wifiIcon: "/icons/wifi.svg",
        washer: "Free washer - in building",
        washerIcon: "/icons/washer.svg",
        air: "Central air conditioning",
        airIcon: "/icons/air.svg",
        refrigerator: "Refrigerator",
        refrigeratorIcon: "/icons/refrigerator.svg",
        kit: "Kitchen",
        kitIcon: "/icons/kitchen.svg",
        pets: "Pets allowed",
        petsIcon: "/icons/pets.svg",
        dryer: "Dryer",
        dryerIcon: "/icons/dryer.svg",
        camera: "Security cameras on property",
        cameraIcon: "/icons/camera.svg",
        bike: "Bicycles",
        bikeIcon: "/icons/bike.svg",
        text: `Come and stay in this superb duplex T2, in the heart 
        of the historic center of Bordeaux.
        Spacious and bright, in a real Bordeaux building in
        exposed stone, you will enjoy all the charms of the city thanks 
        to its ideal location. Close to many shops, bars and restaurants,
        you can access the apartment by tram A and C and bus routes 27 and 44.`,
    },
]