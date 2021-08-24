import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) =>
    createStyles({
        //about us styles
        mainHeader: {
            background: "#F8F9FE",
            paddingTop: "1px",
        },
        mainBlog: {
            alignItems: "center",
            padding: "150px 20px 0 20px",
        },
        blogImage: {
            width: "100%",
            height: "500px",
            borderRadius: "5px",
            [theme.breakpoints.down("sm")]: {
                paddingBottom: "100px",
                height: "auto",
                width: "100%",
            },
        },
        ImageBlog: {
            marginRight: "30px",
            [theme.breakpoints.down("sm")]: {
                marginRight: "0",
            },
        },
        BlogContent: {
            marginLeft: "30px",
            [theme.breakpoints.down("sm")]: {
                marginLeft: "0",
            },
        },
        blogDesc: {
            display: "flex",
            alignItems: "center",
        },
        blogTitle: {
            color: "#FC7C2C",
            fontFamily: "'Poppins', sans-serif",
        },
        blogHeading: {
            fontWeight: "600",
            fontStyle: "normal",
            fontSize: "40px",
            color: '#333333',
            fontFamily: "'Poppins', sans-serif",
            [theme.breakpoints.down('md')]:{
                fontWeight: "600",
                fontStyle: "normal",
                fontSize: "28px",
            },
            [theme.breakpoints.down('sm')]:{
                fontWeight: "600",
                fontStyle: "normal",
                fontSize: "20px",
            },
           
        },
        agencytitle: {
            paddingTop: "20px",
            color: "#666666",
            fontSize: "16px",
        },
        gridBox: {
            height: "60px",
            width: "60px",
            backgroundColor: "#CECEE1",
            borderRadius: "5px",
            position: "relative",
        },
        MiddleGridBox: {
            height: "45px",
            width: "45px",
            backgroundColor: "#2A2273",
            borderRadius: "5px",
            position: "absolute",
            margin: "8px",
        },
        agencyDetails: {
            display: "flex",
            alignItems: "center",
            paddingTop: "30px",
            [theme.breakpoints.down("md")]: {
                display: "block",
            },
            [theme.breakpoints.down("sm")]: {
                display: "flex",
            },
            [theme.breakpoints.down("xs")]: {
                display: "flex",
            },
        },
        agencyContent: {
            marginLeft: "15px",
            [theme.breakpoints.down("md")]: {
                marginLeft: "0",
                marginTop: "10px",
            },
            [theme.breakpoints.down("sm")]: {
                marginLeft: "15px",
            },
            [theme.breakpoints.down("xs")]: {
                marginLeft: "15px",
            },
        },
        agencyHeading: {
            fontWeight: "600",
            fontSize: "20px",
            color: "#333333",
            marginBottom: "5px",
            fontFamily: "'Poppins', sans-serif",
            [theme.breakpoints.down("md")]: {
                fontSize:'19px',
            },
            [theme.breakpoints.down("sm")]: {
                fontSize:'17px',
            },
            [theme.breakpoints.down("xs")]: {
                fontSize:'15px',
            },
        },
        agencyTitle: {
            color: "#666666",
            fontSize: "17px",
            marginTop: "5px",
            fontFamily: "'Poppins', sans-serif",
            [theme.breakpoints.down("md")]: {
                fontSize:'16px',
            },
            [theme.breakpoints.down("sm")]: {
                fontSize:'15px',
            },
            [theme.breakpoints.down("xs")]: {
                fontSize:'14px',
            },
        },
        btnBody: {
            margin: "45px 0 0 0",
        },
        LearnButton: {
            background: "#FF8618",
            border: 0,
            borderRadius: "5px",
            color: "white",
            height: "50px",
            padding: "0 30px",
            fontWeight: "600",
            fontFamily: "'Poppins', sans-serif",
            "&:hover": {
                background: "#e67610",
            },
            [theme.breakpoints.down('xs')]:{
                padding:'0 20px',
                fontSize:'12px',
                height:'40px',
            },  
        },

        //our service styles

        serviceBlogDesc: {
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
        },
        serviceBlogTitle: {
            color: "#FC7C2C",
            fontFamily: "'Poppins', sans-serif",
        },
        serviceMainBlog: {
            padding: "150px 0",
        },
        serviceBlogHeader: {
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
        },
        serviceHeading: {
            fontSize:'40px',
            fontWeight: "600",
            color: "#333333",
            fontFamily: "'Poppins', sans-serif",
            paddingBottom:'40px',
            [theme.breakpoints.down('md')]:{
                fontSize:'35px',
            },
            [theme.breakpoints.down('sm')]:{
                fontSize:'30px',
            },
            [theme.breakpoints.down('xs')]:{
                fontSize:'20px',
            },
           
        },
        serviceCategoryMainHeader: {
            paddingTop: "40px",
        },
        serviceCategory: {
            // display: 'flex',
            // justifyContent:'center',
            // alignItems:'center',
        },
        wireFrameBox: {
            backgroundColor: "white",
            borderRadius: "10px",
            padding: "40px 30px",
            margin: "auto",
            cursor: "pointer",
            transition: "0.3s",
            "&:hover": {
                boxShadow: "0px 20px 60px #77777711",
                transition: "0.3s",
            },
            [theme.breakpoints.only("md")]: {
                width: "88%",
                height: "280px",
                margin: "auto",
                display: "inline-block",
            },
            [theme.breakpoints.only("sm")]: {
                width: "91%",
            },
        },
        imageBox: {
            display: "inline-block",
            backgroundColor: "#FFE5D6",
            width: "60px",
            height: "60px",
            borderRadius: "5px",
        },
        wireframeSvg: {
            width: "45px",
            height: "45px",
            borderRadius: "5px",
            backgroundColor: "#FF7C3B",
            margin: "8px",
        },
        PvgImg: {
            margin: "8px",
        },
        serviceCategoryHeading: {
            color: "#333333",
            fontSize: "25px",
            fontWeight: "600",
            fontFamily: "'Poppins', sans-serif",
            [theme.breakpoints.down('md')]:{
                fontSize:'22px'
            },
            [theme.breakpoints.down('sm')]:{
                fontSize:'19px'
            },
            [theme.breakpoints.down('xs')]:{
                fontSize:'15px'
            },
        },
        serviceCategoryTitle: {
            color: "#666666",
            fontSize: "19px",
            fontFamily: "'Poppins', sans-serif",
            [theme.breakpoints.down('md')]:{
                fontSize:'18px'
            },
            [theme.breakpoints.down('sm')]:{
                fontSize:'16px'
            },
            [theme.breakpoints.down('xs')]:{
                fontSize:'15px'
            },
        },

        paintimageBox: {
            display: "inline-block",
            backgroundColor: "#FFDAE5",
            width: "60px",
            height: "60px",
            borderRadius: "5px",
        },
        paintSvg: {
            width: "45px",
            height: "45px",
            borderRadius: "5px",
            backgroundColor: "#FD477D",
            margin: "8px",
        },
        paintSvgImg: {
            margin: "8px",
        },

        // analysis styles
        analysisMainBlog: {
            padding: "0 20px",
        },
        analysisBlog: {
            padding: "0 0 150px 0",
        },
        analysisSingleBlog: {
            [theme.breakpoints.down("md")]: {
                paddingBottom: "100px",
            },
        },

        analysisImage: {
            width: "100%",
            height: "100%",
            borderRadius: "5px",

            [theme.breakpoints.down("sm")]: {
                height: "auto",
                width: "100%",
            },
        },
        playvideoInfo: {
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "auto",
        },

        playsvgimg: {
            width: "17px",
            height: "23px",
            margin: "auto",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100%",
        },

        analysisTopTitle: {
            display: "flex",
            alignItems: "center",
        },
        analysisTitle: {
            color: "#ff8141",
            fontFamily: "'Poppins', sans-serif",
        },
        analysisHeading: {
            fontWeight: "600",
            fontStyle: "normal",
            fontSize: "40px",
            color: '#333333',
            fontFamily: "'Poppins', sans-serif",
            [theme.breakpoints.down('md')]:{
                fontWeight: "600",
                fontStyle: "normal",
                fontSize: "28px",
            },
            [theme.breakpoints.down('sm')]:{
                fontWeight: "600",
                fontStyle: "normal",
                fontSize: "20px",
            },
        },
        analysisdesc: {
            padding: "20px 0 30px 0",
            color: "#666666",
            fontSize: "16px",
            fontFamily: "'Poppins', sans-serif",
        },
        analysisItemList: {
            display: "flex",
            alignItems: "center",
            paddingTop: "15px",
        },
        checkpsvBody: {
            width: "30px",
            height: "30px",
            backgroundColor: "#F9E6DF",
            borderRadius: "100%",
        },
        checkSvg: {
            width: '23px',
            margin: '-2px',
            paddingTop: '7px',
            paddingLeft: '10px',
        },
        checkListItem: {
            color: "rgba(95, 107, 120, 1)",
            paddingLeft: "15px",
            fontFamily: "'Poppins', sans-serif",
        },

        //project styles
        // projectCategoryDesc:{
        //     width: '100%',
        //     height: '100%',
        //     cursor:'pointer',
        //     position:'relative',
        //     borderRadius:'5px',
        // },
        // overlay:{
        //     top:'0',
        //     bottom:'0',
        //     right:'0',
        //     left:'0',
        //     height:'100%',
        //     width:'100%',
        //     background: '#2a2273b0',
        //     position: 'absolute',
        //     borderRadius:'5px',
        // },
        projectImage: {
            width: "100%",
            height: "330px",
            borderRadius: "5px",
            [theme.breakpoints.down("sm")]: {
                height: "100%",
            },
        },
        projectCategory: {
            display: "flex",
            justifyContent: "center",
        },
        // projectCategoryDetails:{
        //     position: 'absolute',
        //     bottom:'30px',
        //     width: '310px',
        //     height: '48px',
        //     background: 'white',
        //     padding:'10px',
        //     borderRadius:'5px',
        // },
        projectCategoryInfo: {
            borderLeft: "3px solid #BFBFBF",
        },
        projectCategoryHeading: {
            color: "#333333",
            fontSize: "22px",
            fontWeight: "600",
            fontFamily: "'Poppins', sans-serif",
        },
        projectCategoryTitle: {
            color: "#333333",
        },
        //success styles
        customerReviewBlog: {
            display: "flex",
            justifyContent: "space-between",
            paddingTop: "60px",
            [theme.breakpoints.down("xs")]: {
                display: "block",
            },
        },
        customerReviewSingleBlog: {
            textAlign: "center",
            [theme.breakpoints.only("xs")]: {
                paddingBottom: "50px",
            },
        },
        successBlogDes: {
            padding: "80px 0",
            background: "#2A2273",
            borderRadius: "10px",
        },

        EmojiSvg: {
            height: "34px",
            width: "34px",
        },
        customerReviewHeading: {
            color: "#fff",
            fontSize: "20px",
            fontWeight: "600",
            paddingTop: "9.9px",
            margin: "auto",
            fontFamily: "'Poppins', sans-serif",
        },
        customerReviewTitle: {
            color: "#CDCBDE",
            fontSize: "20px",
            fontWeight: "600",
            paddingTop: "5px",
            fontFamily: "'Poppins', sans-serif",
        },

        //client feedback styles
        clientReview: {
            padding: "150px 0",
        },
        reviewDetailsHeading: {
            fontWeight: "600",
            fontStyle: "normal",
            fontSize: "40px",
            color: '#333333',
            fontFamily: "'Poppins', sans-serif",
            [theme.breakpoints.down('md')]:{
                fontWeight: "600",
                fontStyle: "normal",
                fontSize: "28px",
                width: 'auto',
            },
            [theme.breakpoints.down('sm')]:{
                fontWeight: "600",
                fontStyle: "normal",
                fontSize: "20px",
            },
        },
        reviewDetailsTitle: {
            padding: "30px 0",
            color: "#666666",
            fontFamily: "'Poppins', sans-serif",
            width:'510px',
            [theme.breakpoints.down('md')]:{
                fontSize:'15px',
                width:'auto',
            },
            [theme.breakpoints.down('sm')]:{
                fontSize:'14px'
            },
            [theme.breakpoints.down('xs')]:{
                fontSize:'13px'
            },
        },
        arrow: {
            cursor: "pointer",
        },
        clientReviewDesc: {
            width: "100%",
            height: "auto",
            borderRadius: "10px",
            background: "#FFFFFF",
            boxShadow: "0px 20px 60px #77777711",
        },
        clientReviewDetails: {
            position: "relative",
            padding: "40px 40px 70px 40px",
        },
        About_client: {
            display: "flex",
            alignItems: "center",
        },
        client_image: {
            width: "80px",
            height: "80px",
            borderRadius: "100%",
        },
        quotesvg: {
            position: "absolute",
            right: "8%",
            bottom: "7%",
        },
        quote_image: {
            width: "47px",
            height: "41px",
        },
        about_client_desc: {
            marginLeft: "25px",
        },
        client_name: {
            fontSize: "20px",
            fontWeight: "600",
            color: "#333333",
            fontFamily: "'Poppins', sans-serif",
            [theme.breakpoints.down('md')]:{
                fontSize:'18px'
            },
            [theme.breakpoints.down('sm')]:{
                fontSize:'16px'
            },
            [theme.breakpoints.down('xs')]:{
                fontSize:'13px'
            },
        },
        client_title: {
            color: "#666666",
            fontSize: "18px",
            paddingTop: "12px",
            fontWeight: "600",
            fontFamily: "'Poppins', sans-serif",
            [theme.breakpoints.down('md')]:{
                fontSize:'17px'
            },
            [theme.breakpoints.down('sm')]:{
                fontSize:'15px'
            },
            [theme.breakpoints.down('xs')]:{
                fontSize:'12px'
            },
        },
        client_review: {
            paddingTop: "25px",
            color: "#666666",
            fontSize: "16px",
            fontFamily: "'Poppins', sans-serif",
            [theme.breakpoints.down('md')]:{
                fontSize:'15px'
            },
            [theme.breakpoints.down('sm')]:{
                fontSize:'14px'
            },
            [theme.breakpoints.down('xs')]:{
                fontSize:'13px'
            },
        },

        //subscription
        subscriptionHeader: {
            paddingBottom: "150px",
        },
        subscriptionDesc: {
            height: "auto",
            background: "#FFFFFF",
            borderRadius: "10px",
            boxShadow: "0px 0px 30px #0A053E0F",
            padding: "40px",
        },
        subscriptionDetails: {
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            width: "100%",
            [theme.breakpoints.down("sm")]: {
                display: "block",
            },
        },
        subscDesc: {
            width: "50%",
            [theme.breakpoints.down("sm")]: {
                width: "100%",
            },
        },
        subscDescHeading: {
            color: "#333333",
            fontWeight: "600",
            fontSize: "24px",
            fontFamily: "'Poppins', sans-serif",
            [theme.breakpoints.down('sm')]:{
                fontSize:'20px',
            },
            [theme.breakpoints.down('xs')]:{
                fontSize:'18px',
            },
        },
        subscDescTitle: {
            color: "#666666",
            fontSize: "17px",
            paddingTop: "15px",
            fontFamily: "'Poppins', sans-serif",
            width:'501px',
            [theme.breakpoints.down('md')]:{
                fontSize:'15px',
                width:'auto',
            },
            [theme.breakpoints.down('sm')]:{
                fontSize:'14px'
            },
            [theme.breakpoints.down('xs')]:{
                fontSize:'13px'
            },
        },
        subscrInput: {
            width: "100%",
            height: "60px",
            fontFamily: "'Poppins', sans-serif",
        },
        InputInfo: {
            position: "relative",
        },
        searchsvgbody: {
            width: "40px",
            height: "40px",
            borderRadius: "100%",
            background: "#2A2273",
            position: "absolute",
            top: "13%",
            right: "3%",
            cursor: "pointer",
            marginLeft: "30px",
        },
        searchsvg: {
            width: "18px",
            height: "28px",
            margin: "auto",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            paddingTop: "10px",
            paddingRight: "3px",
        },
        subsInfo: {
            width: "50%",

            [theme.breakpoints.down("sm")]: {
                width: "100%",
                paddingTop: "30px",
            },
        },
        //card styles

        main_footer: {
            background: "#0A053E",
            padding: "108px 0 36.5px 0",
        },

        //footer styles

        footer_desc: {
            borderBottom: "2px solid #FFFFFF",
            paddingBottom: "35px",
        },

        footer_social_desc: {},
        footer_social_logo: {
            color: "#FFF",
            fontWeight: "700",
            fontSize: "30px",
            fontFamily: "'Poppins', sans-serif",
        },
        footer_social_title: {
            color: "#fff",
            fontSize: "16px",
            padding: "30px 0",
            fontFamily: "'Poppins', sans-serif",
            [theme.breakpoints.down('md')]:{
                fontSize:'15px',
                width:'auto',
            },
            [theme.breakpoints.down('sm')]:{
                fontSize:'14px'
            },
            [theme.breakpoints.down('xs')]:{
                fontSize:'13px'
            },
        },
        footer_socail_link: {
            display: "flex",
            alignItems: "center",
        },
        social_link_icon_desc: {
            border: "1px solid gray",
            width: "30px",
            height: "30px",
            borderRadius: "100%",
            cursor: "pointer",
            marginRight: "15px",
            transition: "0.3s",
            "&:hover": {
                background: "#FC7C2C",
                border: "1px solid transparent",
                transition: "0.3s",
            },
        },
        social_link_icon: {
            height: "20px",
            width: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            paddingTop: "8px",
        },
        footer_menu_heading: {
            fontSize:'22px',
            color: "white",
            paddingBottom: "20px",
            color:'#FFFFFF',
            fontFamily: "'Poppins', sans-serif",
            [theme.breakpoints.down('sm')]:{
                fontSize:'16px',
            },
        },
        menu_item: {
            padding: "0",
        },
        menu_item_list: {
            paddingBottom: "17px",
        },
        list_item: {
            color: "#FFF",
            textDecoration: "none",
            fontSize: "14px",
            fontFamily: "'Poppins', sans-serif",
            [theme.breakpoints.down('sm')]:{
                fontSize:'13px',
            },
        },
        inputBody: {
            width: "90%",
            height: "50px",
            position: "relative",
        },
        inputField: {
            width: "100%",
            height: "50px",
            background: "#FFF",
            borderRadius: "5px",
            fontSize: "17px",
            padding: "0 15px",
            fontFamily: "'Poppins', sans-serif",
        },
        sendsvg_img: {
            top: "6px",
            right: "15px",
            position: "absolute",
            width: "40px",
            height: "40px",
            background: "#FC7C2C",
            borderRadius: "100%",
            cursor: "pointer",
        },
        sendsvg: {
            width: "18px",
            height: "100%",
            marginLeft: "9px",
        },
        footer_end_title: {
            fontSize: "17px",
            color: "#FFF",
            padding: "30px 0",
            textAlign: "center",
            fontFamily: "'Poppins', sans-serif",
            [theme.breakpoints.down('md')]:{
                fontSize:'15px',
                width:'auto',
            },
            [theme.breakpoints.down('sm')]:{
                fontSize:'14px'
            },
            [theme.breakpoints.down('xs')]:{
                fontSize:'13px'
            },
        },
    })
);

export default useStyles;
