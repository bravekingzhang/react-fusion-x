import { Button, Flex } from "@mantine/core";
import useStore from "../../store";
function BearCounter() {
  const count = useStore((state) => state.count);
  return <h1>there are {count} bear around here ...</h1>;
}

function Controls() {
  const increasePopulation = useStore((state) => state.increment);
  const decrement = useStore((state) => state.decrement);
  return (
    <Flex
      mih={50}
      gap="md"
      justify="center"
      align="center"
      direction="row"
      wrap="wrap"
    >
      <Button onClick={increasePopulation}>add</Button>
      <Button onClick={decrement}>decr</Button>
    </Flex>
  );
}

export function Bear() {
  return (
    <div>
      <BearCounter />
      <Controls />
    </div>
  );
}
