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

  const [taskInputFields, setTaskInputField] = React.useState([
    {
      taskDetails: "",
      taskTime: []
    },
  ]);

  const handleAddFields = () => {
    setTaskInputField([...taskInputFields, { taskDetails: "", taskTime: [] }]);
  };

  const handleChangeInput = (index, event) => {
    if (event.target) {
      console.log('event target', event.target);
      const values = [...taskInputFields];
      values[index][event.target.name] = event.target.value;
      setTaskInputField(values);
    }
    else {
      console.log("no event target", index, event);
      const values = [...taskInputFields];
      taskInputFields[index].taskTime = event.value;
      setTaskInputField(values);
    }
    
  };

  function testsaadnoor(wtf, sad) {
    console.log('saadnoor', wtf, sad);
  }

  // const [taskTime, setTaskTime] = React.useState([]);
  // const [taskTime2, setTaskTime2] = React.useState([]);
  // const [taskTime3, setTaskTime3] = React.useState([]);
  // const [taskDetails, setTaskDetails] = React.useState("Daily Standup");
  // const [taskDetails2, setTaskDetails2] = React.useState("Daily Standup2");
  // const [taskDetails3, setTaskDetails3] = React.useState("Daily Standup3");

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
              handleAddFields();
            }}
            size={SIZE.compact}
            shape={SHAPE.default}
            overrides={{
              BaseButton: {
                style: {
                  width: "50%",
                  float: "right",
                  marginTop: "25px",
                },
              },
            }}
          >
            Add Task
          </Button>
          <div>
            {taskInputFields?.map((taskInputField, index) => {
              console.log(taskInputField);
              return (
                <div key={index}>
                  <FormControl label="Task Duration" caption="Textarea caption">
                    <Select
                      creatable
                      overrides={{
                        Root: {
                          style: {
                            width: "150px",
                          },
                        },
                      }}
                      size={SIZE.compact}
                      options={options}
                      value={taskInputField.taskTime}
                      width="10px"
                      name="taskTime"
                      onChange={(params) => handleChangeInput(index, params)}
                    />
                  </FormControl>
                  <FormControl label="Task description">
                    <Input
                      value={taskInputField.taskDetails}
                      name="taskDetails"
                      onChange={(event) => handleChangeInput(index, event)}
                      clearOnEscape
                    />
                  </FormControl>
                </div>
              );
            })}
            {/* {arr.forEach((item, index) => (
              <div key={index}>
                <FormControl label="Task Duration" caption="Textarea caption">
                  <Select
                    creatable
                    overrides={{
                      Root: {
                        style: {
                          width: "150px",
                        },
                      },
                    }}
                    size={SIZE.compact}
                    options={options}
                    value={taskTime}
                    width="10px"
                    onChange={(params) => setTaskTime(params.value)}
                  />
                </FormControl>
                <FormControl label="Task description">
                  <Input
                    value={taskDetails}
                    onChange={(e) => setTaskDetails(e.target.value)}
                    clearOnEscape
                  />
                </FormControl>
              </div>
            ))} */}
          </div>
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
