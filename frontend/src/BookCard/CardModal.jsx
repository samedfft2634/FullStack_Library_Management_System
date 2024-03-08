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

export default function CardModal({ handleClose, open }) {
	const [year, setYear] = useState("");

	const handleChange = (event) => {
		setYear(event.target.value);
	};
	return (
		<div>
			<Modal
				open={open}
				onClose={handleClose}
				aria-labelledby="modal-modal-title"
				aria-describedby="modal-modal-description"
			>
				<Box component="form" sx={style} noValidate autoComplete="off">
					<TextField
						id="title"
						label="Kitap Adı"
						placeholder="Kitap Adını Giriniz"
						multiline
					/>
					<TextField
						id="author"
						label="Yazar Adı"
						placeholder="Yazar Adını Giriniz"
						multiline
					/>
					<TextField id="isbn" label="ISBN" multiline />
					<FormControl fullWidth sx={{my:.5}}>
						<InputLabel id="demo-simple-select-label">
							Yayınlanma Yılı
						</InputLabel>
						<Select
							labelId="demo-simple-select-label"
							id="publicationYear"
							value={year}
							label="Yayınlanma Yılı"
							onChange={handleChange}
						>
							<MenuItem value={10}>Ten</MenuItem>
							<MenuItem value={20}>Twenty</MenuItem>
							<MenuItem value={30}>Thirty</MenuItem>
						</Select>
					</FormControl>
					<TextField
						id="genre"
						label="Tür"
						helperText="Birden fazla seçenek varsa slash ile ayırabilirsiniz."
						multiline
					/>
					<TextField
						label="Kapak Resmi"
						name="image"
						id="image"
						type="url"
						variant="outlined"
						// value={info.image}
						// onChange={handleChange}
						required
					/>
					<Button
						type="submit"
						variant="contained"
						size="large"
						color="success"
						sx={{ width: "100%" }}
					>
						Yeni Kitap Ekle
					</Button>
				</Box>
			</Modal>
		</div>
	);
}
