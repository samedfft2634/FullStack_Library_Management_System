// import * as React from "react";
// import Card from "@mui/material/Card";
// import CardContent from "@mui/material/CardContent";
// import CardMedia from "@mui/material/CardMedia";
// import Typography from "@mui/material/Typography";
// import CreateIcon from "@mui/icons-material/Create";
// import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
// import Button from "@mui/material/Button";
// import CardActions from "@mui/material/CardActions";
// import { Box } from "@mui/material";

// const btnStyle = {
// 	color: "green",

// 	"&:hover": {
// 		color: "red",
// 		bgcolor: "transparent",
// 		"& svg": {
// 			color: "red",
// 		},
// 	},
// };

// export default function BookCard({
// 	title,
// 	author,
// 	ISBN,
// 	genre,
// 	publicationYear,
// 	image,
// }) {
// 	return (
// 		<Card sx={{ maxWidth: 345 }}>
// 			<CardContent sx={{ textAlign: "start" }}>
// 				<Typography gutterBottom variant="h5" component="div">
// 					{title}
// 				</Typography>
// 				<Typography variant="body2" color="text.secondary">
// 					ISBN: {ISBN}
// 				</Typography>
// 				<Typography variant="body2" color="text.secondary">
// 					Yayınlanma Yılı: {publicationYear}
// 				</Typography>
// 				<Typography variant="body2" color="text.secondary">
// 					Tür: {genre}
// 				</Typography>
// 				<CardMedia
// 					component="img"
// 					sx={{ width: "100%", height: 0, objectFit: "contain" }}
// 					image={image}
// 					title={title}
// 				/>
// 				<Typography variant="body2" color="text.secondary">
// 					Yazar: {author}
// 				</Typography>
// 			</CardContent>
// 			<CardActions sx={{ justifyContent: "center" }}>
// 				<Box>
// 					<Button size="small" sx={btnStyle}>
// 						<CreateIcon />
// 					</Button>
// 					<Button size="small" sx={btnStyle}>
// 						<DeleteOutlineIcon />
// 					</Button>
// 				</Box>
// 			</CardActions>
// 		</Card>
// 	);
// }

import * as React from "react";
import Box from "@mui/joy/Box";
import Card from "@mui/joy/Card";
import Typography from "@mui/joy/Typography";
import CreateIcon from "@mui/icons-material/Create";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import Button from "@mui/material/Button";
import CardActions from "@mui/material/CardActions";
import { CardMedia, Link, Stack } from "@mui/material";

export default function BookCard({ book, handleOpen, setValues,handleDelete }) {
	const btnStyle = {
		color: "green",

		"&:hover": {
			color: "red",
			bgcolor: "transparent",
			"& svg": {
				color: "red",
			},
		},
	};

	return (
		<Stack sx={{ minHeight: 350, mx: "auto" }}>
			<Card
				variant="outlined"
				sx={(theme) => ({
					width: 300,
					gridColumn: "span 2",
					opacity: ".96",
					bgcolor: "lightgray",
					transition: "transform 0.3s, border 0.3s",
					"&:hover": {
						borderColor:
							theme.vars.palette.primary.outlinedHoverBorder,
						transform: "translateY(-2px)",
					},
					"& > *": {
						minWidth: "clamp(0px, (360px - 100%) * 999,100%)",
					},
				})}
			>
				<CardMedia
					component="img"
					sx={{ width: "100%", height: 300, objectFit: "contain" }}
					src={book?.image}
					alt={book?.title}
					loading="lazy"
				/>

				<Box
					sx={{
						display: "flex",
						flexDirection: "column",
						gap: 2,
						maxWidth: 200,
						textAlign: "start",
					}}
				>
					<Typography level="title-lg">{book?.title}</Typography>
					<Typography level="body-sm">
						Yazar: {book?.author}
					</Typography>
					<Typography level="body-sm">ISBN: {book?.ISBN}</Typography>
					<Typography level="body-sm">
						Yayınlanma Yılı: {book?.publicationYear}
					</Typography>
					<Typography level="body-sm">Tür: {book?.genre}</Typography>
					{/* <Box sx={{ display: "flex", gap: 1.5, mt: "auto" }}>
						<Avatar variant="soft" color="neutral">
							Y
						</Avatar>
						<div>
							<Typography level="body-xs">Designed by</Typography>
							<Typography level="body-sm">
								Nature itself
							</Typography>
						</div>
					</Box> */}
					<CardActions sx={{ justifyContent: "center" }}>
						<Box>
							<Button
								size="small"
								sx={btnStyle}
								onClick={() => {
									handleOpen();
									setValues(book);
								}}
							>
								<CreateIcon />
							</Button>

							<Button size="small" sx={btnStyle} onClick={()=>handleDelete(book?.id)}>
								<DeleteOutlineIcon />
							</Button>
						</Box>
					</CardActions>
				</Box>
			</Card>
		</Stack>
	);
}
