import { useState } from "react";
interface Options {
    [key: string]: string;
}
  

const Form = () => {
  const [options, setOptions] = useState<Options>({
    coding: "",
    gaming: "",
  });

  const handleSelectChange = (event: { target: { name: any; value: any; }; }) => {
    const { name, value } = event.target;
    setOptions((prevOptions) => ({
      ...prevOptions,
      [name]: value,
    }));
    };
    
    const handdleOptions = ( ) => {
        
    for (const field in options) {
      if (options.hasOwnProperty(field) && options[field] === "") {
         return alert(`please select option of ${field}`)
        }
      else {
         return alert(`Form has been sumitted`)
        }
    }  
    }

  return (
    <div className="grid place-content-center w-full mt-5 gap-3">
      <div className="flex space-x-4 justify-between">
        <label htmlFor="coding">Do you like coding?</label>
        <select
          name="coding"
          id="coding"
          value={options.coding}
          onChange={handleSelectChange}
              >
                  
          <option value="">Select Option</option>
          <option value="yes">YES</option>
          <option value="no">NO</option>
        </select>
      </div>
      <div className="flex justify-between">
        <label htmlFor="gaming">Do you like gaming?</label>
        <select
          name="gaming"
          id="gaming"
          value={options.gaming}
          onChange={handleSelectChange}
         >
          <option value="">Select Option</option>       
          <option value="yes">YES</option>
          <option value="no">NO</option>
        </select>
      </div>
      <button className="p-2 border rounded-xl hover:shadow-blue-300 shadow-lg bg-green-300 font-semibold hover:text-white" onClick={handdleOptions}>submit</button>    
    </div>
  );
};

export default Form;
