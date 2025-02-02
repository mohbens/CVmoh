// HeroSection.jsx
import { Box, Typography } from "@mui/material";
import { Code } from "@mui/icons-material";
import AnimatedBlob from "./AnimationBlob";
import AlternateEmailIcon from "@mui/icons-material/AlternateEmail";
import SmartphoneIcon from "@mui/icons-material/Smartphone";

// import KeyboardDoubleArrowDownIcon from "@mui/icons-material/KeyboardDoubleArrowDown";
// import a from "../assets";

const HeroSection = ({ isScrolled }) => (
	<Box>
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
						sm: isScrolled ? "1.3rem" : "1.8rem",
						md: isScrolled ? "2rem" : "3rem",
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
						sm: isScrolled ? "1rem" : "1.5rem",
						md: isScrolled ? "1.8rem" : "2.3rem",
					},
				}}>
				<Code fontSize="inherit" sx={{ mr: "8px" }} />
				Full Stack Dev
			</Typography>
			<Box
				sx={{
					mt: isScrolled ? "80px" : "",
					display: isScrolled ? "" : "flex",
					flexDirection: "column",
					alignItems: "center",
					textAlign: "center",
				}}>
				<Typography
					variant="h4"
					sx={{
						opacity: isScrolled ? 1 : 0,
						color: "text.secondary",
						display: "flex",
						alignItems: "center",
						fontSize: {
							xs: "1.2rem",
							sm: isScrolled ? "1rem" : "1.5rem",
							md: isScrolled ? "1.8rem" : "2.3rem",
						},
					}}>
					<AlternateEmailIcon
						sx={{
							fontSize: {
								xs: "1.2rem",
								sm: isScrolled ? "1rem" : "1.5rem",
								md: isScrolled ? "1.8rem" : "2.3rem",
							},
							mr: "8px",
						}}
					/>
					mohbenselama@gmail.com
				</Typography>
				<Typography
					variant="h4"
					sx={{
						opacity: isScrolled ? 1 : 0,
						color: "text.secondary",
						display: "flex",
						alignItems: "center",
						fontSize: {
							xs: "1.2rem",
							sm: isScrolled ? "1rem" : "1.5rem",
							md: isScrolled ? "1.8rem" : "2.3rem",
						},
					}}>
					<SmartphoneIcon
						sx={{
							fontSize: {
								xs: "1.2rem",
								sm: isScrolled ? "1rem" : "1.5rem",
								md: isScrolled ? "1.8rem" : "2.3rem",
							},
							mr: "8px",
						}}
					/>
					+213 675996701
				</Typography>
			</Box>
		</Box>
		{/* <Box
			sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
			<KeyboardDoubleArrowDownIcon
				sx={{
					transition: "transform 0.2s",
					"&:hover": { transform: "translateY(-10px)" },
				}}
			/>
			<hr
				style={{
					width: "75%",
				}}></hr>
		</Box> */}
	</Box>
);

export default HeroSection;
