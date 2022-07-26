import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { padding } from '@mui/system';

export default function RegisterForm() {
    return (
        <div style={{ marginTop: "20px", border: "2px solid #1976d2", borderRadius: "10px", marginLeft: "30%", marginRight: "30%" }}>

            <div style={{ color: "#1976d2" }}>
                <h2>Register form</h2>
            </div>

            <form>
                <div style={{ marginTop: "20px" }}>
                    <TextField
                        style={{ marginRight: "5px"}}
                        id="outlined-name"
                        label="First name"
                    // value={"name"}
                    // onChange={handleChange}
                    />

                    <TextField
                        style={{ marginLeft: "5px"}}
                        id="outlined-name"
                        label="Last name"
                    />
                </div>

                <div style={{ marginTop: "20px" }}>
                    <TextField
                        id="outlined-name"
                        label="Email"
                    />
                </div>

                <div style={{ marginTop: "20px" }}>
                    <TextField
                        id="outlined-name"
                        label="Password"
                    />
                </div>

                <div style={{ marginTop: "20px" }}>
                    <TextField
                        id="outlined-name"
                        label="Confirm password"
                    />
                </div>

                <Button variant="contained" style={{ marginTop: "20px", marginBottom: "20px" }}>Register</Button>
            </form>
        </div>
    );
}