import { Box, Button, ButtonGroup, Paper, Typography } from "@mui/material";
import React, { useState } from "react";

const tools = [
	{
		id: "1",
		title: "VS Code",
		img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg",
	},
	{
		id: "2",
		title: "Command Line",
		img: "https://img.icons8.com/?size=100&id=2EbawKhhFdxd&format=png&color=000000",
	},
	{
		id: "3",
		title: "Git",
		img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-plain-wordmark.svg",
	},
	{
		id: "4",
		title: "npm",
		img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/npm/npm-original-wordmark.svg",
	},
	{
		id: "5",
		title: "Slack",
		img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/slack/slack-original.svg",
	},
	{
		id: "6",
		title: "Photoshop",
		img: "https://upload.wikimedia.org/wikipedia/commons/a/af/Adobe_Photoshop_CC_icon.svg",
	},
	{
		id: "7",
		title: "Illustrator",
		img: "https://upload.wikimedia.org/wikipedia/commons/f/fb/Adobe_Illustrator_CC_icon.svg",
	},
	{
		id: "8",
		title: "XD",
		img: "https://upload.wikimedia.org/wikipedia/commons/c/c2/Adobe_XD_CC_icon.svg",
	},
	{
		id: "9",
		title: "Premiere Pro",
		img: "https://upload.wikimedia.org/wikipedia/commons/4/40/Adobe_Premiere_Pro_CC_icon.svg",
	},
	{
		id: "10",
		title: "WebPack",
		img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/webpack/webpack-original.svg",
	},
	{
		id: "11",
		title: "Postman",
		img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postman/postman-original.svg",
	},
	{
		id: "12",
		title: "Swagger",
		img: "https://seeklogo.com/images/S/swagger-logo-A49F73BAF4-seeklogo.com.png",
	},
	{
		id: "13",
		title: "Jira",
		img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/jira/jira-original.svg",
	},
	{
		id: "14",
		title: "Confluence",
		img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/confluence/confluence-original.svg",
	},
	{
		id: "15",
		title: "MongoDB",
		img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg",
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
				transition: "all 0.3s ease",
				position: "relative",
				"&:hover": {
					transform: "translateY(-5px)",
					"& .skill-label": {
						opacity: 1,
						transform: "translateY(-20px)",
					},
					"& .skill-icon": {
						transform: "scale(1.1)",
					},
				},
			}}>
			<Box
				sx={{
					display: "flex",
					alignItems: "center",
					justifyContent: "center",
					position: "relative",
				}}>
				<img
					src={skill.img}
					alt={skill.title}
					className="skill-icon"
					style={{
						width: 40,
						height: 40,
						transition: "all 0.3s ease",
					}}
				/>
				<Typography
					className="skill-label"
					sx={{
						position: "absolute",
						textAlign: "center",

						top: "-20px",
						opacity: 0,
						transition: "all 0.3s ease",
						backgroundColor: "rgba(0,0,0,0.8)",
						color: "#fff",
						padding: "4px 12px",
						borderRadius: "4px",
						fontSize: "0.8rem",
					}}>
					{skill.title}
				</Typography>
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
				transition: "all 0.3s ease",
				position: "relative",
				"&:hover": {
					transform: "translateY(-5px)",
					"& .tool-label": {
						opacity: 1,
						transform: "translateY(-20px)",
					},
					"& .tool-icon": {
						transform: "scale(1.1)",
					},
				},
			}}>
			<Box
				sx={{
					display: "flex",
					alignItems: "center",
					justifyContent: "center",
				}}>
				<img
					src={tool.img}
					alt={tool.title}
					style={{ width: 40, height: 40 }}
				/>
				<Typography
					className="tool-label"
					sx={{
						textAlign: "center",
						justifyContent: "center",
						position: "absolute",
						top: "-5px",
						opacity: 0,
						transition: "all 0.3s ease",
						backgroundColor: "rgba(0,0,0,0.8)",
						color: "#fff",
						padding: "4px 12px",
						borderRadius: "4px",
						fontSize: "0.8rem",
					}}>
					{tool.title}
				</Typography>
			</Box>
		</Paper>
	));
};

export default function SkillsSection() {
	const [toggleSkills, setToggleSkills] = useState(true);

	const handleSkillToggle = (showSkills) => {
		setToggleSkills(showSkills);
	};

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
					<ButtonGroup variant="contained">
						<Button
							onClick={() => handleSkillToggle(true)}
							color={toggleSkills ? "primary" : "inherit"}>
							Skills
						</Button>
						<Button
							onClick={() => handleSkillToggle(false)}
							color={!toggleSkills ? "primary" : "inherit"}
							sx={{ transition: "all 0.5s ease" }}>
							Tools
						</Button>
					</ButtonGroup>
				</Box>
				<Box
					sx={{
						width: "50%",
						display: "flex",
						flexWrap: "wrap",
						justifyContent: "center",
					}}>
					{toggleSkills ? handleSkills() : handleTools()}
				</Box>
			</Box>
			<hr style={{ width: "75%" }} />
		</Box>
	);
}
