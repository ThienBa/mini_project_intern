import { baseServices } from "./baseServices";

class AdminServices extends baseServices {
    constructor() {
        super();
    }

    getListProductsApi = (params) => {
        return this.get(`/products?${params}`);
    }


    getProductDetailsApi = (id) => {
        return this.getDetail(`/products/${id}`);
    }

    addProductApi = (newProduct) => {
        return this.post(`/products`, newProduct);
    }

    updateProductApi = (id, productUpdate) => {
        return this.put(`/products/${id}`, productUpdate);
    }

    uploadImageApi = (image) => {
        return this.post(`/upload`, image);
    }
}

export const adminServices = new AdminServices();