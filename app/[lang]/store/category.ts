import { makeAutoObservable, runInAction, toJS } from "mobx";
import { ItemsData, ItemsType } from "../allData";

export type ItemType = {
    address: string;
    type: string;
    roomCount: string | number;
}

type categoryType = {
    multi_storey: string,
    yard: string,
    ofice: string,
    rest: string
}

export default class CategoryStore  {
    constructor() {
        makeAutoObservable(this)
    }

    data: ItemsType[] = []
    isLoading: boolean = true
    message:string =""

    getCateoryFilter = async(key: string) => {
        this.isLoading = true
         if (key) {           
            this.data = ItemsData.filter((item: any) => item.typeKey == key)
             if (!this.data) {
                this.message = 'Bunday malumot mavjud emas'
            }
        }
        this.isLoading = false
    }

    categoryFilter = (key: string) => {
        runInAction(() => {
            this.data = [],
            this.data = ItemsData.filter((item) => item.typeKey === key)
        })
        console.log(toJS(this.data));
    }
}