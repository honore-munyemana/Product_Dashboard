import React, { useState, useEffect } from 'react';
import Input from '../common/Input';
import Button from '../common/Button';

const ProductForm = ({ product, onSubmit, onCancel }) => {
    const [formData, setFormData] = useState({
        name: '',
        category: '',
        price: '',
        stock: '',
        status: 'Active',
    });

    const [errors, setErrors] = useState({});

    useEffect(() => {
        if (product) {
            setFormData({
                name: product.name,
                category: product.category,
                price: product.price,
                stock: product.stock,
                status: product.status || 'Active',
            });
        } else {
            setFormData({
                name: '',
                category: '',
                price: '',
                stock: '',
                status: 'Active',
            })
        }
    }, [product]);

    const validate = () => {
        const newErrors = {};
        if (!formData.name.trim()) newErrors.name = 'Product name is required';
        if (!formData.category.trim()) newErrors.category = 'Category is required';
        if (!formData.price || formData.price <= 0) newErrors.price = 'Price must be a positive number';
        if (formData.stock === '' || formData.stock < 0) newErrors.stock = 'Stock must be a non-negative number';

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (validate()) {
            onSubmit(formData);
        }
    };

    return (
        <form onSubmit={handleSubmit} className="space-y-4">
            <Input
                label="Product Name"
                name="name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                error={errors.name}
                required
            />

            <Input
                label="Category"
                name="category"
                value={formData.category}
                onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                error={errors.category}
                placeholder="e.g. Electronics"
                required
            />

            <div className="grid grid-cols-2 gap-4">
                <Input
                    label="Price"
                    name="price"
                    type="number"
                    value={formData.price}
                    onChange={(e) => setFormData({ ...formData, price: e.target.value })}
                    error={errors.price}
                    required
                />
                <Input
                    label="Stock"
                    name="stock"
                    type="number"
                    value={formData.stock}
                    onChange={(e) => setFormData({ ...formData, stock: e.target.value })}
                    error={errors.stock}
                    required
                />
            </div>

            <div className="flex justify-end space-x-3 pt-4">
                <Button variant="outline" onClick={onCancel}>
                    Cancel
                </Button>
                <Button type="submit" variant="primary">
                    {product ? 'Update Product' : 'Add Product'}
                </Button>
            </div>
        </form>
    );
};

export default ProductForm;
