import { Box, Button, Container, Group, Text, TextInput } from "@mantine/core";

export default function HomePage() {
  return (
    <Container size={"md"}>
      <h2>Home page</h2>
      <TextInput
        label="Input label"
        description="Input description"
        placeholder="Input placeholder"
      />

      <Group gap={"xs"} mt={"xs"} grow wrap="nowrap">
        <Button>Log Info</Button>
        <Button>Clear Info</Button>
        <Button>Add Info</Button>
      </Group>

      <Box
        maw={500}
        p={"xs"}
        my={"xs"}
        bg={"var(--mantine-color-blue-light)"}
        style={{ borderRadius: 4 }}
      >
        <Text size="sm">
          Click on the buttons above to Log, Clear and Add Info to the Input
          field.
        </Text>
      </Box>
    </Container>
  );
}
