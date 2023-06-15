export interface PaginationMetaInterface {
    page: number;
    pageSize: number;
}

export interface PaginationInterface<T> {
    data: T[],
    meta: PaginationMetaInterface
}