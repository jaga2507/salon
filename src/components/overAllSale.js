import React from "react";
import "./Home.css"
import Modal from "@mui/joy/Modal";
import ModalClose from "@mui/joy/ModalClose";
import Sheet from "@mui/joy/Sheet";

function ActiveSalon(props) {

    const data = [
        {
            salonName: "mckingstown (kilpuak)",
            sale: "$30,465"
        },
        {
            salonName: "mckingstown (kilpuak)",
            sale: "$30,465"
        },
        {
            salonName: "mckingstown (kilpuak)",
            sale: "$30,465"
        },
        {
            salonName: "mckingstown (kilpuak)",
            sale: "$30,465"
        },
        {
            salonName: "mckingstown (kilpuak)",
            sale: "$30,465"
        },
        {
            salonName: "mckingstown (kilpuak)",
            sale: "$30,465"
        },
        {
            salonName: "mckingstown (kilpuak)",
            sale: "$30,465"
        },
        {
            salonName: "mckingstown (kilpuak)",
            sale: "$30,465"
        },
        {
            salonName: "mckingstown (kilpuak)",
            sale: "$30,465"
        },
        {
            salonName: "mckingstown (kilpuak)",
            sale: "$30,465"
        },
        {
            salonName: "mckingstown (kilpuak)",
            sale: "$30,465"
        },
        {
            salonName: "mckingstown (kilpuak)",
            sale: "$30,465"
        },
        {
            salonName: "mckingstown (kilpuak)",
            sale: "$30,465"
        },
        {
            salonName: "mckingstown (kilpuak)",
            sale: "$30,465"
        },
        {
            salonName: "mckingstown (kilpuak)",
            sale: "$30,465"
        },
        {
            salonName: "mckingstown (kilpuak)",
            sale: "$30,465"
        },
        {
            salonName: "mckingstown (kilpuak)",
            sale: "$30,465"
        },
        {
            salonName: "mckingstown (kilpuak)",
            sale: "$30,465"
        },
    ]

    return (
        <div>
            <Modal
                aria-labelledby="close-modal-title"
                open={props.open}
                onClose={() => {
                    props.setOpen(false);
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
                            Total Salon Ravenue
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
                                                {item.sale}
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