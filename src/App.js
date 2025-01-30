// App.jsx
import {
	Box,
	CssBaseline,
	Link,
	ThemeProvider,
	Typography,
	createTheme,
} from "@mui/material";
import ProjectList from "./components/ProjectList";
import { Code, Email, GitHub, LinkedIn } from "@mui/icons-material";
import { styled } from "@mui/system";
import { GlobalStyles } from "@mui/material";
import HeroSection from "./components/HeroSection";

const theme = createTheme({
	palette: {
		mode: "dark",
		primary: {
			main: "#64ffda",
		},
		background: {
			default: "#0a192f",
			paper: "#172a45",
		},
		text: {
			primary: "#ccd6f6",
			secondary: "#8892b0",
		},
	},
	typography: {
		fontFamily: "'Fira Code', monospace",
	},
});

const BlobContainer = styled("div")(({ theme }) => ({
	position: "relative",
	width: 300,
	height: 300,
	margin: "40px auto",
	borderRadius: "50%",
	overflow: "hidden",
	filter: "url(#goo)",
	"&::before": {
		content: '""',
		position: "absolute",
		width: "100%",
		height: "100%",
		background: theme.palette.primary.main,
		animation: "float 6s ease-in-out infinite",
	},
	"&:hover": {
		"&::before": {
			transform: "scale(1.1)",
		},
	},
	"@keyframes float": {
		"0%, 100%": {
			borderRadius: "60% 40% 30% 70%/60% 30% 70% 40%",
			transform: "translateY(0)",
		},
		"50%": {
			borderRadius: "50% 60% 70% 40%/50% 60% 30% 60%",
			transform: "translateY(-20px)",
		},
	},
}));

const ProfileImage = styled("img")({
	position: "relative",
	zIndex: 1,
	width: "100%",
	height: "100%",
	objectFit: "cover",
	borderRadius: "50%",
});

// const HeroSection = () => (
// 	<Box
// 		sx={{
// 			minHeight: "100vh",
// 			display: "flex",
// 			alignItems: "center",
// 			justifyContent: "center",
// 			flexDirection: "column",
// 			textAlign: "center",
// 			padding: 4,
// 			position: "relative",
// 			overflow: "hidden",
// 		}}>
// 		<GlobalStyles
// 			styles={{
// 				".blob-filter": {
// 					display: "none",
// 				},
// 			}}
// 		/>

// 		{/* SVG filter for blob effect */}
// 		<svg style={{ position: "absolute" }}>
// 			<filter id="goo">
// 				<feGaussianBlur in="SourceGraphic" stdDeviation="10" result="blur" />
// 				<feColorMatrix
// 					in="blur"
// 					mode="matrix"
// 					values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 20 -10"
// 					result="goo"
// 				/>
// 				<feComposite in="SourceGraphic" in2="goo" operator="atop" />
// 			</filter>
// 		</svg>

// 		<BlobContainer>
// 			<ProfileImage
// 				src="/your-photo.jpg" // Replace with your image path
// 				alt="Mohamed Benselama"
// 			/>
// 		</BlobContainer>

// 		<Typography
// 			variant="h2"
// 			sx={{
// 				color: "primary.main",
// 				mb: 2,
// 				textShadow: "0 0 10px rgba(100, 255, 218, 0.5)",
// 			}}>
// 			Mohamed Benselama
// 		</Typography>
// 		<Typography variant="h4" sx={{ color: "text.secondary" }}>
// 			<Code sx={{ mr: 1 }} /> Full Stack Developer
// 		</Typography>
// 	</Box>
// );

const AboutSection = () => (
	<Box sx={{ padding: 4, maxWidth: "800px", margin: "0 auto" }}>
		<Typography variant="h4" gutterBottom sx={{ fontWeight: 700, mb: 4 }}>
			À propos
		</Typography>
		<Typography variant="body1" paragraph sx={{ color: "text.secondary" }}>
			Développeur web passionné spécialisé dans React . J'aime créer des
			solutions élégantes et performantes pour des problèmes complexes.
		</Typography>
	</Box>
);

const ContactSection = () => (
	<Box sx={{ padding: 4, textAlign: "center" }}>
		<Typography variant="h4" gutterBottom sx={{ fontWeight: 700, mb: 4 }}>
			Contact
		</Typography>
		<Box sx={{ display: "flex", justifyContent: "center", gap: 4 }}>
			<Link href="mohbenselama@gmail.com" color="inherit">
				<Email sx={{ fontSize: 40, color: "primary.main" }} />
			</Link>
			<Link href="https://github.com/mohbens" target="_blank" rel="noopener">
				<GitHub sx={{ fontSize: 40, color: "primary.main" }} />
			</Link>
			<Link
				href="https://www.linkedin.com/in/mohamed-redha-benselama/"
				target="_blank"
				// rel="noopener"
			>
				<LinkedIn sx={{ fontSize: 40, color: "primary.main" }} />
			</Link>
		</Box>
	</Box>
);

function App() {
	return (
		<ThemeProvider theme={theme}>
			<CssBaseline />
			<HeroSection />
			<AboutSection />
			<ProjectList />
			<ContactSection />
		</ThemeProvider>
	);
}

export default App;
