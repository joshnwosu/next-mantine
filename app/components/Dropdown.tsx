// "use client";
// import { useState } from "react";
// import { Input, InputBase, Combobox, useCombobox } from "@mantine/core";

// const groceries = [
//   "🍎 Apples",
//   "🍌 Bananas",
//   "🥦 Broccoli",
//   "🥕 Carrots",
//   "🍫 Chocolate",
// ];

// export default function DropDown() {
//   const combobox = useCombobox({
//     onDropdownClose: () => combobox.resetSelectedOption(),
//   });

//   const [value, setValue] = useState<string | null>(null);

//   const options = groceries.map((item) => (
//     <Combobox.Option value={item} key={item}>
//       {item}
//     </Combobox.Option>
//   ));

//   return (
//     <Combobox
//       store={combobox}
//       onOptionSubmit={(val: any) => {
//         setValue(val);
//         combobox.closeDropdown();
//       }}
//     >
//       <Combobox.Target>
//         <InputBase
//           component="button"
//           pointer
//           rightSection={<Combobox.Chevron />}
//           onClick={() => combobox.toggleDropdown()}
//         >
//           {value || <Input.Placeholder>Pick value</Input.Placeholder>}
//         </InputBase>
//       </Combobox.Target>

//       <Combobox.Dropdown>
//         <Combobox.Options>{options}</Combobox.Options>
//       </Combobox.Dropdown>
//     </Combobox>
//   );
// }
