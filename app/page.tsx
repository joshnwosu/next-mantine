"use client";
import {
  Blockquote,
  Box,
  Button,
  ButtonGroup,
  CloseButton,
  Container,
  Group,
  NativeSelect,
  Slider,
  Table,
  Text,
  TextInput,
  Title,
  Tooltip,
  Select,
  Avatar,
  MultiSelect,
} from "@mantine/core";
import { forwardRef, useState } from "react";
import DropDown from "./components/Dropdown";

type ButtonDataProps = {
  title: string;
  onClick: () => void;
};

const data = [
  {
    image: "https://img.icons8.com/clouds/256/000000/futurama-bender.png",
    label: "Bender Bending Rodríguez",
    value: "Bender Bending Rodríguez",
    description: "Fascinated with cooking",
  },

  {
    image: "https://img.icons8.com/clouds/256/000000/futurama-mom.png",
    label: "Carol Miller",
    value: "Carol Miller",
    description: "One of the richest people on Earth",
  },
  {
    image: "https://img.icons8.com/clouds/256/000000/homer-simpson.png",
    label: "Homer Simpson",
    value: "Homer Simpson",
    description: "Overweight, lazy, and often ignorant",
  },
  {
    image: "https://img.icons8.com/clouds/256/000000/spongebob-squarepants.png",
    label: "Spongebob Squarepants",
    value: "Spongebob Squarepants",
    description: "Not just a sponge",
  },
];

const elements = [
  { position: 6, mass: 12.011, symbol: "C", name: "Carbon" },
  { position: 7, mass: 14.007, symbol: "N", name: "Nitrogen" },
  { position: 39, mass: 88.906, symbol: "Y", name: "Yttrium" },
  { position: 56, mass: 137.33, symbol: "Ba", name: "Barium" },
  { position: 58, mass: 140.12, symbol: "Ce", name: "Cerium" },
];

const RenderTable = () => {
  const rows = elements.map((element) => (
    <Table.Tr key={element.name}>
      <Table.Td>{element.position}</Table.Td>
      <Table.Td>{element.name}</Table.Td>
      <Table.Td>{element.symbol}</Table.Td>
      <Table.Td>{element.mass}</Table.Td>
    </Table.Tr>
  ));

  return (
    <Table highlightOnHover>
      <Table.Thead>
        <Table.Tr>
          <Table.Th>Element position</Table.Th>
          <Table.Th>Element name</Table.Th>
          <Table.Th>Symbol</Table.Th>
          <Table.Th>Atomic mass</Table.Th>
        </Table.Tr>
      </Table.Thead>
      <Table.Tbody>{rows}</Table.Tbody>
    </Table>
  );
};

interface ItemProps extends React.ComponentPropsWithoutRef<"div"> {
  image: string;
  label: string;
  description: string;
  data?: [];
}

const SelectItem = forwardRef<HTMLDivElement, ItemProps>(
  ({ image, label, description, ...others }: ItemProps, ref) => (
    <div ref={ref} {...others}>
      <Group>
        <Avatar src={image} />

        <div>
          <Text size="sm">{label}</Text>
          <Text size="xs" opacity={0.65}>
            {description}
          </Text>
        </div>
      </Group>
    </div>
  )
);

export default function HomePage() {
  const [value, setValue] = useState("");

  const ButtonsData: ButtonDataProps[] = [
    {
      title: "Add",
      onClick: () => {
        setValue("Joshua Nwosu");
      },
    },
    {
      title: "Log",
      onClick: () => {
        console.log(value);
      },
    },
    {
      title: "Clear",
      onClick: () => {
        setValue("");
      },
    },
  ];

  return (
    <Container size={"md"}>
      <Title order={3} size="h1">
        Home page
      </Title>

      <Blockquote color="blue" cite="– Forrest Gump" my="xl">
        Life is like an npm install – you never know what you are going to get.
      </Blockquote>

      <TextInput
        label="Enter full name"
        description="Input description"
        placeholder="Full name"
        value={value}
        onChange={(event) => setValue(event.currentTarget.value)}
        rightSection={
          <CloseButton
            aria-label="Clear input"
            onClick={() => setValue("")}
            style={{ display: value ? undefined : "none" }}
          />
        }
      />

      <Group gap={"xs"} mt={"xs"}>
        {ButtonsData.map((item, index: number) => {
          return (
            <Tooltip
              label={item.title}
              withArrow
              key={index.toString()}
              arrowPosition="side"
              arrowOffset={10}
              position="bottom-start"
              style={{ fontSize: 12 }}
            >
              <Button variant="light" size="compact-md" onClick={item.onClick}>
                {item.title}
              </Button>
            </Tooltip>
          );
        })}
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

      <Group grow wrap="nowrap" my={"xl"} gap={20}>
        <Select
          withCheckIcon
          checkIconPosition="right"
          label="Your favorite library"
          placeholder="Pick value"
          searchable
          data={[
            {
              group: "Frontend",
              items: [
                {
                  value: "React",
                  label: "React",
                },
                { value: "Angular", label: "Angular" },
              ],
            },
            {
              group: "Backend",
              items: [
                { value: "Express", label: "Express" },
                { value: "Django", label: "Django" },
              ],
            },
          ]}
        />

        <MultiSelect
          label="Your favorite libraries"
          placeholder="Pick value"
          data={["React", "Angular", "Vue", "Svelte"]}
          searchable
        />

        <DropDown />
      </Group>

      <RenderTable />
    </Container>
  );
}
