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
		title: "WebPack",
		img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/webpack/webpack-original.svg",
	},
	{
		id: "7",
		title: "Postman",
		img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postman/postman-original.svg",
	},
	{
		id: "8",
		title: "Swagger",
		img: "https://seeklogo.com/images/S/swagger-logo-A49F73BAF4-seeklogo.com.png",
	},
	{
		id: "9",
		title: "Jira",
		img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/jira/jira-original.svg",
	},
	{
		id: "10",
		title: "Confluence",
		img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/confluence/confluence-original.svg",
	},
	{
		id: "11",
		title: "MongoDB",
		img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg",
	},

	{
		id: "12",
		title: "Apigee",
		img: "https://www.vectorlogo.zone/logos/apigee/apigee-icon.svg",
	},

	{
		id: "13",
		title: "Photoshop",
		img: "https://upload.wikimedia.org/wikipedia/commons/a/af/Adobe_Photoshop_CC_icon.svg",
	},
	{
		id: "14",
		title: "Illustrator",
		img: "https://upload.wikimedia.org/wikipedia/commons/f/fb/Adobe_Illustrator_CC_icon.svg",
	},
	{
		id: "15",
		title: "XD",
		img: "https://upload.wikimedia.org/wikipedia/commons/c/c2/Adobe_XD_CC_icon.svg",
	},
	{
		id: "16",
		title: "Premiere Pro",
		img: "https://upload.wikimedia.org/wikipedia/commons/4/40/Adobe_Premiere_Pro_CC_icon.svg",
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
		title: "Vue.js",
		img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vuejs/vuejs-original.svg",
	},
	{
		id: "7",
		title: "SASS",
		img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sass/sass-original.svg",
	},
	{
		id: "8",
		title: "JAVA",
		img: "https://www.vectorlogo.zone/logos/java/java-icon.svg",
	},
	{
		id: "9",
		title: "Arduino",
		img: "https://www.vectorlogo.zone/logos/arduino/arduino-icon.svg",
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
					width: 40,
					height: 40,
				}}>
				<img
					src={skill.img}
					alt={skill.title}
					className="skill-icon"
					style={{
						width: 55,
						height: 55,
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
					width: 40,
					height: 40,
				}}>
				<img
					src={tool.img}
					alt={tool.title}
					style={{ width: 55, height: 55, transition: "all 0.3s ease" }}
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

export default function SkillsSection(isScrolled) {
	const [toggleSkills, setToggleSkills] = useState(true);

	const handleSkillToggle = (showSkills) => {
		setToggleSkills(showSkills);
	};

	return (
		<Box sx={{ justifyItems: "space-around", py: { sm: 0, md: 1 } }}>
			<Box
				sx={{
					display: { sm: "", md: "flex" },
					// justifyContent: "space-around",
					alignItems: "center",
					maxWidth: "1400px",
					mt: "40px",
					mb: "40px",
				}}>
				<Box
					sx={{
						padding: 4,
						margin: "0 auto",
						width: { sm: "100%", md: "50%" },
					}}>
					<Typography variant="h4" gutterBottom sx={{ fontWeight: 700, mb: 4 }}>
						Skills
					</Typography>
					<Typography sx={{ mb: 4 }}>
						I develop simple, intuitive and responsive user interface that helps
						users get things done with less effort and time with these
						technologies.
					</Typography>
					<Box
						sx={{
							display: "flex",
							width: "100%",
							justifyContent: { sm: "center", md: "flex-start" },
						}}>
						<ButtonGroup
							variant="contained"
							sx={{
								transition: "all 0.5s ease",
								width: "50%",
							}}>
							<Button
								sx={{ transition: "all 0.5s ease", width: "100%" }}
								onClick={() => handleSkillToggle(true)}
								color={toggleSkills ? "primary" : "inherit"}>
								Skills
							</Button>
							<Button
								onClick={() => handleSkillToggle(false)}
								color={!toggleSkills ? "primary" : "inherit"}
								sx={{ transition: "all 0.5s ease", width: "100%" }}>
								Tools
							</Button>
						</ButtonGroup>
					</Box>
				</Box>
				<Box
					sx={{
						width: { sm: "100%", md: "40%" },
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
