import * as React from "react";
import { useStyletron } from "baseui";
import logo from "../assets/wfh_9.svg";
import { Textarea } from "baseui/textarea";
import { Select } from "baseui/select";
import { styled } from "styletron-react";

import { Card, StyledBody, StyledAction } from "baseui/card";
import { Button, SIZE, SHAPE } from "baseui/button";
import { FormControl } from "baseui/form-control";
import { Input } from "baseui/input";
import { TimePicker } from "baseui/timepicker";

const MainItem = styled("div", {
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
  "@media screen and (max-width: 880px)": {
    flexDirection: "column",
  },
});

export default () => {
  const [css] = useStyletron();
  const options = [
    { label: "1 hr", id: 1 },
    { label: "2 hrs", id: 2 },
    { label: "3 hrs", id: 3 },
    { label: "4 hrs", id: 4 },
    { label: "5 hrs", id: 5 },
    { label: "6 hrs", id: 6 },
    { label: "7 hrs", id: 7 },
    { label: "8 hrs", id: 8 },
  ];
    
  const [value, setValue] = React.useState(
    new Date("2020-09-06T10:00:50.372Z")
  );

  const [taskInputField, setTaskInputField] = React.useState();

  const [valueSelect, setValueSelect] = React.useState([]);

  return (
    <div>
      <MainItem>
        <Card
          title="Sign in and out information"
          overrides={{
            Root: {
              style: {
                maxWidth: "500px",
                minWidth: "400px",
              },
            },
          }}
        >
          {/* <img src={logo} height="400" alt="Logo" /> */}
          {/* <StyledBody>
        Proin ut dui sed metus pharetra hend rerit vel non mi. Nulla ornare
        faucibus ex, non facilisis nisl. Proin ut dui sed metus pharetra hend
        rerit vel non mi. Nulla ornare faucibus ex, non facilisis nisl.
      </StyledBody> */}

          <FormControl
            label={() => "Start Time"}
            caption={() => "time when you loggin in. eg: 10 am"}
          >
            <TimePicker
              value={value}
              onChange={(date) => setValue(date)}
              creatable
            />
          </FormControl>

          <FormControl
            label={() => "End Time"}
            caption={() => "time when you loggin out. eg: 7 am"}
          >
            <TimePicker
              value={"7 pm"}
              onChange={(date) => setValue(date)}
              creatable
            />
          </FormControl>

          <StyledAction></StyledAction>
        </Card>
        <Card
          title="Task Related Information"
          overrides={{
            Root: {
              style: {
                maxWidth: "500px",
                minWidth: "400px",
              },
            },
          }}
        >
          <Button
            onClick={() => {
              alert("click");
              console.log(valueSelect);
            }}
            size={SIZE.compact}
            shape={SHAPE.default}
            overrides={{
              BaseButton: {
                style: {
                  width: "50%",
                  float: "right",
                  marginTop: "30px",
                },
              },
            }}
          >
            Add Task
          </Button>
          <FormControl label="Task Duration" caption="Textarea caption">
            <Select
              creatable
              className={css({
                paddingRight: "20px",
              })}
              overrides={{
                Root: {
                  style: {
                    width: "150px",
                  },
                },
              }}
              options={options}
              value={valueSelect}
              width="10px"
              onChange={(params) => setValueSelect(params.value)}
            />
          </FormControl>
          <FormControl label="Task description">
            <Input
              value={""}
              onChange={(e) => setValue(e.target.value)}
              clearOnEscape
            />
          </FormControl>
        </Card>
      </MainItem>
      <Button
        overrides={{
          BaseButton: { style: { width: "100%" } },
        }}
      >
        Submit
      </Button>
    </div>
  );
};
