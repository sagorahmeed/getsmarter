import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import "./styles.css";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import blogImg from "../images/blog-image.png";
import Box from "@material-ui/core/Box";
import Paper from "@material-ui/core/Paper";
import { grid, typography } from "@material-ui/system";
import Button from "@material-ui/core/Button";
import useStyles from "../styles";
import wireframesvg from "../icon_image/wireframe.svg";
import paintsvg from "../icon_image/paint.svg";
import codeSvg from "../icon_image/code.svg";
import uiDesign from "../icon_image/uiDesing.svg";
import smartphone from "../icon_image/smartphone.svg";
import speaker from "../icon_image/speaker.svg";
import check from "../icon_image/check.svg";
import AnalysisVideoImage from "../images/analysis.png";
import wireDesignImage from "../project_image/wireframe_design_image.png";
import paintDesignImage from "../project_image/painting_design_image.png";
import UiDesignImage from "../project_image/ui_design_image.png";
import developmentDesignImage from "../project_image/development_design_image.png";
import mobileDesignImage from "../project_image/mobile_design_image.png";
import marketingDesignImage from "../project_image/marketing_design_image.png";
import listEmoji from "../emoji_svg/list.svg";
import ArrowLeft from "../icon_image/ArrowLeft.svg";
import ArrowRight from "../icon_image/ArrowRight.svg";
import userImage from "../user_images/client.png";
import quote from "../icon_image/quote.svg";
import TextField from "@material-ui/core/TextField";
import sendsvg from "../emoji_svg/send.svg";
import playsvg from "../emoji_svg/play.svg";
import facebooksvg from "../social_icon/facebook.svg";
import twittersvg from "../social_icon/twitter.svg";
import linkedinsvg from "../social_icon/linkedin.svg";
import instragramsvg from "../social_icon/instagram.svg";
import { colors } from "@material-ui/core";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import BannerSlider from "./BannerSlider";
import CardSlider from "./CardSlider";
import Navigation from "./Navigation";
import { lime } from "@material-ui/core/colors";
import Counter from "./Counter";






