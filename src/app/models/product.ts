export class Product {
    price: number;
    name: number;
    id: number;
    image: string;
    rating: number;
    category: string;
    description?: string; 

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
    }
}