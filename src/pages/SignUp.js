import { useEffect, useRef } from "react";
import {
    Avatar,
    Button,
    TextField,
    Box,
    Typography,
    Container,
    Paper
} from "@mui/material";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import { useDispatch, useSelector } from "react-redux";
import { signup } from '../store/slices'
import { useNavigate } from "react-router-dom";

const SignUp = () => {
    const isSignedUp = useSelector(store => store.auth.isSignedUp);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const emailRef = useRef('');
    const passwordRef = useRef('');
    const confirmPasswordRef = useRef('');

    useEffect(() => {
        if(isSignedUp) {
            navigate('/login')
        }
    }, [isSignedUp, navigate]);

    const handleSubmit = (e) => {
        e.preventDefault();
        const email = emailRef.current.value;
        const password = passwordRef.current.value;
        const isPasswordMatching = password === confirmPasswordRef.current.value;
        if (email && isPasswordMatching) {
            dispatch(signup({ email, password }))
        }
    };

    return (
        <Container component="main" maxWidth="xs">
            <Paper elevation={6} sx={{ mt: 8, p: 4 }}>
                <Box
                    sx={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                    }}
                >
                    <Avatar sx={{ m: 1, bgcolor: "primary.main" }}>
                        <LockOutlinedIcon />
                    </Avatar>

                    <Typography component="h1" variant="h5">
                        Sign Up
                    </Typography>

                    <Box component="form" onSubmit={handleSubmit} sx={{ mt: 2 }}>
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            type="text"
                            label="Username"
                            inputRef={emailRef}
                        />

                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            label="Password"
                            type="password"
                            inputRef={passwordRef}
                        />

                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            label="Confirm Password"
                            type="password"
                            inputRef={confirmPasswordRef}
                        />

                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            sx={{ mt: 2, mb: 2 }}
                        >
                            Sign Up
                        </Button>
                    </Box>
                </Box>
            </Paper>
        </Container>
    );
};

export default SignUp;
