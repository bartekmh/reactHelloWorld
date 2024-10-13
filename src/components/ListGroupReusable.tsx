import { MouseEvent, useState } from "react";
//pass data to this component
//{{imtes[], heading: string}}
interface Props {
  items_1: string[];
  heading_1: string;
}

function ListGroupReusable({ items_1, heading_1 }: Props) {
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
      <h1>{heading_1} ListGroupReusable</h1>
      {/* {items.length === 0 ? <p>No item found.</p> : null} */}
      {/* If list is empty print "No item found", otherwise print the list */}
      {items_1.length === 0 && <p>No item found</p>}
      <ul className="list-group">
        {items_1.map((item, index) => (
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
export default ListGroupReusable;
