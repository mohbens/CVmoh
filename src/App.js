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

import { useEffect, useState } from "react";
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

const AboutSection = () => (
	<Box>
		<Box sx={{ padding: 4, maxWidth: "1200px", margin: "0 auto" }}>
			<Typography variant="h4" gutterBottom sx={{ fontWeight: 700, mb: 4 }}>
				À propos
			</Typography>
			<Typography variant="body1" paragraph sx={{ color: "text.secondary" }}>
				Développeur web passionné spécialisé dans React . J'aime créer des
				solutions élégantes et performantes pour des problèmes complexes.
			</Typography>
		</Box>
		<hr
			style={{
				width: "75%",
			}}></hr>
	</Box>
);

const ContactSection = () => (
	<Box sx={{ padding: 4, margin: "0 auto" }}>
		<hr
			style={{
				width: "75%",
			}}></hr>
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
	</Box>
);

function App() {
	const [isScrolled, setIsScrolled] = useState(false);

	useEffect(() => {
		const handleScroll = () => {
			setIsScrolled(window.scrollY > 100);
		};

		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	return (
		<ThemeProvider theme={theme}>
			<CssBaseline />
			<Box sx={{ position: "relative", minHeight: "100vh" }}>
				{/* Animated Hero Section */}
				<Box
					sx={{
						position: isScrolled ? "fixed" : "relative",
						top: 0,
						left: 0,
						width: isScrolled ? "20%" : "100%",
						height: "100vh",
						display: "flex",
						alignItems: "center",
						justifyContent: "center",
						transition: "all 0.5s cubic-bezier(0.4, 0, 0.2, 1)",
						zIndex: 2,
						background: theme.palette.background.default,
					}}>
					<HeroSection isScrolled={isScrolled} />

					{/* Vertical Separator */}
					<Box
						sx={{
							position: "absolute",
							right: 0,
							top: 0,
							height: "90%",
							width: "2px",
							background: theme.palette.primary.main,
							opacity: isScrolled ? 1 : 0,
							transition: "opacity 0.3s 0.2s",
							alignSelf: "anchor-center",
						}}
					/>
				</Box>

				{/* Content Section */}
				<Box
					sx={{
						position: "relative",
						marginLeft: isScrolled ? "20%" : 0,
						paddingLeft: 4,
						transition: "margin-left 0.5s cubic-bezier(0.4, 0, 0.2, 1)",
						zIndex: 1,
					}}>
					<AboutSection />
					<ProjectList />
					<ContactSection />
				</Box>
			</Box>
		</ThemeProvider>
	);
}

export default App;
