import * as React from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import TextField from "@mui/material/TextField";
import InputLabel from "@mui/material/InputLabel";
import { Button, FormControl, MenuItem, Select } from "@mui/material";
import { useState } from "react";
const style = {
	position: "absolute",
	top: "50%",
	left: "50%",
	transform: "translate(-50%, -50%)",
	width: 400,
	bgcolor: "background.paper",
	border: "none",
	boxShadow: 24,
	p: 4,
	"& .MuiTextField-root": { my: 1, width: "100%" },
};

export default function CardModal({ handleClose, open, handleSubmit,values,setValues }) {
	const handleChange = (e) => {
		const { name, value } = e.target;
		setValues({ ...values, [name]: value });
		// to see form values on console.
		// console.log(values);
	};

	// years
	const minYear = 1900;
	const maxYear = new Date().getFullYear();
	const years = [];

	for (let year = maxYear; year >= minYear; year--) {
		years.push(year);
	}
	// years done

	return (
		<div>
			<Modal
				open={open}
				onClose={handleClose}
				aria-labelledby="modal-modal-title"
				aria-describedby="modal-modal-description"
			>
				<Box
					onSubmit={handleSubmit} 
					component="form"
					sx={style}
					noValidate
					autoComplete="off"
				>
					<TextField
						id="title"
						label="Kitap Adı"
						name="title"
						placeholder="Kitap Adını Giriniz"
						multiline
						value={values?.title || ""}
						onChange={handleChange}
					/>
					<TextField
						id="author"
						name="author"
						label="Yazar Adı"
						placeholder="Yazar Adını Giriniz"
						multiline
						value={values?.author || ""}
						onChange={handleChange}
					/>
					<TextField
						id="ISBN"
						name="ISBN"
						label="ISBN"
						multiline
						value={values?.ISBN || ""}
						onChange={handleChange}
					/>
					<FormControl fullWidth sx={{ my: 0.5 }}>
						<InputLabel id="demo-simple-select-label">
							Yayınlanma Yılı
						</InputLabel>
						<Select
							labelId="demo-simple-select-label"
							id="publicationYear"
							name="publicationYear"
							value={values?.publicationYear}
							label="Yayınlanma Yılı"
							onChange={handleChange}
						>
							{years.map((year, i) => (
								<MenuItem value={year} key={i}>
									{year}
								</MenuItem>
							))}
						</Select>
					</FormControl>
					<TextField
						id="genre"
						name="genre"
						label="Tür"
						helperText="Birden fazla seçenek varsa slash ile ayırabilirsiniz."
						multiline
						value={values?.genre || ""}
						onChange={handleChange}
					/>
					<TextField
						label="Kapak Resmi"
						name="image"
						id="image"
						type="url"
						variant="outlined"
						required
						value={values?.image || ""}
						onChange={handleChange}
					/>
					<Button
						type="submit"
						variant="contained"
						size="large"
						color="success"
						sx={{ width: "100%" }}
					>
						{values?.id ? "Kitabı Güncelle" : "Yeni Kitap Ekle"}
					</Button>
				</Box>
			</Modal>
		</div>
	);
}
