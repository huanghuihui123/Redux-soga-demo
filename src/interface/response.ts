export interface LoginResponse {
    token: string
    name: string
    id: string
    access_no?: number[]
    product_id?: number[]
    is_first_login?: string
    account: string
}