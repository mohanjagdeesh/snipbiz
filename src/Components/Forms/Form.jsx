import { Adjust, LocationCityOutlined, Scale } from "@mui/icons-material";
import {InputAdornment, TextField } from "@mui/material";
import React, { useState } from "react";
import "./Form.css"

export default function Form({formData}) {
  const [state, setState] = useState({
    pickup: "",
    destination: "",
    weight:"",
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setState((prevProps) => ({
      ...prevProps,
      [name]: value
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    formData(state)
  };

  return (
    <div className="form-wrapper">
      <form onSubmit={handleSubmit} data-testid="form">
        <div className="form-control">
          <TextField
            className="form"
            type="text"
            placeholder="Enter pickup location"
            name="pickup"
            value={state.pickup} 
            onChange={handleInputChange}
            InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <Adjust data-testid="pickup-icon" />
                  </InputAdornment>
                ),
              }}
            data-testid="pickup-input"
          />
        </div>
        <div className="form-control">
          <TextField
            type="text"
            className="form"
            placeholder="Enter Destination"
            name="destination"
            value={state.destination}
            onChange={handleInputChange}
            InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <LocationCityOutlined data-testid="destination-icon" />
                  </InputAdornment>
                ),
              }}
            data-testid="destination-input"
          />
        </div>
        <div className="form-control">
          <TextField
            type="number"
            className="form"
            placeholder="Enter Weight"
            name="weight"
            value={state.weight}
            onChange={handleInputChange}
            InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <Scale data-testid="weight-icon" />
                  </InputAdornment>
                ),
              }}
            data-testid="weight-input"
          />
        </div>
        <button type="submit" data-testid="submit-button">Submit</button>
      </form>
    </div>
  );
}
