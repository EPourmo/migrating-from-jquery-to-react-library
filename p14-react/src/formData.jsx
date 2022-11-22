import { DatePicker, Form, Input } from "antd";
import React from "react";

// state form data
export const stateData = [
  {
    label: "Alabama",
    value: "Alabama",
    key: "1",
  },
  {
    label: "Alaska",
    value: "Alaska",
    key: "2",
  },
  {
    label: "American Samoa",
    value: "American Samoa",
    key: "3",
  },
  {
    label: "Arizona",
    value: "Arizona",
    key: "4",
  },
  {
    label: "Arkansas",
    value: "Arkansas",
    key: "5",
  },
  {
    label: "California",
    valuevalue: "California",
    key: "6",
  },
  {
    label: "Colorado",
    value: "Colorado",
    key: "7",
  },
  {
    label: "Connecticut",
    value: "Connecticut",
    key: "8",
  },
  {
    label: "Delaware",
    value: "Delaware",
    key: "9",
  },
  {
    label: "District Of Columbia",
    value: "District Of Columbia",
    key: "10",
  },
  {
    label: "Federated States Of Micronesia",
    value: "Federated States Of Micronesia",
    key: "11",
  },
  {
    label: "Florida",
    value: "Florida",
    key: "12",
  },
  {
    label: "Georgia",
    value: "Georgia",
    key: "13",
  },
  {
    label: "Guam",
    value: "Guam",
    key: "14",
  },
  {
    label: "Hawaii",
    value: "Hawaii",
    key: "15",
  },
  {
    label: "Idaho",
    value: "Idaho",
    key: "16",
  },
  {
    label: "Illinois",
    value: "Illinois",
    key: "17",
  },
  {
    label: "Indiana",
    value: "Indiana",
    key: "18",
  },
  {
    label: "Iowa",
    value: "Iowa",
    key: "19",
  },
  {
    label: "Kansas",
    value: "Kansas",
    key: "20",
  },
  {
    label: "Kentucky",
    value: "Kentucky",
    key: "21",
  },
  {
    label: "Louisiana",
    value: "Louisiana",
    key: "22",
  },
  {
    label: "Maine",
    value: "Maine",
    key: "23",
  },
  {
    label: "Marshall Islands",
    value: "Marshall Islands",
    key: "24",
  },
  {
    label: "Maryland",
    value: "Maryland",
    key: "25",
  },
  {
    label: "Massachusetts",
    value: "Massachusetts",
    key: "26",
  },
  {
    label: "Michigan",
    value: "Michigan",
    key: "27",
  },
  {
    label: "Minnesota",
    value: "Minnesota",
    key: "28",
  },
  {
    label: "Mississippi",
    value: "Mississippi",
    key: "29",
  },
  {
    label: "Missouri",
    value: "Missouri",
    key: "30",
  },
  {
    label: "Montana",
    value: "Montana",
    key: "31",
  },
  {
    label: "Nebraska",
    value: "Nebraska",
    key: "32",
  },
  {
    label: "Nevada",
    value: "Nevada",
    key: "33",
  },
  {
    label: "New Hampshire",
    value: "New Hampshire",
    key: "34",
  },
  {
    label: "New Jersey",
    value: "New Jersey",
    key: "35",
  },
  {
    label: "New Mexico",
    value: "New Mexico",
    key: "36",
  },
  {
    label: "New York",
    value: "New York",
    key: "37",
  },
  {
    label: "North Carolina",
    value: "North Carolina",
    key: "38",
  },
  {
    label: "North Dakota",
    value: "North Dakota",
    key: "39",
  },
  {
    label: "Northern Mariana Islands",
    value: "Northern Mariana Islands",
    key: "40",
  },
  {
    label: "Ohio",
    value: "Ohio",
    key: "41",
  },
  {
    label: "Oklahoma",
    value: "Oklahoma",
    key: "42",
  },
  {
    label: "Oregon",
    value: "Oregon",
    key: "43",
  },
  {
    label: "Palau",
    value: "Palau",
    key: "44",
  },
  {
    label: "Pennsylvania",
    value: "Pennsylvania",
    key: "45",
  },
  {
    label: "Puerto Rico",
    value: "Puerto Rico",
    key: "46",
  },
  {
    label: "Rhode Island",
    value: "Rhode Island",
    key: "47",
  },
  {
    label: "South Carolina",
    value: "South Carolina",
    key: "48",
  },
  {
    label: "South Dakota",
    value: "South Dakota",
    key: "49",
  },
  {
    label: "Tennessee",
    value: "Tennessee",
    key: "50",
  },
  {
    label: "Texas",
    value: "Texas",
    key: "51",
  },
  {
    label: "Utah",
    value: "Utah",
    key: "52",
  },
  {
    label: "Vermont",
    value: "Vermont",
    key: "53",
  },
  {
    label: "Virgin Islands",
    value: "Virgin Islands",
    key: "54",
  },
  {
    label: "Virginia",
    value: "Virginia",
    key: "55",
  },
  {
    label: "Washington",
    value: "Washington",
    key: "56",
  },
  {
    label: "West Virginia",
    value: "West Virginia",
    key: "57",
  },
  {
    label: "Wisconsin",
    value: "Wisconsin",
    key: "58",
  },
  {
    label: "Wyoming",
    value: "Wyoming",
    key: "59",
  },
];

// department form data
export const departmentData = [
  {
    label: "Sales",
    value: "Sales",
  },
  {
    label: "Marketing",
    value: "Marketing",
  },
  {
    label: "Engineering",
    value: "Engineering",
  },
  {
    label: "Human Resources",
    value: "Human Resources",
  },
  {
    label: "Legal",
    value: "Legal",
  },
];

// form inputs and datepickers data
export const forItemData = [
  {
    name: "firstName",
    label: "First name",
    component: "input",
    index: 1,
  },
  {
    name: "lastName",
    label: "Last name",
    component: "input",
    index: 2,
  },

  {
    name: "birth",
    label: "Date of Birth",
    component: "datePick",
    index: 3,
  },

  {
    name: "startDate",
    label: "Start Date",
    component: "datePick",
    index: 4,
  },
  {
    name: "street",
    label: "Street",
    component: "input",
    index: 5,
  },
  {
    name: "city",
    label: "City",
    component: "input",
    index: 6,
  },
];

// type of component
const Components = {
  input: Input,
  datePick: DatePicker,
};

/**
 * function that return antd inputs or datePickers components
 */
export default (block) => {
  if (typeof Components[block.component] !== "undefined") {
    return (
      <Form.Item
        label={block.label}
        name={block.name}
        key={block.index}
        rules={[
          {
            required: true,
            message: `Please input your ${block.label}!`,
          },
        ]}
      >
        {React.createElement(Components[block.component])}
      </Form.Item>
    );
  }
  return React.createElement(
    () => <div>The component {block.component} has not been created yet.</div>,
    { key: block._uid }
  );
};
