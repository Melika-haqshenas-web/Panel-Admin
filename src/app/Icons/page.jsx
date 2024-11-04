'use client'
import Layout from '../dashboard/layout';
import useSettingStore from "../useSettingStore";

export default function Icons() {
    const menuOpen = useSettingStore((state) => state.menuOpen);
    return (
        <Layout>
            <div className={`${menuOpen ? '-translate-x-[260px]' : 'translate-x-[0px]'} h-fit w-full my-[25px]`}>
                <div className="text-[#fff] my-[20px] mr-[15px] p-[15px] w-[98%] rounded"
                    style={{
                        background: 'linear-gradient(60deg, #66bb6a, #43a047)',
                        boxShadow: '0 12px 20px -10px rgba(76, 175, 80, .28), 0 4px 20px 0 rgba(0, 0, 0, .12), 0 7px 8px -5px rgba(76, 175, 80, .2)',
                    }}>
                    <h4 className="mb-[5px] text-lg">Simple Table</h4>
                    <p className="text-[hsla(0,0%,100%,0.62)] text-sm">Here is a subtitle for this table</p>
                </div>
                <div className='py-[15px] px-[20px] w-[98%] h-[500px]' style={{ boxShadow: '0 10px 30px -12px rgba(0, 0, 0, .42), 0 4px 25px 0 rgba(0, 0, 0, .12), 0 8px 10px -5px rgba(0, 0, 0, .2)'}}>
                    <iframe src="https://react-icons.github.io/react-icons/search/#q=arrow" frameborder="0" className='w-full h-full'></iframe>
                </div>
            </div>

        </Layout>
    )
}