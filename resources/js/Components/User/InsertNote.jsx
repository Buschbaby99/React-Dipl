import React, { useState } from "react";
import DropdownForm from "../Inputs/DropdownForm";
import InputError from "@/Components/Inputs/InputError";
import InputLabel from "@/Components/Inputs/InputLabel";
import TextInput from "@/Components/Inputs/TextInput";
import { Head, Link, useForm } from "@inertiajs/react";
import UniversalButton from "../Buttons/UniversalButtonComponent";

const inputStyle = {
  maxWidth: "500px",
  width: "100%",
  margin: "0.5rem",
};

const formContainerStyle = {
  backgroundColor: "white",
  borderRadius: "8px",
  padding: "2rem",
  boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
};

export default function ProjectUpdateComponent(props) {
  const { data, setData, post, processing, errors, reset } = useForm({
    user_id: props.user.user.id,
    projectName: props.projectName,
    sliderValue: 0,
    note: "",
  });

  console.log(props);

  const onHandleChange = (event) => {
    setData(event.target.name, event.target.value);
  };

  const handleSliderChange = (e) => {
    setData("sliderValue", e.target.value);
  };

  const handleInsert = (event) => {
    event.preventDefault();
    axios
      .post("/api/insertNote", data)
      .then(() => {
        window.location.href = "Scheduler";
      })
      .catch((error) => {
        console.log(data);
      });
  };
  const handleCancel = () => {
    window.location.href = "Scheduler";
  };

  return (
    <>
      <div>
        <div className="flex justify-center align-center p-12">
          <div style={formContainerStyle}>
            <form>
              <div style={inputStyle}>
                <TextInput
                  id="project"
                  name="project"
                  value={props.projectName}
                  locked={true}
                  className="mt-1 block w-full"
                  handleChange={onHandleChange}
                />
                <InputError message={errors.lastname} className="mt-2" />
              </div>
              <div style={inputStyle}>
                <InputLabel className="mt-4" forInput="note" value="Notiz" />

                <textarea
                  id="note"
                  name="note"
                  value={data.note}
                  className="mt-1 block w-full border rounded p-2"
                  rows="5"
                  autoComplete="off"
                  onChange={onHandleChange}
                />
                <InputError message={errors.note} className="mt-2" />
              </div>
              <div style={inputStyle}>
                <InputLabel
                  className="mt-4"
                  forInput="slider"
                  value="Prozent (0-100)"
                />

                <input
                  type="range"
                  id="slider"
                  name="slider"
                  min="0"
                  max="100"
                  value={data.sliderValue}
                  className="mt-1 block w-full"
                  onChange={handleSliderChange}
                />

                <span className="mt-2 text-sm">{data.sliderValue}%</span>
              </div>
              
            </form>
          </div>
        </div>

        <div className="flex justify-center align-center">
          <form onSubmit={handleInsert}>
            <UniversalButton type="submit" text="Senden"></UniversalButton>
          </form>
          <form onSubmit={handleCancel}>
            <UniversalButton type="submit" text="Zurück"></UniversalButton>
          </form>
        </div>
      </div>
    </>
  );
}

