import { useState, useEffect } from 'react';
import { initialProducts } from '../data/mockProducts';

export const useProducts = () => {
    const [products, setProducts] = useState(() => {
        // Try to get from local storage to persist changes across reloads during dev
        const saved = localStorage.getItem('dashboard_products');
        return saved ? JSON.parse(saved) : initialProducts;
    });

    useEffect(() => {
        localStorage.setItem('dashboard_products', JSON.stringify(products));
    }, [products]);

    const addProduct = (product) => {
        const newProduct = {
            ...product,
            id: Date.now(), // simple ID generation
            price: parseFloat(product.price),
            stock: parseInt(product.stock),
        };
        setProducts((prev) => [...prev, newProduct]);
    };

    const updateProduct = (id, updatedFields) => {
        setProducts((prev) =>
            prev.map((p) => (p.id === id ? { ...p, ...updatedFields } : p))
        );
    };

    const deleteProduct = (id) => {
        setProducts((prev) => prev.filter((p) => p.id !== id));
    };

    return {
        products,
        addProduct,
        updateProduct,
        deleteProduct,
    };
};
