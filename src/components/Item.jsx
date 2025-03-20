const Item = ({ item, onDelete }) => {
    return (
        <div className="item">
            <div>
                <strong>{item.name}</strong> (ID: {item.id}, Status: {item.status})
            </div>
            <button 
                onClick={() => onDelete(item.id)}
            >
                Delete
            </button>
        </div>
    );
};

export default Item;
