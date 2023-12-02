const CustomInput = ({ id, name, type, placeholder, register, error }) => (
  <div>
    <label
      htmlFor={id}
      className='block text-sm font-medium leading-6 text-custom-color-dark'
    >
      {placeholder}
    </label>
    <div className='mt-2'>
      <input
        id={id}
        name={name}
        type={type}
        autoComplete='text'
        placeholder={placeholder}
        className='bg-text-custom-color-white block w-full rounded-md border-0 py-1.5 px-2 text-custom-color-dark shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-300 focus:ring-2 focus:ring-inset focus:ring-custom-color-dark sm:text-sm sm:leading-6'
        {...register(name, {
          required: {
            value: true,
            message: `${placeholder} is required`,
          },
        })}
      />
    </div>
    {error && <span className='text-red-700 text-sm'>{error.message}</span>}
  </div>
);

export default CustomInput;
