import "./Home.css"

function Home() {

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
                    {/* <img src="../../assets/logo.jpg" /> */}
                    Spark Light
                </div>
                <div>
                    Logout
                </div>
            </div>
            <div className="salon-details" >
                <div>
                    <div>
                        overall salon sale
                    </div>
                    <div>
                        $5,26,000
                    </div>
                </div>
                <div>
                    <div>
                        overall Staff sale
                    </div>
                    <div>
                        $5,26,000
                    </div>
                </div>
                <div>
                    <div>
                        overall walkin sale
                    </div>
                    <div>
                        1265
                    </div>
                </div>
                <div>
                    <div>
                        Active salon
                    </div>
                    <div>
                        27
                    </div>
                </div>
            </div>
            <div className="dataTable" >
                <div className="table" >
                    <div className="dataTitle" >
                        <div>
                            overall salon sale
                        </div>
                        <div>
                            view
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
                        <div>
                            view
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
                        <div>
                            view
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
                        <div>
                            view
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
        </div>
    )
}

export default Home;