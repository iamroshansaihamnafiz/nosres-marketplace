"use client";
import React, {useEffect, useRef, useState} from 'react';
import "@/app/multiRangeSlider/multiRangeSlider.css";
import Image from "next/image";
import useLoading from "@/app/useLoading";
import useTitle from "@/app/useTitle";
import Link from "next/link";
import Skeleton from "react-loading-skeleton";
import {Carousel, Modal} from "flowbite-react";
import SliderOneImg from "../../../../public/assets/images/slider1.jpg";
import SliderTwoImg from "../../../../public/assets/images/slider2.jpg";
import SliderThreeImg from "../../../../public/assets/images/slider3.jpg";
import {IoCartOutline, IoSearchOutline} from "react-icons/io5";
import {HiUserCircle} from "react-icons/hi";
import {TiStarFullOutline} from "react-icons/ti";
import {GoHeart, GoHeartFill, GoSync} from "react-icons/go";
import {Checkbox, Radio, RadioChangeEvent} from "antd";
import {MdPostAdd} from "react-icons/md";
import ProductImg from "../../../../public/assets/images/product-1.png";
import {PiHandsPrayingLight} from "react-icons/pi";

function Page() {
    const loading = useLoading();
    useTitle("Single product")
    // 👇️ Add 3 dots
    const [addDotClick, setAddDotClick] = useState(false);
    const AddDotDropdownRef = useRef(null);
    const handleAddDotClick = () => {
        setAddDotClick(!addDotClick);
    };
    useEffect(() => {
        const handleOutsideClick = (event: { target: any; }) => {
            // @ts-ignore
            if (AddDotDropdownRef.current && !AddDotDropdownRef.current.contains(event.target)) {
                // Click occurred outside of dropdown menu, so close it
                setAddDotClick(false);
            }
        };
        // Add event listener to detect clicks out-Side of the dropdown menu
        document.addEventListener('mousedown', handleOutsideClick);

        // Remove event listener on component unmount
        return () => {
            document.removeEventListener('mousedown', handleOutsideClick);
        };
    }, []);

    // 👇️ Post 3 dots (Me)
    const [postMeDotClick, setPostMeDotClick] = useState(false);
    const PostMeDotDropdownRef = useRef(null);
    const handlePostMeDotClick = () => {
        setPostMeDotClick(!postMeDotClick);
    };
    useEffect(() => {
        const handleOutsideClick = (event: { target: any; }) => {
            // @ts-ignore
            if (PostMeDotDropdownRef.current && !PostMeDotDropdownRef.current.contains(event.target)) {
                // Click occurred outside of dropdown menu, so close it
                setPostMeDotClick(false);
            }
        };
        // Add event listener to detect clicks out-Side of the dropdown menu
        document.addEventListener('mousedown', handleOutsideClick);

        // Remove event listener on component unmount
        return () => {
            document.removeEventListener('mousedown', handleOutsideClick);
        };
    }, []);

    // Like comment
    const [isClickedLikePostTwo, setIsClickedLikePostTwo] = useState(false);

    // Rating Dropdown
    const [showRating, setShowRating] = useState(false);
    const ratingRef = useRef(null);

    useEffect(() => {
        // @ts-ignore
        const handleClickOutside = (event) => {
            // @ts-ignore
            if (ratingRef.current && !ratingRef.current.contains(event.target)) {
                setShowRating(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    const handleRatingClick = () => {
        setShowRating((prevShowRating) => !prevShowRating);
    };

    // Review Popup
    const [openReviewModal, setOpenReviewModal] = useState<boolean>(false);
    // Post Message Popup
    const [openStartPostMessageModal, setOpenStartPostMessageModal] = useState<boolean>(false);

    const [checkedItems, setCheckedItems] = useState<CheckedItems>({});

    interface CheckedItems {
        [key: string]: boolean;
    }

    const handleBoxClick = (itemName: string) => {
        setCheckedItems((prevState: CheckedItems) => {
            const updatedState: CheckedItems = {...prevState};
            updatedState[itemName] = !prevState[itemName];
            return updatedState;
        });
    };

    // Feedback Ad / Report Ad popup
    const [openFeedbackAdModal, setOpenFeedbackAdModal] = useState<boolean>(false);
    const [openReportAdModal, setOpenReportAdModal] = useState<boolean>(false);
    const [openReportAdSubmitModal, setOpenReportAdSubmitModal] = useState<boolean>(false);
    const [openReportAdSubmitDoneModal, setOpenReportAdSubmitDoneModal] = useState<boolean>(false);
    const handleAdSubmitButtonClick = () => {
        setOpenReportAdSubmitModal(false);
        setOpenReportAdModal(false);
        setOpenReportAdSubmitDoneModal(false);
    }
    const handleFeedbackSubmitButtonClick = () => {
        setOpenFeedbackAdModal(false);
    }
    // Radio
    const [value, setValue] = useState(1);
    const onChange = (newValue: number) => {
        setValue(newValue);
    };

    return (
        <>
            <section id="category-product-section">
                <div className="container pt-[50px] pb-12">
                    {/* Listings */}
                    <div className="product_content mb-6">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                            <div className="col">
                                <div className="sticky top-0">
                                    {/* Breadcrumb */}
                                    <div className="breadcrumb_wrap">
                                        {loading ? (
                                            <div className="mt-6 mb-3">
                                                <Skeleton height={20} width={340} count={1}/>
                                            </div>
                                        ) : (
                                            <>
                                                <nav className="mt-6 mb-3 flex justify-between" aria-label="Breadcrumb">
                                                    <ol className="inline-flex items-center text-[14px] mb-3 sm:mb-0">
                                                        <li className="text-graycolor hover:text-prgcolor cursor-pointer">
                                                            Home
                                                        </li>
                                                        <span className="mx-2 text-gray-400">/</span>
                                                        <li className="text-graycolor hover:text-prgcolor cursor-pointer">
                                                            All Categories
                                                        </li>
                                                        <span className="mx-2 text-gray-400">/</span>
                                                        <li className="text-graycolor hover:text-prgcolor cursor-pointer">
                                                            Electronics
                                                        </li>
                                                        <span className="mx-2 text-gray-400">/</span>
                                                        <li className="text-prgcolor">
                                                            Sony
                                                        </li>
                                                    </ol>
                                                </nav>
                                            </>
                                        )}
                                    </div>

                                    {/* Slider */}
                                    {loading ? (
                                        <Skeleton height={400} count={1}/>
                                    ) : (
                                        <>
                                            <div className="slider_wrapper h-56 sm:h-64 md:h-[450px] bg-black">
                                                <Carousel slide={false} indicators={false}>
                                                    <Image src={SliderOneImg} className="slider_image"
                                                           alt="SliderOneImg"/>
                                                    <Image src={SliderTwoImg} className="slider_image"
                                                           alt="SliderTwoImg"/>
                                                    <Image src={SliderThreeImg} className="slider_image"
                                                           alt="SliderThreeImg"/>
                                                </Carousel>
                                            </div>
                                        </>
                                    )}
                                </div>
                            </div>
                            <div className="col">
                                <div className="mt-14 product_content">
                                    {loading ? (
                                        <Skeleton height={20} count={3}/>
                                    ) : (
                                        <>
                                            <div className="sticky top-12 bg-white px-6 py-2 rounded">
                                                <h1 className="text-[20px] font-semibold text-prgcolor">
                                                    Playstation X - Best Gaming<br/>
                                                    Experience
                                                    (Black)
                                                </h1>
                                                <div className="flex items-center gap-2">
                                                    <h4 className="text-[20px] text-black font-semibold mt-1">
                                                        $350
                                                    </h4>
                                                    <h4 className="text-[14px] text-graycolor mt-1">
                                                        In Stock
                                                    </h4>
                                                </div>
                                                <div className="mt-2 relative flex items-center gap-4">
                                                    <div className="star_wrap mt-1 flex items-center gap-1">
                                                        <TiStarFullOutline className="w-5 h-5 text-primary"/>
                                                        <TiStarFullOutline className="w-5 h-5 text-primary"/>
                                                        <TiStarFullOutline className="w-5 h-5 text-primary"/>
                                                        <TiStarFullOutline className="w-5 h-5 text-primary"/>
                                                        <TiStarFullOutline className="w-5 h-5 text-primary"/>
                                                        <h4 className="text-[14px] text-prgcolor">
                                                            (5)
                                                        </h4>
                                                    </div>
                                                    <div ref={ratingRef}>
                                                        <h4 onClick={handleRatingClick}
                                                            className="mt-1 hover:underline cursor-pointer text-[14px] text-graycolor">
                                                            223 Ratings
                                                        </h4>
                                                        {/* Rating dropdown */}
                                                        {showRating &&
                                                            <div
                                                                className="rating_view absolute top-8 left-0 bg-white py-4 px-4 rounded w-[229px]">
                                                                <div
                                                                    className="flex items-center justify-center text-center mb-2">
                                                                    <p className="ms-1 text-[14px] font-[500] text-black">4.5</p>
                                                                    <h4 className="ms-1 text-[14px] text-graycolor">
                                                                        out of 5
                                                                    </h4>
                                                                </div>
                                                                <div
                                                                    className="flex items-center justify-center text-center">
                                                                    <svg className="w-4 h-4 text-primary me-1"
                                                                         aria-hidden="true"
                                                                         xmlns="http://www.w3.org/2000/svg"
                                                                         fill="currentColor"
                                                                         viewBox="0 0 22 20">
                                                                        <path
                                                                            d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
                                                                    </svg>
                                                                    <svg className="w-4 h-4 text-primary me-1"
                                                                         aria-hidden="true"
                                                                         xmlns="http://www.w3.org/2000/svg"
                                                                         fill="currentColor"
                                                                         viewBox="0 0 22 20">
                                                                        <path
                                                                            d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
                                                                    </svg>
                                                                    <svg className="w-4 h-4 text-primary me-1"
                                                                         aria-hidden="true"
                                                                         xmlns="http://www.w3.org/2000/svg"
                                                                         fill="currentColor"
                                                                         viewBox="0 0 22 20">
                                                                        <path
                                                                            d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
                                                                    </svg>
                                                                    <svg className="w-4 h-4 text-primary me-1"
                                                                         aria-hidden="true"
                                                                         xmlns="http://www.w3.org/2000/svg"
                                                                         fill="currentColor"
                                                                         viewBox="0 0 22 20">
                                                                        <path
                                                                            d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
                                                                    </svg>
                                                                    <svg
                                                                        className="w-4 h-4 text-gray-300 me-1 dark:text-gray-500"
                                                                        aria-hidden="true"
                                                                        xmlns="http://www.w3.org/2000/svg"
                                                                        fill="currentColor" viewBox="0 0 22 20">
                                                                        <path
                                                                            d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
                                                                    </svg>
                                                                </div>
                                                                <h4 className="mt-1 text-center text-[14px] text-graycolor">
                                                                    Based on 230 ratings
                                                                </h4>
                                                                <div className="rating_progress">
                                                                    <div className="w-full flex items-center mt-1">
                                                                        <div
                                                                            className="flex items-center gap-0 text-[14px]">
                                                                            <h4 className="hover:underline cursor-pointer">5</h4>
                                                                            <TiStarFullOutline
                                                                                className="w-4 h-4 text-primary"/>
                                                                        </div>
                                                                        <div
                                                                            className="w-full h-2 mx-2 bg-gray-200 rounded-sm">
                                                                            <div className="h-2 bg-primary rounded-sm"
                                                                                 style={{width: '70%'}}></div>
                                                                        </div>
                                                                        <span
                                                                            className="text-[14px] font-medium text-gray-500">70%</span>
                                                                    </div>
                                                                    <div className="w-full flex items-center mt-1">
                                                                        <div
                                                                            className="flex items-center gap-0 text-[14px]">
                                                                            <h4 className="hover:underline cursor-pointer">4</h4>
                                                                            <TiStarFullOutline
                                                                                className="w-4 h-4 text-primary"/>
                                                                        </div>
                                                                        <div
                                                                            className="w-full h-2 mx-2 bg-gray-200 rounded-sm">
                                                                            <div className="h-2 bg-primary rounded-sm"
                                                                                 style={{width: '55%'}}></div>
                                                                        </div>
                                                                        <span
                                                                            className="text-[14px] font-medium text-gray-500">17%</span>
                                                                    </div>
                                                                    <div className="w-full flex items-center mt-1">
                                                                        <div
                                                                            className="flex items-center gap-0 text-[14px]">
                                                                            <h4 className="hover:underline cursor-pointer">3</h4>
                                                                            <TiStarFullOutline
                                                                                className="w-4 h-4 text-primary"/>
                                                                        </div>
                                                                        <div
                                                                            className="w-full h-2 mx-2 bg-gray-200 rounded-sm">
                                                                            <div className="h-2 bg-primary rounded-sm"
                                                                                 style={{width: '35%'}}></div>
                                                                        </div>
                                                                        <span
                                                                            className="text-[14px] font-medium text-gray-500">8%</span>
                                                                    </div>
                                                                    <div className="w-full flex items-center mt-1">
                                                                        <div
                                                                            className="flex items-center gap-0 text-[14px]">
                                                                            <h4 className="hover:underline cursor-pointer">2</h4>
                                                                            <TiStarFullOutline
                                                                                className="w-4 h-4 text-primary"/>
                                                                        </div>
                                                                        <div
                                                                            className="w-full h-2 mx-2 bg-gray-200 rounded-sm">
                                                                            <div className="h-2 bg-primary rounded-sm"
                                                                                 style={{width: '25%'}}></div>
                                                                        </div>
                                                                        <span
                                                                            className="text-[14px] font-medium text-gray-500">4%</span>
                                                                    </div>
                                                                    <div className="w-full flex items-center mt-1">
                                                                        <div
                                                                            className="flex items-center gap-0 text-[14px]">
                                                                            <h4 className="hover:underline cursor-pointer">1</h4>
                                                                            <TiStarFullOutline
                                                                                className="w-4 h-4 text-primary"/>
                                                                        </div>
                                                                        <div
                                                                            className="w-full h-2 mx-2 bg-gray-200 rounded-sm">
                                                                            <div className="h-2 bg-primary rounded-sm"
                                                                                 style={{width: '15%'}}></div>
                                                                        </div>
                                                                        <span
                                                                            className="text-[14px] font-medium text-gray-500">1%</span>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        }
                                                    </div>
                                                    <h4 onClick={() => setOpenReviewModal(true)}
                                                        className="mt-1 hover:underline cursor-pointer text-[14px] text-graycolor">
                                                        23 Reviews
                                                    </h4>
                                                </div>
                                                <div className="mt-3">
                                                    <div className="mt-3 flex items-center gap-2">
                                                        <button type='button'
                                                                className="py-2 px-6 flex items-center gap-2 bg-primary border hover:bg-white hover:border-primary hover:text-black rounded text-[14px] text-white">
                                                            <IoCartOutline size={20}
                                                                           className=""/>
                                                            Add to Cart
                                                        </button>
                                                        <button type='button'
                                                                className="py-2 px-6 bg-white border hover:bg-primary hover:border-primary hover:text-white rounded text-[14px] text-prgcolor">
                                                            Contract Seller
                                                        </button>
                                                        <div className="flex items-center justify-end text-end">
                                                            <div onClick={handleAddDotClick}
                                                                 ref={AddDotDropdownRef}
                                                                 className={`relative cursor-pointer py-2 px-2 rounded-full hover:bg-white ${addDotClick ? 'bg-white' : ''}`}>
                                                                <svg
                                                                    className="w-3 h-3"
                                                                    fill="#828D9E"
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                    viewBox="0 0 16 16">
                                                                    <path d="M8 9a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3ZM1.5 9a1.5 1.5 0 1 0
                                                            0-3 1.5 1.5 0 0 0 0 3Zm13 0a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z"></path>
                                                                </svg>

                                                                {addDotClick &&
                                                                    <div
                                                                        className="dots-dropdown-menu w-[300px] absolute top-[30px] right-[4px] bg-white rounded shadow border">
                                                                        <div className="container py-2">
                                                                            <div className="space-y-1 text-[14px]">
                                                                                <div
                                                                                    onClick={() => setOpenStartPostMessageModal(true)}
                                                                                    className="flex cursor-pointer gap-2 items-center py-2 px-2 rounded hover:bg-gray-100 group">
                                                                                    <GoSync
                                                                                        className="w-[14px] h-[14px] transition duration-75 text-[#6B7280] group-hover:text-primary"/>
                                                                                    <h4>
                                                                                        Share product
                                                                                    </h4>
                                                                                </div>

                                                                                <div
                                                                                    onClick={() => setOpenReportAdModal(true)}
                                                                                    className="flex gap-2 items-center py-2 px-2 rounded hover:bg-gray-100 group">
                                                                                    <svg
                                                                                        className="w-4 h-4 transition duration-75 group-hover:stroke-primary"
                                                                                        xmlns="http://www.w3.org/2000/svg"
                                                                                        viewBox="0 0 24
                                                                                 24" fill="none" stroke="#6B7280"
                                                                                        strokeWidth="1.5"
                                                                                        strokeLinecap="round"
                                                                                        strokeLinejoin="round">
                                                                                        <path d="M4 15s1-1 4-1 5 2 8 2
                                                                                4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z"/>
                                                                                        <line x1="4" x2="4" y1="22"
                                                                                              y2="15"/>
                                                                                    </svg>
                                                                                    <h4>
                                                                                        Report product
                                                                                    </h4>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                }
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </>
                                    )}
                                    <div className="bg-white px-6 pt-2 pb-6 rounded">
                                        <div className="description mt-6">
                                            {loading ? (
                                                <Skeleton height={10} count={1}/>
                                            ) : (
                                                <>
                                                    <h4 className="text-[16px] font-[500] text-prgcolor pb-2">
                                                        Description
                                                    </h4>
                                                    <hr/>
                                                </>
                                            )}
                                            {loading ? (
                                                <Skeleton height={10} count={2}/>
                                            ) : (
                                                <>
                                                    <div className="mt-2 flex items-center gap-2">
                                                        <h4 className="text-[14px] text-graycolor">
                                                            Condition: <span className="text-prgcolor">New</span>
                                                        </h4>
                                                        <h4 className="text-[14px] text-graycolor">
                                                            Brand: <span className="text-prgcolor">Sony</span>
                                                        </h4>
                                                    </div>
                                                    <div className="mt-1 flex items-center gap-2">
                                                        <h4 className="text-[14px] text-graycolor">
                                                            Delivery: <span className="text-prgcolor">Ship Only</span>
                                                        </h4>
                                                        <h4 className="text-[14px] text-graycolor">
                                                            Store Located: <span
                                                            className="text-prgcolor">California, USA</span>
                                                        </h4>
                                                    </div>
                                                </>
                                            )}
                                            {loading ? (
                                                <Skeleton height={20} count={2}/>
                                            ) : (
                                                <>
                                                    <h4 className="mt-2 text-[14px] text-graycolor">
                                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                                        Aperiam beatae
                                                        consequatur
                                                        culpa ea eius itaque maxime minus odio omnis,
                                                        perferendis perspiciatis porro praesentium
                                                        quo recusandae, sequi temporibus ullam!<br/><br/> Delectus
                                                        It was popularised in the 1960s with the release of Letraset
                                                        sheets containing
                                                        Lorem
                                                        Ipsum passages, and more recently with
                                                        desktop publishing software like
                                                        Aldus.
                                                    </h4>
                                                </>
                                            )}
                                            {loading ? (
                                                <Skeleton height={20} count={5}/>
                                            ) : (
                                                <>
                                                    <div className='mt-2 text-[14px] text-graycolor'>
                                                        <b>Refund and Return Policy:</b>

                                                        <div className="mt-2">
                                                            Unused items in original packaging can be
                                                            returned within15 days for a full refund.
                                                        </div>

                                                        <div className="mt-2">
                                                            Contact us for a return authorization.
                                                        </div>

                                                        <div className="mt-2">
                                                            Return shipping is at the customer’s expense
                                                            unless the item is defective.
                                                        </div>

                                                        <div className="mt-2">
                                                            Refunds processed within 15 days.
                                                        </div>

                                                        <div className="mt-2">
                                                            Final sale items and custom-made products may
                                                            not be eligible for return.
                                                        </div>

                                                        <div className="mt-2">
                                                            Contact us for assistance with damaged or
                                                            defective items.
                                                        </div>
                                                    </div>
                                                </>
                                            )}

                                        </div>
                                        <div className="mt-3">
                                            <div className="seller_box mt-3">
                                                {loading ? (
                                                    <Skeleton height={50} count={1}/>
                                                ) : (
                                                    <>
                                                        <h4 className="text-[14px] font-[500]">
                                                            Seller Information
                                                        </h4>
                                                    </>
                                                )}
                                                {loading ? (
                                                    <div className="flex items-center justify-start gap-2 w-full">
                                                        <Skeleton width={50} height={50} borderRadius="100%" count={1}/>
                                                        <Skeleton containerClassName="flex-1" height={50} count={1}/>
                                                    </div>
                                                ) : (
                                                    <>
                                                        <Link href='#' className="mt-2 flex items-center gap-1">
                                                            <HiUserCircle size={35} className="text-[#6B7280]"/>
                                                            <div className="leading-[17px]">
                                                                <h4 className="text-[14px] font-semibold text-prgcolor hover:underline">
                                                                    Up Town Store
                                                                </h4>
                                                                <span
                                                                    className="star_wrap flex items-center gap-0">
                                                        <TiStarFullOutline className="w-4 h-4 text-primary"/>
                                                        <TiStarFullOutline className="w-4 h-4 text-primary"/>
                                                        <TiStarFullOutline className="w-4 h-4 text-primary"/>
                                                        <TiStarFullOutline className="w-4 h-4 text-primary"/>
                                                        <TiStarFullOutline className="w-4 h-4 text-primary"/>
                                                        <h4 className="text-[14px] text-prgcolor">
                                                            (5)
                                                        </h4>
                                                    </span>
                                                            </div>
                                                        </Link>
                                                    </>
                                                )}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Review Pop-Up Start */
                }
                <Modal
                    size="lg"
                    dismissible
                    show={openReviewModal}
                    onClose={() => setOpenReviewModal(false)}
                    style={{
                        padding: '0px',
                    }}
                    className="modal_cntrl"
                >
                    <Modal.Header
                        style={{
                            height: '50px',
                            display: 'flex',
                            alignItems: 'center'
                        }}
                    >
                        <h4 className="text-[16px]">Customer Reviews (23)</h4>
                    </Modal.Header>
                    <Modal.Body>
                        <div className="modal_body box">
                            <div className="sticky -top-[25px] z-10 bg-white pt-2 pb-4">
                                <div className="review_filter">
                                    <h4 className="text-[14px] text-graycolor">
                                        Here’s what customers say about this product:
                                    </h4>
                                    <div className="flex items-center gap-2 mt-2">
                                        <button type='button'
                                                className="py-1 px-4 bg-primary text-white rounded text-[12px]">
                                            All (95)
                                        </button>
                                        <button type='button'
                                                className="py-1 px-4 hover:bg-primary hover:text-white rounded bg-gray-100 text-black text-[12px]">
                                            Quality (5)
                                        </button>
                                        <button type='button'
                                                className="py-1 px-4 hover:bg-primary hover:text-white rounded bg-gray-100 text-black text-[12px]">
                                            Description accuracy (5)
                                        </button>
                                        <button type='button'
                                                className="py-1 px-4 hover:bg-primary hover:text-white rounded bg-gray-100 text-black text-[12px]">
                                            Value (5)
                                        </button>
                                    </div>
                                    <div className="flex items-center gap-2 mt-3">
                                        <button type='button'
                                                className="py-1 px-4 hover:bg-primary hover:text-white rounded bg-gray-100 text-black text-[12px]">
                                            Pricing (12)
                                        </button>
                                        <button type='button'
                                                className="py-1 px-4 hover:bg-primary hover:text-white rounded bg-gray-100 text-black text-[12px]">
                                            Shipping (21)
                                        </button>
                                        <button type='button'
                                                className="py-1 px-4 hover:bg-primary hover:text-white rounded bg-gray-100 text-black text-[12px]">
                                            Packaging Quality (23)
                                        </button>
                                    </div>
                                </div>
                                {/* Rating Filter */}
                                <h4 className="text-[14px] text-graycolor mt-4">
                                    Here’s how customers rate this product:
                                </h4>
                                <div className="flex items-center gap-3 mt-1">
                                    <div className="flex items-center gap-2">
                                        <Checkbox></Checkbox>
                                        <div className="star_wrap flex items-center gap-1">
                                            <div className="wrap flex items-center gap-0">
                                                <h4 className="mt-[1px] text-[14px] text-prgcolor">
                                                    5
                                                </h4>
                                                <TiStarFullOutline className="w-4 h-4 text-primary"/>
                                            </div>
                                            <h4 className="mt-[1px] text-[12px] text-graycolor">(23)</h4>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <Checkbox></Checkbox>
                                        <div className="star_wrap flex items-center gap-1">
                                            <div className="wrap flex items-center gap-0">
                                                <h4 className="mt-[1px] text-[14px] text-prgcolor">
                                                    4
                                                </h4>
                                                <TiStarFullOutline className="w-4 h-4 text-primary"/>
                                            </div>
                                            <h4 className="mt-[1px] text-[12px] text-graycolor">(2)</h4>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <Checkbox></Checkbox>
                                        <div className="star_wrap flex items-center gap-1">
                                            <div className="wrap flex items-center gap-0">
                                                <h4 className="mt-[1px] text-[14px] text-prgcolor">
                                                    3
                                                </h4>
                                                <TiStarFullOutline className="w-4 h-4 text-primary"/>
                                            </div>
                                            <h4 className="mt-[1px] text-[12px] text-graycolor">(0)</h4>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <Checkbox></Checkbox>
                                        <div className="star_wrap flex items-center gap-1">
                                            <div className="wrap flex items-center gap-0">
                                                <h4 className="mt-[1px] text-[14px] text-prgcolor">
                                                    2
                                                </h4>
                                                <TiStarFullOutline className="w-4 h-4 text-primary"/>
                                            </div>
                                            <h4 className="mt-[1px] text-[12px] text-graycolor">(0)</h4>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <Checkbox></Checkbox>
                                        <div className="star_wrap flex items-center gap-1">
                                            <div className="wrap flex items-center gap-0">
                                                <h4 className="mt-[1px] text-[14px] text-prgcolor">
                                                    1
                                                </h4>
                                                <TiStarFullOutline className="w-4 h-4 text-primary"/>
                                            </div>
                                            <h4 className="mt-[1px] text-[12px] text-graycolor">(0)</h4>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* User Review */}
                            <div className="user_review">
                                <div className="box bg-white border py-4 px-6 rounded">
                                    <div className="flex items-start justify-between">
                                        <Link href='#' className="flex items-center gap-1">
                                            <HiUserCircle size={35} className="text-[#6B7280]"/>
                                            <div className="leading-[17px]">
                                                <h4 className="text-[14px] font-semibold text-prgcolor hover:underline">
                                                    Up Town Store
                                                </h4>
                                                <span className="star_wrap flex items-center gap-0">
                                                        <TiStarFullOutline className="w-4 h-4 text-primary"/>
                                                        <TiStarFullOutline className="w-4 h-4 text-primary"/>
                                                        <TiStarFullOutline className="w-4 h-4 text-primary"/>
                                                        <TiStarFullOutline className="w-4 h-4 text-primary"/>
                                                        <TiStarFullOutline className="w-4 h-4 text-primary"/>
                                                        <h4 className="text-[12px] text-graycolor ml-3">
                                                            April 16, 2024
                                                        </h4>
                                                    </span>
                                            </div>
                                        </Link>
                                        <div className="flex items-center justify-end text-end">
                                            <div onClick={handlePostMeDotClick}
                                                 ref={PostMeDotDropdownRef}
                                                 className={`relative cursor-pointer py-2 px-2 rounded-full hover:bg-gray-100 ${postMeDotClick ? 'bg-gray-100' : ''}`}>
                                                <svg
                                                    className="w-3 h-3"
                                                    fill="#828D9E"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    viewBox="0 0 16 16">
                                                    <path d="M8 9a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3ZM1.5 9a1.5 1.5 0 1 0
                                                    0-3 1.5 1.5 0 0 0 0 3Zm13 0a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z"></path>
                                                </svg>
                                                {postMeDotClick &&
                                                    <div
                                                        className="dots-dropdown-menu w-[300px] absolute top-[30px] right-[4px] bg-white rounded shadow border">
                                                        <div className="container py-2">
                                                            <div className="space-y-1 text-[14px]">
                                                                <Link href='#'
                                                                      className="flex gap-2 items-center py-2 px-2 rounded hover:bg-gray-100 group">
                                                                    <svg
                                                                        className="w-4 h-4 transition duration-75 group-hover:stroke-primary"
                                                                        xmlns="http://www.w3.org/2000/svg"
                                                                        viewBox="0 0 24
                                                                        24" fill="none" stroke="#6B7280"
                                                                        strokeWidth="1.5"
                                                                        strokeLinecap="round"
                                                                        strokeLinejoin="round">
                                                                        <path d="M4 15s1-1 4-1 5 2 8 2
                                                                        4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z"/>
                                                                        <line x1="4" x2="4" y1="22"
                                                                              y2="15"/>
                                                                    </svg>
                                                                    <h4>
                                                                        Report product
                                                                    </h4>
                                                                </Link>
                                                            </div>
                                                        </div>
                                                    </div>
                                                }
                                            </div>
                                        </div>
                                    </div>

                                    <div className="review_content mt-2 ml-[8px]">
                                        <h4 className="text-[12px] text-graycolor">
                                            Photographs are a way of preserving a moment in our lives
                                            for the rest of our lives. Many of us have at least been
                                            tempted at the flashy array of photo printers which seemingly
                                            leap off the shelves at even the least tech-savvy.
                                        </h4>
                                        <div className="mt-1 flex items-center gap-1">
                                            <div className="cursor-pointer"
                                                 onClick={() => setIsClickedLikePostTwo(!isClickedLikePostTwo)}>
                                                {isClickedLikePostTwo ? (
                                                    <GoHeartFill
                                                        className="w-4 h-4 text-primary hover:text-primary"/>
                                                ) : (
                                                    <GoHeart
                                                        className="w-4 h-4 text-[#6B7280] hover:text-primary"/>
                                                )}
                                            </div>
                                            <div className="count">
                                                <h4 className="text-[12px] cursor-pointer text-prgcolor hover:underline">112</h4>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="box mt-2 bg-white border py-4 px-6 rounded">
                                    <div className="flex items-start justify-between">
                                        <Link href='#' className="flex items-center gap-1">
                                            <HiUserCircle size={35} className="text-[#6B7280]"/>
                                            <div className="leading-[17px]">
                                                <h4 className="text-[14px] font-semibold text-prgcolor hover:underline">
                                                    Up Town Store
                                                </h4>
                                                <span className="star_wrap flex items-center gap-0">
                                                        <TiStarFullOutline className="w-4 h-4 text-primary"/>
                                                        <TiStarFullOutline className="w-4 h-4 text-primary"/>
                                                        <TiStarFullOutline className="w-4 h-4 text-primary"/>
                                                        <TiStarFullOutline className="w-4 h-4 text-primary"/>
                                                        <TiStarFullOutline className="w-4 h-4 text-primary"/>
                                                        <h4 className="text-[12px] text-graycolor ml-3">
                                                            April 16, 2024
                                                        </h4>
                                                    </span>
                                            </div>
                                        </Link>
                                        <div className="flex items-center justify-end text-end">
                                            <div
                                                className="relative cursor-pointer py-2 px-2 rounded-full hover:bg-gray-100">
                                                <svg
                                                    className="w-3 h-3"
                                                    fill="#828D9E"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    viewBox="0 0 16 16">
                                                    <path d="M8 9a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3ZM1.5 9a1.5 1.5 0 1 0
                                                    0-3 1.5 1.5 0 0 0 0 3Zm13 0a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z"></path>
                                                </svg>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="review_content mt-2 ml-[8px]">
                                        <h4 className="text-[12px] text-graycolor">
                                            Photographs are a way of preserving a moment in our lives
                                            for the rest of our lives. Many of us have at least been
                                            tempted at the flashy array of photo printers which seemingly
                                            leap off the shelves at even the least tech-savvy.
                                        </h4>
                                        <div className="mt-1 flex items-center gap-1">
                                            <div className="cursor-pointer">
                                                <GoHeart
                                                    className="w-4 h-4 text-[#6B7280] hover:text-primary"/>
                                            </div>
                                            <div className="count">
                                                <h4 className="text-[12px] cursor-pointer text-prgcolor hover:underline">20</h4>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="box mt-2 bg-white border py-4 px-6 rounded">
                                    <div className="flex items-start justify-between">
                                        <Link href='#' className="flex items-center gap-1">
                                            <HiUserCircle size={35} className="text-[#6B7280]"/>
                                            <div className="leading-[17px]">
                                                <h4 className="text-[14px] font-semibold text-prgcolor hover:underline">
                                                    Up Town Store
                                                </h4>
                                                <span className="star_wrap flex items-center gap-0">
                                                        <TiStarFullOutline className="w-4 h-4 text-primary"/>
                                                        <TiStarFullOutline className="w-4 h-4 text-primary"/>
                                                        <TiStarFullOutline className="w-4 h-4 text-primary"/>
                                                        <TiStarFullOutline className="w-4 h-4 text-primary"/>
                                                        <TiStarFullOutline className="w-4 h-4 text-primary"/>
                                                        <h4 className="text-[12px] text-graycolor ml-3">
                                                            April 16, 2024
                                                        </h4>
                                                    </span>
                                            </div>
                                        </Link>
                                        <div className="flex items-center justify-end text-end">
                                            <div
                                                className="relative cursor-pointer py-2 px-2 rounded-full hover:bg-gray-100">
                                                <svg
                                                    className="w-3 h-3"
                                                    fill="#828D9E"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    viewBox="0 0 16 16">
                                                    <path d="M8 9a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3ZM1.5 9a1.5 1.5 0 1 0
                                                    0-3 1.5 1.5 0 0 0 0 3Zm13 0a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z"></path>
                                                </svg>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="review_content mt-2 ml-[8px]">
                                        <h4 className="text-[12px] text-graycolor">
                                            Photographs are a way of preserving a moment in our lives
                                            for the rest of our lives. Many of us have at least been
                                            tempted at the flashy array of photo printers which seemingly
                                            leap off the shelves at even the least tech-savvy.
                                        </h4>
                                        <div className="mt-1 flex items-center gap-1">
                                            <div className="cursor-pointer">
                                                <GoHeart
                                                    className="w-4 h-4 text-[#6B7280] hover:text-primary"/>
                                            </div>
                                            <div className="count">
                                                <h4 className="text-[12px] cursor-pointer text-prgcolor hover:underline">20</h4>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="box mt-2 bg-white border py-4 px-6 rounded">
                                    <div className="flex items-start justify-between">
                                        <Link href='#' className="flex items-center gap-1">
                                            <HiUserCircle size={35} className="text-[#6B7280]"/>
                                            <div className="leading-[17px]">
                                                <h4 className="text-[14px] font-semibold text-prgcolor hover:underline">
                                                    Up Town Store
                                                </h4>
                                                <span className="star_wrap flex items-center gap-0">
                                                        <TiStarFullOutline className="w-4 h-4 text-primary"/>
                                                        <TiStarFullOutline className="w-4 h-4 text-primary"/>
                                                        <TiStarFullOutline className="w-4 h-4 text-primary"/>
                                                        <TiStarFullOutline className="w-4 h-4 text-primary"/>
                                                        <TiStarFullOutline className="w-4 h-4 text-primary"/>
                                                        <h4 className="text-[12px] text-graycolor ml-3">
                                                            April 16, 2024
                                                        </h4>
                                                    </span>
                                            </div>
                                        </Link>
                                        <div className="flex items-center justify-end text-end">
                                            <div
                                                className="relative cursor-pointer py-2 px-2 rounded-full hover:bg-gray-100">
                                                <svg
                                                    className="w-3 h-3"
                                                    fill="#828D9E"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    viewBox="0 0 16 16">
                                                    <path d="M8 9a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3ZM1.5 9a1.5 1.5 0 1 0
                                                    0-3 1.5 1.5 0 0 0 0 3Zm13 0a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z"></path>
                                                </svg>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="review_content mt-2 ml-[8px]">
                                        <h4 className="text-[12px] text-graycolor">
                                            Photographs are a way of preserving a moment in our lives
                                            for the rest of our lives. Many of us have at least been
                                            tempted at the flashy array of photo printers which seemingly
                                            leap off the shelves at even the least tech-savvy.
                                        </h4>
                                        <div className="mt-1 flex items-center gap-1">
                                            <div className="cursor-pointer">
                                                <GoHeart
                                                    className="w-4 h-4 text-[#6B7280] hover:text-primary"/>
                                            </div>
                                            <div className="count">
                                                <h4 className="text-[12px] cursor-pointer text-prgcolor hover:underline">20</h4>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Modal.Body>
                    {/*<Modal.Footer>*/}
                    {/*</Modal.Footer>*/}
                </Modal>
                {/* Review Pop-Up End */}


                {/* Start Post Message Pop-Up Start */}
                <Modal size="lg"
                       show={openStartPostMessageModal}
                       style={{
                           padding: '0px',
                       }}
                       className="modal_cntrl"
                       onClose={() => setOpenStartPostMessageModal(false)}>
                    <Modal.Header
                        style={{
                            height: '50px',
                            display: 'flex',
                            alignItems: 'center'
                        }}
                    >
                        <h4 className="text-[16px]">Share Product</h4>
                    </Modal.Header>
                    <Modal.Body>
                        <div className="modal_body">
                            <div className="top_content sticky z-[999] -top-[25px] bg-white">
                                <div className="w-full px-2 flex items-center whats_new">
                                    <HiUserCircle size={40} className="text-[#6B7280]"/>
                                    <input
                                        className="mt-1 rounded w-full py-1 px-1 border-transparent focus:border-transparent focus:ring focus:ring-transparent text-[#ABABAB] text-[14px] focus:outline-none"
                                        type="text"
                                        placeholder="Write a message..."
                                    />
                                </div>

                                <div className="px-2 py-2 mt-4 flex items-center gap-4 bg-gray-100 rounded">
                                    <div className="flex items-center gap-1">
                                        <Image src={SliderOneImg} className="w-12" alt="ProductImg"/>
                                        <h4 className="text-[14px] font-semibold text-prgcolor">
                                            Playstation X - Best Gaming Experience (Black)
                                        </h4>
                                    </div>
                                </div>

                                <div className="px-0 pb-2 bg-white mt-4">
                                    <div className="relative w-full">
                                        <input
                                            type="text"
                                            className="border w-full text-[14px] text-prgcolor border-gray-300 rounded pl-10 py-1 focus:outline-none focus:border-primary focus:ring-0 transition-all duration-300"
                                            placeholder="Search name"
                                        />

                                        <div className="absolute left-0 inset-y-0 flex items-center justify-between">
                                            <IoSearchOutline
                                                className="h-5 w-5 ml-3 text-gray-400 hover:text-gray-500 z-[9999]"/>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="scroll_content mt-4">
                                <label onClick={() => handleBoxClick('item1')}>
                                    <div
                                        className={`box cursor-pointer py-2 px-2 border rounded ${checkedItems['item1'] ? ' border-primary' : ''}`}>
                                        <Checkbox.Group
                                            className="flex items-center justify-between"
                                            value={checkedItems['item1'] ? ['1'] : []}
                                            onChange={(values) => handleBoxClick('item1')}
                                        >
                                            <div className="flex items-center gap-2">
                                                <HiUserCircle size={40} className="text-[#6B7280]"/>
                                                <div className="content">
                                                    <h4 className="text-[14px] text-prgcolor">Robert Johnson</h4>
                                                </div>
                                            </div>
                                            <div className="radio_box">
                                                <Checkbox value="1"/>
                                            </div>
                                        </Checkbox.Group>
                                    </div>
                                </label>
                                <label onClick={() => handleBoxClick('item2')}>
                                    <div
                                        className={`box mt-4 cursor-pointer py-2 px-2 border rounded${checkedItems['item2'] ? ' border-primary' : ''}`}>
                                        <Checkbox.Group
                                            className="flex items-center justify-between"
                                            value={checkedItems['item2'] ? ['2'] : []}
                                            onChange={(values) => handleBoxClick('item2')}
                                        >
                                            <div className="flex items-center gap-2">
                                                <HiUserCircle size={40} className="text-[#6B7280]"/>
                                                <div className="content">
                                                    <h4 className="text-[14px] text-prgcolor">Jeff Bently</h4>
                                                </div>
                                            </div>
                                            <div className="radio_box">
                                                <Checkbox value="2"/>
                                            </div>
                                        </Checkbox.Group>
                                    </div>
                                </label>
                                <label onClick={() => handleBoxClick('item3')}>
                                    <div
                                        className={`box mt-4 cursor-pointer py-2 px-2 border rounded${checkedItems['item3'] ? ' border-primary' : ''}`}>
                                        <Checkbox.Group
                                            className="flex items-center justify-between"
                                            value={checkedItems['item3'] ? ['3'] : []}
                                            onChange={(values) => handleBoxClick('item3')}
                                        >
                                            <div className="flex items-center gap-2">
                                                <HiUserCircle size={40} className="text-[#6B7280]"/>
                                                <div className="content">
                                                    <h4 className="text-[14px] text-prgcolor">Cindy Summerfield</h4>
                                                </div>
                                            </div>
                                            <div className="radio_box">
                                                <Checkbox value="3"/>
                                            </div>
                                        </Checkbox.Group>
                                    </div>
                                </label>
                                <label onClick={() => handleBoxClick('item4')}>
                                    <div
                                        className={`box mt-4 cursor-pointer py-2 px-2 border rounded${checkedItems['item4'] ? ' border-primary' : ''}`}>
                                        <Checkbox.Group
                                            className="flex items-center justify-between"
                                            value={checkedItems['item4'] ? ['4'] : []}
                                            onChange={(values) => handleBoxClick('item4')}
                                        >
                                            <div className="flex items-center gap-2">
                                                <HiUserCircle size={40} className="text-[#6B7280]"/>
                                                <div className="content">
                                                    <h4 className="text-[14px] text-prgcolor">Cindy Summerfield</h4>
                                                </div>
                                            </div>
                                            <div className="radio_box">
                                                <Checkbox value="4"/>
                                            </div>
                                        </Checkbox.Group>
                                    </div>
                                </label>
                                <label onClick={() => handleBoxClick('item5')}>
                                    <div
                                        className={`box mt-4 cursor-pointer py-2 px-2 border rounded${checkedItems['item5'] ? ' border-primary' : ''}`}>
                                        <Checkbox.Group
                                            className="flex items-center justify-between"
                                            value={checkedItems['item5'] ? ['5'] : []}
                                            onChange={(values) => handleBoxClick('item5')}
                                        >
                                            <div className="flex items-center gap-2">
                                                <HiUserCircle size={40} className="text-[#6B7280]"/>
                                                <div className="content">
                                                    <h4 className="text-[14px] text-prgcolor">Cindy Summerfield</h4>
                                                </div>
                                            </div>
                                            <div className="radio_box">
                                                <Checkbox value="5"/>
                                            </div>
                                        </Checkbox.Group>
                                    </div>
                                </label>
                            </div>
                        </div>
                    </Modal.Body>
                    <Modal.Footer>
                        <div className="flex w-full items-center justify-between">
                            <button onClick={() => setOpenStartPostMessageModal(false)}
                                    className="px-10 text-[14px] py-2 bg-blue-100 hover:bg-primary hover:text-white text-black rounded">
                                Cancel
                            </button>
                            <button onClick={() => setOpenStartPostMessageModal(false)}
                                    className="px-10 text-[14px] py-2 border border-primary bg-primary hover:text-black hover:bg-transparent hover:border-primary text-white rounded">
                                Send
                            </button>
                        </div>
                    </Modal.Footer>
                </Modal>
                {/* Start Post Message Pop-Up End */}

                {/* Start ReportAdd Pop-Up Start */}
                <Modal size="lg"
                       show={openReportAdModal}
                       style={{
                           padding: '0px',
                       }}
                       className="modal_cntrl"
                       onClose={() => setOpenReportAdModal(false)}>
                    <Modal.Header
                        style={{
                            height: '50px',
                            display: 'flex',
                            alignItems: 'center'
                        }}
                    >
                        <h4 className="text-[16px]">Report Product</h4>
                    </Modal.Header>
                    <Modal.Body>
                        <div className="modal_body">
                            <h4 className="text-graycolor text-[14px]">
                                Please share your reasons for reporting this product. Your feedback is crucial
                                for maintaining a safer and more trustworthy environment for all.
                            </h4>

                            <div className="mt-4 space-y-3">
                                <div onClick={() => onChange(1)}
                                     className="cursor-pointer">
                                    <Radio.Group
                                        onChange={(e: RadioChangeEvent) => {
                                            // Handle radio button change here
                                            // onChange(newValue);
                                        }}
                                        value={value}
                                        className="flex items-start justify-start">
                                        <div className="radio_box">
                                            <Radio value={1}></Radio>
                                        </div>
                                        <div className="content">
                                            <h4 className="text-[14px] font-[500] text-prgcolor">
                                                Illegal goods
                                            </h4>
                                            <h4 className="text-[12px] text-graycolor">
                                                The product is prohibited by law.
                                            </h4>
                                        </div>
                                    </Radio.Group>
                                </div>

                                <div onClick={() => onChange(2)}
                                     className="cursor-pointer">
                                    <Radio.Group
                                        onChange={(e: RadioChangeEvent) => {
                                            // Handle radio button change here
                                            // onChange(newValue);
                                        }}
                                        value={value}
                                        className="flex items-start justify-start">
                                        <div className="radio_box">
                                            <Radio value={2}></Radio>
                                        </div>
                                        <div className="content">
                                            <h4 className="text-[14px] font-[500] text-prgcolor">
                                                Counterfeit products
                                            </h4>
                                            <h4 className="text-[12px] text-graycolor">
                                                The product is described with false or deceptive information, images, or
                                                claims.
                                            </h4>
                                        </div>
                                    </Radio.Group>
                                </div>

                                <div onClick={() => onChange(3)}
                                     className="cursor-pointer">
                                    <Radio.Group
                                        onChange={(e: RadioChangeEvent) => {
                                            // Handle radio button change here
                                            // onChange(newValue);
                                        }}
                                        value={value}
                                        className="flex items-start justify-start">
                                        <div className="radio_box">
                                            <Radio value={3}></Radio>
                                        </div>
                                        <div className="content">
                                            <h4 className="text-[14px] font-[500] text-prgcolor">
                                                Misleading information
                                            </h4>
                                            <h4 className="text-[12px] text-graycolor">
                                                Misleading descriptions, images, or claims about products.
                                            </h4>
                                        </div>
                                    </Radio.Group>
                                </div>

                                <div onClick={() => onChange(4)}
                                     className="cursor-pointer">
                                    <Radio.Group
                                        onChange={(e: RadioChangeEvent) => {
                                            // Handle radio button change here
                                            // onChange(newValue);
                                        }}
                                        value={value}
                                        className="flex items-start justify-start">
                                        <div className="radio_box">
                                            <Radio value={4}></Radio>
                                        </div>
                                        <div className="content">
                                            <h4 className="text-[14px] font-[500] text-prgcolor">
                                                Poor quality
                                            </h4>
                                            <h4 className="text-[12px] text-graycolor">
                                                The product is significantly lower in quality than advertised.
                                            </h4>
                                        </div>
                                    </Radio.Group>
                                </div>

                                <div onClick={() => onChange(5)}
                                     className="cursor-pointer">
                                    <Radio.Group
                                        onChange={(e: RadioChangeEvent) => {
                                            // Handle radio button change here
                                            // onChange(newValue);
                                        }}
                                        value={value}
                                        className="flex items-start justify-start">
                                        <div className="radio_box">
                                            <Radio value={5}></Radio>
                                        </div>
                                        <div className="content">
                                            <h4 className="text-[14px] font-[500] text-prgcolor">
                                                Expired goods
                                            </h4>
                                            <h4 className="text-[12px] text-graycolor">
                                                The product is past its expiration date.
                                            </h4>
                                        </div>
                                    </Radio.Group>
                                </div>

                                <div onClick={() => onChange(6)}
                                     className="cursor-pointer">
                                    <Radio.Group
                                        onChange={(e: RadioChangeEvent) => {
                                            // Handle radio button change here
                                            // onChange(newValue);
                                        }}
                                        value={value}
                                        className="flex items-start justify-start">
                                        <div className="radio_box">
                                            <Radio value={6}></Radio>
                                        </div>
                                        <div className="content">
                                            <h4 className="text-[14px] font-[500] text-prgcolor">
                                                Inappropriate content
                                            </h4>
                                            <h4 className="text-[12px] text-graycolor">
                                                The product includes offensive, obscene, or inappropriate content.
                                            </h4>
                                        </div>
                                    </Radio.Group>
                                </div>

                                <div onClick={() => onChange(7)}
                                     className="cursor-pointer">
                                    <Radio.Group
                                        onChange={(e: RadioChangeEvent) => {
                                            // Handle radio button change here
                                            // onChange(newValue);
                                        }}
                                        value={value}
                                        className="flex items-start justify-start">
                                        <div className="radio_box">
                                            <Radio value={7}></Radio>
                                        </div>
                                        <div className="content">
                                            <h4 className="text-[14px] font-[500] text-prgcolor">
                                                Incorrect category
                                            </h4>
                                            <h4 className="text-[12px] text-graycolor">
                                                The product is listed under the wrong category, making it difficult to
                                                find.
                                            </h4>
                                        </div>
                                    </Radio.Group>
                                </div>

                                <div onClick={() => onChange(8)}
                                     className="cursor-pointer">
                                    <Radio.Group
                                        onChange={(e: RadioChangeEvent) => {
                                            // Handle radio button change here
                                            // onChange(newValue);
                                        }}
                                        value={value}
                                        className="flex items-start justify-start">
                                        <div className="radio_box">
                                            <Radio value={8}></Radio>
                                        </div>
                                        <div className="content">
                                            <h4 className="text-[14px] font-[500] text-prgcolor">
                                                Unauthorized use
                                            </h4>
                                            <h4 className="text-[12px] text-graycolor">
                                                The product description or images use copyrighted material without
                                                permission.
                                            </h4>
                                        </div>
                                    </Radio.Group>
                                </div>

                                <div onClick={() => onChange(9)}
                                     className="cursor-pointer">
                                    <Radio.Group
                                        onChange={(e: RadioChangeEvent) => {
                                            // Handle radio button change here
                                            // onChange(newValue);
                                        }}
                                        value={value}
                                        className="flex items-start justify-start">
                                        <div className="radio_box">
                                            <Radio value={9}></Radio>
                                        </div>
                                        <div className="content">
                                            <h4 className="text-[14px] font-[500] text-prgcolor">
                                                Fraudulent claims
                                            </h4>
                                            <h4 className="text-[12px] text-graycolor">
                                                he product is advertised with false claims about its benefits or
                                                features.
                                            </h4>
                                        </div>
                                    </Radio.Group>
                                </div>

                                <div onClick={() => onChange(10)}
                                     className="cursor-pointer">
                                    <Radio.Group
                                        onChange={(e: RadioChangeEvent) => {
                                            // Handle radio button change here
                                            // onChange(newValue);
                                        }}
                                        value={value}
                                        className="flex items-start justify-start">
                                        <div className="radio_box">
                                            <Radio value={10}></Radio>
                                        </div>
                                        <div className="content">
                                            <h4 className="text-[14px] font-[500] text-prgcolor">
                                                Overpricing
                                            </h4>
                                            <h4 className="text-[12px] text-graycolor">
                                                The product is significantly overpriced compared to similar items.
                                            </h4>
                                        </div>
                                    </Radio.Group>
                                </div>

                                <div onClick={() => onChange(11)}
                                     className="cursor-pointer">
                                    <Radio.Group
                                        onChange={(e: RadioChangeEvent) => {
                                            // Handle radio button change here
                                            // onChange(newValue);
                                        }}
                                        value={value}
                                        className="flex items-start justify-start">
                                        <div className="radio_box">
                                            <Radio value={11}></Radio>
                                        </div>
                                        <div className="content">
                                            <h4 className="text-[14px] font-[500] text-prgcolor">
                                                Unavailable product
                                            </h4>
                                            <h4 className="text-[12px] text-graycolor">
                                                The product is listed but not actually available for purchase.
                                            </h4>
                                        </div>
                                    </Radio.Group>
                                </div>

                                <div onClick={() => onChange(12)}
                                     className="cursor-pointer">
                                    <Radio.Group
                                        onChange={(e: RadioChangeEvent) => {
                                            // Handle radio button change here
                                            // onChange(newValue);
                                        }}
                                        value={value}
                                        className="flex items-start justify-start">
                                        <div className="radio_box">
                                            <Radio value={12}></Radio>
                                        </div>
                                        <div className="content">
                                            <h4 className="text-[14px] font-[500] text-prgcolor">
                                                Duplicate listing
                                            </h4>
                                            <h4 className="text-[12px] text-graycolor">
                                                The same product is listed multiple times to manipulate search results.
                                            </h4>
                                        </div>
                                    </Radio.Group>
                                </div>

                                <div onClick={() => onChange(13)}
                                     className="cursor-pointer">
                                    <Radio.Group
                                        onChange={(e: RadioChangeEvent) => {
                                            // Handle radio button change here
                                            // onChange(newValue);
                                        }}
                                        value={value}
                                        className="flex items-start justify-start">
                                        <div className="radio_box">
                                            <Radio value={13}></Radio>
                                        </div>
                                        <div className="content">
                                            <h4 className="text-[14px] font-[500] text-prgcolor">
                                                Incorrect information
                                            </h4>
                                            <h4 className="text-[12px] text-graycolor">
                                                The product details are incorrect, such as wrong dimensions or
                                                materials.
                                            </h4>
                                        </div>
                                    </Radio.Group>
                                </div>

                                <div onClick={() => onChange(14)}
                                     className="cursor-pointer">
                                    <Radio.Group
                                        onChange={(e: RadioChangeEvent) => {
                                            // Handle radio button change here
                                            // onChange(newValue);
                                        }}
                                        value={value}
                                        className="flex items-start justify-start">
                                        <div className="radio_box">
                                            <Radio value={14}></Radio>
                                        </div>
                                        <div className="content">
                                            <h4 className="text-[14px] font-[500] text-prgcolor">
                                                Safety concerns
                                            </h4>
                                            <h4 className="text-[12px] text-graycolor">
                                                The product poses a risk to health or safety.
                                            </h4>
                                        </div>
                                    </Radio.Group>
                                </div>
                            </div>
                        </div>
                    </Modal.Body>
                    <Modal.Footer>
                        <div className="flex w-full items-center justify-between">
                            <button onClick={() => setOpenReportAdModal(false)}
                                    className="px-10 text-[14px] py-2 bg-blue-100 hover:bg-primary hover:text-white text-black rounded">
                                Cancel
                            </button>
                            <button onClick={() => setOpenReportAdSubmitModal(true)}
                                    className="px-10 text-[14px] py-2 border border-primary bg-primary hover:text-black hover:bg-transparent hover:border-primary text-white rounded">
                                Next
                            </button>
                        </div>
                    </Modal.Footer>
                </Modal>
                {/* Start ReportAdd Pop-Up End */}

                {/* Start ReportAdd Submit Pop-Up Start */}
                <Modal size="lg"
                       show={openReportAdSubmitModal}
                       style={{
                           padding: '0px',
                           backgroundColor: 'rgb(17 24 39 / 30%)',
                       }}
                       className="modal_cntrl"
                       onClose={() => setOpenReportAdSubmitModal(false)}>
                    <Modal.Header
                        style={{
                            height: '50px',
                            display: 'flex',
                            alignItems: 'center'
                        }}
                    >
                        <h4 className="text-[16px]">Report Store</h4>
                    </Modal.Header>
                    <Modal.Body>
                        <div className="modal_body">
                            <div className="mt-0 space-y-3">
                                <div onClick={() => onChange(1)}
                                     className="cursor-pointer">
                                    <Radio.Group
                                        onChange={(e: RadioChangeEvent) => {
                                            // Handle radio button change here
                                            // onChange(newValue);
                                        }}
                                        value={value}
                                        className="flex items-start justify-start">
                                        <div className="radio_box">
                                            <Radio value={1}></Radio>
                                        </div>
                                        <div className="content">
                                            <h4 className="text-[14px] font-[500] text-prgcolor">
                                                Illegal goods
                                            </h4>
                                            <h4 className="text-[12px] text-graycolor">
                                                The product is prohibited by law.
                                            </h4>
                                        </div>
                                    </Radio.Group>
                                </div>
                            </div>
                            <h4 className="text-[14px] text-prgcolor mt-4">
                                Elaborate on your report (optional)
                            </h4>
                            <textarea
                                rows={3}
                                className="rounded mt-4 w-full py-2 px-4 border border-gray-100 focus:border-primary focus:ring focus:ring-transparent text-[#ABABAB] text-[12px] focus:outline-none"
                                placeholder="Please provide further details about your report. Your feedback plays a crucial role in creating a safer and more trustworthy community for everyone.">
                            </textarea>
                        </div>
                    </Modal.Body>
                    <Modal.Footer>
                        <div className="flex w-full items-center justify-between">
                            <button onClick={() => setOpenReportAdSubmitModal(false)}
                                    className="px-10 text-[14px] py-2 bg-blue-100 hover:bg-primary hover:text-white text-black rounded">
                                Back
                            </button>
                            <button onClick={() => setOpenReportAdSubmitDoneModal(true)}
                                    className="px-10 text-[14px] py-2 border border-primary bg-primary hover:text-black hover:bg-transparent hover:border-primary text-white rounded">
                                Submit
                            </button>
                        </div>
                    </Modal.Footer>
                </Modal>
                {/* Start ReportAdd Submit Pop-Up End */}

                {/* Start ReportAdd Submit Pop-Up Start */}
                <Modal size="lg"
                       show={openReportAdSubmitDoneModal}
                       style={{
                           padding: '0px',
                           backgroundColor: 'rgb(17 24 39 / 30%)',
                       }}
                       className="modal_cntrl"
                       onClose={() => setOpenReportAdSubmitDoneModal(false)}>
                    <Modal.Body>
                        <div className="modal_body">
                            <div className="flex flex-col items-center justify-center text-center">
                                <div className="icon">
                                    <PiHandsPrayingLight className="w-[50px] h-[50px] text-primary"/>
                                </div>
                                <h4 className="text-prgcolor text-[18px] mt-3">
                                    Thank You for Your Feedback!
                                </h4>
                                <h4 className="text-graycolor text-[14px] mt-3">
                                    We will review it and take appropriate action.
                                </h4>
                                <button onClick={handleAdSubmitButtonClick}
                                        className="px-10 mt-6 w-full text-[14px] py-2 border border-primary bg-primary hover:text-black hover:bg-transparent hover:border-primary text-white rounded">
                                    Close
                                </button>
                            </div>
                        </div>
                    </Modal.Body>
                </Modal>
                {/* Start ReportAdd Submit Pop-Up End */}
            </section>
        </>
    )
        ;
}

export default Page;