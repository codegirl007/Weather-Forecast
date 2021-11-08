import React from "react";
import { onChangeCity } from "../../actions/fetchDataAction";
import { weatherStore } from "../../stores/weatherStore";
import { cities } from "../../utils/cities";
import shallow from "zustand/shallow";
import "./SelectCity.css";

export const SelectCity = () => {
  const city = weatherStore.useStore((store) => store.city, shallow);

  return (
    <div className="select-wrapper">
      <select
        className="select"
        name="cityselect"
        id="cityselect"
        value={city}
        onChange={onChangeCity}
      >
        {cities.map((mesto) => (
          <option value={mesto} key={mesto}>
            {mesto}
          </option>
        ))}
      </select>
    </div>
  );
};
