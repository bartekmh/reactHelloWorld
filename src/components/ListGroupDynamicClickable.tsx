import { MouseEvent, useState } from "react";

function ListGroupClickable() {
  let items = ["New York", "Chicago", "London", "Paris"];
  //   items = [];

  //local variable
  let selectedIndexLocal = 0;

  //State Hook
  const [selectedIndex, setSelectedIndex] = useState(0);
  // arr[0]; //variable (selectedIndex)
  // arr[1]; //updater function

  //Event handler
  const handleClick = (event: MouseEvent) => console.log(event);

  return (
    <>
      <h1>List ListGroupClickable</h1>
      {/* {items.length === 0 ? <p>No item found.</p> : null} */}
      {/* If list is empty print "No item found", otherwise print the list */}
      {items.length === 0 && <p>No item found</p>}
      <ul className="list-group">
        {items.map((item, index) => (
          <li
            className={
              selectedIndex === index
                ? "list-group-item active"
                : "list-group-item"
            }
            key={item}
            onClick={() => {
              setSelectedIndex(index);
            }}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}
export default ListGroupClickable;
