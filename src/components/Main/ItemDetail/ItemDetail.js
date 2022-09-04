const ItemDetail = ({ item }) => {

    return (
        <div className="container">
            <h2>item detail</h2>
            <h3>{item.title}</h3>
            <img src={item.img} alt="" />
            <p>{item.description}</p>
            <p>stock: {item.stock}</p>
            <p>Precio: {item.price}€</p>
        </div>
    )
};


export default ItemDetail;