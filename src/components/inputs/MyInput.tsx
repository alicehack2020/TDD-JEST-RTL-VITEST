interface MyInputProps {
  labelTestId: string;
  labelClassName: string;
  labelText: string;
  inputType: string;
  inputName: string;
  inputPlaceholder: string;
  inputClassName: string;
  inputValue: string;
  inputOnChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
} 


const MyInput: React.FC<MyInputProps> = ({
  labelTestId,
  labelClassName,
  labelText,
  inputType,
  inputName,
  inputPlaceholder,
  inputClassName,
  inputValue,
  inputOnChange,
}) => {  return (
    <>
      <label data-testid={labelTestId} className={labelClassName}>{labelText}</label><br />
      <input type={inputType} name={inputName} placeholder={inputPlaceholder} className={inputClassName} value={inputValue} onChange={inputOnChange}/><br />  
    </>
  )
}

export default MyInput


//to use import like this
// <MyInput
//             labelTestId="user name label"
//             labelClassName="mt-4"
//             labelText="Enter Your Name"
//             inputType="text"
//             inputName="userName"
//             inputPlaceholder="Enter Your Name"
//             inputClassName="w-full my-2 p-2 border-2 border-gray-300 rounded-md outline-transparent hover:outline-blue-400"
//             inputValue={info.userName}
//             inputOnChange={onValueChange} />  