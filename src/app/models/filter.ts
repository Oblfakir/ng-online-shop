export class Filter {
    query: string = '';
    availableOnly: boolean = false;
    category: string | null = null;
    rating: number | null = null;
    priceFrom: number | null = null;
    priceTo: number | null = null;
}