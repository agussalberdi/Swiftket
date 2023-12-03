export enum Category {
    men = 'men',
    women = 'women',
    kids = 'kids',
    accessories = 'accessories',
    shoes = 'shoes',
}

export enum Size {
    small = 'small',
    medium = 'medium',
    large = 'large',
}

export enum Brand {
    Zara = 'Zara',
    Hollister = 'Hollister',
    GAP = 'GAP',
}

export enum Condition {
    new_with_tags = 'new_with_tags',
    new_without_tags = 'new_without_tags',
    verygood = 'verygood',
    good = 'good',
    acceptable = 'acceptable',
    poor = 'poor',
}

export enum Color {
    black = 'black',
    white = 'white',
    red = 'red',
}

export interface Product {
    id: string
    name: string;
    description: string;
    price: number;
    category: Category;
    size: Size;
    brand: Brand;
    condition: Condition;
    color: Color;
    image: string;
}
