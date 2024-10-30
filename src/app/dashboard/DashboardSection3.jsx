'use client'

import { useState } from "react";
import { MdBugReport } from "react-icons/md";
import { IoCode, IoCloseSharp } from "react-icons/io5";
import { IoMdCloud } from "react-icons/io";
import { MdModeEdit } from "react-icons/md";

export default function DashboardSection3() {
    const [activeButton, setActiveButton] = useState('1');
    const [checkedItems, setCheckedItems] = useState({});

    const generateCheckboxId = (taskGroup, taskId) => `${taskGroup}-${taskId}`;

    const handleCheckboxChange = (taskGroup, taskId) => {
        const checkboxId = generateCheckboxId(taskGroup, taskId);

        setCheckedItems((prevCheckedItems) => ({
            ...prevCheckedItems,
            [checkboxId]: !prevCheckedItems[checkboxId],
        }));
    };

    const commonTasks = [
        { id: 1, text: 'Sign contract for "What are conference organizers afraid of?"' },
        { id: 2, text: 'Lines From Great Russian Literature? Or E-mails From My Boss?' },
        { id: 3, text: 'Flooded: One year later, assessing what was lost and what was found when a ravaging rain swept through metro Detroit' },
    ];

    const tasks = {
        '1': commonTasks,
        '2': commonTasks,
        '3': commonTasks,
    };

    return (
        <>
            <div className="w-full md:w-[97%] md:mx-2 xl:w-1/2 h-fit flex flex-nowrap flex-col-reverse px-[15px] bg-[#fff] relative my-[25px] rounded" style={{ boxShadow: '0 1px 4px 0 rgba(0, 0, 0, .14)' }}>
                <div className="text-[#fff] my-[20px] mr-[15px] p-[15px] absolute -top-10 w-[90%] md:w-[95%] rounded" style={{ background: 'linear-gradient(60deg, #ffa726, #fb8c00)', boxShadow: '0 12px 20px -10px rgba(255, 152, 0, .28), 0 4px 20px 0 rgba(0, 0, 0, .12), 0 7px 8px -5px rgba(255, 152, 0, .2)' }}>
                    <h4 className="mb-[5px] text-lg">Employees Stats</h4>
                    <p className="text-[hsla(0,0%,100%,0.62)] text-sm">New employees on 15th September, 2016</p>
                </div>
                <div className="py-[15px] pt-20 text-sm overflow-scroll md:overflow-hidden">
                    <table className="w-full">
                        <thead>
                            <tr>
                                <th className="text-[#ff9800] text-[1.0625rem] pl-2 pr-8 pb-2 h-7 w-16 text-start dlex justify-start items-center text-ellipsis font-light">ID</th>
                                <th className="text-[#ff9800] text-[1.0625rem] pl-2 pr-8 pb-2 h-7 w-16 text-start dlex justify-start items-center text-ellipsis font-light">Name</th>
                                <th className="text-[#ff9800] text-[1.0625rem] pl-2 pr-8 pb-2 h-7 w-16 text-start dlex justify-start items-center text-ellipsis font-light">Salary</th>
                                <th className="text-[#ff9800] text-[1.0625rem] pl-2 pr-8 pb-2 h-7 w-16 text-start dlex justify-start items-center text-ellipsis font-light">Country</th>
                                <th className="text-[#ff9800] text-[1.0625rem] pl-2 pr-8 pb-2 h-7 w-16 text-start dlex justify-start items-center text-ellipsis font-light">City</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className="transition duration-300 hover:bg-[#f5f5f5]">
                                <td className="border-t border-t-[rgba(0,0,0,0.06)] py-3 px-2 text-sm h-12 font-light">1</td>
                                <td className="border-t border-t-[rgba(0,0,0,0.06)] py-3 px-2 text-sm h-12 font-light">Dakota Rice</td>
                                <td className="border-t border-t-[rgba(0,0,0,0.06)] py-3 px-2 text-sm h-12 font-light">$36,738</td>
                                <td className="border-t border-t-[rgba(0,0,0,0.06)] py-3 px-2 text-sm h-12 font-light">Niger</td>
                                <td className="border-t border-t-[rgba(0,0,0,0.06)] py-3 px-2 text-sm h-12 font-light">Oud-Turnhout</td>
                            </tr>
                            <tr className="transition duration-300 hover:bg-[#f5f5f5]">
                                <td className="border-t border-t-[rgba(0,0,0,0.06)] py-3 px-2 text-sm h-12 font-light">2</td>
                                <td className="border-t border-t-[rgba(0,0,0,0.06)] py-3 px-2 text-sm h-12 font-light">Minerva Hooper</td>
                                <td className="border-t border-t-[rgba(0,0,0,0.06)] py-3 px-2 text-sm h-12 font-light">c$23,738</td>
                                <td className="border-t border-t-[rgba(0,0,0,0.06)] py-3 px-2 text-sm h-12 font-light">Curaçao</td>
                                <td className="border-t border-t-[rgba(0,0,0,0.06)] py-3 px-2 text-sm h-12 font-light">Sinaai-Waas</td>
                            </tr>
                            <tr className="transition duration-300 hover:bg-[#f5f5f5]">
                                <td className="border-t border-t-[rgba(0,0,0,0.06)] py-3 px-2 text-sm h-12 font-light">3</td>
                                <td className="border-t border-t-[rgba(0,0,0,0.06)] py-3 px-2 text-sm h-12 font-light">Sage Rodriguez</td>
                                <td className="border-t border-t-[rgba(0,0,0,0.06)] py-3 px-2 text-sm h-12 font-light">$56,142</td>
                                <td className="border-t border-t-[rgba(0,0,0,0.06)] py-3 px-2 text-sm h-12 font-light">Netherlands</td>
                                <td className="border-t border-t-[rgba(0,0,0,0.06)] py-3 px-2 text-sm h-12 font-light">Overland Park</td>
                            </tr>
                            <tr className="transition duration-300 hover:bg-[#f5f5f5]">
                                <td className="border-t border-t-[rgba(0,0,0,0.06)] py-3 px-2 text-sm h-12 font-light">4</td>
                                <td className="border-t border-t-[rgba(0,0,0,0.06)] py-3 px-2 text-sm h-12 font-light">Philip Chaney</td>
                                <td className="border-t border-t-[rgba(0,0,0,0.06)] py-3 px-2 text-sm h-12 font-light">$38,735</td>
                                <td className="border-t border-t-[rgba(0,0,0,0.06)] py-3 px-2 text-sm h-12 font-light">Korea, South</td>
                                <td className="border-t border-t-[rgba(0,0,0,0.06)] py-3 px-2 text-sm h-12 font-light">Gloucester</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>

            <div
                className="w-full md:w-[97%] md:mx-2 xl:w-1/2 h-fit flex flex-nowrap flex-col-reverse px-[15px] bg-[#fff] relative my-[25px] rounded"
                style={{ boxShadow: '0 1px 4px 0 rgba(0, 0, 0, .14)' }}
            >
                <div
                    className="text-[#fff] my-[20px] mr-[15px] h-20 p-[15px] absolute -top-10 w-[90%] md:w-[95%] flex justify-start items-center overflow-scroll md:overflow-hidden rounded"
                    style={{
                        background: 'linear-gradient(60deg, #66bb6a, #43a047)',
                        boxShadow: '0 12px 20px -10px rgba(76, 175, 80, .28), 0 4px 20px 0 rgba(0, 0, 0, .12), 0 7px 8px -5px rgba(76, 175, 80, .2)',
                    }}
                >
                    <h4 className="mb-[5px] text-lg mr-3">Tasks:</h4>
                    <div className="flex justify-start items-center">
                        <button
                            onClick={() => setActiveButton('1')}
                            className={`${activeButton === '1' ? 'bg-[hsla(0,0%,100%,0.2)]' : ''} transition duration-300 rounded uppercase text-xs cursor-pointer py-3 px-[30px] flex justify-center items-center mr-2`}
                        >
                            <MdBugReport className="text-lg text-white mr-[5px]" />
                            <p>Bugs</p>
                        </button>
                        <button
                            onClick={() => setActiveButton('2')}
                            className={`${activeButton === '2' ? 'bg-[hsla(0,0%,100%,0.2)]' : ''} transition duration-300 rounded uppercase text-xs cursor-pointer py-3 px-[30px] flex justify-center items-center`}
                        >
                            <IoCode className="text-lg text-white mr-[5px]" />
                            <p>Website</p>
                        </button>
                        <button
                            onClick={() => setActiveButton('3')}
                            className={`${activeButton === '3' ? 'bg-[hsla(0,0%,100%,0.2)]' : ''} transition duration-300 rounded uppercase text-xs cursor-pointer py-3 px-[30px] flex justify-center items-center ml-2`}
                        >
                            <IoMdCloud className="text-lg text-white mr-[5px]" />
                            <p>Server</p>
                        </button>
                    </div>
                </div>
                <div className="py-[15px] pt-20 text-sm overflow-hidden w-full">
                    <div
                        className={`w-full flex transition-transform duration-500 ease-in-out`}
                        style={{ transform: `translateX(-${(parseInt(activeButton) - 1) * 100}%)` }}
                    >
                        {['1', '2', '3'].map((taskGroup) => (
                            <table key={taskGroup} className="w-full min-w-full">
                                <tbody>
                                    {tasks[taskGroup].map((task) => {
                                        const checkboxId = generateCheckboxId(taskGroup, task.id);
                                        return (
                                            <tr
                                                onClick={() => handleCheckboxChange(taskGroup, task.id)}
                                                key={task.id}
                                                className={`${checkedItems[checkboxId] ? 'bg-[#f5f5f5]' : ''
                                                    } transition duration-300 hover:bg-[#f5f5f5] cursor-pointer h-[85px]`}
                                            >
                                                <td className="border-t border-t-[rgba(0,0,0,0.06)] py-3 px-3 text-sm h-12 font-light">
                                                    <div className="flex items-center cursor-pointer">
                                                        <input
                                                            type="checkbox"
                                                            checked={!!checkedItems[checkboxId]}
                                                            onChange={(e) => {
                                                                e.stopPropagation();
                                                                handleCheckboxChange(taskGroup, task.id);
                                                            }}
                                                            className="hidden"
                                                        />
                                                        <div
                                                            className={`w-[18px] h-[18px] border-2 rounded-md flex justify-center items-center transition-all duration-300 ${checkedItems[checkboxId]
                                                                ? 'bg-green-500 border-green-500'
                                                                : 'bg-white border-gray-300'
                                                                }`}
                                                        >
                                                            {checkedItems[checkboxId] && (
                                                                <svg
                                                                    className="w-3 h-3 text-white transition-all duration-300"
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                    viewBox="0 0 24 24"
                                                                    fill="none"
                                                                    stroke="currentColor"
                                                                    strokeWidth="2"
                                                                    strokeLinecap="round"
                                                                    strokeLinejoin="round"
                                                                >
                                                                    <polyline points="20 6 9 17 4 12" />
                                                                </svg>
                                                            )}
                                                        </div>
                                                    </div>
                                                </td>
                                                <td className="border-t border-t-[rgba(0,0,0,0.06)] py-3 px-3 text-sm h-12 font-light">
                                                    {task.text}
                                                </td>
                                                <td className="border-t border-t-[rgba(0,0,0,0.06)] py-3 px-3 text-sm h-12 font-light">
                                                    <div className="flex justify-center items-center flex-nowrap">
                                                        <div className="flex justify-center items-center mx-3 cursor-pointer relative group">
                                                            <MdModeEdit className="text-[#9c27b0] text-xl" />
                                                            <div className="absolute -top-14 w-32 h-11 transform bg-white text-center text-gray-700 rounded shadow-md py-1 opacity-0 group-hover:opacity-100 transition-opacity flex justify-center items-center">
                                                                Edit
                                                                <div className="absolute left-1/2 transform -translate-x-1/2 -bottom-2 w-3 h-3 bg-white rotate-45"></div>
                                                            </div>
                                                        </div>
                                                        <div className="flex justify-center items-center mx-3 cursor-pointer relative group">
                                                            <IoCloseSharp className="text-[#f44336] text-xl" />
                                                            <div className="absolute -top-14 w-32 h-11 transform bg-white text-center text-gray-700 rounded shadow-md py-1 opacity-0 group-hover:opacity-100 transition-opacity flex justify-center items-center">
                                                                Close
                                                                <div className="absolute left-1/2 transform -translate-x-1/2 -bottom-2 w-3 h-3 bg-white rotate-45"></div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </td>
                                            </tr>
                                        );
                                    })}
                                </tbody>
                            </table>
                        ))}
                    </div>
                </div>
            </div>
        </>

    )
}