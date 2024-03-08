import { Box, Button, Container, Stack, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import BookCard from "./BookCard/BookCard";
import "./App.css";
import CardModal from "./BookCard/CardModal";
import axios from "axios";

function App() {
	const initValues = {
		title: "",
		author: "",
		ISBN: "",
		genre: "",
		publicationYear: "",
		image: "",
	};
	const [values, setValues] = useState(initValues);
	const [open, setOpen] = useState(false);
	const [books, setBooks] = useState([]);
	const handleOpen = () => {
		setOpen(true);
	};
	const handleClose = () => {
		setOpen(false);
		setValues(initValues);
	};
	const getBooks = () => {
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
	};
	const handleSubmit = async (e) => {
		e.preventDefault();
		if (values?.id) {
			try {
				const data = await fetch(
					`http://localhost:8000/books/:${e.target?.id}`,
					{
						method: "PUT",
						body: JSON.stringify(values),
						headers: {
							"Content-Type": "application/json",
						},
					}
				);
				getBooks();

				console.log(data);
			} catch (err) {
				console.log(
					err,
					"Kitap güncellenirken bir hata meydana geldi!"
				);
			}
		} else {
			try {
				const data = await fetch("http://localhost:8000/books", {
					method: "POST",
					body: JSON.stringify(values),
					headers: {
						"Content-Type": "application/json",
					},
				});
				getBooks();
				console.log(data);
			} catch (err) {
				console.log(err, "Kitap eklenirken bir hata meydana geldi!");
			}
		}
		handleClose();
	};

	useEffect(() => {
		//? GET request
		getBooks();
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
				{books &&
					books?.map((book) => (
						<BookCard
							book={book}
							key={book.id}
							setValues={setValues}
							handleOpen={handleOpen}
						/>
					))}
			</Stack>
			<CardModal
				open={open}
				handleClose={handleClose}
				handleSubmit={handleSubmit}
				values={values}
				setValues={setValues}
			/>
		</Container>
	);
}

export default App;
