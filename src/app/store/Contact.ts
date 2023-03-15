import { makeAutoObservable, runInAction } from "mobx";
type formType = {
    name: string;
    tel: string;
    comment: string
}

export default class ContactStore {
    constructor() {
        makeAutoObservable(this)
    }

    form: formType = {
        name: '',
        tel: '',
        comment: ''
    }

    setForm = (value: string, key: keyof formType) => {
        this.form[key] = value as never
    }

    clearForm = () => {
        this.form = {
            name: '',
            tel: '',
            comment: ''
        }
    }

    validationForm: boolean = false;
    validationFormText: string = '';

    validation = () => {
        if (this.form.name === '') {
            runInAction(() => {
                this.validationForm = true;
            })
        }
        if (this.form.comment === '') {
            runInAction(() => {
                this.validationForm = true;
            })
        }
        if (this.form.tel === '') {
            runInAction(() => {
                this.validationForm = true;
                this.validationFormText = 'Iltimos telefon raqamingizni kiriting'
            })
        } else {
            runInAction(() => {
                this.validationForm = false;
            })
        }
    }
}