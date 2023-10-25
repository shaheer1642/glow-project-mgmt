import { createTheme } from "@mui/material";
import * as Color from "@mui/material/colors";

const theme = createTheme({
    palette: {
        primary: {
            ...Color.deepPurple,
            contrastText: 'white'
        },
    },
});

export default theme