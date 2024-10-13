import { useState } from "react";
import Message from "./Message";
import Alert from "./components/Alert";
import AlertChildren from "./components/AlertChildren";
import Button from "./components/Button";
import ButtonDismissable from "./components/ButtonDismissable";
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

  const [alertVisible, setAlertVisibility] = useState(false);

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
      <Alert onClose={() => {}}> Hello WORLD.</Alert>
      <AlertChildren>
        Hello World <span>children !</span>
      </AlertChildren>
      <Button color="success" onClick={() => console.log("onClick event")}>
        My Button
      </Button>
      {/* parameter color not provided, so default is used */}
      <Button onClick={() => console.log("onClick event")}>My Button</Button>
      <ButtonDismissable onClick={() => console.log("onClick event")}>
        Dismissable
      </ButtonDismissable>

      {alertVisible && (
        <Alert onClose={() => setAlertVisibility(false)}> My Alert</Alert>
      )}
      <ButtonDismissable onClick={() => setAlertVisibility(true)}>
        My Button 1
      </ButtonDismissable>
    </div>
  );
}

export default App;
