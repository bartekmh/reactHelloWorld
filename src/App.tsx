import Message from "./Message";
import ListGroup from "./components/ListGroup";
import ListGroupDynamic from "./components/ListGroupDynamic";
import ListGroupClickable from "./components/ListGroupDynamicClickable";
import ListGroupReusable from "./components/ListGroupReusable";
import ListGroupReusableCallback from "./components/ListGroupReusableCallback";

function App() {
  let myItems = ["Red", "Green", "Blue", "Black"];

  const handleSelectItem = (item: string) => {
    console.log(item);
  };

  return (
    <div>
      <Message></Message>
      <ListGroup></ListGroup>
      <ListGroupDynamic />
      <ListGroupClickable />
      <ListGroupReusable items_1={myItems} heading_1="Colors" />
      <ListGroupReusableCallback
        items_1={myItems}
        heading_1="Colors"
        onSelectItem={handleSelectItem}
      />
    </div>
  );
}

export default App;
