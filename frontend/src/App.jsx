import { Box, Button, Container, Stack, Typography } from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";
import BookCard from "./BookCard/BookCard";
import "./App.css";
import CardModal from "./BookCard/CardModal";

function App() {
	const [open, setOpen] = useState(false);
	const handleOpen = () => {
		setOpen(true);
	};
	const handleClose = () => {
		setOpen(false);
	};
	const [books, setBooks] = useState([]);
	useEffect(() => {
		axios("http://localhost:8000/books")
			.then((res) => {
				// console.log(res);
				const { rows } = res?.data?.result;
				// console.log(rows);
				setBooks(rows);
			})
			.catch((err) => {
				console.log(err);
			});
	}, []);

	return (
		<Container
			maxWidth="xl"
			sx={{ textAlign: "Center", marginTop: "2rem", padding: "1rem" }}
		>
			<Typography variant="h3" sx={{ color: "green" }}>
				Zehir Kütüphanesi
			</Typography>
			<Box sx={{ textAlign: "end" }}>
				<Button
					variant="contained"
					color="success"
					sx={{
						textAlign: "end",
						marginTop: "1rem",
						marginRight: "3rem",
					}}
					onClick={handleOpen}
				>
					YENI KITAP EKLE
				</Button>
			</Box>

			<Stack
				direction={"row"}
				useFlexGap
				spacing={4}
				sx={{ flexWrap: "wrap", mt: 10 }}
			>
				{books.map((book) => (
					<BookCard {...book} key={book.id} />
				))}
			</Stack>
			<CardModal open={open} handleClose={handleClose} />
		</Container>
	);
}

export default App;
