export interface ApiResponse<T> {
content: T[];
pageable: Pageable;
last: boolean;
totalPages: number;
totalElements: number;
first: boolean;
size: number;
number: number;
sort: Sort;
numberOfElements: number;
empty: boolean;
}

export interface Pageable {
pageNumber: number;
pageSize: number;
sort: Sort;
offset: number;
unpaged: boolean;
paged: boolean;
}

export interface Sort {
empty: boolean;
unsorted: boolean;
sorted: boolean;
}
