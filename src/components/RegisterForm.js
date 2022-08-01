import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

export default function RegisterForm() {
    return (
        <div style={{ marginTop: "20px", border: "2px solid #1976d2", borderRadius: "10px", marginLeft: "30%", marginRight: "30%" }}>

            <div style={{ color: "#1976d2" }}>
                <h2>Register form</h2>
            </div>

            <form>
                <div style={{ marginTop: "20px" }}>
                    <TextField
                        style={{ marginRight: "5px", minWidth: "300px"}}
                        id="firstName"
                        label="First name"
                        required
                        inputProps={{ minLength: 2, maxLength: 30 }}
                        // helperText
                        // error="err"
                    // value={"name"}
                    // onChange={handleChange}
                    />

                    <TextField
                        style={{ marginLeft: "5px", minWidth: "300px" }}
                        id="outlined-name"
                        label="Last name"
                    />
                </div>

                <div style={{ marginTop: "20px" }}>
                    <TextField
                        style={{ marginRight: "5px", minWidth: "300px" }}
                        id="outlined-name"
                        label="Email"
                    />

                    <TextField
                        style={{ marginLeft: "5px", minWidth: "300px" }}
                        id="outlined-name"
                        label="Username"
                        type="Email"
                    />
                </div>



                <div style={{ marginTop: "20px" }}>
                    <TextField
                        style={{ marginRight: "5px", minWidth: "300px" }}
                        id="outlined-name"
                        label="Password"
                        type="Password"
                    />

                    <TextField
                        style={{ marginLeft: "5px", minWidth: "300px" }}
                        id="outlined-name"
                        label="Confirm password"
                        type="Password"
                    />
                </div>

                <Button type='submit' variant="contained" style={{ marginTop: "20px", marginBottom: "20px" }}>Register</Button>
            </form>
        </div>
    );
}