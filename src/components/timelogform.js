import * as React from "react";
import { useStyletron } from "baseui";
import logo from "../assets/wfh_9.svg";
import { Textarea } from "baseui/textarea";
import { Select } from "baseui/select";
import { styled } from "styletron-react";
import { Card } from "baseui/card";
import { Button, SIZE, SHAPE, KIND } from "baseui/button";
import { FormControl } from "baseui/form-control";
import { TimePicker } from "baseui/timepicker";
import Delete from "baseui/icon/delete";

const MainItem = styled("div", {
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
  "@media screen and (max-width: 880px)": {
    flexDirection: "column",
  },
});

export default () => {
  const options = [
    { label: "30 min", id: 0 },
    { label: "1 hr", id: 1 },
    { label: "2 hrs", id: 2 },
    { label: "3 hrs", id: 3 },
    { label: "4 hrs", id: 4 },
    { label: "5 hrs", id: 5 },
    { label: "6 hrs", id: 6 },
    { label: "7 hrs", id: 7 },
  ];

  const [signInTime, setSignInTime] = React.useState(
    new Date("2011-10-10T10:00:00")
  );

  const [isLoading, setIsLoading] = React.useState(false);

  const [signOutTime, setSignOutTime] = React.useState(
    new Date("2011-10-10T19:00:00")
  );

  const [taskInputFields, setTaskInputField] = React.useState([
    {
      taskDetails: "Daily Standup Meeting (Local)",
      taskTime: [{ label: "1 hr", id: 1 }],
    },
    {
      taskDetails: "Daily Standup Meeting (International)",
      taskTime: [{ label: "30 min", id: 0 }],
    },
  ]);

  const handleAddFields = () => {
    setTaskInputField([...taskInputFields, { taskDetails: "", taskTime: [] }]);
  };

  function handleRemoveFields(index) {
    const values = [...taskInputFields];
    values.splice(index, 1);
    setTaskInputField(values);
  }

  const handleChangeInput = (index, event) => {
    if (event.target) {
      console.log("event target", event.target);
      const values = [...taskInputFields];
      values[index][event.target.name] = event.target.value;
      console.log(values);
      setTaskInputField(values);
    } else {
      console.log("no event target", index, event);
      const values = [...taskInputFields];
      taskInputFields[index].taskTime = event.value;
      setTaskInputField(values);
    }
  };

  function submitForm() {
    console.log(
      signInTime.setFullYear(
        new Date().getFullYear(),
        new Date().getMonth(),
        new Date().getDate()
      ),
      signOutTime.setFullYear(
        new Date().getFullYear(),
        new Date().getMonth(),
        new Date().getDate()
      ),
      taskInputFields
    );

    setTimeout(() => setIsLoading(false), 3000);
  }

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
                maxHeight: "630px",
              },
            },
          }}
        >
          <FormControl
            label={() => "Start Time"}
            caption={() => "time when you loggin in. eg: 10 am"}
          >
            <TimePicker
              value={signInTime}
              name="startTime"
              onChange={(date) => setSignInTime(date)}
              creatable
            />
          </FormControl>

          <FormControl
            label={() => "End Time"}
            caption={() => "time when you loggin out. eg: 7 am"}
          >
            <TimePicker
              value={signOutTime}
              name="endTime"
              onChange={(date) => setSignOutTime(date)}
              creatable
            />
          </FormControl>
          <img src={logo} height="300" alt="Logo" />
        </Card>
        <Card
          title="Task Related Information"
          overrides={{
            Root: {
              style: {
                overflow: "auto",
                maxWidth: "490px",
                minWidth: "400px",
                maxHeight: "630px",
              },
            },
          }}
        >
          <div>
            {taskInputFields?.map((taskInputField, index) => {
              console.log(taskInputField);
              return (
                <div key={index}>
                  {index === taskInputFields.length - 1 ? (
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
                            marginTop: "23px",
                          },
                        },
                      }}
                    >
                      Create Another Task
                    </Button>
                  ) : (
                    <Button
                      shape={SHAPE.circle}
                      kind={KIND.minimal}
                      overrides={{
                        BaseButton: {
                          style: {
                            float: "right",
                          },
                        },
                      }}
                      onClick={() => handleRemoveFields(index)}
                    >
                      <Delete />
                    </Button>
                  )}
                  <FormControl label="Task Duration" caption="Textarea caption">
                    <Select
                      creatable
                      autoFocus
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
                    <Textarea
                      value={taskInputField.taskDetails}
                      name="taskDetails"
                      onChange={(event) => handleChangeInput(index, event)}
                      clearOnEscape
                    />
                  </FormControl>
                </div>
              );
            })}
          </div>
        </Card>
      </MainItem>
      <Button
        isLoading={isLoading}
        overrides={{
          BaseButton: { style: { width: "100%" } },
        }}
        onClick={() => {
          setIsLoading(true);
          submitForm();
        }}
      >
        Submit Information
      </Button>
    </div>
  );
};
