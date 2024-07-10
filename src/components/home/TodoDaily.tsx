import { EllipsisVertical } from "lucide-react";
import React, { useState } from "react";

interface CustomCheckboxProps {
    isChecked: boolean;
    handleCheckboxChange: () => void;
}

const CustomCheckbox: React.FC<CustomCheckboxProps> = ({ isChecked, handleCheckboxChange }) => (
    <>
        <input
            type="checkbox"
            id="custom-checkbox"
            className="hidden"
            checked={isChecked}
            onChange={handleCheckboxChange}
        />
        <label
            htmlFor="custom-checkbox"
            className={`w-8 h-8 flex items-center justify-center border-2 rounded-md cursor-pointer transition-colors ${isChecked ? 'bg-bg-color2 border-none' : 'bg-white border-gray-400'}`}
        >
            {isChecked && (
                <svg
                    className="w-5 h-5 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5 13l4 4L19 7"
                    ></path>
                </svg>
            )}
        </label>
    </>
);

export const TodoDaily = () => {
    const [isChecked, setIsChecked] = useState(false);

    const handleCheckboxChange = () => {
        setIsChecked(!isChecked);
    };

    return (
        <div className="max-w-md mx-auto my-8">
            <div className="flex justify-between mb-4">
                <h2 className="text-xl font-semibold">Today Habit</h2>
                <h6 className="text-color1 font-semibold cursor-pointer">See all</h6>
            </div>
            <ul className="flex flex-col gap-2 items-center text-start">
                <TodoDailyItem isChecked={isChecked} handleCheckboxChange={handleCheckboxChange} />
            </ul>
        </div>
    );
};

const TodoDailyItem: React.FC<CustomCheckboxProps> = ({isChecked, handleCheckboxChange}) => {
    return (
        <li
            className={`w-full py-3 rounded px-1 flex justify-between items-center transition-colors ${isChecked ? 'bg-green-100' : 'bg-gray-100'}`}
        >
            <span className={`font-semibold ${isChecked ? 'text-green-500' : ''}`}>Medisasa</span>
            <span className="flex items-center">
                <CustomCheckbox isChecked={isChecked} handleCheckboxChange={handleCheckboxChange} />
                <EllipsisVertical size={18} className="text-slate-600 ml-2 cursor-pointer" />
            </span>
        </li>
    )
}