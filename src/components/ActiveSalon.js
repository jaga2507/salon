import React from "react";
import "./Home.css"
import Modal from "@mui/joy/Modal";
import ModalClose from "@mui/joy/ModalClose";
import Sheet from "@mui/joy/Sheet";

function ActiveSalon(props) {

    const data = [
        {
            salonName: "mckingstown (kilpuak)",
            activity: "online"
        },
        {
            salonName: "mckingstown (kilpuak)",
            activity: "online"
        },
        {
            salonName: "mckingstown (kilpuak)",
            activity: "online"
        },
        {
            salonName: "mckingstown (kilpuak)",
            activity: "online"
        },
        {
            salonName: "mckingstown (kilpuak)",
            activity: "online"
        },
        {
            salonName: "mckingstown (kilpuak)",
            activity: "online"
        },
        {
            salonName: "mckingstown (kilpuak)",
            activity: "online"
        },
        {
            salonName: "mckingstown (kilpuak)",
            activity: "online"
        },
        {
            salonName: "mckingstown (kilpuak)",
            activity: "online"
        },
        {
            salonName: "mckingstown (kilpuak)",
            activity: "online"
        },
        {
            salonName: "mckingstown (kilpuak)",
            activity: "online"
        },
        {
            salonName: "mckingstown (kilpuak)",
            activity: "online"
        },
        {
            salonName: "mckingstown (kilpuak)",
            activity: "online"
        },
        {
            salonName: "mckingstown (kilpuak)",
            activity: "online"
        },
        {
            salonName: "mckingstown (kilpuak)",
            activity: "online"
        },
        {
            salonName: "mckingstown (kilpuak)",
            activity: "online"
        },
        {
            salonName: "mckingstown (kilpuak)",
            activity: "online"
        },
        {
            salonName: "mckingstown (kilpuak)",
            activity: "online"
        },
    ]

    return (
        <div>
            <Modal
                aria-labelledby="close-modal-title"
                open={props.openBoxs}
                onClose={() => {
                    props.setOpenBoxs(false);
                }}
                sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                }}
            >
                <Sheet
                    variant="outlined"
                    sx={{
                        width: 750,
                        borderRadius: "md",
                        p: 3,
                        height: 650,
                        background: "white",
                    }}
                >
                    <ModalClose variant="outlined" />
                    <div className="modalBox" >
                        <div>
                            Active Salon
                        </div>
                        <div className="list" >
                            {
                                data.map(item => {
                                    return (
                                        <div className="detail" >
                                            <div>
                                                {item.salonName}
                                            </div>
                                            <div>
                                                {item.activity}
                                            </div>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>
                </Sheet>
            </Modal>
        </div>
    )
}

export default ActiveSalon;