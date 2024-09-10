
function List(props){

    const category = props.category;
    const itemList = props.items;

    //fruits.sort((a, b) => a.name.localeCompare(b.name)); // ALPHABETICAL
    //fruits.sort((a, b) => b.name.localeCompare(a.name)); // ALPHABETICAL REVERSE
    //fruits.sort((a, b) => a.calores - b.calories); // NUMERICAL
    //fruits.sort((a, b) => b.calories - a.calories); // NUMERICAL REVERSE

    //const lowCalFruits = fruits.filter(fruit => fruit.calories<100);

    const listItems = itemList.map(item => <li key={item.id}>
                                            {item.name}: &nbsp; 
                                            <b>{item.prop1}</b></li>);

    

    return (
            <>
            <h3>{category}</h3><ol>{listItems}</ol>
            </>
        );
}

export default List