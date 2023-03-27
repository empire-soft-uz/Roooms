import { makeAutoObservable } from "mobx"
import * as mobx from "mobx"
import  ItemStore  from "./ItemInfo"
import { createContext } from "react"
import {enableStaticRendering} from "mobx-react-lite"

const isServer = typeof window === 'undefined';
enableStaticRendering(isServer);

import { unstable_batchedUpdates } from "react-dom"; // or react-native
import VisibleStore from "./VisibleStore"
import ContactStore from "./Contact"
import LanguageStore from "./language"
import CategoryStore from "./category"
mobx.configure({ reactionScheduler: unstable_batchedUpdates });

export class AppRootStore{
    itemStore = new ItemStore()
    visibleStore = new VisibleStore()
    contactStore = new ContactStore()
    language = new LanguageStore()
    category = new CategoryStore()

    constructor() {
        makeAutoObservable(this)
    }
}

const rootStore = new AppRootStore()
export default createContext(rootStore)