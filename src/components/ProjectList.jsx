// components/ProjectList.jsx
"use client";
import React from "react";
import {
	Grid,
	Card,
	CardContent,
	Typography,
	Link,
	Box,
	useTheme,
} from "@mui/material";
// import Frame from "react-frame-component";
const ProjectCard = ({ project }) => {
	const theme = useTheme();

	return (
		<Grid item xs={12} sm={6} md={4}>
			<Card
				sx={{
					height: "100%",
					display: "flex",
					flexDirection: "column",
					transition: "transform 0.2s",
					"&:hover": { transform: "translateY(-5px)" },
					backgroundColor: theme.palette.background.paper,
				}}>
				<Box sx={{ position: "relative", paddingTop: "56.25%" }}>
					<Box
						sx={{
							position: "absolute",
							top: 0,
							left: 0,
							right: 0,
							bottom: 0,
							border: "1px solid rgba(0,0,0,0.1)",
							borderRadius: "4px 4px 0 0",
							overflow: "hidden",
						}}>
						<iframe
							src={project.url}
							style={{
								width: "100%",
								height: "100%",
								border: "none",
								background: "#fff",
							}}
							// scrolling="no"
							title="W3Schools Free Online Web Tutorials"></iframe>
						/
					</Box>
				</Box>

				<CardContent sx={{ flexGrow: 1 }}>
					<Typography variant="h6" gutterBottom>
						{project.Title}
					</Typography>

					<Typography variant="body2" paragraph color="text.secondary">
						{project.description}
					</Typography>

					<Link
						href={project.url}
						target="_blank"
						rel="noopener"
						sx={{
							display: "flex",
							alignItems: "center",
							color: theme.palette.mode === "dark" ? "#64ffda" : "#1976d2",
							"&:hover": { opacity: 0.8 },
						}}>
						Visiter le projet →
					</Link>
				</CardContent>
			</Card>
		</Grid>
	);
};

const projects = [
	{
		id: "1",
		Title: "Vente et location maison ",
		url: "https://reactclone-liard.vercel.app/",
		description:
			"Une plateforme pour la vente et la location de maisons. Inscription facile pour publier les annonces !",
	},
	{
		id: "2",
		Title: "Le jeu de la vie ",
		url: "https://mohbens.github.io/game-of-life_jeu-de-la-vie/",
		description:
			"Le jeu de la Vie est un « jeu à zéro joueur », puisqu'il ne nécessite aucune intervention du joueur lors de son déroulement. Il s’agit d’un automate cellulaire . développé en full React",
	},
	{
		id: "3",
		Title: "Oh My Food !",
		url: "https://mohbens.github.io/MohamedBenselama_3_23022022/index.html",
		description:
			"Oh my food est un site de proposition de restaurants avec la possibilité de consulter les menus",
	},
];

const ProjectList = () => {
	return (
		<Box
			sx={{
				padding: {
					xs: 2,
					md: 4,
					lg: 15,
				},
			}}>
			<Typography variant="h4" gutterBottom sx={{ fontWeight: 700, mb: 4 }}>
				Projets
			</Typography>
			<Grid container spacing={4}>
				{projects.map((project) => (
					<ProjectCard key={project.id} project={project} />
				))}
			</Grid>
		</Box>
	);
};

export default ProjectList;
