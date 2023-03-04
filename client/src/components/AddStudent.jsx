import React, { useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { Container } from "@mui/system";
import { Paper } from "@mui/material";

const AddStudent = () => {
  const [form, setForm] = useState({
    name: "",
    adderss: "",
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSaveStudent = async (e) => {
    e.preventDefault();

    if (form.name && form.adderss) {
      setLoading(true);
      try {
        await fetch("http://localhost:8080/api/student/add", {
          method: "POST",
          headers: {
            "Content-type": "application/json",
          },
          body: JSON.stringify(form),
        });
      } catch (error) {
        alert(error);
      } finally {
        setForm({
          name: "",
          adderss: "",
        });
        setLoading(false);
      }
    } else {
      alert("Please Enter Name & Adderss!");
    }
  };

  return (
    <Container sx={{ mt: 5, display: "flex", justifyContent: "center" }}>
      <Paper sx={{ p: 3, pb: 5, width: 600 }} elevation={3}>
        <h1 style={{ color: "blueviolet" }}>Add Students</h1>
        <Box
          component="form"
          sx={{
            "& > :not(style)": { m: 1 },
          }}
          noValidate
          autoComplete="off"
        >
          <TextField
            id="standard-basic"
            label="Student Name"
            variant="standard"
            name="name"
            value={form.name}
            onChange={handleChange}
            fullWidth
          />
          <TextField
            id="standard-basic"
            label="Adderss"
            variant="standard"
            name="adderss"
            value={form.adderss}
            onChange={handleChange}
            fullWidth
          />
        </Box>
        <Button
          variant="contained"
          sx={{ mt: 3 }}
          onClick={handleSaveStudent}
          size="large"
        >
          {loading ? "Saving ..." : "Save"}
        </Button>
      </Paper>
    </Container>
  );
};

export default AddStudent;
