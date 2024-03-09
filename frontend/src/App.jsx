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
		try {
			const url = values?.id
				? `http://localhost:8000/books/:${e.target?.id}`
				: "http://localhost:8000/books";
			const method = values?.id ? "PUT" : "POST";
			const data = await fetch(url, {
				method: method,
				body: JSON.stringify(values),
				headers: {
					"Content-Type": "application/json",
				},
			});

			getBooks();
			console.log(data);
		} catch (error) {
			console.log(
				err,
				values?.id
					? "Kitap güncellenirken bir hata meydana geldi!"
					: "Kitap eklenirken bir hata meydana geldi!"
			);
		}
		handleClose();
	};
	const handleDelete = async(id) => {
		try {
			await fetch(`http://localhost:8000/books/${id}`, {
				method:"DELETE",
				headers: {
					"Content-Type": "application/json",
				},
			});
			getBooks();
		} catch (error) {
			console.log(error, "Kitap silinirken hata meydana geldi!");
		}
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
							handleDelete={handleDelete}
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
