import {makeAutoObservable} from "mobx";

export default class productStore{
    constructor() {
        this._products = []
        this._categories = []

        this._basket = [{
            "id": 1,
            "name": 123
        },{
            "id": 2,
            "name": 321
        },]
        makeAutoObservable(this)
    }


    setProducts(products){
        this._products = products
    }
    get products(){
        return this._products
    }

    setCategories(categories){
        this._categories = categories
    }
    get categories(){
        return this._categories
    }

    setBasket(basket){
        this._basket = basket
    }
    get basket(){
        return this._basket
    }
}