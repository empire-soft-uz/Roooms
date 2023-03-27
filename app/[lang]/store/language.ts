import { makeAutoObservable } from "mobx";


export default class LanguageStore {
    constructor() {
        makeAutoObservable(this)
    }
 }