'use client'
import Layout from '../dashboard/layout'
import useSettingStore from "../useSettingStore"; 
export default function Table() {
    const menuOpen = useSettingStore((state) => state.menuOpen);
    return (
        <Layout>

            <div className={`${menuOpen ? '-translate-x-[260px]' : 'translate-x-[0px]'} w-[98%] h-fit md:mx-2 flex flex-nowrap flex-col-reverse px-[15px] bg-[#fff] relative my-[25px] py-3 rounded mb-16`} style={{ boxShadow: '0 1px 4px 0 rgba(0, 0, 0, .14)' }}>
                <div className="text-[#fff] my-[20px] mr-[15px] p-[15px] absolute -top-10 w-[90%] md:w-[95%] rounded"
                    style={{
                        background: 'linear-gradient(60deg, #66bb6a, #43a047)',
                        boxShadow: '0 12px 20px -10px rgba(76, 175, 80, .28), 0 4px 20px 0 rgba(0, 0, 0, .12), 0 7px 8px -5px rgba(76, 175, 80, .2)',
                    }}>
                    <h4 className="mb-[5px] text-lg">Simple Table</h4>
                    <p className="text-[hsla(0,0%,100%,0.62)] text-sm">Here is a subtitle for this table</p>
                </div>
                <div className="py-[15px] pt-20 text-sm overflow-scroll md:overflow-hidden">
                    <table className="w-full">
                        <thead>
                            <tr>
                                <th className="text-[#4caf50] text-[1.0625rem] pl-2 pr-8 pb-2 h-7 w-16 text-start dlex justify-start items-center text-ellipsis font-light"> Name</th>
                                <th className="text-[#4caf50] text-[1.0625rem] pl-2 pr-8 pb-2 h-7 w-16 text-start dlex justify-start items-center text-ellipsis font-light"> Country</th>
                                <th className="text-[#4caf50] text-[1.0625rem] pl-2 pr-8 pb-2 h-7 w-16 text-start dlex justify-start items-center text-ellipsis font-light">City</th>
                                <th className="text-[#4caf50] text-[1.0625rem] pl-2 pr-8 pb-2 h-7 w-16 text-start dlex justify-start items-center text-ellipsis font-light">Salary</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className="transition duration-300 hover:bg-[#f5f5f5]">
                                <td className="border-t border-t-[rgba(0,0,0,0.06)] py-3 px-2 text-sm h-12 font-light">Dakota Rice</td>
                                <td className="border-t border-t-[rgba(0,0,0,0.06)] py-3 px-2 text-sm h-12 font-light">Niger</td>
                                <td className="border-t border-t-[rgba(0,0,0,0.06)] py-3 px-2 text-sm h-12 font-light">Oud-Turnhout</td>
                                <td className="border-t border-t-[rgba(0,0,0,0.06)] py-3 px-2 text-sm h-12 font-light">$36,738</td>
                            </tr>
                            <tr className="transition duration-300 hover:bg-[#f5f5f5]">
                                <td className="border-t border-t-[rgba(0,0,0,0.06)] py-3 px-2 text-sm h-12 font-light">Minerva Hooper</td>
                                <td className="border-t border-t-[rgba(0,0,0,0.06)] py-3 px-2 text-sm h-12 font-light">Curaçao</td>
                                <td className="border-t border-t-[rgba(0,0,0,0.06)] py-3 px-2 text-sm h-12 font-light">Sinaai-Waas</td>
                                <td className="border-t border-t-[rgba(0,0,0,0.06)] py-3 px-2 text-sm h-12 font-light">c$23,738</td>
                            </tr>
                            <tr className="transition duration-300 hover:bg-[#f5f5f5]">
                                <td className="border-t border-t-[rgba(0,0,0,0.06)] py-3 px-2 text-sm h-12 font-light">Sage Rodriguez</td>
                                <td className="border-t border-t-[rgba(0,0,0,0.06)] py-3 px-2 text-sm h-12 font-light">Netherlands</td>
                                <td className="border-t border-t-[rgba(0,0,0,0.06)] py-3 px-2 text-sm h-12 font-light">Overland Park</td>
                                <td className="border-t border-t-[rgba(0,0,0,0.06)] py-3 px-2 text-sm h-12 font-light">$56,142</td>
                            </tr>
                            <tr className="transition duration-300 hover:bg-[#f5f5f5]">
                                <td className="border-t border-t-[rgba(0,0,0,0.06)] py-3 px-2 text-sm h-12 font-light">Philip Chaney</td>
                                <td className="border-t border-t-[rgba(0,0,0,0.06)] py-3 px-2 text-sm h-12 font-light">Korea, South</td>
                                <td className="border-t border-t-[rgba(0,0,0,0.06)] py-3 px-2 text-sm h-12 font-light">Gloucester</td>
                                <td className="border-t border-t-[rgba(0,0,0,0.06)] py-3 px-2 text-sm h-12 font-light">$38,735</td>
                            </tr>
                            <tr className="transition duration-300 hover:bg-[#f5f5f5]">
                                <td className="border-t border-t-[rgba(0,0,0,0.06)] py-3 px-2 text-sm h-12 font-light">Doris Greene</td>
                                <td className="border-t border-t-[rgba(0,0,0,0.06)] py-3 px-2 text-sm h-12 font-light">Malawi</td>
                                <td className="border-t border-t-[rgba(0,0,0,0.06)] py-3 px-2 text-sm h-12 font-light">Feldkirchen in Kārnten</td>
                                <td className="border-t border-t-[rgba(0,0,0,0.06)] py-3 px-2 text-sm h-12 font-light">$63,542</td>
                            </tr>
                            <tr className="transition duration-300 hover:bg-[#f5f5f5]">
                                <td className="border-t border-t-[rgba(0,0,0,0.06)] py-3 px-2 text-sm h-12 font-light">Mason Porter</td>
                                <td className="border-t border-t-[rgba(0,0,0,0.06)] py-3 px-2 text-sm h-12 font-light">Chile</td>
                                <td className="border-t border-t-[rgba(0,0,0,0.06)] py-3 px-2 text-sm h-12 font-light">
                                    Gloucester</td>
                                <td className="border-t border-t-[rgba(0,0,0,0.06)] py-3 px-2 text-sm h-12 font-light">$$78,615</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>

            <div className="w-[98%] h-fit md:mx-2 flex flex-nowrap flex-col-reverse px-[15px] bg-[#fff] relative my-[25px] py-3 rounded" style={{ boxShadow: '0 1px 4px 0 rgba(0, 0, 0, .14)' }}>
                <div className="text-[#fff] my-[20px] mr-[15px] p-[15px] absolute -top-10 w-[90%] md:w-[95%] rounded"
                    style={{
                        background: 'linear-gradient(60deg, #66bb6a, #43a047)',
                        boxShadow: '0 12px 20px -10px rgba(76, 175, 80, .28), 0 4px 20px 0 rgba(0, 0, 0, .12), 0 7px 8px -5px rgba(76, 175, 80, .2)',
                    }}>
                    <h4 className="mb-[5px] text-lg">Table on Plain Background</h4>
                    <p className="text-[hsla(0,0%,100%,0.62)] text-sm">Here is a subtitle for this table</p>
                </div>
                <div className="py-[15px] pt-20 text-sm overflow-scroll md:overflow-hidden">
                    <table className="w-full">
                        <thead>
                        <tr>
                                <th className="text-[#4caf50] text-[1.0625rem] pl-2 pr-8 pb-2 h-7 w-16 text-start dlex justify-start items-center text-ellipsis font-light">ID</th>
                                <th className="text-[#4caf50] text-[1.0625rem] pl-2 pr-8 pb-2 h-7 w-16 text-start dlex justify-start items-center text-ellipsis font-light">Name</th>
                                <th className="text-[#4caf50] text-[1.0625rem] pl-2 pr-8 pb-2 h-7 w-16 text-start dlex justify-start items-center text-ellipsis font-light">Salary</th>
                                <th className="text-[#4caf50] text-[1.0625rem] pl-2 pr-8 pb-2 h-7 w-16 text-start dlex justify-start items-center text-ellipsis font-light">Country</th>
                                <th className="text-[#4caf50] text-[1.0625rem] pl-2 pr-8 pb-2 h-7 w-16 text-start dlex justify-start items-center text-ellipsis font-light">City</th>
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
        </Layout>
    )
}