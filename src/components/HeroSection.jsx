import { Box, Typography } from "@mui/material";
import { Code } from "@mui/icons-material";
import AnimatedBlob from "./AnimationBlob";
import AlternateEmailIcon from "@mui/icons-material/AlternateEmail";
import SmartphoneIcon from "@mui/icons-material/Smartphone";
// opacity: { xs: isScrolled ? 0 : 1, sm: 1, sx: 1 },

const HeroSection = ({ isScrolled }) => (
	<Box>
		<Box
			sx={{
				display: "flex",
				flexDirection: "column",
				alignItems: "center",
				textAlign: "center",
				padding: { xs: 2, sm: isScrolled ? 4 : 0 },
				transform: {
					xs: "scale(1)",
					sm: isScrolled ? "scale(0.8)" : "scale(1)",
				},
				transition: "all 0.5s cubic-bezier(0.4, 0, 0.2, 1)",
				width: "100%",
			}}>
			<AnimatedBlob imageSrc="../assets/Profile.PNG" />

			<Typography
				variant="h2"
				sx={{
					mt: { xs: 2, sm: 4 },
					mb: { xs: 1, sm: 2 },
					fontSize: {
						xs: "1.5rem",
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
	</Box>
);

export default HeroSection;
