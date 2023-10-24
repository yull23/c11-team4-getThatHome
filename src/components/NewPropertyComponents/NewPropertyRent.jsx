import styled from "@emotion/styled";
import { Form } from "react-router-dom";
import { BiSearch } from "react-icons/bi";
import LabelContainer from "./Components/LabelContainer";
import { RiMoneyDollarCircleLine } from "react-icons/ri";
import CheckBoxProperty from "./Components/Checkbox";
import RatioPropType from "./Components/RatioPropType";

export default function NewPropertyRent() {
  function handleLogin(e) {
    e.preventDefault();
    const formData = new FormData(e.target);
    const credentials = Object.fromEntries(formData);
    console.log(credentials);
  }
  return (
    <Form onSubmit={handleLogin}>
      <LabelContainer
        maxWidth="37.5rem"
        name="address"
        content="address"
        placeholder="Start typinh to autocomplete"
        icon={<BiSearch size="1.25rem" color="#8E8E8E" />}
      />
      <LabelContainer
        maxWidth="37.5rem"
        name="price"
        content="montly rent"
        placeholder="2000"
        icon={<RiMoneyDollarCircleLine size="1.25rem" color="#8E8E8E" />}
      />
      <LabelContainer
        maxWidth="37.5rem"
        name="maintenance"
        content="Maintanance"
        placeholder="100"
        icon={<RiMoneyDollarCircleLine size="1.25rem" color="#8E8E8E" />}
      />
      <RatioPropType />
      <CheckBoxProperty />
      <button>Create </button>
    </Form>
  );
}

// name,
// maxWidth,
// icon,
// content,
// placeholder,
// <BiSearch size="1.25rem" color="#8E8E8E" />

// {
// 	"property": {
// 		"operation": "Rent",
// 		"price": 1001,
// 		"maintenance": 233,
// 		"area": 1001,
// 		"description": "Aut sint voluptate. Laboriosam temporibus facilis. Possimus aut qui. Occaecati velit veritatis. Voluptates quos sint. Consequuntur quo harum. At duci.",
// 		"bedrooms": 9,
// 		"bathrooms": 4,
// 		"pets_allowed": false,
// 		"photo_url": ["https://picsum.photos/id/1063/640","https://picsum.photos/id/1051/640"],
// 		"active": false
// 	},
// 	"property_type": {
// 		"name": "House"
// 	},
// 	"property_address": {
// 		"name": "Dibbert Fort",
// 		"latitude": 62.53832373435722,
// 		"longitude": -78.25065709390609
// 	}
// }
