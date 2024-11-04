'use client'

import Layout from '../dashboard/layout'
import useSettingStore from "../useSettingStore";

export default function Typography() {
    const menuOpen = useSettingStore((state) => state.menuOpen);
    return (
        <Layout>

            <div className={`${menuOpen ? '-translate-x-[260px]' : 'translate-x-[0px]'} w-[98%] md:mx-2 h-fit flex flex-nowrap flex-col-reverse px-[15px] bg-[#fff] relative my-[25px] rounded`} style={{ boxShadow: '0 1px 4px 0 rgba(0, 0, 0, .14)' }}>
                <div className="text-[#fff] my-[20px] mr-[15px] p-[15px] absolute -top-10 w-[90%] md:w-[95%] rounded"
                    style={{
                        background: 'linear-gradient(60deg, #66bb6a, #43a047)',
                        boxShadow: '0 12px 20px -10px rgba(76, 175, 80, .28), 0 4px 20px 0 rgba(0, 0, 0, .12), 0 7px 8px -5px rgba(76, 175, 80, .2)',
                    }}>
                    <h4 className="mb-[5px] text-lg">Material Dashboard Heading</h4>
                    <p className="text-[hsla(0,0%,100%,0.62)] text-sm">Created using Roboto Font Family</p>
                </div>
                <div className="py-[15px] pt-20 text-sm overflow-hidden">
                    <div className='w-full mb-[5px] pt-5 px-3'>
                        <h2 className='text-4xl font-light leading-[1.5em]'>Typography</h2>
                    </div>
                    <div className='w-full pt-5 px-3'>
                        <div className='pl-[11%] md:pl-[25%] flex justify-start items-center mb-10 relative'>
                            <h1 className='text-[3.3125rem] font-light leading-[1.5em]'>
                                <span className='text-[#c0c1c2] absolute -bottom-[25px] md:bottom-2.5 left-0 font-normal text-[13px] leading-[13px] ml-5 w-[260px] text-start'>Header 1</span>
                                The Life of Material Dashboard
                            </h1>
                        </div>
                        <div className='pl-[11%] md:pl-[25%] flex justify-start items-center mb-10 relative'>
                            <h2 className='text-4xl font-light leading-[1.5em]'>
                                <span className='text-[#c0c1c2] absolute -bottom-[25px] md:bottom-2.5 left-0 font-normal text-[13px] leading-[13px] ml-5 w-[260px] text-start'>Header 2</span>
                                The Life of Material Dashboard
                            </h2>
                        </div>
                        <div className='pl-[11%] md:pl-[25%] flex justify-start items-center mb-10 relative'>
                            <h3 className='text-[1.5625rem] font-light leading-[1.5em]'>
                                <span className='text-[#c0c1c2] absolute -bottom-[25px] md:bottom-2.5 left-0 font-normal text-[13px] leading-[13px] ml-5 w-[260px] text-start'>Header 3</span>
                                The Life of Material Dashboard
                            </h3>
                        </div>
                        <div className='pl-[11%] md:pl-[25%] flex justify-start items-center mb-10 relative'>
                            <h4 className='text-[1.125rem] font-light leading-[1.5em]'>
                                <span className='text-[#c0c1c2] absolute -bottom-[25px] md:bottom-2.5 left-0 font-normal text-[13px] leading-[13px] ml-5 w-[260px] text-start'>Header 4</span>
                                The Life of Material Dashboard
                            </h4>
                        </div>
                        <div className='pl-[11%] md:pl-[25%] flex justify-start items-center mb-10 relative'>
                            <h5 className='text-[1.0625rem] font-light leading-[1.5em]'>
                                <span className='text-[#c0c1c2] absolute -bottom-[25px] md:bottom-2.5 left-0 font-normal text-[13px] leading-[13px] ml-5 w-[260px] text-start'>Header 5</span>
                                The Life of Material Dashboard
                            </h5>
                        </div>
                        <div className='pl-[11%] md:pl-[25%] flex justify-start items-center mb-10 relative'>
                            <h6 className='text-[0.75rem] font-light leading-[1.5em]'>
                                <span className='text-[#c0c1c2] absolute -bottom-[25px] md:bottom-2.5 left-0 font-normal text-[13px] leading-[13px] ml-5 w-[260px] text-start'>Header 6</span>
                                The Life of Material Dashboard
                            </h6>
                        </div>
                        <div className='pl-[11%] md:pl-[25%] flex justify-start items-center mb-10 relative'>
                            <p className='text-sm mb-2.5'>
                                <span className='text-[#c0c1c2] absolute -bottom-[25px] md:bottom-2.5 left-0 font-normal text-[13px] leading-[13px] ml-5 w-[260px] text-start'>Paragraph</span>
                                I will be the leader of a company that ends up being worth billions of dollars, because I got the answers. I understand culture. I am the nucleus. I think that’s a responsibility that I have, to push possibilities, to show people, this is the level that things could be at. 
                            </p>
                        </div>
                        <div className='pl-[11%] md:pl-[25%] flex justify-start items-center mb-10 relative'>
                            <blockquote className='text-sm mb-2.5 mx-10'>
                                <span className='text-[#c0c1c2] absolute -bottom-[25px] md:bottom-2.5 left-0 font-normal text-[13px] leading-[13px] ml-5 w-[260px] text-start'>Quote</span>
                                <p className='mb-2.5 text-sm italic'> I will be the leader of a company that ends up being worth billions of dollars, because I got the answers. I understand culture. I am the nucleus. I think that’s a responsibility that I have, to push possibilities, to show people, this is the level that things could be at. </p>
                                <small className='leading-[22px] italic'> Kanye West, Musician </small> 
                            </blockquote>
                        </div>
                        <div className='pl-[11%] md:pl-[25%] flex justify-start items-center mb-10 relative'>
                            <p className='text-sm mb-2.5'>
                                <span className='text-[#c0c1c2] absolute -bottom-[25px] md:bottom-2.5 left-0 font-normal text-[13px] leading-[13px] ml-5 w-[260px] text-start'>Muted Text</span>
                                I will be the leader of a company that ends up being worth billions of dollars, because I got the answers...  
                            </p>
                        </div>
                        <div className='pl-[11%] md:pl-[25%] flex justify-start items-center mb-10 relative'>
                            <p className='text-sm text-[#9c27b0] mb-2.5'>
                                <span className='text-[#c0c1c2] absolute -bottom-[25px] md:bottom-2.5 left-0 font-normal text-[13px] leading-[13px] ml-5 w-[260px] text-start'>Primary Text</span>
                                I will be the leader of a company that ends up being worth billions of dollars, because I got the answers...  
                            </p>
                        </div>
                        <div className='pl-[11%] md:pl-[25%] flex justify-start items-center mb-10 relative'>
                            <p className='text-sm text-[#00bcd4] mb-2.5'>
                                <span className='text-[#c0c1c2] absolute -bottom-[25px] md:bottom-2.5 left-0 font-normal text-[13px] leading-[13px] ml-5 w-[260px] text-start'>Info Text</span>
                                I will be the leader of a company that ends up being worth billions of dollars, because I got the answers...  
                            </p>
                        </div>
                        <div className='pl-[11%] md:pl-[25%] flex justify-start items-center mb-10 relative'>
                            <p className='text-sm text-[#4caf50] mb-2.5'>
                                <span className='text-[#c0c1c2] absolute -bottom-[25px] md:bottom-2.5 left-0 font-normal text-[13px] leading-[13px] ml-5 w-[260px] text-start'>Success Text</span>
                                I will be the leader of a company that ends up being worth billions of dollars, because I got the answers...  
                            </p>
                        </div>
                        <div className='pl-[11%] md:pl-[25%] flex justify-start items-center mb-10 relative'>
                            <p className='text-sm text-[#ff9800] mb-2.5'>
                                <span className='text-[#c0c1c2] absolute -bottom-[25px] md:bottom-2.5 left-0 font-normal text-[13px] leading-[13px] ml-5 w-[260px] text-start'>Warning Text</span>
                                I will be the leader of a company that ends up being worth billions of dollars, because I got the answers...  
                            </p>
                        </div>
                        <div className='pl-[11%] md:pl-[25%] flex justify-start items-center mb-10 relative'>
                            <p className='text-sm text-[#f44336] mb-2.5'>
                                <span className='text-[#c0c1c2] absolute -bottom-[25px] md:bottom-2.5 left-0 font-normal text-[13px] leading-[13px] ml-5 w-[260px] text-start'>Danger Text</span>
                                I will be the leader of a company that ends up being worth billions of dollars, because I got the answers...  
                            </p>
                        </div>
                        <div className='pl-[11%] md:pl-[25%] flex justify-start items-center mb-10 relative'>
                            <h2 className='text-[2.25rem] font-light leading-[1.5em] mb-2.5'>
                                <span className='text-[#c0c1c2] absolute -bottom-[25px] md:bottom-2.5 left-0 font-normal text-[13px] leading-[13px] ml-5 w-[260px] text-start'>Small Tag</span>
                                Header with small subtitle 
                                <br />
                                <small>Use "small" tag for the headers</small>  
                            </h2>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    )
}