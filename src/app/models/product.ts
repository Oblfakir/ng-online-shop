import { Filter } from './filter';

export class Product {
    price: number;
    name: string;
    id: number;
    image: string;
    rating: number;
    category: string;
    description?: string;
    available: boolean = true;

    constructor(productParams: any) {
        if (productParams.price) {
            this.price = productParams.price;
        }
        if (productParams.name) {
            this.name = productParams.name;
        }
        if (productParams.id) {
            this.id = productParams.id;
        }
        if (productParams.image) {
            this.image = productParams.image;
        }
        if (productParams.rating) {
            this.rating = productParams.rating;
        }
        if (productParams.category) {
            this.category = productParams.category;
        }
        if (productParams.description) {
            this.description = productParams.description;
        }
        if (productParams.available) {
            this.available = productParams.available;
        }
    }

    public checkWithFilter(filter: Filter): boolean {
        if (filter.query && !this.name.toLowerCase().includes(filter.query.toLowerCase())) {
            return false;
        }
        if (filter.availableOnly && !this.available) {
            return false;
        }
        if (filter.category && this.category !== filter.category) {
            return false;
        }
        if (filter.rating && this.rating > filter.rating) {
            return false;
        }
        if (filter.priceFrom && this.price < filter.priceFrom) {
            return false;
        }
        if (filter.priceTo && this.price > filter.priceTo) {
            return false;
        }
        return true;
    }
}