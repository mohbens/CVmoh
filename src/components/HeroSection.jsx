// HeroSection.jsx
import { Box, Typography } from "@mui/material";
import { Code } from "@mui/icons-material";
import AnimatedBlob from "./AnimationBlob";
// import a from "../assets";

const HeroSection = () => (
	<Box
		sx={{
			minHeight: "100vh",
			display: "flex",
			alignItems: "center",
			justifyContent: "center",
			flexDirection: "column",
			textAlign: "center",
			padding: 4,
			overflow: "hidden",
			position: "relative",
		}}>
		<AnimatedBlob imageSrc="../assets/Profile.PNG" />

		<Typography
			variant="h2"
			sx={{
				color: "primary.main",
				mt: 4,
				mb: 2,
				textShadow: "0 0 15px rgba(100, 255, 218, 0.4)",
			}}>
			Mohamed Benselama
		</Typography>

		<Typography
			variant="h4"
			sx={{
				color: "text.secondary",
				display: "flex",
				alignItems: "center",
				gap: 1,
			}}>
			<Code fontSize="inherit" />
			Full Stack Developer
		</Typography>
	</Box>
);

export default HeroSection;
