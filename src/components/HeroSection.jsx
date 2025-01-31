// HeroSection.jsx
import { Box, Typography } from "@mui/material";
import { Code } from "@mui/icons-material";
import AnimatedBlob from "./AnimationBlob";
import KeyboardDoubleArrowDownIcon from "@mui/icons-material/KeyboardDoubleArrowDown";
// import a from "../assets";

const HeroSection = ({ isScrolled }) => (
	<Box
		sx={{
			display: "flex",
			flexDirection: "column",
			alignItems: "center",
			textAlign: "center",
			padding: isScrolled ? 4 : 0,
			transform: isScrolled ? "scale(0.8)" : "scale(1)",
			transition: "all 0.5s cubic-bezier(0.4, 0, 0.2, 1)",
			width: "100%",
		}}>
		<AnimatedBlob imageSrc="../assets/Profile.PNG" />

		<Typography
			variant="h2"
			sx={{
				color: "primary.main",
				mt: 4,
				mb: 2,
				textShadow: "0 0 15px rgba(100, 255, 218, 0.4)",
				fontSize: {
					xs: "1.8rem",
					sm: isScrolled ? "2rem" : "2.5rem",
					md: isScrolled ? "2.5rem" : "3rem",
				},
			}}>
			Mohamed BENSELAMA
		</Typography>

		<Typography
			variant="h4"
			sx={{
				color: "text.secondary",
				display: "flex",
				alignItems: "center",
				fontSize: {
					xs: "1.2rem",
					sm: isScrolled ? "1.5rem" : "1.8rem",
					md: isScrolled ? "2rem" : "2.5rem",
				},
			}}>
			<Code fontSize="inherit" sx={{ mr: "8px" }} />
			Full Stack Developer
		</Typography>
	</Box>
);

export default HeroSection;
