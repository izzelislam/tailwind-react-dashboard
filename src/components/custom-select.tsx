
type Props = {
  label?: string
  type?: string
  placeholder?: string
  value?: any
  onChange?: () => void,
  error?: string,
  options?: Options[]
}

// type array of object
type Options = {
  id: string
  name: string
}


const CustomSelect:React.FC<Props> = ({label, placeholder, value, onChange, options}: Props) => {
  return (
    <div className="mb-5">
    {
      label &&
      <div className="label-text mb-1">{label}</div>
    }
    <select className="select select-bordered w-full" value={value} onChange={onChange}>
      {
        options &&
        options.map((option: any, index:any) => (
          <option key={index} value={option.id} onChange={onChange} >{option.name}</option>
        ))
      }
    </select>
    </div>
  )
}

export default CustomSelect