import { Dropdown } from "@nextui-org/react";
import { DropdownItemBaseProps } from "@nextui-org/react/types/dropdown/base/dropdown-item-base";
import React, { Key } from "react";
import { packagePrices } from "../../../assets/useProvider/enums";

export type dropdownProps = {
  handleClick: (value: string) => void;
  wrapPrice : string;
}

export default function DropdownComponent({handleClick}: any) { //

  return (
    <Dropdown>
      <Dropdown.Button flat color="secondary" className="btnDropdown">
        Giftwrap
      </Dropdown.Button>
      <Dropdown.Menu color="secondary" aria-label="Actions" css={{ $$dropdownMenuWidth: "600px" }} 
          onAction = {(key: Key) => handleClick(key.toString()) }
        >
        <Dropdown.Item
          key={packagePrices.ecco} 
          command= {`(${packagePrices.ecco}$)`}
          description= {packagePrices.ecco}
          //description="Create a new file"
          textValue = "ecco"
        >
          Simple ecco wrap
        </Dropdown.Item>
        <Dropdown.Item
          key= {packagePrices.giftwrap}
          command={`(${packagePrices.giftwrap}$)`}
          description = {packagePrices.giftwrap}
          textValue = "giftwrap"
        >
          Giftwrap
        </Dropdown.Item>
        <Dropdown.Item
          key= {packagePrices.bcard}
          command={`(${packagePrices.bcard}$)`}
          textValue = "bcard"
        >
          With birthday card
        </Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
}