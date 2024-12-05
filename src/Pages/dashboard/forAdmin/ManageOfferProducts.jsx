import { useQuery } from "@tanstack/react-query";
import axiosPublic from "../../../hooks/useAxiosPublic";
import { useState } from "react";
import Loading from "../../../ui/shared/Loading";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const ManageOfferProducts = () => {

    const [showForm, setShowForm] = useState(false);
    const [newProduct, setNewProduct] = useState({
        productTitle: "",
        brand: "",
        category: "",
        color: "",
        shortDescription: "",
        bigDescription: "",
        img1: "",
        img2: "",
        img3: "",
        additionalInformation: [],
        price: 0,
        originalPrice: 0,
        discount: 0,
        publicationDate: new Date().toLocaleString(),
    });

    const { data: allProducts, isLoading, refetch } = useQuery({
        queryKey: ["allProducts"],
        queryFn: async () => {
            const response = await axiosPublic.get("/offerProducts");
            return response.data;
        },
    });

    const sortedProducts = allProducts?.sort(
        (a, b) => new Date(b.publicationDate) - new Date(a.publicationDate)
    );

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setNewProduct({ ...newProduct, [name]: value });
    };

    const handleAddProduct = async (e) => {
        e.preventDefault();
        try {
            const response = await axiosPublic.post("/offerProducts", newProduct);

            if (response.status === 201) {
                toast.success("Product added successfully");
            } else {
                toast.error("Failed to add product. Please try again.");
            }
            refetch(); // Refresh the product list
            setShowForm(false); // Hide the form
            setNewProduct({
                productTitle: "",
                brand: "",
                category: "",
                color: "",
                shortDescription: "",
                bigDescription: "",
                img1: "",
                img2: "",
                img3: "",
                additionalInformation: [],
                price: 0,
                originalPrice: 0,
                discount: 0,
                publicationDate: new Date().toISOString(),
            });
        } catch (error) {
            console.error("Failed to add product", error);
        }
    };

    const handleDeleteProduct = (productId) => {
        try {
            Swal.fire({
                title: "<span style='color: red;'>Are you sure?</span>",
                text: "You won't be able to revert this!",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Yes, delete it!",
            }).then(async (result) => {
                if (result.isConfirmed) {
                    await axiosPublic.delete(`/offerProducts/delete/${productId}`).then((res) => {
                        if (res.status === 200) {
                            Swal.fire("Deleted!", "Product has been deleted.", "success");
                            refetch();
                        }
                    });
                }
            })
        } catch (error) {
            console.error("Failed to delete product", error);
            toast.error("Failed to delete product. Please try again.");
        }
    };

    if (isLoading) {
        return <Loading />;
    }

    return (
        <div className="p-5">
            <div className="flex justify-end">
                <button
                    className="bg-blue text-white px-4 py-2 rounded"
                    onClick={() => setShowForm(!showForm)}
                >
                    {showForm ? "Show All Products" : "Add Product"}
                </button>
            </div>

            {!showForm ? (
                <div>
                    <h2 className="text-2xl font-semibold mb-5">All Offer Products</h2>
                    <div className="overflow-x-auto">
                        <table className="table-auto w-full border-collapse border border-gray-300">
                            <thead className="bg-purple text-white">
                                <tr>
                                    <th className="p-3 border border-gray-300">#</th>
                                    <th className="p-3 border border-gray-300">Image</th>
                                    <th className="p-3 border border-gray-300">Title</th>
                                    <th className="p-3 border border-gray-300">Category</th>
                                    <th className="p-3 border border-gray-300">Price</th>
                                    <th className="p-3 border border-gray-300">Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {sortedProducts?.map((product, index) => (
                                    <tr key={product._id} className="text-center">
                                        <td className="p-3 border border-gray-300">{index + 1}</td>
                                        <td className="p-3 border border-gray-300">
                                            <img
                                                src={product.img1}
                                                alt={product.productTitle}
                                                className="h-16 w-16 object-cover rounded"
                                            />
                                        </td>
                                        <td className="p-3 border border-gray-300">{product.productTitle}</td>
                                        <td className="p-3 border border-gray-300">{product.category}</td>
                                        <td className="p-3 border border-gray-300">
                                            ${product.price}{" "}
                                            <span className="line-through text-red">
                                                ${product.originalPrice}
                                            </span>
                                        </td>
                                        <td className="p-3 border border-gray-300 space-x-2">
                                            <button
                                                onClick={() => handleDeleteProduct(product?._id)}
                                                className="px-3 py-1 bg-red text-white rounded">
                                                Delete
                                            </button>
                                            <button className="px-3 py-1 md:mt-0 mt-1 bg-blue text-white rounded">
                                                <Link to={`/dashboard/update-product/${product._id}`}>Edit</Link>
                                            </button>
                                            <button className="px-3 py-1 xl:mt-0 mt-1 bg-green-500 text-white rounded">
                                                <Link to={`/offerProduct/${product._id}`}>Details</Link>
                                            </button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            ) : (
                <div>
                    <h2 className="text-xl font-bold mb-4">Add New Product</h2>
                    <form onSubmit={handleAddProduct} className="grid gap-4">
                        <label className="block">
                            <span className="text-gray-700">Product Title</span>
                            <input
                                type="text"
                                name="productTitle"
                                required
                                placeholder="Product Title"
                                value={newProduct.productTitle}
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
                                placeholder="Brand"
                                value={newProduct.brand}
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
                                placeholder="Category"
                                value={newProduct.category}
                                onChange={handleInputChange}
                                className="p-2 border rounded w-full"
                            />
                        </label>

                        <label className="block">
                            <span className="text-gray-700">Color</span>
                            <input
                                type="text"
                                name="color"
                                placeholder="Color"
                                value={newProduct.color}
                                onChange={handleInputChange}
                                className="p-2 border rounded w-full"
                            />
                        </label>

                        <label className="block">
                            <span className="text-gray-700">Short Description</span>
                            <textarea
                                name="shortDescription"
                                required
                                placeholder="Short Description"
                                value={newProduct.shortDescription}
                                onChange={handleInputChange}
                                className="p-2 border rounded w-full"
                            ></textarea>
                        </label>

                        <label className="block">
                            <span className="text-gray-700">Big Description</span>
                            <textarea
                                name="bigDescription"
                                required
                                placeholder="Big Description"
                                value={newProduct.bigDescription}
                                onChange={handleInputChange}
                                className="p-2 border rounded w-full"
                            ></textarea>
                        </label>

                        <label className="block">
                            <span className="text-gray-700">Image URL 1</span>
                            <input
                                type="url"
                                name="img1"
                                required
                                placeholder="Image URL 1"
                                value={newProduct.img1}
                                onChange={handleInputChange}
                                className="p-2 border rounded w-full"
                            />
                        </label>

                        <label className="block">
                            <span className="text-gray-700">Image URL 2</span>
                            <input
                                type="url"
                                name="img2"
                                placeholder="Image URL 2"
                                value={newProduct.img2}
                                onChange={handleInputChange}
                                className="p-2 border rounded w-full"
                            />
                        </label>

                        <label className="block">
                            <span className="text-gray-700">Image URL 3</span>
                            <input
                                type="url"
                                name="img3"
                                placeholder="Image URL 3"
                                value={newProduct.img3}
                                onChange={handleInputChange}
                                className="p-2 border rounded w-full"
                            />
                        </label>

                        <label className="block">
                            <span className="text-gray-700">Additional Information</span>
                            <div className="space-y-2">
                                {newProduct.additionalInformation.map((info, index) => (
                                    <div key={index} className="flex space-x-4 items-center">
                                        <input
                                            type="text"
                                            placeholder="Label (e.g., Weight)"
                                            value={info.label}
                                            onChange={(e) => {
                                                const updatedInfo = [...newProduct.additionalInformation];
                                                updatedInfo[index].label = e.target.value;
                                                setNewProduct({ ...newProduct, additionalInformation: updatedInfo });
                                            }}
                                            className="p-2 border rounded w-1/2"
                                        />
                                        <input
                                            type="text"
                                            placeholder="Value (e.g., 1.5kg)"
                                            value={info.value}
                                            onChange={(e) => {
                                                const updatedInfo = [...newProduct.additionalInformation];
                                                updatedInfo[index].value = e.target.value;
                                                setNewProduct({ ...newProduct, additionalInformation: updatedInfo });
                                            }}
                                            className="p-2 border rounded w-1/2"
                                        />
                                        <button
                                            type="button"
                                            onClick={() => {
                                                const updatedInfo = [...newProduct.additionalInformation];
                                                updatedInfo.splice(index, 1);
                                                setNewProduct({ ...newProduct, additionalInformation: updatedInfo });
                                            }}
                                            className="bg-red text-white px-2 py-1 rounded"
                                        >
                                            Remove
                                        </button>
                                    </div>
                                ))}
                                <button
                                    type="button"
                                    onClick={() => {
                                        const updatedInfo = [...newProduct.additionalInformation];
                                        updatedInfo.push({ label: "", value: "" });
                                        setNewProduct({ ...newProduct, additionalInformation: updatedInfo });
                                    }}
                                    className="bg-blue text-white px-3 py-1 rounded"
                                >
                                    Add New Info
                                </button>
                            </div>
                        </label>


                        <label className="block">
                            <span className="text-gray-700">Price</span>
                            <input
                                type="number"
                                name="price"
                                required
                                placeholder="Price"
                                value={newProduct.price}
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
                                placeholder="Original Price"
                                value={newProduct.originalPrice}
                                onChange={handleInputChange}
                                className="p-2 border rounded w-full"
                            />
                        </label>

                        <label className="block">
                            <span className="text-gray-700">Discount (%)</span>
                            <input
                                type="number"
                                name="discount"
                                placeholder="Discount (%)"
                                value={newProduct.discount}
                                onChange={handleInputChange}
                                className="p-2 border rounded w-full"
                            />
                        </label>

                        <button
                            type="submit"
                            className="bg-green-500 text-white px-4 py-2 rounded"
                        >
                            Add Product
                        </button>
                    </form>

                </div>
            )}
        </div>
    );
};

export default ManageOfferProducts;