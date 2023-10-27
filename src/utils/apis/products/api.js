import axiosWithConfig from "@/utils/axiosWithConfig";

// product
export const getProducts = async () => {
    try {
        const respose = await axiosWithConfig.get("/products");
        return respose.data;
    } catch (error) {
        throw new Error("Error when fetching products");
    }
};

export const createProduct = async (product) => {
    try {
        const newData = {
            ...product,
            image: "https://fakeimg.pl/500x500/"
        };
        const response = await axiosWithConfig.post("/products", newData);
        return response.data;
    } catch (error) {
        throw new Error("Error when creating product");
    }
}

// product car
export const detailProduct = async (productId) => {
    try {
        const response = await axiosWithConfig.get("/list-cars/" + productId);
        return response.data;
    } catch (error) {
        throw new Error("Error when fetching detail product");
    }
};