import React from "react";
import "./Home.css"
import Modal from "@mui/joy/Modal";
import ModalClose from "@mui/joy/ModalClose";
import Sheet from "@mui/joy/Sheet";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { LocalizationProvider } from "@mui/x-date-pickers-pro";
import { AdapterDayjs } from "@mui/x-date-pickers-pro/AdapterDayjs";
import { DateRangePicker } from "@mui/x-date-pickers-pro/DateRangePicker";
import ActiveSalon from "./ActiveSalon";
import OverAllSale from "./overAllSale";
import { Link } from "react-router-dom";

function Home() {

    const [openBoxs, setOpenBoxs] = React.useState(false);

    const [overAllSale, setOverAllSale] = React.useState(false);

    const data = [
        {
            id: "1",
            salonName: "McKingstown (kilpuak)",
            sale: "$3,68,900"
        },
        {
            id: "1",
            salonName: "McKingstown (kilpuak)",
            sale: "$3,68,900"
        },
        {
            id: "1",
            salonName: "McKingstown (kilpuak)",
            sale: "$3,68,900"
        },
        {
            id: "1",
            salonName: "McKingstown (kilpuak)",
            sale: "$3,68,900"
        },
        {
            id: "1",
            salonName: "McKingstown (kilpuak)",
            sale: "$3,68,900"
        },
        {
            id: "1",
            salonName: "McKingstown (kilpuak)",
            sale: "$3,68,900"
        },
        {
            id: "1",
            salonName: "McKingstown (kilpuak)",
            sale: "$3,68,900"
        },
        {
            id: "1",
            salonName: "McKingstown (kilpuak)",
            sale: "$3,68,900"
        },
        {
            id: "1",
            salonName: "McKingstown (kilpuak)",
            sale: "$3,68,900"
        },
        {
            id: "1",
            salonName: "McKingstown (kilpuak)",
            sale: "$3,68,900"
        },
    ]

    return (
        <div>
            <div className="nav-bar" >
                <div>
                    Spark Light
                </div>
                <Link to="/login" >
                    Logout
                </Link>
            </div>
            <div className="date_picker" >
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DemoContainer components={["DateRangePicker"]}>
                        <DateRangePicker
                            className="datePicker"
                            localeText={{ start: '', end: '' }}
                            startText="Start Date"
                            endText="End Date"
                        />
                    </DemoContainer>
                </LocalizationProvider>
            </div>
            <div className="salon-details" >
                <div>
                    <div onClick={() => { setOverAllSale(true) }}>
                        Total Ravenue
                    </div>
                    <div>
                        $5,26,000
                    </div>
                </div>
                <div>
                    <div>
                        Total Month Ravenue
                    </div>
                    <div>
                        $5,26,000
                    </div>
                </div>
                <div>
                    <div>
                        Total walkin
                    </div>
                    <div>
                        1,265
                    </div>
                </div>
                <div>
                    <div>
                        Total month walkin
                    </div>
                    <div>
                        16,265
                    </div>
                </div>
                <div
                    onClick={() => {
                        setOpenBoxs(true);
                    }} >
                    <div>
                        Active salon
                    </div>
                    <div>
                        27
                    </div>
                </div>
                <div>
                    <div>
                        InActive salon
                    </div>
                    <div style={{ color: "red" }} >
                        7
                    </div>
                </div>
            </div>
            <div className="dataTable" >
                <div className="table" >
                    <div className="dataTitle" >
                        <div>
                            Total Salon Ravenue
                        </div>
                        <div className="view_btn" onClick={() => { setOverAllSale(true) }} >
                            View all
                        </div>
                    </div>
                    <div>
                        {data.map(item => (
                            <div className="salonData" >
                                <div>
                                    {item.id}
                                </div>
                                <div>
                                    {item.salonName}
                                </div>
                                <div>
                                    {item.sale}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="table" >
                    <div className="dataTitle" >
                        <div>
                            Total Staff Ravenue
                        </div>
                        <div className="view_btn" >
                            View all
                        </div>
                    </div>
                    <div>
                        {data.map(item => (
                            <div className="salonData" >
                                <div>
                                    {item.id}
                                </div>
                                <div>
                                    {item.salonName}
                                </div>
                                <div>
                                    {item.sale}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <div className="dataTable" >
                <div className="table" >
                    <div className="dataTitle" >
                        <div>
                            overall salon sale
                        </div>
                        <div className="view_btn" >
                            View all
                        </div>
                    </div>
                    <div>
                        {data.map(item => (
                            <div className="salonData" >
                                <div>
                                    {item.id}
                                </div>
                                <div>
                                    {item.salonName}
                                </div>
                                <div>
                                    {item.sale}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="table" >
                    <div className="dataTitle" >
                        <div>
                            overall salon sale
                        </div>
                        <div className="view_btn" >
                            View all
                        </div>
                    </div>
                    <div>
                        {data.map(item => (
                            <div className="salonData" >
                                <div>
                                    {item.id}
                                </div>
                                <div>
                                    {item.salonName}
                                </div>
                                <div>
                                    {item.sale}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <ActiveSalon openBoxs={openBoxs} setOpenBoxs={setOpenBoxs} />
            <OverAllSale open={overAllSale} setOpen={setOverAllSale} />
        </div>
    )
}

export default Home;