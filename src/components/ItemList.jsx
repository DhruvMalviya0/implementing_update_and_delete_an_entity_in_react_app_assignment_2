import { useState, useEffect } from "react";
import Item from "./Item";

const API_URI = `http://${import.meta.env.VITE_API_URI}/doors`;

const ItemList = () => {
    // 1. Initialize State for list items and API responses
    const [items, setItems] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    // 3. Fetch List Items when component mounts
    useEffect(() => {
        fetchItems();
    }, []);

    const fetchItems = async () => {
        try {
            const response = await fetch(API_URI);
            if (!response.ok) {
                throw new Error('Failed to fetch items');
            }
            const data = await response.json();
            setItems(data);
            setLoading(false);
        } catch (error) {
            setError(error.message);
            setLoading(false);
        }
    };

    // 5. Create a Delete Method
    const handleDelete = async (id) => {
        try {
            const response = await fetch(`${API_URI}/${id}`, {
                method: 'DELETE',
            });
            
            if (!response.ok) {
                throw new Error('Failed to delete item');
            }
            
            // 6. Update List After Deletion
            setItems(prevItems => prevItems.filter(item => item.id !== id));
        } catch (error) {
            // 7. Handle API Response - handle errors
            setError(error.message);
        }
    };

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error}</div>;

    // 4. Render List Items
    return (
        <div>
            <h2>Item List</h2>
            <ul>
                {items.map(item => (
                    <li key={item.id}>
                        <Item item={item} onDelete={handleDelete} />
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ItemList;
