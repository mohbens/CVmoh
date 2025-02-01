import { Box, Paper, Typography } from "@mui/material";
import React from "react";
const tools = [
	{
		id: "1",
		title: "VS Code",
		img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg",
	},
	{
		id: "2",
		title: "Command Line",
		img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bash/bash-original.svg",
	},
	{
		id: "3",
		title: "Git",
		img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-plain-wordmark.svg",
		// Orange variant
	},
	{
		id: "4",
		title: "npm",
		img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/npm/npm-original-wordmark.svg",
		// Red variant
	},
	{
		id: "5",
		title: "Slack",
		img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/slack/slack-original.svg",
		// Purple variant
	},
	{
		id: "6",
		title: "Photoshop",
		img: "https://upload.wikimedia.org/wikipedia/commons/a/af/Adobe_Photoshop_CC_icon.svg",
		// Dark blue Adobe icon
	},
	{
		id: "7",
		title: "Illustrator",
		img: "https://upload.wikimedia.org/wikipedia/commons/f/fb/Adobe_Illustrator_CC_icon.svg",
		// Orange Adobe icon
	},
	{
		id: "8",
		title: "XD",
		img: "https://upload.wikimedia.org/wikipedia/commons/c/c2/Adobe_XD_CC_icon.svg",
		// Pink Adobe icon
	},
	{
		id: "9",
		title: "Premiere Pro",
		img: "https://upload.wikimedia.org/wikipedia/commons/4/40/Adobe_Premiere_Pro_CC_icon.svg",
		// Purple Adobe icon
	},
	{
		id: "10",
		title: "WebPack",
		img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/webpack/webpack-original.svg",
	},
];

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
				margin: 1,
				transition: "transform 0.2s",
				borderRadius: "20px",
				"&:hover": {
					transform: "scale(1.05)",
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

const handleTools = () => {
	return tools.map((tool) => (
		<Paper
			key={tool.id}
			elevation={10}
			sx={{
				padding: 2,
				margin: 1,
				transition: "transform 0.2s",
				borderRadius: "20px",
				"&:hover": {
					transform: "scale(1.05)",
				},
			}}>
			<Box sx={{ display: "flex", alignItems: "center" }}>
				<img
					src={tool.img}
					alt={tool.title}
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
					}}>
					{handleSkills()}
				</Box>
				<Box
					sx={{
						width: "50%",
						display: "flex",
						flexWrap: "wrap",
						justifyContent: "center",
					}}>
					{handleTools()}
				</Box>
			</Box>
			<hr style={{ width: "75%" }} />
		</Box>
	);
}
