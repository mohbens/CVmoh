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
import { Email, GitHub, LinkedIn } from "@mui/icons-material";
import HeroSection from "./components/HeroSection";
import { useEffect, useState } from "react";
import SkillsSection from "./components/SkillsSection";
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

const AboutSection = () => (
	<Box>
		<Box sx={{ padding: 4, maxWidth: "1200px", margin: "0 auto" }}>
			<Typography variant="h4" gutterBottom sx={{ fontWeight: 700, mb: 4 }}>
				À propos
			</Typography>
			<Typography variant="body1" paragraph sx={{ color: "text.secondary" }}>
				<span style={{ fontSize: "large", fontWeight: "bold" }}>
					Développeur web passionné
				</span>
				, spécialisé en
				<span style={{ fontSize: "large", fontWeight: "bold" }}> React</span>,
				avec une expérience de 2 ans en tant que
				<span style={{ fontSize: "large", fontWeight: "bold" }}>
					{" "}
					testeur d'APIs
				</span>
				. Ce parcours m’a permis de développer une excellente compréhension des
				interactions backend/frontend et d’assurer une qualité optimale dans le
				développement de produits web. Aujourd'hui, je me reconvertis pleinement
				dans le développement web, avec un intérêt particulier pour la création
				d’interfaces performantes et intuitives. Mon objectif est d’apporter des
				solutions efficaces et innovantes en collaborant avec des équipes
				dynamiques et créatives.
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
			setIsScrolled(window.scrollY > 50);
		};

		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	return (
		<ThemeProvider theme={theme}>
			<CssBaseline />
			<Box sx={{ position: "relative", minHeight: "100vh" }}>
				<Box
					sx={{
						position: isScrolled ? "fixed" : "relative",
						// top: 0,
						// left: 0,
						width: isScrolled ? "20%" : "100%",
						height: "100vh",

						display: "flex",
						alignItems: isScrolled ? "baseline" : "center",
						justifyContent: "center",
						transition: "all 0.5s cubic-bezier(0.4, 0, 0.2, 1)",
						zIndex: 2,
						background: theme.palette.background.default,
					}}>
					<HeroSection
						isScrolled={isScrolled}
						sx={{ alignItems: isScrolled ? "baseline" : "center" }}
					/>

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
						paddingLeft: 2,
						transition: "margin-left 0.5s cubic-bezier(0.4, 0, 0.2, 1)",
						zIndex: 1,
						paddingTop: "240px",
					}}>
					<AboutSection />
					<ProjectList />
					<SkillsSection />
					<ContactSection />
				</Box>
			</Box>
		</ThemeProvider>
	);
}

export default App;
