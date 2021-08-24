import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import bannerImage from "../images/banner.png";
import Service from "./Service";
import { Link } from "@material-ui/core";
import { FaPlay } from "react-icons/fa";

export default class BannerSlider extends Component {
    render() {
        const slider = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1,
            // autoplay: true,
            // speed: 5000,
            // autoplaySpeed: 5000,
            // cssEase: "linear"
        };
        return (
            <div>
                <Slider {...slider}>
                    <div>
                        <div className="slider_content">
                            <div className="slider_overlay">
                                <div className="slider_details">
                                    <div className='Slider_desc'>
                                        <p className="slider_top_title">We Provide Awesome Service</p>
                                        <h1 className="slider_heading">We Are Digital Agency & Marketing</h1>
                                        <p className="slider_title">Donec nec justo eget felis facilisis fermentum. Aliquam porttitor mauris sit amet orci. Aenean dignissim pellentesque felis.</p>
                                        <div className="slider_button_info">
                                            <div className="video_info">
                                                <Link className="learn_more_button" to="/">
                                                    Learn More
                                                </Link>
                                            </div>
                                            <Link to="/">
                                                <div className="video_details">
                                                    <div className="play_button_desc">
                                                        <FaPlay className="play-button" />
                                                    </div>
                                                    <div>
                                                        <p className="video_title">Watch Video</p>
                                                    </div>
                                                </div>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="slider_content">
                            <div className="slider_overlay">
                                <div className="slider_details">
                                    <div>
                                        <p className="slider_top_title">We Provide Awesome Service</p>
                                        <h1 className="slider_heading">We Are Digital Agency & Marketing</h1>
                                        <p className="slider_title">Donec nec justo eget felis facilisis fermentum. Aliquam porttitor mauris sit amet orci. Aenean dignissim pellentesque felis.</p>
                                        <div className="slider_button_info">
                                            <div className="video_info">
                                                <Link className="learn_more_button" to="/">
                                                    Learn More
                                                </Link>
                                            </div>
                                            <Link to="/">
                                                <div className="video_details">
                                                    <div className="play_button_desc">
                                                        <FaPlay className="play-button" />
                                                    </div>
                                                    <div>
                                                        <p className="video_title">Watch Video</p>
                                                    </div>
                                                </div>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="slider_content">
                            <div className="slider_overlay">
                                <div className="slider_details">
                                    <div>
                                        <p className="slider_top_title">We Provide Awesome Service</p>
                                        <h1 className="slider_heading">We Are Digital Agency & Marketing</h1>
                                        <p className="slider_title">Donec nec justo eget felis facilisis fermentum. Aliquam porttitor mauris sit amet orci. Aenean dignissim pellentesque felis.</p>
                                        <div className="slider_button_info">
                                            <div className="video_info">
                                                <Link className="learn_more_button" to="/">
                                                    Learn More
                                                </Link>
                                            </div>
                                            <Link to="/" style={{textDecoration:'none'}}>
                                                <div className="video_details">
                                                    <div className="play_button_desc">
                                                        <FaPlay className="play-button" />
                                                    </div>
                                                    <div>
                                                        <p className="video_title">Watch Video</p>
                                                    </div>
                                                </div>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </Slider>
            </div>
        );
    }
}
