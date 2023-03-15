import { makeAutoObservable, runInAction } from "mobx"
import { ItemsData } from "../allData";
export type ItemType = {
    address: string;
    type: string;
    roomCount: string | number;
}
export type DayType = {
    day: any;
}

export default class ItemStore {

    constructor() {
        makeAutoObservable(this)
    }

    data:any = []

    oneItem: ItemType = {
        address: "",
        type: '',
        roomCount: 0,
    }

    dayCount: DayType = {
        day: 0
    }

    setDay = (value: any) => {
        this.dayCount.day = value / 60 / 60000 / 24 as never
        
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
            this.data = ItemsData.filter((item) => item.type === this.oneItem.type)
        })
    }
    
}

