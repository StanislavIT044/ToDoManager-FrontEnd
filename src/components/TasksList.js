import * as React from "react";
import PropTypes from "prop-types";
import Box from "@mui/material/Box";
import Collapse from "@mui/material/Collapse";
import IconButton from "@mui/material/IconButton";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import './TaskList.module.css';

function createData(name, date, fat, status) {
    return {
        name,
        date,
        fat,
        status,
        history: [
            {
                date: "2020-01-05",
                customerId: "11091700",
                amount: 3
            },
            {
                date: "2020-01-02",
                customerId: "Anonymous",
                amount: 1
            }
        ]
    };
}

function Row(props) {
    const { row } = props;
    const [open, setOpen] = React.useState(false);

    return (
        <React.Fragment>
            <TableRow sx={{ "& > *": { borderBottom: "unset" } }}>
                <TableCell>
                    <IconButton
                        aria-label="expand row"
                        size="small"
                        onClick={() => setOpen(!open)}
                    >
                        {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
                    </IconButton>
                </TableCell>
                <TableCell component="th" scope="row">
                    {row.name}
                </TableCell>
                <TableCell align="right">{row.date}</TableCell>
                <TableCell align="right">{row.status}</TableCell>
            </TableRow>
            <TableRow>
                <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={3}>
                    <Collapse in={open} timeout="auto" unmountOnExit>
                        <Box sx={{ margin: 1 }}>
                            <Typography variant="h6" gutterBottom component="div">
                                History
                            </Typography>
                            <Table size="small" aria-label="purchases">
                                <TableHead>
                                    <TableRow>
                                        <TableCell>Date</TableCell>
                                        <TableCell>Customer</TableCell>
                                        <TableCell align="right">Amount</TableCell>
                                        <TableCell align="right">Total price ($)</TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {row.history.map((historyRow) => (
                                        <TableRow key={historyRow.date}>
                                            <TableCell component="th" scope="row">
                                                {historyRow.date}
                                            </TableCell>
                                            <TableCell>{historyRow.customerId}</TableCell>
                                            <TableCell align="right">{historyRow.amount}</TableCell>
                                            <TableCell align="right">
                                                {Math.round(historyRow.amount * row.price * 100) / 100}
                                            </TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </Box>
                    </Collapse>
                </TableCell>
            </TableRow>
        </React.Fragment>
    );
}

Row.propTypes = {
    row: PropTypes.shape({
        // date: PropTypes.number.isRequired,
        // status: PropTypes.number.isRequired,
        // fat: PropTypes.number.isRequired,
        // history: PropTypes.arrayOf(
        //   PropTypes.shape({
        //     amount: PropTypes.number.isRequired,
        //     customerId: PropTypes.string.isRequired,
        //     date: PropTypes.string.isRequired
        //   })
        // ).isRequired,
        // name: PropTypes.string.isRequired,
        // price: PropTypes.number.isRequired,
        // protein: PropTypes.number.isRequired
    }).isRequired
};

const rows = [
    createData("Frozen yoghurt", "05.05.2020", 159, 6),
    createData("Ice cream sandwich", "05.05.2020", 237, 9),
    createData("Eclair", "05.05.2020", 262, 16),
    createData("Cupcake", "05.05.2020", 305, 3),
    createData("Gingerbread", "05.05.2020", 356, 16),
    createData("New Task", "05.05.2020", 356, 16)
];

export default function CollapsibleTable() {
    return (
        <TableContainer style={{maxWidth: "70%", margin: "20px 20px 20px 20px", border: "5px"}} component={Paper}>
            <Table aria-label="collapsible table" style={{backgroundColor: "",  minHeight: "100%", maxWidth: "100%"}}>
                <TableHead>
                    <TableRow>
                        <TableCell />
                        <TableCell>Task</TableCell>
                        <TableCell align="right">Date</TableCell>
                        <TableCell align="right">Status</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.map((row) => (
                        <Row key={row.name} row={row} />
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}
