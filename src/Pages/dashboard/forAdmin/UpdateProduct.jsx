import toast from "react-hot-toast";
import axiosPublic from "../../../hooks/useAxiosPublic";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import Loading from "../../../ui/shared/Loading";

const UpdateProduct = () => {
    const { id } = useParams();

    const { data: singleProduct, isLoading } = useQuery({
        queryKey: ["singleProduct", id],
        queryFn: async () => {
            const response = await axiosPublic.get(`/products/${id}`);
            return response.data;
        },
    });

    const [updateProduct, setUpdateProduct] = useState(null);

    useEffect(() => {
        if (singleProduct) {
            setUpdateProduct(singleProduct);
        }
    }, [singleProduct]);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setUpdateProduct({ ...updateProduct, [name]: value });
    };

    const handleAdditionalInfoChange = (index, field, value) => {
        const updatedInfo = [...updateProduct.additionalInformation];
        updatedInfo[index][field] = value;
        setUpdateProduct({ ...updateProduct, additionalInformation: updatedInfo });
    };

    const handleAddInfo = () => {
        const updatedInfo = [...(updateProduct.additionalInformation || [])];
        updatedInfo.push({ label: "", value: "" });
        setUpdateProduct({ ...updateProduct, additionalInformation: updatedInfo });
    };

    const handleRemoveInfo = (index) => {
        const updatedInfo = [...updateProduct.additionalInformation];
        updatedInfo.splice(index, 1);
        setUpdateProduct({ ...updateProduct, additionalInformation: updatedInfo });
    };

    const handleUpdateProduct = async (e) => {
        e.preventDefault();
        try {
            const response = await axiosPublic.patch(`/products/update/${id}`, updateProduct);

            console.log(response);

            if (response.status === 200) {
                toast.success("Product updated successfully!");
            } else {
                toast.error("Failed to update product. Please try again.");
            }
        } catch (error) {
            toast.error("An error occurred while updating the product.");
            console.error("Update failed:", error);
        }
    };

    if (isLoading || !updateProduct) return <Loading />;

    return (
        <div>
            <h2 className="text-xl font-bold mb-4">Update Product</h2>
            <form onSubmit={handleUpdateProduct} className="grid gap-4">
                <label className="block">
                    <span className="text-gray-700">Product Title</span>
                    <input
                        type="text"
                        name="productTitle"
                        required
                        value={updateProduct.productTitle || ""}
                        onChange={handleInputChange}
                        className="p-2 border rounded w-full"
                    />
                </label>

                <label className="block">
                    <span className="text-gray-700">Brand</span>
                    <input
                        type="text"
                        name="brand"
                        required
                        value={updateProduct.brand || ""}
                        onChange={handleInputChange}
                        className="p-2 border rounded w-full"
                    />
                </label>

                <label className="block">
                    <span className="text-gray-700">Category</span>
                    <input
                        type="text"
                        name="category"
                        required
                        value={updateProduct.category || ""}
                        onChange={handleInputChange}
                        className="p-2 border rounded w-full"
                    />
                </label>

                <label className="block">
                    <span className="text-gray-700">Color</span>
                    <input
                        type="text"
                        name="color"
                        value={updateProduct.color || ""}
                        onChange={handleInputChange}
                        className="p-2 border rounded w-full"
                    />
                </label>

                <label className="block">
                    <span className="text-gray-700">Short Description</span>
                    <textarea
                        name="shortDescription"
                        required
                        value={updateProduct.shortDescription || ""}
                        onChange={handleInputChange}
                        className="p-2 border rounded w-full"
                    ></textarea>
                </label>

                <label className="block">
                    <span className="text-gray-700">Big Description</span>
                    <textarea
                        name="bigDescription"
                        required
                        value={updateProduct.bigDescription || ""}
                        onChange={handleInputChange}
                        className="p-2 border rounded w-full"
                    ></textarea>
                </label>

                <label className="block">
                    <span className="text-gray-700">Additional Information</span>
                    {updateProduct.additionalInformation?.map((info, index) => (
                        <div key={index} className="flex space-x-4 items-center mb-2">
                            <input
                                type="text"
                                placeholder="Label (e.g., Weight)"
                                value={info.label}
                                onChange={(e) =>
                                    handleAdditionalInfoChange(index, "label", e.target.value)
                                }
                                className="p-2 border rounded w-1/2"
                            />
                            <input
                                type="text"
                                placeholder="Value (e.g., 1.5kg)"
                                value={info.value}
                                onChange={(e) =>
                                    handleAdditionalInfoChange(index, "value", e.target.value)
                                }
                                className="p-2 border rounded w-1/2"
                            />
                            <button
                                type="button"
                                onClick={() => handleRemoveInfo(index)}
                                className="bg-red text-white px-2 py-1 rounded"
                            >
                                Remove
                            </button>
                        </div>
                    ))}
                    <button
                        type="button"
                        onClick={handleAddInfo}
                        className="bg-blue text-white px-3 py-1 rounded"
                    >
                        Add New Info
                    </button>
                </label>

                <label className="block">
                    <span className="text-gray-700">Price</span>
                    <input
                        type="number"
                        name="price"
                        required
                        value={updateProduct.price || ""}
                        onChange={handleInputChange}
                        className="p-2 border rounded w-full"
                    />
                </label>

                <label className="block">
                    <span className="text-gray-700">Original Price</span>
                    <input
                        type="number"
                        name="originalPrice"
                        required
                        value={updateProduct.originalPrice || ""}
                        onChange={handleInputChange}
                        className="p-2 border rounded w-full"
                    />
                </label>

                <label className="block">
                    <span className="text-gray-700">Discount (%)</span>
                    <input
                        type="number"
                        name="discount"
                        value={updateProduct.discount || ""}
                        onChange={handleInputChange}
                        className="p-2 border rounded w-full"
                    />
                </label>

                <button
                    type="submit"
                    className="bg-green-500 text-white px-4 py-2 rounded"
                >
                    Update Product
                </button>
            </form>
        </div>
    );
};

export default UpdateProduct;
