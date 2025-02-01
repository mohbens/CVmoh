import { Box, Paper, Typography } from "@mui/material";
import React from "react";

const skills = [
	{
		id: "1",
		title: "HTML5",
		img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
	},
	{
		id: "2",
		title: "CSS3",
		img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
	},
	{
		id: "3",
		title: "JavaScript",
		img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
	},
	{
		id: "4",
		title: "TypeScript",
		img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
	},
	{
		id: "5",
		title: "React",
		img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
	},
	{
		id: "6",
		title: "SASS",
		img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sass/sass-original.svg",
	},
];

const handleSkills = () => {
	return skills.map((skill) => (
		<Paper
			key={skill.id}
			elevation={10}
			sx={{
				padding: 2,
				// minWidth: 150,
				margin: 1,
				borderRadius: "20px",

				"&:hover": {
					transform: "scale(1.05)",
					animation: " ease-in-out",
				},
			}}>
			<Box sx={{ display: "flex", alignItems: "center" }}>
				<img
					src={skill.img}
					alt={skill.title}
					style={{ width: 40, height: 40 }}
				/>
				<Typography variant="h6" sx={{ fontWeight: 500 }}></Typography>
			</Box>
		</Paper>
	));
};
export default function SkillsSection() {
	return (
		<Box sx={{ justifyItems: "center" }}>
			<Box sx={{ display: "flex", alignItems: "center", maxWidth: "950px" }}>
				<Box
					sx={{
						padding: 4,
						maxWidth: "1200px",
						margin: "0 auto",
						width: "50%",
						// alignItems: "center",
					}}>
					<Typography variant="h4" gutterBottom sx={{ fontWeight: 700, mb: 4 }}>
						Skills
					</Typography>
					<Typography paragraph sx={{ mb: 4 }}>
						I develop simple, intuitive and responsive user interface that helps
						users get things done with less effort and time with these
						technologies.
					</Typography>
				</Box>
				<Box
					sx={{
						width: "50%",
						display: "flex",
						flexWrap: "wrap",
						justifyContent: "center",
						gap: 3,
					}}>
					{handleSkills()}
				</Box>
			</Box>
			<hr style={{ width: "75%" }} />
		</Box>
	);
}
