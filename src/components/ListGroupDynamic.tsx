function ListGroupDynamic() {
  let items = ["New York", "Chicago", "London", "Paris"];
  //   items = [];

  return (
    <>
      <h1>List ListGroupDynamic</h1>
      {/* {items.length === 0 ? <p>No item found.</p> : null} */}
      {/* If list is empty print "No item found", otherwise print the list */}
      {items.length === 0 && <p>No item found</p>}
      <ul className="list-group">
        {items.map((item) => (
          <li className="list-group-item" key={item}>
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}
export default ListGroupDynamic;
