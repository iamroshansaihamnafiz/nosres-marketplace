"use client";
import React, {useState} from "react";
import useLoading from "@/app/useLoading";
import Skeleton from "react-loading-skeleton";
import useTitle from "@/app/useTitle";
import {HiUserCircle} from "react-icons/hi";
import Link from "next/link";
import Image from "next/image";
import ProductImg from '@/../public/assets/images/product-1.png';
import PostImg from '@/../public/assets/images/post-image.jpg';
import {GoComment, GoHeart, GoReply, GoSync} from "react-icons/go";
import {IoMdGlobe} from "react-icons/io";
import data from '@emoji-mart/data'
import Picker from '@emoji-mart/react'
import {LuDot} from "react-icons/lu";
import {SlideshowLightbox} from 'lightbox.js-react'
import 'lightbox.js-react/dist/index.css'
import SliderOneImg from '@/../public/assets/images/slider1.jpg';
import SliderTwoImg from '@/../public/assets/images/slider2.jpg';

export default function Home() {
    const loading = useLoading();
    useTitle("Home")
    const currentYear = new Date().getFullYear();

    // Main comment Emoji With Display In The Input
    const [showCommentEmoji, setShowCommentEmoji] = useState(false);
    const [commentText, setCommentText] = useState("");
    const addCommentEmoji = (e: { unified: string }) => {
        const hexCodePoint = e.unified.toLowerCase(); // Convert to lowercase for consistency
        // Check if hexCodePoint is a valid hexadecimal Unicode code point
        if (/^[0-9a-f]+$/.test(hexCodePoint)) {
            const codePoint = parseInt(hexCodePoint, 16); // Convert hexadecimal to decimal
            if (!isNaN(codePoint)) {
                const emoji = String.fromCodePoint(codePoint);
                setCommentText(commentText + emoji);
            } else {
                console.error("Invalid Unicode code point:", e.unified);
            }
        } else {
            console.error("Invalid Unicode code point:", e.unified);
        }
    };
    // Function to handle OutSide Click
    const handleCommentEmojiClickOutside = () => {
        setShowCommentEmoji(false);
    };


    // Comment Emoji With Display In The Input (One)
    const [showCommentEmojiOne, setShowCommentEmojiOne] = useState(false);
    const [commentTextOne, setCommentTextOne] = useState("");
    const addCommentEmojiOne = (e: { unified: string }) => {
        const hexCodePoint = e.unified.toLowerCase(); // Convert to lowercase for consistency
        // Check if hexCodePoint is a valid hexadecimal Unicode code point
        if (/^[0-9a-f]+$/.test(hexCodePoint)) {
            const codePoint = parseInt(hexCodePoint, 16); // Convert hexadecimal to decimal
            if (!isNaN(codePoint)) {
                const emoji = String.fromCodePoint(codePoint);
                setCommentTextOne(commentTextOne + emoji);
            } else {
                console.error("Invalid Unicode code point:", e.unified);
            }
        } else {
            console.error("Invalid Unicode code point:", e.unified);
        }
    };
    // Function to handle OutSide Click
    const handleCommentEmojiClickOutsideOne = () => {
        setShowCommentEmojiOne(false);
    };

    // Comment Emoji With Display In The Input (Two)
    const [showCommentEmojiTwo, setShowCommentEmojiTwo] = useState(false);
    const [commentTextTwo, setCommentTextTwo] = useState("");
    const addCommentEmojiTwo = (e: { unified: string }) => {
        const hexCodePoint = e.unified.toLowerCase(); // Convert to lowercase for consistency
        // Check if hexCodePoint is a valid hexadecimal Unicode code point
        if (/^[0-9a-f]+$/.test(hexCodePoint)) {
            const codePoint = parseInt(hexCodePoint, 16); // Convert hexadecimal to decimal
            if (!isNaN(codePoint)) {
                const emoji = String.fromCodePoint(codePoint);
                setCommentTextTwo(commentTextTwo + emoji);
            } else {
                console.error("Invalid Unicode code point:", e.unified);
            }
        } else {
            console.error("Invalid Unicode code point:", e.unified);
        }
    };
    // Function to handle OutSide Click
    const handleCommentEmojiClickOutsideTwo = () => {
        setShowCommentEmojiTwo(false);
    };

    // Comment Emoji With Display In The Input (Three)
    const [showCommentEmojiThree, setShowCommentEmojiThree] = useState(false);
    const [commentTextThree, setCommentTextThree] = useState("");
    const addCommentEmojiThree = (e: { unified: string }) => {
        const hexCodePoint = e.unified.toLowerCase(); // Convert to lowercase for consistency
        // Check if hexCodePoint is a valid hexadecimal Unicode code point
        if (/^[0-9a-f]+$/.test(hexCodePoint)) {
            const codePoint = parseInt(hexCodePoint, 16); // Convert hexadecimal to decimal
            if (!isNaN(codePoint)) {
                const emoji = String.fromCodePoint(codePoint);
                setCommentTextThree(commentTextThree + emoji);
            } else {
                console.error("Invalid Unicode code point:", e.unified);
            }
        } else {
            console.error("Invalid Unicode code point:", e.unified);
        }
    };
    // Function to handle OutSide Click
    const handleCommentEmojiClickOutsideThree = () => {
        setShowCommentEmojiThree(false);
    };


    // Comment Reply One
    const [showCommentReplyOne, setShowCommentReplyOne] = useState(false);
    const toggleCommentReplyOne = () => {
        setShowCommentReplyOne(prevState => !prevState);
    };

    // Comment Reply Two
    const [showCommentReplyTwo, setShowCommentReplyTwo] = useState(false);
    const toggleCommentReplyTwo = () => {
        setShowCommentReplyTwo(prevState => !prevState);
    };

    // Comment Reply Three
    const [showCommentReplyThree, setShowCommentReplyThree] = useState(false);
    const toggleCommentReplyThree = () => {
        setShowCommentReplyThree(prevState => !prevState);
    };


    // Lightbox Images
    const images = [
        {
            src: SliderOneImg,
            alt: 'Mechanical keyboard with white keycaps.',
        },
        {
            src: SliderTwoImg,
            alt: 'Mechanical keyboard with white keycaps.',
        },
    ]

    return (
        <>
            <section id="home-page-section">
                <div className="container py-16">
                    <div className="grid grid-cols-1 lg:grid-cols-12">
                        <div className="col lg:col-span-3"></div>
                        <div className="col lg:col-span-5">
                            {loading ? (
                                <Skeleton height={60} count={1}/>
                            ) : (
                                <>
                                    <div className="write_post box py-2 px-4 bg-white rounded">
                                        <div className="flex items-center justify-between">
                                            <div className="flex items-center">
                                                <HiUserCircle size={40} className="text-[#6B7280]"/>
                                                <input
                                                    className="mt-1 rounded w-full py-1 px-1 border-transparent focus:border-transparent focus:ring focus:ring-transparent text-[#ABABAB] text-[14px] focus:outline-none"
                                                    type="text"
                                                    placeholder="What’s new, John?"
                                                />
                                            </div>

                                            <div className="flex items-center gap-4">
                                                <div className="cursor-pointer">
                                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
                                                         fill="#4D7FB8"
                                                         className="w-5 h-5">
                                                        <path fillRule="evenodd" d="M1.5 6a2.25 2.25 0 0 1 2.25-2.25h16.5A2.25 2.25 0 0
                                                        1 22.5 6v12a2.25 2.25 0 0 1-2.25 2.25H3.75A2.25 2.25 0 0 1 1.5 18V6ZM3
                                                        16.06V18c0 .414.336.75.75.75h16.5A.75.75 0 0 0 21 18v-1.94l-2.69-2.689a1.5 1.5 0
                                                        0 0-2.12 0l-.88.879.97.97a.75.75 0 1 1-1.06 1.06l-5.16-5.159a1.5 1.5 0 0 0-2.12 0L3
                                                        16.061Zm10.125-7.81a1.125 1.125 0 1 1 2.25 0 1.125 1.125 0 0 1-2.25 0Z"
                                                              clipRule="evenodd"/>
                                                    </svg>
                                                </div>
                                                <div className="cursor-pointer">
                                                    <svg
                                                        className="w-5 h-5 hover:fill-primary transition"
                                                        xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
                                                        fill="#828D9E">
                                                        <path d="M3.478 2.404a.75.75 0 0 0-.926.941l2.432 7.905H13.5a.75.75 0 0 1 0
                                                        1.5H4.984l-2.432 7.905a.75.75 0 0 0 .926.94 60.519 60.519 0 0 0
                                                        18.445-8.986.75.75 0 0 0 0-1.218A60.517 60.517 0 0 0 3.478 2.404Z"/>
                                                    </svg>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </>
                            )}

                            {/* Post Box */}
                            <div className="post_box_wrap">
                                <div className="box mt-4 bg-white px-4 py-4 rounded rounded-b-none">
                                    <div className="flex items-center justify-between">
                                        <Link href='#' className="flex items-center gap-1">
                                            <HiUserCircle size={35} className="text-[#6B7280]"/>
                                            <div className="leading-[17px]">
                                                <h4 className="text-[14px] font-semibold text-prgcolor">
                                                    Sony Inc.
                                                </h4>
                                                <span
                                                    className="text-[12px] text-graycolor font-normal">Sponsored</span>
                                            </div>
                                        </Link>

                                        <div className="flex items-center justify-end text-end">
                                            <div
                                                className="cursor-pointer py-2 px-2 rounded-full hover:bg-gray-100">
                                                <svg
                                                    className="w-3 h-3"
                                                    fill="#828D9E"
                                                    xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16">
                                                    <path d="M8 9a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3ZM1.5 9a1.5 1.5 0 1 0
                                                    0-3 1.5 1.5 0 0 0 0 3Zm13 0a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z"></path>
                                                </svg>
                                            </div>

                                            <div
                                                className="cursor-pointer py-2 px-2 rounded-full hover:bg-gray-100">
                                                <svg
                                                    className="w-4 h-4"
                                                    fill="#828D9E"
                                                    xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16">
                                                    <path d="M3.72 3.72a.75.75 0 0 1 1.06 0L8 6.94l3.22-3.22a.749.749 0
                                                    0 1 1.275.326.749.749 0 0 1-.215.734L9.06 8l3.22 3.22a.749.749 0 0 1-.326
                                                    1.275.749.749 0 0 1-.734-.215L8 9.06l-3.22 3.22a.751.751 0 0 1-1.042-.018.751.751
                                                    0 0 1-.018-1.042L6.94 8 3.72 4.78a.75.75 0 0 1 0-1.06Z"></path>
                                                </svg>
                                            </div>
                                        </div>
                                    </div>

                                    <h4 className="mt-3 text-[12px] text-prgcolor">
                                        The SRS-XB100 speaker provides powerful, clear,
                                        expansive sound in a small, portable and durable
                                        body. Despite its size...
                                    </h4>
                                </div>
                                <div className="post_image mt-0">
                                    <Image src={PostImg} className="w-full h-56" alt="PostImg"/>

                                    <div
                                        className="flex items-center justify-between bg-gray-200 bg-opacity-50 px-4 py-2 mt-0">
                                        <h4 className="text-[14px] text-prgcolor font-[500]">Sony SRS-XB13B</h4>
                                        <button type="button"
                                                className="py-2 px-4 rounded border text-primary hover:bg-primary transition hover:text-white bg-gray-100 text-[12px]">
                                            Learn More
                                        </button>
                                    </div>
                                </div>
                                {/* Post Icons */}
                                <div className="post_icons mt-0">
                                    <div
                                        className="flex items-center justify-between bg-white border-t-2 px-4 py-3 mt-0">
                                        <div className="flex items-center gap-1">
                                            <div className="cursor-pointer">
                                                <GoHeart className="w-4 h-4 text-[#6B7280] hover:text-red-600"/>
                                            </div>
                                            <div className="count">
                                                <h4 className="text-[12px] text-prgcolor">112</h4>
                                            </div>
                                        </div>

                                        <div className="flex items-center gap-1">
                                            <div className="cursor-pointer">
                                                <GoComment className="w-4 h-4 text-[#6B7280] hover:text-primary"/>
                                            </div>
                                            <div className="count">
                                                <h4 className="text-[12px] text-prgcolor">852</h4>
                                            </div>
                                        </div>

                                        <div className="flex items-center gap-1">
                                            <div className="cursor-pointer">
                                                <GoSync className="w-full h-[14px] text-[#6B7280] hover:text-primary"/>
                                            </div>
                                            <div className="count">
                                                <h4 className="text-[12px] text-prgcolor">2k</h4>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Post Box */}
                            <div className="post_box_wrap">
                                <div className="box mt-4 bg-white px-4 py-4 rounded rounded-b-none">
                                    <div className="flex items-center justify-between">
                                        <Link href='#' className="flex items-center gap-1">
                                            <HiUserCircle size={35} className="text-[#6B7280]"/>
                                            <div className="leading-[17px]">
                                                <h4 className="text-[14px] font-semibold text-prgcolor">
                                                    John Doe
                                                </h4>
                                                <span
                                                    className="text-[12px] text-graycolor font-normal flex items-center gap-1">
                                                    2h ago
                                                    <IoMdGlobe size={13}/>
                                                </span>
                                            </div>
                                        </Link>

                                        <div className="flex items-center justify-end text-end">
                                            <div
                                                className="cursor-pointer py-2 px-2 rounded-full hover:bg-gray-100">
                                                <svg
                                                    className="w-3 h-3"
                                                    fill="#828D9E"
                                                    xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16">
                                                    <path d="M8 9a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3ZM1.5 9a1.5 1.5 0 1 0
                                                    0-3 1.5 1.5 0 0 0 0 3Zm13 0a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z"></path>
                                                </svg>
                                            </div>

                                            <div
                                                className="cursor-pointer py-2 px-2 rounded-full hover:bg-gray-100">
                                                <svg
                                                    className="w-4 h-4"
                                                    fill="#828D9E"
                                                    xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16">
                                                    <path d="M3.72 3.72a.75.75 0 0 1 1.06 0L8 6.94l3.22-3.22a.749.749 0
                                                    0 1 1.275.326.749.749 0 0 1-.215.734L9.06 8l3.22 3.22a.749.749 0 0 1-.326
                                                    1.275.749.749 0 0 1-.734-.215L8 9.06l-3.22 3.22a.751.751 0 0 1-1.042-.018.751.751
                                                    0 0 1-.018-1.042L6.94 8 3.72 4.78a.75.75 0 0 1 0-1.06Z"></path>
                                                </svg>
                                            </div>
                                        </div>
                                    </div>

                                    <h4 className="mt-3 text-[12px] text-prgcolor">
                                        The SRS-XB100 speaker provides powerful, clear,
                                        expansive sound in a small, portable and durable
                                        body. Despite its size...
                                    </h4>
                                </div>
                                {/* Post Icons */}
                                <div className="post_icons mt-0">
                                    <div
                                        className="flex items-center justify-between bg-white border-t px-4 py-3 mt-0">
                                        <div className="flex items-center gap-1">
                                            <div className="cursor-pointer">
                                                <GoHeart className="w-4 h-4 text-[#6B7280] hover:text-red-600"/>
                                            </div>
                                            <div className="count">
                                                <h4 className="text-[12px] text-prgcolor">112</h4>
                                            </div>
                                        </div>

                                        <div className="flex items-center gap-1">
                                            <div className="cursor-pointer">
                                                <GoComment className="w-4 h-4 text-[#6B7280] hover:text-primary"/>
                                            </div>
                                            <div className="count">
                                                <h4 className="text-[12px] text-prgcolor">852</h4>
                                            </div>
                                        </div>

                                        <div className="flex items-center gap-1">
                                            <div className="cursor-pointer">
                                                <GoSync className="w-full h-[14px] text-[#6B7280] hover:text-primary"/>
                                            </div>
                                            <div className="count">
                                                <h4 className="text-[12px] text-prgcolor">2k</h4>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Post Write Comment */}
                                <div className="post_write_comment mt-0">
                                    <div
                                        className="flex items-center justify-between box border-t bg-white px-4 py-2 rounded rounded-b-none">
                                        <div className="relative w-full flex items-center gap-1">
                                            <HiUserCircle size={40} className="text-[#6B7280]"/>
                                            <input
                                                className="m-0 rounded-full w-full py-1 px-3 border-graycolor focus:border-primary focus:ring focus:ring-transparent text-prgcolor text-[14px] focus:outline-none"
                                                value={commentText}
                                                onChange={(e) => setCommentText(e.target.value)}
                                                type="text"
                                                placeholder="Write a comment..."
                                            />

                                            <div className="absolute inset-y-0 right-2 flex items-center gap-4">
                                                <div className="cursor-pointer">
                                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
                                                         fill="#4D7FB8"
                                                         className="w-5 h-5">
                                                        <path fillRule="evenodd" d="M1.5 6a2.25 2.25 0 0 1 2.25-2.25h16.5A2.25 2.25 0 0
                                                        1 22.5 6v12a2.25 2.25 0 0 1-2.25 2.25H3.75A2.25 2.25 0 0 1 1.5 18V6ZM3
                                                        16.06V18c0 .414.336.75.75.75h16.5A.75.75 0 0 0 21 18v-1.94l-2.69-2.689a1.5 1.5 0
                                                        0 0-2.12 0l-.88.879.97.97a.75.75 0 1 1-1.06 1.06l-5.16-5.159a1.5 1.5 0 0 0-2.12 0L3
                                                        16.061Zm10.125-7.81a1.125 1.125 0 1 1 2.25 0 1.125 1.125 0 0 1-2.25 0Z"
                                                              clipRule="evenodd"/>
                                                    </svg>
                                                </div>
                                                <div onClick={() => setShowCommentEmoji(!showCommentEmoji)}
                                                     className="cursor-pointer">
                                                    <svg
                                                        className="w-5 h-5 hover:fill-primary transition"
                                                        fill="#828D9E"
                                                        xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16">
                                                        <path d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0ZM1.5 8a6.5 6.5 0 1 0 13 0
                                                        6.5 6.5 0 0 0-13 0Zm3.82 1.636a.75.75 0 0 1
                                                        1.038.175l.007.009c.103.118.22.222.35.31.264.178.683.37 1.285.37.602 0
                                                        1.02-.192 1.285-.371.13-.088.247-.192.35-.31l.007-.008a.75.75 0 0 1
                                                        1.222.87l-.022-.015c.02.013.021.015.021.015v.001l-.001.002-.002.003-.005.007-.01
                                                        4.019a2.066 2.066 0 0
                                                        1-.184.213c-.16.166-.338.316-.53.445-.63.418-1.37.638-2.127.629-.946
                                                        0-1.652-.308-2.126-.63a3.331 3.331 0 0
                                                        1-.715-.657l-.014-.02-.005-.006-.002-.003v-.002h-.001l.613-.432-.614.43a.75.75 0 0
                                                        1 .183-1.044ZM12 7a1 1 0 1 1-2 0 1 1 0 0 1 2 0ZM5 8a1 1 0 1 1 0-2 1 1 0 0 1 0
                                                        2Zm5.25 2.25.592.416a97.71 97.71 0 0 0-.592-.416Z"></path>
                                                    </svg>
                                                </div>
                                            </div>

                                            {/* Post Reactions */}
                                            {showCommentEmoji &&
                                                <div className="comment_emoji absolute top-[100%] right-0">
                                                    <Picker
                                                        data={data}
                                                        theme="light"
                                                        perLine={8}
                                                        onClickOutside={handleCommentEmojiClickOutside}
                                                        emojiSize={22}
                                                        onEmojiSelect={addCommentEmoji}
                                                        maxFrequentRows={0}
                                                        maxEmojiRows={2}
                                                    />
                                                </div>
                                            }
                                        </div>
                                    </div>
                                </div>

                                {/* Post User Comments (One) */}
                                <div className="post_user_comments">
                                    <div className="box bg-white px-4 py-3 rounded rounded-b-none">
                                        <div className="flex items-start justify-start gap-1 w-full">
                                            <Link href='#' className="flex items-center gap-2">
                                                <HiUserCircle size={35} className="text-[#6B7280]"/>
                                            </Link>

                                            <div
                                                className="comment_text rounded bg-gray-100 py-2 px-3 flex items-start justify-between w-full">
                                                <div className="wrap">
                                                    <h4 className="text-[12px] font-semibold text-prgcolor">
                                                        Kathy Erickson
                                                    </h4>
                                                    <h4 className="mt-1 text-[12px] text-prgcolor font-normal">
                                                        Congratulations on your new smartphone! eSquare indeed offers a
                                                        seamless and convenient way to make purchases. Enjoy exploring
                                                        all
                                                        the
                                                        stunning features of your new device!
                                                    </h4>
                                                </div>

                                                <div className="cursor-pointer py-2 px-2 rounded-full hover:bg-white">
                                                    <svg
                                                        className="w-3 h-3"
                                                        fill="#828D9E"
                                                        xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16">
                                                        <path d="M8 9a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3ZM1.5 9a1.5 1.5 0 1 0
                                                    0-3 1.5 1.5 0 0 0 0 3Zm13 0a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z"></path>
                                                    </svg>
                                                </div>
                                            </div>
                                        </div>
                                        {/* Comment Icons */}
                                        <div className="ml-10 box bg-white pt-2 rounded rounded-b-none">
                                            <div
                                                className="flex items-center text-[12px] text-graycolor justify-between px-2">
                                                <div className="c_icons flex items-center gap-6">
                                                    <Link href='#' className="left flex items-center gap-0 group">
                                                        <h4 className="group-hover:text-primary">Like</h4>
                                                        <LuDot size={12}/>
                                                        <GoHeart size={13}
                                                                 className='cursor-pointer hover:text-red-600'/>
                                                        <span className="ml-1">3</span>
                                                    </Link>
                                                    <div className="right cursor-pointer flex items-center gap-0 group">
                                                        <h4 onClick={toggleCommentReplyOne}
                                                            className="group-hover:text-primary">Reply</h4>
                                                        <LuDot size={12}/>
                                                        <GoReply size={13}
                                                                 className='cursor-pointer group-hover:text-primary'/>
                                                        <span className="ml-1">6</span>
                                                    </div>
                                                </div>
                                                <div className="c_time">2d</div>
                                            </div>
                                            {/* Comment Replay */}
                                            {showCommentReplyOne && (
                                                <div className="box bg-white pt-5 pb-2 rounded rounded-b-none">
                                                    <div className="flex items-start justify-start gap-1">
                                                        <Link href='#' className="flex items-center gap-">
                                                            <HiUserCircle size={35} className="text-[#6B7280]"/>
                                                        </Link>

                                                        <div
                                                            className="write_comment_text rounded flex items-start justify-between w-full">
                                                            <div className="relative w-full flex items-center gap-1">
                                                                <input
                                                                    className="m-0 rounded-full w-full py-1 px-3 border-graycolor focus:border-primary focus:ring focus:ring-transparent text-prgcolor text-[14px] focus:outline-none"
                                                                    value={commentTextOne}
                                                                    onChange={(e) => setCommentTextOne(e.target.value)}
                                                                    type="text"
                                                                    placeholder="Write a reply..."
                                                                />

                                                                <div
                                                                    className="absolute inset-y-0 right-2 flex items-center gap-4">
                                                                    <div className="cursor-pointer">
                                                                        <svg xmlns="http://www.w3.org/2000/svg"
                                                                             viewBox="0 0 24 24"
                                                                             fill="#4D7FB8"
                                                                             className="w-5 h-5">
                                                                            <path fillRule="evenodd" d="M1.5 6a2.25 2.25 0 0 1 2.25-2.25h16.5A2.25 2.25 0 0
                                                        1 22.5 6v12a2.25 2.25 0 0 1-2.25 2.25H3.75A2.25 2.25 0 0 1 1.5 18V6ZM3
                                                        16.06V18c0 .414.336.75.75.75h16.5A.75.75 0 0 0 21 18v-1.94l-2.69-2.689a1.5 1.5 0
                                                        0 0-2.12 0l-.88.879.97.97a.75.75 0 1 1-1.06 1.06l-5.16-5.159a1.5 1.5 0 0 0-2.12 0L3
                                                        16.061Zm10.125-7.81a1.125 1.125 0 1 1 2.25 0 1.125 1.125 0 0 1-2.25 0Z"
                                                                                  clipRule="evenodd"/>
                                                                        </svg>
                                                                    </div>
                                                                    <div
                                                                        onClick={() => setShowCommentEmojiOne(!showCommentEmojiOne)}
                                                                        className="cursor-pointer">
                                                                        <svg
                                                                            className="w-5 h-5 hover:fill-primary transition"
                                                                            fill="#828D9E"
                                                                            xmlns="http://www.w3.org/2000/svg"
                                                                            viewBox="0 0 16 16">
                                                                            <path d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0ZM1.5 8a6.5 6.5 0 1 0 13 0
                                                        6.5 6.5 0 0 0-13 0Zm3.82 1.636a.75.75 0 0 1
                                                        1.038.175l.007.009c.103.118.22.222.35.31.264.178.683.37 1.285.37.602 0
                                                        1.02-.192 1.285-.371.13-.088.247-.192.35-.31l.007-.008a.75.75 0 0 1
                                                        1.222.87l-.022-.015c.02.013.021.015.021.015v.001l-.001.002-.002.003-.005.007-.01
                                                        4.019a2.066 2.066 0 0
                                                        1-.184.213c-.16.166-.338.316-.53.445-.63.418-1.37.638-2.127.629-.946
                                                        0-1.652-.308-2.126-.63a3.331 3.331 0 0
                                                        1-.715-.657l-.014-.02-.005-.006-.002-.003v-.002h-.001l.613-.432-.614.43a.75.75 0 0
                                                        1 .183-1.044ZM12 7a1 1 0 1 1-2 0 1 1 0 0 1 2 0ZM5 8a1 1 0 1 1 0-2 1 1 0 0 1 0
                                                        2Zm5.25 2.25.592.416a97.71 97.71 0 0 0-.592-.416Z"></path>
                                                                        </svg>
                                                                    </div>
                                                                </div>

                                                                {/* Post Reactions */}
                                                                {showCommentEmojiOne &&
                                                                    <div
                                                                        className="comment_emoji absolute top-[100%] right-0">
                                                                        <Picker
                                                                            data={data}
                                                                            theme="light"
                                                                            perLine={8}
                                                                            onClickOutside={handleCommentEmojiClickOutsideOne}
                                                                            emojiSize={22}
                                                                            onEmojiSelect={addCommentEmojiOne}
                                                                            maxFrequentRows={0}
                                                                            maxEmojiRows={2}
                                                                        />
                                                                    </div>
                                                                }
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            )}
                                        </div>
                                    </div>

                                    {/* Comment Replay */}
                                    <div className="box bg-white px-4 pt-2 pb-3 rounded rounded-b-none">
                                        <div className="ml-9 flex items-start justify-start gap-1">
                                            <Link href='#' className="flex items-center gap-">
                                                <HiUserCircle size={35} className="text-[#6B7280]"/>
                                            </Link>

                                            <div
                                                className="comment_text rounded bg-gray-100 py-2 px-3 flex items-start justify-between w-full">
                                                <div className="wrap">
                                                    <h4 className="text-[12px] font-semibold text-prgcolor">
                                                        John Doe
                                                    </h4>
                                                    <h4 className="mt-1 text-[12px] text-prgcolor font-normal">
                                                        Thank you, <Link href='#' className="text-primary">Kathy
                                                        Erickson</Link>!
                                                    </h4>
                                                </div>

                                                <div className="cursor-pointer py-2 px-2 rounded-full hover:bg-white">
                                                    <svg
                                                        className="w-3 h-3"
                                                        fill="#828D9E"
                                                        xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16">
                                                        <path d="M8 9a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3ZM1.5 9a1.5 1.5 0 1 0
                                                    0-3 1.5 1.5 0 0 0 0 3Zm13 0a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z"></path>
                                                    </svg>
                                                </div>
                                            </div>
                                        </div>
                                        {/* Comment Icons */}
                                        <div className="ml-[76px] box bg-white pt-2 rounded rounded-b-none">
                                            <div
                                                className="flex items-center text-[12px] text-graycolor justify-between px-2">
                                                <div className="c_icons flex items-center gap-6">
                                                    <Link href='#' className="left flex items-center gap-0 group">
                                                        <h4 className="group-hover:text-primary">Like</h4>
                                                        <LuDot size={12}/>
                                                        <GoHeart size={13}
                                                                 className='cursor-pointer hover:text-red-600'/>
                                                        <span className="ml-1">3</span>
                                                    </Link>
                                                    <div className="right cursor-pointer flex items-center gap-0 group">
                                                        <h4 onClick={toggleCommentReplyTwo}
                                                            className="group-hover:text-primary">Reply</h4>
                                                        <LuDot size={12}/>
                                                        <GoReply size={13}
                                                                 className='cursor-pointer group-hover:text-primary'/>
                                                        <span className="ml-1">6</span>
                                                    </div>
                                                </div>
                                                <div className="c_time">1d</div>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Comment Replay */}
                                    {showCommentReplyTwo && (
                                        <div className="box bg-white px-4 pt-2 pb-5 rounded rounded-b-none">
                                            <div className="ml-9 flex items-start justify-start gap-1">
                                                <Link href='#' className="flex items-center gap-">
                                                    <HiUserCircle size={35} className="text-[#6B7280]"/>
                                                </Link>

                                                <div
                                                    className="write_comment_text rounded flex items-start justify-between w-full">
                                                    <div className="relative w-full flex items-center gap-1">
                                                        <input
                                                            className="m-0 rounded-full w-full py-1 px-3 border-graycolor focus:border-primary focus:ring focus:ring-transparent text-prgcolor text-[14px] focus:outline-none"
                                                            value={commentTextTwo}
                                                            onChange={(e) => setCommentTextTwo(e.target.value)}
                                                            type="text"
                                                            placeholder="Write a reply..."
                                                        />

                                                        <div
                                                            className="absolute inset-y-0 right-2 flex items-center gap-4">
                                                            <div className="cursor-pointer">
                                                                <svg xmlns="http://www.w3.org/2000/svg"
                                                                     viewBox="0 0 24 24"
                                                                     fill="#4D7FB8"
                                                                     className="w-5 h-5">
                                                                    <path fillRule="evenodd" d="M1.5 6a2.25 2.25 0 0 1 2.25-2.25h16.5A2.25 2.25 0 0
                                                        1 22.5 6v12a2.25 2.25 0 0 1-2.25 2.25H3.75A2.25 2.25 0 0 1 1.5 18V6ZM3
                                                        16.06V18c0 .414.336.75.75.75h16.5A.75.75 0 0 0 21 18v-1.94l-2.69-2.689a1.5 1.5 0
                                                        0 0-2.12 0l-.88.879.97.97a.75.75 0 1 1-1.06 1.06l-5.16-5.159a1.5 1.5 0 0 0-2.12 0L3
                                                        16.061Zm10.125-7.81a1.125 1.125 0 1 1 2.25 0 1.125 1.125 0 0 1-2.25 0Z"
                                                                          clipRule="evenodd"/>
                                                                </svg>
                                                            </div>
                                                            <div
                                                                onClick={() => setShowCommentEmojiTwo(!showCommentEmojiTwo)}
                                                                className="cursor-pointer">
                                                                <svg
                                                                    className="w-5 h-5 hover:fill-primary transition"
                                                                    fill="#828D9E"
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                    viewBox="0 0 16 16">
                                                                    <path d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0ZM1.5 8a6.5 6.5 0 1 0 13 0
                                                        6.5 6.5 0 0 0-13 0Zm3.82 1.636a.75.75 0 0 1
                                                        1.038.175l.007.009c.103.118.22.222.35.31.264.178.683.37 1.285.37.602 0
                                                        1.02-.192 1.285-.371.13-.088.247-.192.35-.31l.007-.008a.75.75 0 0 1
                                                        1.222.87l-.022-.015c.02.013.021.015.021.015v.001l-.001.002-.002.003-.005.007-.01
                                                        4.019a2.066 2.066 0 0
                                                        1-.184.213c-.16.166-.338.316-.53.445-.63.418-1.37.638-2.127.629-.946
                                                        0-1.652-.308-2.126-.63a3.331 3.331 0 0
                                                        1-.715-.657l-.014-.02-.005-.006-.002-.003v-.002h-.001l.613-.432-.614.43a.75.75 0 0
                                                        1 .183-1.044ZM12 7a1 1 0 1 1-2 0 1 1 0 0 1 2 0ZM5 8a1 1 0 1 1 0-2 1 1 0 0 1 0
                                                        2Zm5.25 2.25.592.416a97.71 97.71 0 0 0-.592-.416Z"></path>
                                                                </svg>
                                                            </div>
                                                        </div>

                                                        {/* Post Reactions */}
                                                        {showCommentEmojiTwo &&
                                                            <div
                                                                className="comment_emoji absolute top-[100%] right-0">
                                                                <Picker
                                                                    data={data}
                                                                    theme="light"
                                                                    perLine={8}
                                                                    onClickOutside={handleCommentEmojiClickOutsideTwo}
                                                                    emojiSize={22}
                                                                    onEmojiSelect={addCommentEmojiTwo}
                                                                    maxFrequentRows={0}
                                                                    maxEmojiRows={2}
                                                                />
                                                            </div>
                                                        }
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    )}
                                </div>

                                {/* Post User Comments (Two) */}
                                <div className="post_user_comments">
                                    <div className="box bg-white px-4 pt-2 pb-3 rounded rounded-b-none">
                                        <div className="flex items-start justify-start gap-1 w-full">
                                            <Link href='#' className="flex items-center gap-2">
                                                <HiUserCircle size={35} className="text-[#6B7280]"/>
                                            </Link>

                                            <div
                                                className="comment_text rounded bg-gray-100 py-2 px-3 flex items-start justify-between w-full">
                                                <div className="wrap">
                                                    <h4 className="text-[12px] font-semibold text-prgcolor">
                                                        Bonnie Lindsey
                                                    </h4>
                                                    <h4 className="mt-1 text-[12px] text-prgcolor font-normal">
                                                        Enjoy exploring all the stunning features of your new device!
                                                    </h4>
                                                </div>

                                                <div className="cursor-pointer py-2 px-2 rounded-full hover:bg-white">
                                                    <svg
                                                        className="w-3 h-3"
                                                        fill="#828D9E"
                                                        xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16">
                                                        <path d="M8 9a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3ZM1.5 9a1.5 1.5 0 1 0
                                                    0-3 1.5 1.5 0 0 0 0 3Zm13 0a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z"></path>
                                                    </svg>
                                                </div>
                                            </div>
                                        </div>
                                        {/* Comment Icons */}
                                        <div className="ml-10 box bg-white pt-2 rounded rounded-b-none">
                                            <div
                                                className="flex items-center text-[12px] text-graycolor justify-between px-2">
                                                <div className="c_icons flex items-center gap-6">
                                                    <Link href='#' className="left flex items-center gap-0 group">
                                                        <h4 className="group-hover:text-primary">Like</h4>
                                                        <LuDot size={12}/>
                                                        <GoHeart size={13}
                                                                 className='cursor-pointer hover:text-red-600'/>
                                                        <span className="ml-1">3</span>
                                                    </Link>
                                                    <div className="right cursor-pointer flex items-center gap-0 group">
                                                        <h4 onClick={toggleCommentReplyThree}
                                                            className="group-hover:text-primary">Reply</h4>
                                                        <LuDot size={12}/>
                                                        <GoReply size={13}
                                                                 className='cursor-pointer group-hover:text-primary'/>
                                                        <span className="ml-1">6</span>
                                                    </div>
                                                </div>
                                                <div className="c_time">1d</div>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Comment Replay */}
                                    {showCommentReplyThree && (
                                        <div className="box bg-white px-4 pt-2 pb-5 rounded rounded-b-none">
                                            <div className="ml-9 flex items-start justify-start gap-1">
                                                <Link href='#' className="flex items-center gap-">
                                                    <HiUserCircle size={35} className="text-[#6B7280]"/>
                                                </Link>

                                                <div
                                                    className="write_comment_text rounded flex items-start justify-between w-full">
                                                    <div className="relative w-full flex items-center gap-1">
                                                        <input
                                                            className="m-0 rounded-full w-full py-1 px-3 border-graycolor focus:border-primary focus:ring focus:ring-transparent text-prgcolor text-[14px] focus:outline-none"
                                                            value={commentTextThree}
                                                            onChange={(e) => setCommentTextThree(e.target.value)}
                                                            type="text"
                                                            placeholder="Write a reply..."
                                                        />

                                                        <div
                                                            className="absolute inset-y-0 right-2 flex items-center gap-4">
                                                            <div className="cursor-pointer">
                                                                <svg xmlns="http://www.w3.org/2000/svg"
                                                                     viewBox="0 0 24 24"
                                                                     fill="#4D7FB8"
                                                                     className="w-5 h-5">
                                                                    <path fillRule="evenodd" d="M1.5 6a2.25 2.25 0 0 1 2.25-2.25h16.5A2.25 2.25 0 0
                                                        1 22.5 6v12a2.25 2.25 0 0 1-2.25 2.25H3.75A2.25 2.25 0 0 1 1.5 18V6ZM3
                                                        16.06V18c0 .414.336.75.75.75h16.5A.75.75 0 0 0 21 18v-1.94l-2.69-2.689a1.5 1.5 0
                                                        0 0-2.12 0l-.88.879.97.97a.75.75 0 1 1-1.06 1.06l-5.16-5.159a1.5 1.5 0 0 0-2.12 0L3
                                                        16.061Zm10.125-7.81a1.125 1.125 0 1 1 2.25 0 1.125 1.125 0 0 1-2.25 0Z"
                                                                          clipRule="evenodd"/>
                                                                </svg>
                                                            </div>
                                                            <div
                                                                onClick={() => setShowCommentEmojiThree(!showCommentEmojiThree)}
                                                                className="cursor-pointer">
                                                                <svg
                                                                    className="w-5 h-5 hover:fill-primary transition"
                                                                    fill="#828D9E"
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                    viewBox="0 0 16 16">
                                                                    <path d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0ZM1.5 8a6.5 6.5 0 1 0 13 0
                                                        6.5 6.5 0 0 0-13 0Zm3.82 1.636a.75.75 0 0 1
                                                        1.038.175l.007.009c.103.118.22.222.35.31.264.178.683.37 1.285.37.602 0
                                                        1.02-.192 1.285-.371.13-.088.247-.192.35-.31l.007-.008a.75.75 0 0 1
                                                        1.222.87l-.022-.015c.02.013.021.015.021.015v.001l-.001.002-.002.003-.005.007-.01
                                                        4.019a2.066 2.066 0 0
                                                        1-.184.213c-.16.166-.338.316-.53.445-.63.418-1.37.638-2.127.629-.946
                                                        0-1.652-.308-2.126-.63a3.331 3.331 0 0
                                                        1-.715-.657l-.014-.02-.005-.006-.002-.003v-.002h-.001l.613-.432-.614.43a.75.75 0 0
                                                        1 .183-1.044ZM12 7a1 1 0 1 1-2 0 1 1 0 0 1 2 0ZM5 8a1 1 0 1 1 0-2 1 1 0 0 1 0
                                                        2Zm5.25 2.25.592.416a97.71 97.71 0 0 0-.592-.416Z"></path>
                                                                </svg>
                                                            </div>
                                                        </div>

                                                        {/* Post Reactions */}
                                                        {showCommentEmojiThree &&
                                                            <div
                                                                className="comment_emoji absolute top-[100%] right-0">
                                                                <Picker
                                                                    data={data}
                                                                    theme="light"
                                                                    perLine={8}
                                                                    onClickOutside={handleCommentEmojiClickOutsideThree}
                                                                    emojiSize={22}
                                                                    onEmojiSelect={addCommentEmojiThree}
                                                                    maxFrequentRows={0}
                                                                    maxEmojiRows={2}
                                                                />
                                                            </div>
                                                        }
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    )}
                                </div>

                                <div className="box bg-white px-4 pt-2 pb-4 rounded">
                                    <h4 className="text-[14px] text-primary hover:underline cursor-pointer">
                                        View more comments
                                    </h4>
                                </div>
                            </div>

                            {/* Post Box */}
                            <div className="post_box_wrap">
                                <div className="box mt-4 bg-white px-4 py-4 rounded rounded-b-none">
                                    <div className="flex items-center justify-between">
                                        <Link href='#' className="flex items-center gap-1">
                                            <HiUserCircle size={35} className="text-[#6B7280]"/>
                                            <div className="leading-[17px]">
                                                <h4 className="text-[14px] font-semibold text-prgcolor">
                                                    Inna K.
                                                </h4>
                                                <span
                                                    className="text-[12px] text-graycolor font-normal flex items-center gap-1">
                                                    6d ago
                                                    <IoMdGlobe size={13}/>
                                                </span>
                                            </div>
                                        </Link>

                                        <div className="flex items-center justify-end text-end">
                                            <div
                                                className="cursor-pointer py-2 px-2 rounded-full hover:bg-gray-100">
                                                <svg
                                                    className="w-3 h-3"
                                                    fill="#828D9E"
                                                    xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16">
                                                    <path d="M8 9a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3ZM1.5 9a1.5 1.5 0 1 0
                                                    0-3 1.5 1.5 0 0 0 0 3Zm13 0a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z"></path>
                                                </svg>
                                            </div>

                                            <div
                                                className="cursor-pointer py-2 px-2 rounded-full hover:bg-gray-100">
                                                <svg
                                                    className="w-4 h-4"
                                                    fill="#828D9E"
                                                    xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16">
                                                    <path d="M3.72 3.72a.75.75 0 0 1 1.06 0L8 6.94l3.22-3.22a.749.749 0
                                                    0 1 1.275.326.749.749 0 0 1-.215.734L9.06 8l3.22 3.22a.749.749 0 0 1-.326
                                                    1.275.749.749 0 0 1-.734-.215L8 9.06l-3.22 3.22a.751.751 0 0 1-1.042-.018.751.751
                                                    0 0 1-.018-1.042L6.94 8 3.72 4.78a.75.75 0 0 1 0-1.06Z"></path>
                                                </svg>
                                            </div>
                                        </div>
                                    </div>

                                    <h4 className="mt-3 text-[12px] text-prgcolor">
                                        Could anyone please tell me where to find a good deal on the iPhone 15?
                                    </h4>
                                </div>
                                <div className="post_image mt-0">
                                    <SlideshowLightbox className="flex w-full" lightboxIdentifier="l2" framework="next"
                                                       images={images}>
                                        {images.slice(0, 2).map((image, index) => (
                                            <Image
                                                key={index}
                                                src={image.src}
                                                alt={image.alt}
                                                height={100}
                                                width={100}
                                                className="w-1/2"
                                                data-lightboxjs="l2"
                                                quality={80}
                                            />
                                        ))}
                                    </SlideshowLightbox>
                                </div>
                                {/* Post Icons */}
                                <div className="post_icons mt-0">
                                    <div
                                        className="flex items-center justify-between bg-white px-4 py-3 mt-0">
                                        <div className="flex items-center gap-1">
                                            <div className="cursor-pointer">
                                                <GoHeart className="w-4 h-4 text-[#6B7280] hover:text-red-600"/>
                                            </div>
                                            <div className="count">
                                                <h4 className="text-[12px] text-prgcolor">112</h4>
                                            </div>
                                        </div>

                                        <div className="flex items-center gap-1">
                                            <div className="cursor-pointer">
                                                <GoComment className="w-4 h-4 text-[#6B7280] hover:text-primary"/>
                                            </div>
                                            <div className="count">
                                                <h4 className="text-[12px] text-prgcolor">852</h4>
                                            </div>
                                        </div>

                                        <div className="flex items-center gap-1">
                                            <div className="cursor-pointer">
                                                <GoSync className="w-full h-[14px] text-[#6B7280] hover:text-primary"/>
                                            </div>
                                            <div className="count">
                                                <h4 className="text-[12px] text-prgcolor">2k</h4>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>


                            {/* Post Box */}
                            <div className="post_box_wrap">
                                <div className="box mt-4 bg-white px-4 py-4 rounded rounded-b-none">
                                    <div className="flex items-center justify-between">
                                        <Link href='#' className="flex items-center gap-1">
                                            <HiUserCircle size={35} className="text-[#6B7280]"/>
                                            <div className="leading-[17px]">
                                                <h4 className="text-[14px] font-semibold text-prgcolor">
                                                    Robert Fox
                                                </h4>
                                                <span
                                                    className="text-[12px] text-graycolor font-normal flex items-center gap-1">
                                                    1m ago
                                                    <IoMdGlobe size={13}/>
                                                </span>
                                            </div>
                                        </Link>

                                        <div className="flex items-center justify-end text-end">
                                            <div
                                                className="cursor-pointer py-2 px-2 rounded-full hover:bg-gray-100">
                                            <svg
                                                    className="w-3 h-3"
                                                    fill="#828D9E"
                                                    xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16">
                                                    <path d="M8 9a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3ZM1.5 9a1.5 1.5 0 1 0
                                                    0-3 1.5 1.5 0 0 0 0 3Zm13 0a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z"></path>
                                                </svg>
                                            </div>

                                            <div
                                                className="cursor-pointer py-2 px-2 rounded-full hover:bg-gray-100">
                                                <svg
                                                    className="w-4 h-4"
                                                    fill="#828D9E"
                                                    xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16">
                                                    <path d="M3.72 3.72a.75.75 0 0 1 1.06 0L8 6.94l3.22-3.22a.749.749 0
                                                    0 1 1.275.326.749.749 0 0 1-.215.734L9.06 8l3.22 3.22a.749.749 0 0 1-.326
                                                    1.275.749.749 0 0 1-.734-.215L8 9.06l-3.22 3.22a.751.751 0 0 1-1.042-.018.751.751
                                                    0 0 1-.018-1.042L6.94 8 3.72 4.78a.75.75 0 0 1 0-1.06Z"></path>
                                                </svg>
                                            </div>
                                        </div>
                                    </div>

                                    <h4 className="mt-3 text-[12px] text-prgcolor">
                                        The HTCU23 Pro 5G stands as the pinnacle of smartphone innovation, offering
                                        unparalleled performance, connectivity, and functionality. Its sleek design houses a
                                        powerhouse of cutting-edge technology, delivering lightning-fast 5G connectivity
                                        and an immersive multimedia experience. With its advanced features and premium
                                        build quality, the HTCU23 Pro 5G redefines what a flagship smartphone can achieve
                                    </h4>
                                </div>
                                <div className="post_image mt-0">
                                    <Image src={SliderOneImg} className="w-full h-56" alt="PostImg"/>
                                </div>
                                {/* Post Icons */}
                                <div className="post_icons mt-0">
                                    <div
                                        className="flex items-center justify-between bg-white border-t-2 px-4 py-3 mt-0">
                                        <div className="flex items-center gap-1">
                                            <div className="cursor-pointer">
                                                <GoHeart className="w-4 h-4 text-[#6B7280] hover:text-red-600"/>
                                            </div>
                                            <div className="count">
                                                <h4 className="text-[12px] text-prgcolor">112</h4>
                                            </div>
                                        </div>

                                        <div className="flex items-center gap-1">
                                            <div className="cursor-pointer">
                                                <GoComment className="w-4 h-4 text-[#6B7280] hover:text-primary"/>
                                            </div>
                                            <div className="count">
                                                <h4 className="text-[12px] text-prgcolor">852</h4>
                                            </div>
                                        </div>

                                        <div className="flex items-center gap-1">
                                            <div className="cursor-pointer">
                                                <GoSync className="w-full h-[14px] text-[#6B7280] hover:text-primary"/>
                                            </div>
                                            <div className="count">
                                                <h4 className="text-[12px] text-prgcolor">2k</h4>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Right Sidebar */}
                        <div className="col lg:col-span-4 right_sidebar hidden lg:block ml-7 mr-[10px]">
                            <div className="box bg-white px-4 py-4 rounded">
                                <div className="flex items-center justify-between">
                                    <div className="flex items-center gap-2">
                                        <svg
                                            className="w-4 h-4"
                                            fill="#6B7280"
                                            xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16">
                                            <path d="m.427 1.927 1.215 1.215a8.002 8.002 0 1 1-1.6 5.685.75.75
                                        0 1 1 1.493-.154 6.5 6.5 0 1 0 1.18-4.458l1.358 1.358A.25.25 0 0 1 3.896
                                        6H.25A.25.25 0 0 1 0 5.75V2.104a.25.25 0 0 1 .427-.177ZM7.75 4a.75.75 0 0 1
                                        .75.75v2.992l2.028.812a.75.75 0 0 1-.557 1.392l-2.5-1A.751.751 0 0 1 7
                                        8.25v-3.5A.75.75 0 0 1 7.75 4Z"></path>
                                        </svg>
                                        <h4 className="text-[14px] font-semibold text-prgcolor">
                                            Recently Viewed Items
                                        </h4>
                                    </div>

                                    <div className="cursor-pointer py-2 px-2 rounded-full hover:bg-gray-100">
                                        <svg
                                            className="w-3 h-3"
                                            fill="#6B7280"
                                            xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16">
                                            <path d="M8 9a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3ZM1.5 9a1.5 1.5 0 1 0
                                            0-3 1.5 1.5 0 0 0 0 3Zm13 0a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z"></path>
                                        </svg>
                                    </div>
                                </div>
                                {/* Product Area */}
                                <div className="product_wrap space-y-3">
                                    <Link href='#' className="show_product group mt-2 flex items-start gap-4">
                                        <div className="p-1 border rounded">
                                            <Image src={ProductImg} className="w-16" alt="ProductImg"/>
                                        </div>
                                        <div className="product_content">
                                            <h4 className="text-[14px] text-prgcolor group-hover:text-primary">Apple
                                                iPhone XS</h4>
                                            <h4 className="text-[14px] text-graycolor">$860.00</h4>
                                        </div>
                                    </Link>

                                    <Link href='#' className="show_product group mt-2 flex items-start gap-4">
                                        <div className="p-1 border rounded">
                                            <Image src={ProductImg} className="w-16" alt="ProductImg"/>
                                        </div>
                                        <div className="product_content">
                                            <h4 className="text-[14px] group-hover:text-primary text-prgcolor">T-Shirt</h4>
                                            <h4 className="text-[14px] text-graycolor">$450.00</h4>
                                        </div>
                                    </Link>

                                    <Link href='#' className="show_product group mt-2 flex items-start gap-4">
                                        <div className="p-1 border rounded">
                                            <Image src={ProductImg} className="w-16" alt="ProductImg"/>
                                        </div>
                                        <div className="product_content">
                                            <h4 className="text-[14px] group-hover:text-primary text-prgcolor">Polo
                                                Shirt</h4>
                                            <h4 className="text-[14px] text-graycolor">$320.00</h4>
                                        </div>
                                    </Link>
                                </div>
                            </div>

                            <div className="box mt-4 bg-white px-4 py-4 rounded">
                                <div className="flex gap-2 items-center">
                                    <svg
                                        className="w-[19px] h-[19px] transition duration-75 group-hover:fill-primary"
                                        fill="#6B7280"
                                        xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16">
                                        <path d="m8.878.392 5.25 3.045c.54.314.872.89.872
                                                        1.514v6.098a1.75 1.75 0 0 1-.872 1.514l-5.25 3.045a1.75 1.75 0 0 1-1.756
                                                        0l-5.25-3.045A1.75 1.75 0 0 1 1
                                                        11.049V4.951c0-.624.332-1.201.872-1.514L7.122.392a1.75 1.75 0 0 1 1.756
                                                        0ZM7.875 1.69l-4.63 2.685L8 7.133l4.755-2.758-4.63-2.685a.248.248 0 0 0-.25
                                                        0ZM2.5 5.677v5.372c0 .09.047.171.125.216l4.625 2.683V8.432Zm6.25 8.271
                                                        4.625-2.683a.25.25 0 0 0 .125-.216V5.677L8.75 8.432Z"></path>
                                    </svg>
                                    <h4 className="relative text-[14px] font-semibold">
                                        Sell on Nosres
                                        <span
                                            className="absolute -right-8 -top-1 text-[12px] font-normal text-primary">BETA</span>
                                    </h4>
                                </div>
                                <h4 className="text-graycolor mt-3 text-[12px]">
                                    Promote your products by sharing them on
                                    your page, receive orders, receive notification, discuss with customers.
                                </h4>
                                <button type="button"
                                        className="mt-3 py-2 px-4 rounded text-primary hover:bg-primary transition hover:text-white bg-gray-100 text-[12px]">
                                    Learn More
                                </button>
                            </div>

                            {/* Post Box */}
                            <div className="box mt-4 bg-white px-4 py-4 rounded">
                                <div className="flex items-center justify-between">
                                    <div className="flex items-center gap-2">
                                        <HiUserCircle size={25} className="text-[#6B7280]"/>
                                        <div className="leading-[17px]">
                                            <h4 className="text-[14px] font-semibold text-prgcolor">
                                                Sony Inc.
                                            </h4>
                                            <span className="text-[12px] text-graycolor font-normal">Sponsored</span>
                                        </div>
                                    </div>


                                    <div className="cursor-pointer py-2 px-2 rounded-full hover:bg-gray-100">
                                        <svg
                                            className="w-3 h-3"
                                            fill="#6B7280"
                                            xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16">
                                            <path d="M8 9a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3ZM1.5 9a1.5 1.5 0 1 0
                                            0-3 1.5 1.5 0 0 0 0 3Zm13 0a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z"></path>
                                        </svg>
                                    </div>
                                </div>
                                <h4 className="mt-3 text-[12px] text-prgcolor">
                                    The SRS-XB100 speaker provides powerful, clear,
                                    expansive sound in a small, portable and durable
                                    body. Despite its size...
                                </h4>
                                <div className="post-image mt-3">
                                    <Image src={PostImg} className="w-full h-36" alt="PostImg"/>

                                    <div className="flex items-center justify-between mt-3">
                                        <h4 className="text-[14px] text-prgcolor font-[500]">Sony SRS-XB13B</h4>
                                        <button type="button"
                                                className="py-2 px-4 rounded text-primary hover:bg-primary transition hover:text-white bg-gray-100 text-[12px]">
                                            Learn More
                                        </button>
                                    </div>
                                </div>
                            </div>

                            <div className="mt-6 sticky top-16">
                                <footer>
                                    <ul className="flex items-center gap-2 text-gray-500 text-[12px]">
                                        <li className="hover:text-primary">
                                            <Link href='#'>About Nosres</Link>
                                        </li>
                                        <li className="hover:text-primary">
                                            <div>.</div>
                                        </li>
                                        <li className="hover:text-primary">
                                            <Link href='#'>Privacy</Link>
                                        </li>
                                        <li className="hover:text-primary">
                                            <div>.</div>
                                        </li>
                                        <li className="hover:text-primary">
                                            <Link href='#'>Terms</Link>
                                        </li>
                                        <li className="hover:text-primary">
                                            <div>.</div>
                                        </li>
                                        <li className="hover:text-primary">
                                            <Link href='#'>Careers</Link>
                                        </li>
                                        <li className="hover:text-primary">
                                            <div>.</div>
                                        </li>
                                        <li className="hover:text-primary">
                                            <Link href='#'>Support</Link>
                                        </li>
                                    </ul>
                                    <h4 className="mt-[8px] text-graycolor text-[12px]">© {currentYear} Nosres
                                        Inc. All
                                        rights
                                        reserved.</h4>
                                </footer>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
