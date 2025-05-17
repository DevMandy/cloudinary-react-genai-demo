import * as React from "react";
import '../App.css';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';

export default function EffectSelection({effectOption, onEffectOptionChange}) {

  const setEffect = (event) => {
    onEffectOptionChange(event.target.value);
  };

  return (
    <div>
        <FormControl>
          <FormLabel id="radio-buttons-group-label">Choose the effect you'd like to see:</FormLabel>
          <RadioGroup
              row
              aria-labelledby="radio-buttons-group-label"
              name="radio-buttons-group"
              value={effectOption}
              onChange={setEffect}>
              <FormControlLabel value="Background Replace" control={<Radio />} label="Background Replace" />
              <FormControlLabel value="Background Replace with Prompt" control={<Radio />} label="Background Replace with Prompt" />
              <FormControlLabel value="Replace Transparent Background" control={<Radio />} label="Replace Transparent Background" />
              <FormControlLabel value="Generative Fill" control={<Radio />} label="Generative Fill" />
              <FormControlLabel value="Generative Fill with Padding" control={<Radio />} label="Generative Fill with Padding" />
              <FormControlLabel value="Generative Fill Both Directions" control={<Radio />} label="Generative Fill Both Directions" />
              <FormControlLabel value="Background Fill with Prompt" control={<Radio />} label="Background Fill with Prompt" />
              <FormControlLabel value="Generative Recolor" control={<Radio />} label="Generative Recolor" />
              <FormControlLabel value="Generative Recolor Multiple" control={<Radio />} label="Generative Recolor Multiple" />
              <FormControlLabel value="Background Remove" control={<Radio />} label="Background Remove" />
              {/*<FormControlLabel value="Background Replace" control={<Radio />} label="Background Replace" />*/}

              <FormControlLabel value="Generative Restore" control={<Radio />} label="Generative Restore" />
          </RadioGroup>
        </FormControl>
    </div>
  );
}

