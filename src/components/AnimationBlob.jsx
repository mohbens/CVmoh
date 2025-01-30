// components/AnimatedBlob.jsx
import { styled } from "@mui/system";
import { Box } from "@mui/material";
import { keyframes } from "@emotion/react";

const float = keyframes`
  0%, 100% {
    border-radius: 50% 50% 60% 40% / 60% 40% 60% 40%;
	
    transform: translateY(0);
  }
  50% {
    border-radius: 60% 40% 50% 50% / 40% 60% 40% 60%;
    transform: translateY(-20px);
  }
`;

const BlobContainer = styled(Box)(({ theme }) => ({
	position: "relative",
	width: 280, // Slightly reduced size for better proportion
	height: 280,
	borderRadius: "50%",
	animation: `${float} 6s ease-in-out infinite`,
	overflow: "hidden",
	"&:before": {
		content: '""',
		position: "absolute",
		width: "110%",
		height: "110%",
		left: "-5%",
		top: "-5%",
		background: theme.palette.primary.main,
		mixBlendMode: "soft-light",
		opacity: 0.4,
		filter: "blur(25px)",
		zIndex: -1,
	},
}));

const ProfileImage = styled("img")({
	width: "100%",
	height: "100%",
	objectFit: "cover",
	borderRadius: "inherit",
	position: "relative",
	zIndex: 1,
	padding: "4px", // Adds small border space
	border: "2px solid rgba(100, 255, 218, 0.1)", // Subtle border
});

const AnimatedBlob = () => (
	<BlobContainer>
		<ProfileImage
			src={require("../assets/Profile.png")} // Updated path
			alt="Mohamed Benselama"
		/>
	</BlobContainer>
);

export default AnimatedBlob;
