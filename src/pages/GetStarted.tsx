function GetStarted({ page, setPage, formData, setFormData }) {
    return (
        <div className="card">
            <div className="step-title text-center text-slate-900 font-bold "> Get Started </div>
            <div className="text-center text-slate-900 mb-10 ">
                Congrats! You’re on your way.
                We’ll walk you through how to create a Fabric will in minutes and show you how to make it official.
                Let's get started with some basic info.
            </div>
            <label className="text-center font-bold text-lg mb-4">Legal Name</label>
            <div className="flex">
                <input
                    className="w-80 mr-8"
                    type="text"
                    placeholder="First Name"
                    value={formData.fullName} //setting the value of the form to the props value
                    onChange={(e) =>
                        setFormData({ ...formData, firstName: e.target.value })  //setting the formData to the value input of the textfield 
                    }
                />
                <input
                    className="w-20"
                    type="text"
                    placeholder="MI"
                    value={formData.mi} //setting the value of the form to the props value
                    onChange={(e) =>
                        setFormData({ ...formData, mi: e.target.value })  //setting the formData to the value input of the textfield 
                    }
                />
            </div>
            <input
                className="w-full"
                type="text"
                placeholder="Last Name"
                value={formData.lastName} //setting the value of the form to the props value
                onChange={(e) =>
                    setFormData({ ...formData, lastName: e.target.value })  //setting the formData to the value input of the textfield 
                }
            />
            <div className="text-center ">
                <div className="text-slate-900 text-lg mb-4 font-bold " >ACCOUNT</div>
                <input
                    className="w-full"
                    type="text"
                    placeholder="Email"
                    value={formData.email} //setting the value of the form to the props value
                    onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })  //setting the formData to the value input of the textfield 
                    }
                />
                <input
                    className="w-full"
                    type="text"
                    placeholder="Password"
                    value={formData.password} //setting the value of the form to the props value
                    onChange={(e) =>
                        setFormData({ ...formData, password: e.target.value })  //setting the formData to the value input of the textfield 
                    }
                />
                <button>
                    Create Account
                </button>
            </div>
            <br />
            <div className="text-center">
                <label className="text-slate-900 text-lg font-bold "> Date of birth </label>
                <br />
                <select
                    className="mt-4 mr-4"
                    placeholder="Month"
                    value={formData.month} //setting the value of the form to the props value
                    onChange={(e) =>
                        setFormData({ ...formData, month: e.target.value })  //setting the formData to the value input of the textfield  
                    }
                >
                    <option>January</option>
                    <option>February</option>
                    <option>March</option>
                    <option>April</option>
                    <option>May</option>
                    <option>June</option>
                    <option>July</option>
                    <option>August</option>
                    <option>September</option>
                    <option>October</option>
                    <option>November</option>
                    <option>December</option>
                </select>
                <select
                    className="mr-4"
                    placeholder="Date"
                    value={formData.date} //setting the value of the form to the props value
                    onChange={(e) =>
                        setFormData({ ...formData, date: e.target.value })  //setting the formData to the value input of the textfield  
                    }
                >
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                    <option>6</option>
                    <option>7</option>
                    <option>8</option>
                    <option>9</option>
                    <option>10</option>
                    <option>11</option>
                    <option>12</option>
                </select>
                <select
                    className="mr-4"
                    placeholder="Year"
                    value={formData.year} //setting the value of the form to the props value
                    onChange={(e) =>
                        setFormData({ ...formData, year: e.target.value })  //setting the formData to the value input of the textfield  
                    }
                >
                    <option>2004</option>
                    <option>2003</option>
                    <option>2002</option>
                    <option>2001</option>
                    <option>2000</option>
                    <option>1999</option>
                    <option>1998</option>
                    <option>1997</option>
                    <option>1996</option>
                    <option>1995</option>
                    <option>1994</option>
                    <option>1993</option>
                </select>
            </div>
            <div className="text-center mt-4">
                <label className="text-slate-900 text-lg font-bold "> Home address </label>
                <p> No P.O. boxes, please </p>
                <input
                    className="w-full mt-4"
                    type="text"
                    placeholder="Address"
                    value={formData.address} //setting the value of the form to the props value
                    onChange={(e) =>
                        setFormData({ ...formData, address: e.target.value })  //setting the formData to the value input of the textfield 
                    }
                />
                <div className="flex">
                    <input
                        className="w-80 mr-4"
                        type="text"
                        placeholder="City"
                        value={formData.city} //setting the value of the form to the props value
                        onChange={(e) =>
                            setFormData({ ...formData, city: e.target.value })  //setting the formData to the value input of the textfield 
                        }
                    />
                    <select
                        placeholder="State"
                        value={formData.state} //setting the value of the form to the props value
                        onChange={(e) =>
                            setFormData({ ...formData, state: e.target.value })  //setting the formData to the value input of the textfield  
                        }
                    >
                        <option>AL</option>
                        <option>AK</option>
                        <option>AZ</option>
                        <option>AR</option>
                        <option>CA</option>
                        <option>CO</option>
                        <option>CT</option>
                        <option>DE</option>
                        <option>FL</option>
                        <option>GA</option>
                        <option>HI</option>
                        <option>ID</option>
                    </select>
                </div>
                <input
                    className="w-full"
                    type="text"
                    placeholder="Zip"
                    value={formData.zip} //setting the value of the form to the props value
                    onChange={(e) =>
                        setFormData({ ...formData, zip: e.target.value })  //setting the formData to the value input of the textfield 
                    }
                />
            </div>
            <div className="text-center">
                <div className="text-slate-900 text-lg font-bold mb-4 "> Phone number </div>
                <input
                    className="w-full "
                    type="text"
                    placeholder="Phone #"
                    value={formData.phone} //setting the value of the form to the props value
                    onChange={(e) =>
                        setFormData({ ...formData, phone: e.target.value })  //setting the formData to the value input of the textfield 
                    }
                />
            </div>

            <button
                onClick={() => {
                    setPage(page + 1);
                }}>
                Next
            </button>
        </div>
    )
}

export default GetStarted