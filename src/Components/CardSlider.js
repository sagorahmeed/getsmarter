import React, { Component } from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import cardImages from "../card_image/card_image.png";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default class CardSlider extends Component {
    render() {
        var settings = {
            dots: true,
            infinite: false,
            speed: 500,
            slidesToShow: 3,
            slidesToScroll: 1,
            initialSlide: 0,
            responsive: [
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1,
                        infinite: true,
                        dots: true,
                    },
                },
                {
                    breakpoint: 800,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        initialSlide: 2,
                    },
                },
            ],
        };
        return (
            <div>
                <Slider {...settings}>
                    <div>
                        <Box style={{ padding: "0 0 200px 0" }}>
                            <Box className="card_desc">
                                <Box className="card_img_sec">
                                    <img className="card_img" src={cardImages} />
                                    <Box className="card_limitation">
                                        <Box className="card_limitation_info">
                                            <Typography variant="body2" className="card_limitation_info_title">
                                                25
                                            </Typography>
                                            <Typography variant="body2" className="card_limitation_info_title">
                                                Aug
                                            </Typography>
                                        </Box>
                                    </Box>
                                </Box>
                                <Box className="card_details">
                                    <Typography className="card_heading" variant="h1">
                                        Create Unique Experiences Through
                                    </Typography>
                                    <Typography className="card_title" variant="body1">
                                        Lorem ipsum dolor sit a consectetuer adipisci elit. Donec odio. Quisque volutpat mattis eros.
                                    </Typography>
                                </Box>
                            </Box>
                        </Box>
                    </div>
                    <div>
                        <Box style={{ padding: "0 0 200px 0" }}>
                            <Box className="card_desc">
                                <Box className="card_img_sec">
                                    <img className="card_img" src={cardImages} />
                                    <Box className="card_limitation">
                                        <Box className="card_limitation_info">
                                            <Typography variant="body2" className="card_limitation_info_title">
                                                25
                                            </Typography>
                                            <Typography variant="body2" className="card_limitation_info_title">
                                                Aug
                                            </Typography>
                                        </Box>
                                    </Box>
                                </Box>
                                <Box className="card_details">
                                    <Typography className="card_heading" variant="h1">
                                        Create Unique Experiences Through
                                    </Typography>
                                    <Typography className="card_title" variant="body1">
                                        Lorem ipsum dolor sit a consectetuer adipisci elit. Donec odio. Quisque volutpat mattis eros.
                                    </Typography>
                                </Box>
                            </Box>
                        </Box>
                    </div>
                    <div>
                        <Box style={{ padding: "0 0 200px 0" }}>
                            <Box className="card_desc">
                                <Box className="card_img_sec">
                                    <img className="card_img" src={cardImages} />
                                    <Box className="card_limitation">
                                        <Box className="card_limitation_info">
                                            <Typography variant="body2" className="card_limitation_info_title">
                                                25
                                            </Typography>
                                            <Typography variant="body2" className="card_limitation_info_title">
                                                Aug
                                            </Typography>
                                        </Box>
                                    </Box>
                                </Box>
                                <Box className="card_details">
                                    <Typography className="card_heading" variant="h1">
                                        Create Unique Experiences Through
                                    </Typography>
                                    <Typography className="card_title" variant="body1">
                                        Lorem ipsum dolor sit a consectetuer adipisci elit. Donec odio. Quisque volutpat mattis eros.
                                    </Typography>
                                </Box>
                            </Box>
                        </Box>
                    </div>
                    <div>
                        <Box style={{ padding: "0 0 200px 0" }}>
                            <Box className="card_desc">
                                <Box className="card_img_sec">
                                    <img className="card_img" src={cardImages} />
                                    <Box className="card_limitation">
                                        <Box className="card_limitation_info">
                                            <Typography variant="body2" className="card_limitation_info_title">
                                                25
                                            </Typography>
                                            <Typography variant="body2" className="card_limitation_info_title">
                                                Aug
                                            </Typography>
                                        </Box>
                                    </Box>
                                </Box>
                                <Box className="card_details">
                                    <Typography className="card_heading" variant="h1">
                                        Create Unique Experiences Through
                                    </Typography>
                                    <Typography className="card_title" variant="body1">
                                        Lorem ipsum dolor sit a consectetuer adipisci elit. Donec odio. Quisque volutpat mattis eros.
                                    </Typography>
                                </Box>
                            </Box>
                        </Box>
                    </div>
                </Slider>
            </div>
        );
    }
}
