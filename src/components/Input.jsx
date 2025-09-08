export default function Input ({ placeholder, label, type }){
    return (
        <div className="flex flex-col">
            <label>{label}</label>
            <input 
                className="bg-white p-2 rounded-md shadow-md max-w-1/3"
                type={type} 
                placeholder={placeholder} 
            />
        </div>
    )
}