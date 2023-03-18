import { makeAutoObservable } from "mobx";

type modal = {
    moreText: boolean;
    amenities: boolean;
    mainModal: boolean;
    contact: boolean;
    reserve: boolean;
}

export default class VisibleStore {
    constructor() {
        makeAutoObservable(this)
    }

    visiable: modal = {
        moreText: false,
        amenities: false,
        mainModal: false,
        contact: false,
        reserve: false
    }

    show = (key: keyof modal) => {
        this.visiable[key] = true
    }

    hide = (key: keyof modal) => {
        this.visiable[key] = false
    }

    toggle = (key: keyof modal) => {
        this.visiable[key] = !this.visiable[key]
    }

}