export default function Home() {
    const classes = useStyles();
    return (
        <div>
            <Navigation/>
            <BannerSlider />
            {/* About us blog */}

            <Box className={classes.mainHeader}>
                <Container>
                    <Grid className={classes.mainBlog} container spacing={3}>
                        <Grid xs={12} sm={12} md={6} lg={6} xl={6}>
                            <Box className={classes.ImageBlog}>
                                <img className={classes.blogImage} src={blogImg} />
                            </Box>
                        </Grid>
                        <Grid xs={12} sm={12} md={6} lg={6} xl={6}>
                            <Box className={classes.BlogContent}>
                                <Box className={classes.blogDesc}>
                                    <Typography className={classes.blogTitle}>About us</Typography>
                                    <Typography style={{ backgroundColor: "#ff8141", padding: "1px", width: "30px", marginLeft: "10px", marginTop: "2px" }}></Typography>
                                    <Typography style={{ backgroundColor: "#ff8141", padding: "1px", width: "4px", marginLeft: "5px", marginTop: "2px" }}></Typography>
                                </Box>
                                <Box>
                                    <Typography className={classes.blogHeading} variant="h4">
                                        We Are a Cutting
                                    </Typography>
                                    <Typography className={classes.blogHeading} variant="h4">
                                        Edge Digital Agency
                                    </Typography>
                                </Box>
                                <Box>
                                    <Typography className={classes.agencytitle} variant="body1">
                                        Morbi in sem quis dui placerat ornare. Pellentes pharetraultricies in, diam. Sed arcu. Cras consequat.Praesent dapibus
                                    </Typography>
                                </Box>
                                <Grid container>
                                    <Grid xs={12} sm={6} md={6} lg={6} xl={6}>
                                        <Box className={classes.agencyDetails}>
                                            <Box className={classes.gridBox}>
                                                <Box className={classes.MiddleGridBox}></Box>
                                            </Box>
                                            <Box className={classes.agencyContent}>
                                                <Typography className={classes.agencyHeading} variant="h3">
                                                    Wireframe
                                                </Typography>
                                                <Typography className={classes.agencyTitle} variant="body1">
                                                    Sed egestas, ante et
                                                </Typography>
                                            </Box>
                                        </Box>
                                    </Grid>
                                    <Grid xs={12} sm={6} md={6} lg={6} xl={6}>
                                        <Box className={classes.agencyDetails}>
                                            <Box className={classes.gridBox}>
                                                <Box className={classes.MiddleGridBox}></Box>
                                            </Box>
                                            <Box className={classes.agencyContent}>
                                                <Typography className={classes.agencyHeading} variant="h3">
                                                    Wireframe
                                                </Typography>
                                                <Typography className={classes.agencyTitle} variant="body1">
                                                    Sed egestas, ante et
                                                </Typography>
                                            </Box>
                                        </Box>
                                    </Grid>
                                    <Grid xs={12} sm={6} md={6} lg={6} xl={6}>
                                        <Box className={classes.agencyDetails}>
                                            <Box className={classes.gridBox}>
                                                <Box className={classes.MiddleGridBox}></Box>
                                            </Box>
                                            <Box className={classes.agencyContent}>
                                                <Typography className={classes.agencyHeading} variant="h3">
                                                    Wireframe
                                                </Typography>
                                                <Typography className={classes.agencyTitle} variant="body1">
                                                    Sed egestas, ante et
                                                </Typography>
                                            </Box>
                                        </Box>
                                    </Grid>
                                    <Grid xs={12} sm={6} md={6} lg={6} xl={6}>
                                        <Box className={classes.agencyDetails}>
                                            <Box className={classes.gridBox}>
                                                <Box className={classes.MiddleGridBox}></Box>
                                            </Box>
                                            <Box className={classes.agencyContent}>
                                                <Typography className={classes.agencyHeading} variant="h3">
                                                    Wireframe
                                                </Typography>
                                                <Typography className={classes.agencyTitle} variant="body1">
                                                    Sed egestas, ante et
                                                </Typography>
                                            </Box>
                                        </Box>
                                    </Grid>
                                </Grid>
                                <Box className={classes.btnBody}>
                                    <Button className={classes.LearnButton}>Learn More</Button>
                                </Box>
                            </Box>
                        </Grid>
                    </Grid>
                </Container>

                {/* our service blog*/}

                <Container>
                    <Box className={classes.serviceMainBlog}>
                        <Box className={classes.serviceBlogHeader}>
                            <Box>
                                <Box className={classes.serviceBlogDesc}>
                                    <Typography style={{ backgroundColor: "#ff8141", padding: "1px", width: "4px", marginRight: "5px", marginTop: "2px" }}></Typography>
                                    <Typography style={{ backgroundColor: "#ff8141", padding: "1px", width: "30px", marginRight: "10px", marginTop: "2px" }}></Typography>
                                    <Typography className={classes.serviceBlogTitle}>Service</Typography>
                                    <Typography style={{ backgroundColor: "#ff8141", padding: "1px", width: "30px", marginLeft: "10px", marginTop: "2px" }}></Typography>
                                    <Typography style={{ backgroundColor: "#ff8141", padding: "1px", width: "4px", marginLeft: "5px", marginTop: "2px" }}></Typography>
                                </Box>
                                <Box>
                                    <Typography className={classes.serviceHeading} variant="h4">
                                        Our Service
                                    </Typography>
                                </Box>
                            </Box>
                        </Box>
                        <Box className={classes.serviceCategoryMainHeader}>
                            <Box className={classes.serviceCategory}>
                                <Grid container spacing={3} style={{ justifyContent: "center" }}>
                                    <Grid item xs={12} sm={12} md={6} lg={4} xl={4}>
                                        <Box className={classes.wireFrame}>
                                            <Box className={classes.wireFrameBox}>
                                                <Box>
                                                    <Box className={classes.imageBox}>
                                                        <Box className={classes.wireframeSvg}>
                                                            <img className={classes.PvgImg} src={wireframesvg} />
                                                        </Box>
                                                    </Box>
                                                    <Typography className={classes.serviceCategoryHeading} style={{ paddingTop: "25px" }} variant="h4">
                                                        Wireframe Design
                                                    </Typography>
                                                    <Typography className={classes.serviceCategoryTitle} style={{ paddingTop: "20px" }} variant="body1">
                                                        Sed egestas, ante et vulputa volu, eros pede semper est, vitae luctus metus libero eu augue.
                                                    </Typography>
                                                </Box>
                                            </Box>
                                        </Box>
                                    </Grid>
                                    <Grid item xs={12} sm={12} md={6} lg={4} xl={4}>
                                        <Box className={classes.creativity}>
                                            <Box className={classes.wireFrameBox}>
                                                <Box>
                                                    <Box className={classes.paintimageBox}>
                                                        <Box className={classes.paintSvg}>
                                                            <img className={classes.paintSvgImg} src={paintsvg} />
                                                        </Box>
                                                    </Box>
                                                    <Typography className={classes.serviceCategoryHeading} style={{ paddingTop: "25px" }} variant="h4">
                                                        Design & Creativity
                                                    </Typography>
                                                    <Typography className={classes.serviceCategoryTitle} style={{ paddingTop: "20px" }} variant="body1">
                                                        Sed egestas, ante et vulputa volu, eros pede semper est, vitae luctus metus libero eu augue.
                                                    </Typography>
                                                </Box>
                                            </Box>
                                        </Box>
                                    </Grid>
                                    <Grid item xs={12} sm={12} md={6} lg={4} xl={4}>
                                        <Box className={classes.uiDesign}>
                                            <Box className={classes.wireFrameBox}>
                                                <Box>
                                                    <Box style={{ background: "#D3FCED" }} className={classes.imageBox}>
                                                        <Box style={{ background: "#00DBAA" }} className={classes.wireframeSvg}>
                                                            <img className={classes.PvgImg} src={uiDesign} />
                                                        </Box>
                                                    </Box>
                                                    <Typography className={classes.serviceCategoryHeading} style={{ paddingTop: "25px" }} variant="h4">
                                                        UI/UX design
                                                    </Typography>
                                                    <Typography className={classes.serviceCategoryTitle} style={{ paddingTop: "20px" }} variant="body1">
                                                        Sed egestas, ante et vulputa volu, eros pede semper est, vitae luctus metus libero eu augue.
                                                    </Typography>
                                                </Box>
                                            </Box>
                                        </Box>
                                    </Grid>
                                    <Grid item xs={12} sm={12} md={6} lg={4} xl={4}>
                                        <Box className={classes.uiDesign}>
                                            <Box className={classes.wireFrameBox}>
                                                <Box>
                                                    <Box style={{ background: "#E2DDFC" }} className={classes.imageBox}>
                                                        <Box style={{ background: "#6C56F2" }} className={classes.wireframeSvg}>
                                                            <img className={classes.PvgImg} src={codeSvg} />
                                                        </Box>
                                                    </Box>
                                                    <Typography className={classes.serviceCategoryHeading} style={{ paddingTop: "25px" }} variant="h4">
                                                        Web Development
                                                    </Typography>
                                                    <Typography className={classes.serviceCategoryTitle} style={{ paddingTop: "20px" }} variant="body1">
                                                        Sed egestas, ante et vulputa volu, eros pede semper est, vitae luctus metus libero eu augue.
                                                    </Typography>
                                                </Box>
                                            </Box>
                                        </Box>
                                    </Grid>
                                    <Grid item xs={12} sm={12} md={6} lg={4} xl={4}>
                                        <Box className={classes.uiDesign}>
                                            <Box className={classes.wireFrameBox}>
                                                <Box>
                                                    <Box style={{ background: "#D6E6F4" }} className={classes.imageBox}>
                                                        <Box style={{ background: "#2E81C7" }} className={classes.wireframeSvg}>
                                                            <img className={classes.PvgImg} src={smartphone} />
                                                        </Box>
                                                    </Box>
                                                    <Typography className={classes.serviceCategoryHeading} style={{ paddingTop: "25px" }} variant="h4">
                                                        Mobile App Design
                                                    </Typography>
                                                    <Typography className={classes.serviceCategoryTitle} style={{ paddingTop: "20px" }} variant="body1">
                                                        Sed egestas, ante et vulputa volu, eros pede semper est, vitae luctus metus libero eu augue.
                                                    </Typography>
                                                </Box>
                                            </Box>
                                        </Box>
                                    </Grid>
                                    <Grid item xs={12} sm={12} md={6} lg={4} xl={4}>
                                        <Box className={classes.uiDesign}>
                                            <Box className={classes.wireFrameBox}>
                                                <Box>
                                                    <Box className={classes.imageBox}>
                                                        <Box className={classes.wireframeSvg}>
                                                            <img className={classes.PvgImg} src={speaker} />
                                                        </Box>
                                                    </Box>
                                                    <Typography className={classes.serviceCategoryHeading} style={{ paddingTop: "25px" }} variant="h4">
                                                        Digital Marketing
                                                    </Typography>
                                                    <Typography className={classes.serviceCategoryTitle} style={{ paddingTop: "20px" }} variant="body1">
                                                        Sed egestas, ante et vulputa volu, eros pede semper est, vitae luctus metus libero eu augue.
                                                    </Typography>
                                                </Box>
                                            </Box>
                                        </Box>
                                    </Grid>
                                </Grid>
                            </Box>
                        </Box>
                    </Box>
                </Container>

                {/* Analysis blog */}
                <Container>
                    <Box className={classes.analysisMainBlog}>
                        <Box className={classes.analysisBlog}>
                            <Grid container spacing={3}>
                                <Grid xs={12} sm={12} md={6} lg={6} xl={6}>
                                    <Box className={classes.analysisSingleBlog}>
                                        <Box className={classes.analysisTopTitle}>
                                            <Typography className={classes.analysisTitle}>Analysis</Typography>
                                            <Typography style={{ backgroundColor: "#ff8141", padding: "1px", width: "30px", marginLeft: "10px", marginTop: "2px" }}></Typography>
                                            <Typography style={{ backgroundColor: "#ff8141", padding: "1px", width: "4px", marginLeft: "5px", marginTop: "2px" }}></Typography>
                                        </Box>
                                        <Box>
                                            <Typography className={classes.analysisHeading} variant="h4">
                                                Why We Are Best
                                            </Typography>
                                            <Typography className={classes.analysisdesc} variant="body1">
                                                Sed egestas, ante et vulputate volutpat, eros pede semper est, vitae luctus metus libero eu augue.
                                            </Typography>
                                        </Box>
                                        <Box className={classes.analysisItemList}>
                                            <Typography className={classes.checkpsvBody}>
                                                <img className={classes.checkSvg} src={check} />
                                            </Typography>
                                            <Typography className={classes.checkListItem} variant="body2">
                                                Sed egestas, ante et vulputate volutpat, eros pede semper
                                            </Typography>
                                        </Box>
                                        <Box className={classes.analysisItemList}>
                                            <Typography className={classes.checkpsvBody}>
                                                <img className={classes.checkSvg} src={check} />
                                            </Typography>
                                            <Typography className={classes.checkListItem} variant="body2">
                                                Sed egestas, ante et vulputate volutpat
                                            </Typography>
                                        </Box>
                                        <Box className={classes.analysisItemList}>
                                            <Typography className={classes.checkpsvBody}>
                                                <img className={classes.checkSvg} src={check} />
                                            </Typography>
                                            <Typography className={classes.checkListItem} variant="body2">
                                                Ante et vulputate volutpat, eros pede semper
                                            </Typography>
                                        </Box>
                                        <Box className={classes.analysisItemList}>
                                            <Typography className={classes.checkpsvBody}>
                                                <img className={classes.checkSvg} src={check} />
                                            </Typography>
                                            <Typography className={classes.checkListItem} variant="body2">
                                                Egestas, ante et vulputate volutpat, eros pede sem
                                            </Typography>
                                        </Box>
                                        <Box className={classes.btnBody}>
                                            <Button className={classes.LearnButton}>Learn More</Button>
                                        </Box>
                                    </Box>
                                </Grid>
                                <Grid xs={12} sm={12} md={6} lg={6} xl={6}>
                                    <Box className="analysisImageBlog">
                                        <img className={classes.analysisImage} src={AnalysisVideoImage} />
                                        <Box className="analysisoverlay"></Box>
                                        <Box className={classes.playvideoInfo}>
                                            <Box className="playsvg_img">
                                                <Box className="play_button">
                                                    <img className={classes.playsvgimg} src={playsvg} />
                                                </Box>
                                            </Box>
                                        </Box>
                                    </Box>
                                </Grid>
                            </Grid>
                        </Box>
                    </Box>
                </Container>
                {/* project blog */}
                <Container>
                    <Box>
                        <Box>
                            <Box>
                                <Box className={classes.serviceBlogDesc}>
                                    <Typography style={{ backgroundColor: "#ff8141", padding: "1px", width: "4px", marginRight: "5px", marginTop: "2px" }}></Typography>
                                    <Typography style={{ backgroundColor: "#ff8141", padding: "1px", width: "30px", marginRight: "10px", marginTop: "2px" }}></Typography>
                                    <Typography className={classes.serviceBlogTitle}>Service</Typography>
                                    <Typography style={{ backgroundColor: "#ff8141", padding: "1px", width: "30px", marginLeft: "10px", marginTop: "2px" }}></Typography>
                                    <Typography style={{ backgroundColor: "#ff8141", padding: "1px", width: "4px", marginLeft: "5px", marginTop: "2px" }}></Typography>
                                </Box>
                                <Box>
                                    <Typography style={{ textAlign: "center" }} className={classes.serviceHeading} variant="h4">
                                        Our Project
                                    </Typography>
                                </Box>
                            </Box>
                            <Box style={{ paddingTop: "40px" }}>
                                <Box>
                                    <Grid container spacing={3}>
                                        <Grid item xs={12} sm={12} md={6} lg={4} xl={4}>
                                            <Box className="projectCategoryDesc">
                                                <img className={classes.projectImage} src={wireDesignImage} />
                                                <Box className="overlay">
                                                    <Box className={classes.projectCategory}>
                                                        <Box className="projectCategoryDetails">
                                                            <Box className={classes.projectCategoryInfo}>
                                                                <Typography style={{ paddingLeft: "10px" }} className={classes.projectCategoryHeading} variant="h4">
                                                                    Wireframe Design
                                                                </Typography>
                                                                <Typography style={{ paddingLeft: "10px" }} className={classes.projectCategoryTitle} variant="body1">
                                                                    Web site design & development
                                                                </Typography>
                                                            </Box>
                                                        </Box>
                                                    </Box>
                                                </Box>
                                            </Box>
                                        </Grid>
                                        <Grid item xs={12} sm={12} md={6} lg={4} xl={4}>
                                            <Box className="projectCategoryDesc">
                                                <img className={classes.projectImage} src={paintDesignImage} />
                                                <Box className="overlay">
                                                    <Box className={classes.projectCategory}>
                                                        <Box className="projectCategoryDetails">
                                                            <Box className={classes.projectCategoryInfo}>
                                                                <Typography style={{ paddingLeft: "10px" }} className={classes.projectCategoryHeading} variant="h4">
                                                                    Design & Creativity
                                                                </Typography>
                                                                <Typography style={{ paddingLeft: "10px" }} className={classes.projectCategoryTitle} variant="body1">
                                                                    Web site design & development
                                                                </Typography>
                                                            </Box>
                                                        </Box>
                                                    </Box>
                                                </Box>
                                            </Box>
                                        </Grid>
                                        <Grid item xs={12} sm={12} md={6} lg={4} xl={4}>
                                            <Box className="projectCategoryDesc">
                                                <img className={classes.projectImage} src={UiDesignImage} />
                                                <Box className="overlay">
                                                    <Box className={classes.projectCategory}>
                                                        <Box className="projectCategoryDetails">
                                                            <Box className={classes.projectCategoryInfo}>
                                                                <Typography style={{ paddingLeft: "10px" }} className={classes.projectCategoryHeading} variant="h4">
                                                                    UI/UX design
                                                                </Typography>
                                                                <Typography style={{ paddingLeft: "10px" }} className={classes.projectCategoryTitle} variant="body1">
                                                                    Web site design & development
                                                                </Typography>
                                                            </Box>
                                                        </Box>
                                                    </Box>
                                                </Box>
                                            </Box>
                                        </Grid>
                                        <Grid item xs={12} sm={12} md={6} lg={4} xl={4}>
                                            <Box className="projectCategoryDesc">
                                                <img className={classes.projectImage} src={developmentDesignImage} />
                                                <Box className="overlay">
                                                    <Box className={classes.projectCategory}>
                                                        <Box className="projectCategoryDetails">
                                                            <Box className={classes.projectCategoryInfo}>
                                                                <Typography style={{ paddingLeft: "10px" }} className={classes.projectCategoryHeading} variant="h4">
                                                                    Web Development
                                                                </Typography>
                                                                <Typography style={{ paddingLeft: "10px" }} className={classes.projectCategoryTitle} variant="body1">
                                                                    Web site design & development
                                                                </Typography>
                                                            </Box>
                                                        </Box>
                                                    </Box>
                                                </Box>
                                            </Box>
                                        </Grid>
                                        <Grid item xs={12} sm={12} md={6} lg={4} xl={4}>
                                            <Box className="projectCategoryDesc">
                                                <img className={classes.projectImage} src={mobileDesignImage} />
                                                <Box className="overlay">
                                                    <Box className={classes.projectCategory}>
                                                        <Box className="projectCategoryDetails">
                                                            <Box className={classes.projectCategoryInfo}>
                                                                <Typography style={{ paddingLeft: "10px" }} className={classes.projectCategoryHeading} variant="h4">
                                                                    Mobile App Design
                                                                </Typography>
                                                                <Typography style={{ paddingLeft: "10px" }} className={classes.projectCategoryTitle} variant="body1">
                                                                    Web site design & development
                                                                </Typography>
                                                            </Box>
                                                        </Box>
                                                    </Box>
                                                </Box>
                                            </Box>
                                        </Grid>
                                        <Grid item xs={12} sm={12} md={6} lg={4} xl={4}>
                                            <Box className="projectCategoryDesc">
                                                <img className={classes.projectImage} src={marketingDesignImage} />
                                                <Box className="overlay">
                                                    <Box className={classes.projectCategory}>
                                                        <Box className="projectCategoryDetails">
                                                            <Box className={classes.projectCategoryInfo}>
                                                                <Typography style={{ paddingLeft: "10px" }} className={classes.projectCategoryHeading} variant="h4">
                                                                    Digital Marketing
                                                                </Typography>
                                                                <Typography style={{ paddingLeft: "10px" }} className={classes.projectCategoryTitle} variant="body1">
                                                                    Web site design & development
                                                                </Typography>
                                                            </Box>
                                                        </Box>
                                                    </Box>
                                                </Box>
                                            </Box>
                                        </Grid>
                                    </Grid>
                                    <Box style={{ padding: "52px 0", textAlign: "center" }}>
                                        <Button className={classes.LearnButton}>Learn More</Button>
                                    </Box>
                                </Box>
                            </Box>
                        </Box>
                    </Box>
                </Container>
                {/* sunccess blog */}
                <Box className={classes.successBlogDes}>
                    <Container>
                        <Box>
                            <Box>
                                <Box>
                                    <Box className={classes.serviceBlogDesc}>
                                        <Typography style={{ backgroundColor: "#fff", padding: "1px", width: "4px", marginRight: "5px", marginTop: "2px" }}></Typography>
                                        <Typography style={{ backgroundColor: "#fff", padding: "1px", width: "30px", marginRight: "10px", marginTop: "2px" }}></Typography>
                                        <Typography style={{ color: "#fff" }} className={classes.serviceBlogTitle}>
                                            Service
                                        </Typography>
                                        <Typography style={{ backgroundColor: "#fff", padding: "1px", width: "30px", marginLeft: "10px", marginTop: "2px" }}></Typography>
                                        <Typography style={{ backgroundColor: "#fff", padding: "1px", width: "4px", marginLeft: "5px", marginTop: "2px" }}></Typography>
                                    </Box>
                                    <Box>
                                        <Typography style={{ textAlign: "center", color: "white" }} className={classes.serviceHeading} variant="h4">
                                            Our Success
                                        </Typography>
                                    </Box>
                                </Box>
                                <Box>
                                   <Counter/>
                                </Box>
                            </Box>
                        </Box>
                    </Container>
                </Box>
                {/* client review */}
                <Box className={classes.clientReview}>
                    <Container>
                        <Box>
                            <Grid container spacing={3}>
                                <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
                                    <Box className={classes.analysisTopTitle}>
                                        <Typography className={classes.analysisTitle}>Feedback</Typography>
                                        <Typography style={{ backgroundColor: "#ff8141", padding: "1px", width: "30px", marginLeft: "10px", marginTop: "2px" }}></Typography>
                                        <Typography style={{ backgroundColor: "#ff8141", padding: "1px", width: "4px", marginLeft: "5px", marginTop: "2px" }}></Typography>
                                    </Box>
                                    <Box className={classes.reviewDetails}>
                                        <Typography className={classes.reviewDetailsHeading} variant="h4">
                                            Clients Gives Us Excellent Feedback
                                        </Typography>
                                        <Typography className={classes.reviewDetailsTitle} variant="body1">
                                            Lorem ipsum dolor sit amet, consectetuer adipisci elit. Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut.
                                        </Typography>
                                    </Box>
                                    <Grid style={{ maxWidth: "570px" }} container alignItems="center" justifyContent="space-between" width="510px" spacing={2}>
                                        <Grid item>
                                            <Box>
                                                <Button className={classes.LearnButton}>give feedback</Button>
                                            </Box>
                                        </Grid>
                                        <Grid item>
                                            <Grid container alignItems="center">
                                                <Grid style={{ paddingRight: "13.84px" }} item>
                                                    <img className={classes.arrow} src={ArrowLeft} />
                                                </Grid>
                                                <Grid style={{ marginTop: "1px" }} item>
                                                    <img className={classes.arrow} src={ArrowRight} />
                                                </Grid>
                                            </Grid>
                                        </Grid>
                                    </Grid>
                                </Grid>
                                <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
                                    <Box className={classes.clientReviewDesc}>
                                        <Box className={classes.clientReviewDetails}>
                                            <Box className={classes.About_client}>
                                                <Box>
                                                    <img style={{ backgroundSize: "cover", backgroundPosition: "center" }} className={classes.client_image} src={userImage} />
                                                </Box>
                                                <Box className={classes.about_client_desc}>
                                                    <Typography className={classes.client_name} variant="h4">
                                                        Laverne K. Avis
                                                    </Typography>
                                                    <Typography className={classes.client_title} variant="h5">
                                                        CEO
                                                    </Typography>
                                                </Box>
                                            </Box>
                                            <Box>
                                                <Typography className={classes.client_review} variant="body1">
                                                    Lorem ipsum dolor sitt, consectetuer adipisci elit. Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut turpis. Suspendisse urna nibh, viverra non, semper. Praesent dapibus,
                                                    neque id cursus faucibus, tortor neque egestas auguae, eu vulputate magna eros eu erat.
                                                </Typography>
                                            </Box>
                                            <Box className={classes.quotesvg}>
                                                <img className={classes.quote_image} src={quote} />
                                            </Box>
                                        </Box>
                                    </Box>
                                </Grid>
                            </Grid>
                        </Box>
                    </Container>
                </Box>
                {/* {subscription} */}
                <Box>
                    <Container>
                        <Box className={classes.subscriptionHeader}>
                            <Box className={classes.subscriptionDesc}>
                                <Box className={classes.subscriptionDetails}>
                                    <Box className={classes.subscDesc}>
                                        <Typography className={classes.subscDescHeading} variant="h4">
                                            Subscribe Our Newsletter
                                        </Typography>
                                        <Typography className={classes.subscDescTitle} variant="body1">
                                            Lorem ipsum dolor sit amet, consectetuer adipisci elit. Donec odio. Quisque volutpat mattis eros. Nullam malesuada erat ut.
                                        </Typography>
                                    </Box>
                                    <Box className={classes.subsInfo}>
                                        <form className={classes.root} noValidate autoComplete="off">
                                            <Box className={classes.InputInfo}>
                                                <TextField className={classes.subscrInput} id="Enter your email" label="Enter your email" variant="outlined" color="danger" />
                                                <Box style={{ paddingLeft: "50px", background: "#FFFFFF", width: "200px" }}>
                                                    <Box className={classes.searchsvgbody}>
                                                        <img className={classes.searchsvg} src={sendsvg} />
                                                    </Box>
                                                </Box>
                                            </Box>
                                        </form>
                                    </Box>
                                </Box>
                            </Box>
                        </Box>
                    </Container>
                </Box>
                {/*latest news */}
                <Box>
                    <Container>
                        <Box>
                            <Box className={classes.serviceBlogDesc}>
                                <Typography style={{ backgroundColor: "#ff8141", padding: "1px", width: "4px", marginRight: "5px", marginTop: "2px" }}></Typography>
                                <Typography style={{ backgroundColor: "#ff8141", padding: "1px", width: "30px", marginRight: "10px", marginTop: "2px" }}></Typography>
                                <Typography className={classes.serviceBlogTitle}>Blog</Typography>
                                <Typography style={{ backgroundColor: "#ff8141", padding: "1px", width: "30px", marginLeft: "10px", marginTop: "2px" }}></Typography>
                                <Typography style={{ backgroundColor: "#ff8141", padding: "1px", width: "4px", marginLeft: "5px", marginTop: "2px" }}></Typography>
                            </Box>
                            <Box>
                                <Typography style={{ textAlign: "center" }} className={classes.serviceHeading} variant="h4">
                                    Our Latest News
                                </Typography>
                            </Box>

                            {/* card slider component */}
                            <CardSlider />
                            
                        </Box>
                    </Container>
                </Box>

                {/*footer*/}
                <Box className={classes.main_footer}>
                    <Container>
                        <Box className={classes.footer_desc}>
                            <Grid container spacing={3}>
                                <Grid item xs={12} sm={12} md={6} lg={3} xl={4}>
                                    <Box className={classes.footer_social_desc}>
                                        <Typography className={classes.footer_social_logo} variant="h4">
                                            ZEN
                                        </Typography>
                                        <Typography className={classes.footer_social_title} variant="body1">
                                            Morbi in sem quis dui placar Pellentesque odio nisi, euismod in, pharetra a, ultricies in, diam. Sed arcu. Cras consequat.
                                        </Typography>
                                    </Box>
                                    <Box className={classes.footer_socail_link}>
                                        <Box className={classes.social_link_icon_desc}>
                                            <img className={classes.social_link_icon} src={facebooksvg} />
                                        </Box>
                                        <Box className={classes.social_link_icon_desc}>
                                            <img className={classes.social_link_icon} src={twittersvg} />
                                        </Box>
                                        <Box className={classes.social_link_icon_desc}>
                                            <img className={classes.social_link_icon} src={linkedinsvg} />
                                        </Box>
                                        <Box className={classes.social_link_icon_desc}>
                                            <img className={classes.social_link_icon} src={instragramsvg} />
                                        </Box>
                                    </Box>
                                </Grid>
                                <Grid item xs={12} sm={12} md={6} lg={3} xl={2}>
                                    <Box>
                                        <Box>
                                            <Typography className={classes.footer_menu_heading} variant="h5">
                                                Menu
                                            </Typography>
                                            <ul className={classes.menu_item}>
                                                <li className={classes.menu_item_list}>
                                                    <Link className={classes.list_item} to="/">
                                                        Home
                                                    </Link>
                                                </li>
                                                <li className={classes.menu_item_list}>
                                                    <Link className={classes.list_item} to="/about">
                                                        About
                                                    </Link>
                                                </li>
                                                <li className={classes.menu_item_list}>
                                                    <Link className={classes.list_item} to="/users">
                                                        Users
                                                    </Link>
                                                </li>
                                                <li className={classes.menu_item_list}>
                                                    <Link className={classes.list_item} to="/contact">
                                                        Contact
                                                    </Link>
                                                </li>
                                            </ul>
                                        </Box>
                                    </Box>
                                </Grid>
                                <Grid item xs={12} sm={12} md={6} lg={2} xl={2}>
                                    <Box>
                                        <Box>
                                            <Typography className={classes.footer_menu_heading} variant="h5">
                                                Service
                                            </Typography>
                                            <ul className={classes.menu_item}>
                                                <li className={classes.menu_item_list}>
                                                    <Link className={classes.list_item} to="/digital-agency">
                                                        Digital Agency
                                                    </Link>
                                                </li>
                                                <li className={classes.menu_item_list}>
                                                    <Link className={classes.list_item} to="/Digital-Marketing">
                                                        Digital Marketing
                                                    </Link>
                                                </li>
                                                <li className={classes.menu_item_list}>
                                                    <Link className={classes.list_item} to="/Customer-Support">
                                                        Customer Support
                                                    </Link>
                                                </li>
                                                <li className={classes.menu_item_list}>
                                                    <Link className={classes.list_item} to="/Online-Service">
                                                        Online Service
                                                    </Link>
                                                </li>
                                            </ul>
                                        </Box>
                                    </Box>
                                </Grid>
                                <Grid item xs={12} sm={12} md={6} lg={4} xl={4}>
                                    <Box>
                                        <Typography className={classes.footer_menu_heading} variant="h5">
                                            Subscribe Newsletter
                                        </Typography>
                                        <Typography className={classes.footer_social_title} variant="body1">
                                            Morbi in sem quis dui placar Pellentesque odio nisi, euismod in, pharetra a.
                                        </Typography>
                                        <form>
                                            <Box className={classes.inputBody}>
                                                <input className={classes.inputField} type="text" placeholder="Enter your email" />
                                                <Box className={classes.sendsvg_img}>
                                                    <img className={classes.sendsvg} src={sendsvg} />
                                                </Box>
                                            </Box>
                                        </form>
                                    </Box>
                                </Grid>
                            </Grid>
                        </Box>
                        <Box>
                            <Typography className={classes.footer_end_title} variant="body1">
                                Morbi in sem quis dui placar Pellentesque odio nisi, euismod in, pharetra a.
                            </Typography>
                        </Box>
                    </Container>
                </Box>
            </Box>
        </div>
    );
}
