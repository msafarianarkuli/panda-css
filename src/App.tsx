import { Button } from "./components/Button";
import { Container, HStack, VStack } from "../styled-system/jsx";

function App() {
  return (
    <VStack>
      <Button variant="solid" color="primary">
        کلیک کنید
      </Button>
      <Button variant="solid" color="blue">
        کلیک کنید
      </Button>
      <Button variant="solid" color="success">
        کلیک کنید
      </Button>
      <Button variant="outline" color="primary">
        کلیک کنید
      </Button>
      <Button variant="outline" color="blue">
        کلیک کنید
      </Button>
      <Button variant="outline" color="success">
        کلیک کنید
      </Button>
    </VStack>
  );
}

export default App;
