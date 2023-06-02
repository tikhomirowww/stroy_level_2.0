import { IProductCard } from "../ProductCard/ProductCard.types"

export interface ICarousel {
    images?: string[],
    cards?: IProductCard[]
}