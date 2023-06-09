import { makeAutoObservable, runInAction, toJS } from "mobx";
import { ItemsData, ItemsType } from "../allData";
export type ItemType = {
    address: string;
    type: string;
    roomCount: string | number;
}
export type DayType = {
    day: any;
}

const initialState = {
    id: 1,
    images: [
        {
            id: 1,
            image: "",
            image360: "",
        }
    ],
    for: "",
    forKey: "",
    name: "",
    price: "",
    type: "",
    typeKey: "",
    size: "",
    many: "",
    floor: "",
    location: "",
    squarePrice: "",
    room: "",
    kitchen: "",
    bedroom: "",
    hall: "",
    owner: "",
    contact: "",
    entire: "",
    entireIcon: "",
    entireText: "",
    clean: "",
    cleanIcon: "",
    cleanText: "",
    self: "",
    selfIcon: "",
    selfText: "",
    free: "",
    freeIcon: "",
    garden: "",
    gardenIcon: "",
    wifi: "",
    wifiIcon: "",
    washer: "",
    washerIcon: "",
    air: "",
    airIcon: "",
    refrigerator: "",
    refrigeratorIcon: "",
    kit: "",
    kitIcon: "",
    pets: "",
    petsIcon: "",
    dryer: "",
    dryerIcon: "",
    camera: "",
    cameraIcon: "",
    bike: "",
    bikeIcon: "",
    text: ``,
}

export default class ItemStore {

    constructor() {
        makeAutoObservable(this)
    }

    isLoading: boolean = true
    data: ItemsType[] = []
    AllProducts: ItemsType[] = ItemsData

    oneRoomItemData: ItemsType = initialState

    message: string = ''
    
    oneItem: ItemType = {
        address: "",
        type: "multi_storey",
        roomCount: 0,
    }

    dayCount: DayType = {
        day: 0
    }

    setDay = (value: any) => {
        this.dayCount.day = value / 60 / 60000 / 24 as never
    }

    SetOneRoomItem = (item: ItemsType) => {
        runInAction(() => {
            this.oneRoomItemData = item
        })
    }

    getOneRoomItem = async (id?:string) => {
        this.isLoading = true
         if (id) {           
            this.oneRoomItemData = ItemsData.find((item: any) => item.id == id) as ItemsType
             if (!this.oneRoomItemData) {
                this.oneRoomItemData = initialState
                this.message = 'Bunday malumot mavjud emas'
            }
        } else {          
            this.oneRoomItemData = ItemsData[0]
        }
        setTimeout(() => {
            this.isLoading = false
        }, 800)
    }

    setItem = (value: string | number, key: keyof ItemType) => {
        if (key === 'roomCount') {
            if (value < 1) {
                value = 1;
            }
        }
        this.oneItem[key] = value as never
        this.filterData()
    }



    filterData = () => {
        runInAction(() => {
            this.data = [],
            this.data = ItemsData.filter((item) => item.typeKey === this.oneItem.type)
        })
    }
}

