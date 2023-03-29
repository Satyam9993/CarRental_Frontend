const fixedInputClass="rounded-md bg-white bg-opacity-10 appearance-none relative block w-full px-3 py-2  border border-gray-700 placeholder-gray-400 text-gray-100 hover:shadow-inner hover:shadow-purple-700 focus:z-10 focus:outline-none focus:ring-purple-900 focus:border-purple-900  focus:border-2 focus:shadow-none sm:text-sm "

export default function Input({
    handleChange,
    value,
    labelText,
    labelFor,
    id,
    name,
    type,
    isRequired=false,
    placeholder,
    customClass
}){
    return(
        <div className="my-5">
            <label htmlFor={labelFor} className="sr-only">
              {labelText}
            </label>
            <input
              onChange={handleChange}
              value={value}
              id={id}
              name={name}
              type={type}
              required={isRequired}
              className={fixedInputClass+customClass}
              placeholder={placeholder}
            />
          </div>
    )
}