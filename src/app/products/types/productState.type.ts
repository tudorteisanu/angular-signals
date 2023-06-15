import { BackendError } from "src/app/shared/types/backendError.interface";
import { ProductInterface } from "./product.interface";

export type ProductsStateInterface = {
    readonly items: ProductInterface[],
    readonly isFetching: boolean;
    readonly error: BackendError | null;
}
