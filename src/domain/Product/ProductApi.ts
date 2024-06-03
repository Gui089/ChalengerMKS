import { useQuery } from "@tanstack/react-query";

export const useGetListProducts = () => {
    const { isLoading, error, data } = useQuery({
        queryKey: ['productData'],
        queryFn: async () => {
            const response = await fetch(`https://mks-frontend-challenge-04811e8151e6.herokuapp.com/api/v1/products?page=1&rows=10&sortBy=id&orderBy=DESC`);
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        }
    });

    return {
        isLoading,
        error,
        data
    };
};

export const ProductApi = {
    useGetListProducts,
};

