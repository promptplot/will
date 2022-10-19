const TheWill = ({ page, setPage, formData, setFormData }) => {
    return (
        <div className="card">
            <div className="step-title text-center text-slate-900 font-bold "> The Will </div>
            <p className="text-center text-slate-900 mb-10 ">
                Designate guardians for your children,
                beneficiaries and bequests of your estate,
                and executors for your Last Will and Testament.
            </p>

            <div>
                <div className="font-bold text-lg"> Do you have children under the age of 18? </div>
                <br />
                <button onClick = {() => setFormData({...formData, childrenU18: true })} className="w-40 mr-4"> Yes </button>
                <button className="w-40"> No </button>
            </div>
            <div>
                <div className="font-bold text-lg mt-8 "> Do you want to include one or more bequests in your will?  </div>
                <br />
                <button onClick = {() => setFormData({...formData, bequests: true })} className="w-40 mr-4"> Yes </button>
                <button className="w-40"> No </button>
            </div>
            <div >
                <div className="text-center font-bold text-lg mb-4 mt-8 "> EXECUTOR </div>
                <p className="text-center text-slate-900 mb-10 "> The executor is the person who is responsible to ensure that the wishes stated in your will are carried out.
                    Most people select their spouse, sibling or a trusted friend for this role.
                    When choosing your will's executor,
                    please keep in mind the many responsibilities of an executor and the requirements for being one. </p>
                <div className="font-bold text-lg mb-4"> Legal name of your will's executor </div>
                <div className="flex">
                    <input
                        className="w-80 mr-8 border-0 "
                        type="text"
                        placeholder="First Name"
                        value={formData.exFirstName} //setting the value of the form to the props value
                        onChange={(e) =>
                            setFormData({ ...formData, exFirstName: e.target.value })  //setting the formData to the value input of the textfield 
                        }
                    />
                    <input
                        className="w-20 border-0 "
                        type="text"
                        placeholder="MI"
                        value={formData.exMi} //setting the value of the form to the props value
                        onChange={(e) =>
                            setFormData({ ...formData, exMi: e.target.value })  //setting the formData to the value input of the textfield 
                        }
                    />
                </div>
                <input
                    className="w-full border-0 "
                    type="text"
                    placeholder="Last Name"
                    value={formData.exLastName} //setting the value of the form to the props value
                    onChange={(e) =>
                        setFormData({ ...formData, exLastName: e.target.value })  //setting the formData to the value input of the textfield 
                    }
                />
                <div className="text-center ">
                    <div className="text-center font-bold text-lg mb-4"> Is your relationship to this executor personal or professional? </div>
                    <p className="text-center text-slate-900 mb-10 "> By providing this information we can help you think of ways to get the conversation started
                        with them in the Messages section of your Fabric Will Kit. </p>
                    <button onClick = {() => setFormData({...formData, relationShip: "personal" })} className="w-40 mr-4"> Personal </button>
                    <button onClick = {() => setFormData({...formData, relationShip: "proffessional" })} className="w-40"> Proffessional </button>
                </div>
                <div className="text-center mt-8 ">
                    <div className="text-center font-bold text-lg mb-4"> Send this will to the executor? </div>
                    <p className="text-center text-slate-900 mb-4 "> Optional but recommended. It's a good idea to share your final wishes
                        with the person responsible for making them happen. </p>
                    <input
                        className="w-full border-0 "
                        type="text"
                        placeholder="Email"
                        value={formData.exEmail} //setting the value of the form to the props value
                        onChange={(e) =>
                            setFormData({ ...formData, exEmail: e.target.value })  //setting the formData to the value input of the textfield 
                        }
                    />
                </div>
            </div>
            <div className="text-center ">
                <div className="text-center font-bold text-lg mb-4"> Do you want to designate an alternate executor? </div>
                <p className="text-center text-slate-900 mb-4 "> An alternate executor would become the executor of your will in the event
                    that the primary person chosen is unwilling or unable to take on the role. </p>
                <button onClick = {() => setFormData({...formData, altExecutor: true })} className="w-40 mr-4"> Yes </button>
                <button className="w-40"> No </button>
            </div>
            <div className="text-center mt-8">
                <div className="text-center font-bold text-lg mb-4"> Would you like to share a summary of your will with other trusted contacts? </div>
                <p className="text-center text-slate-900 mb-4 "> This could be a close family member or friend, an accountant or another advisor.
                    Note that only a summary will be shared (and not the full document). </p>
            </div>
            <div>
                <div className="text-center font-bold text-lg mb-4 mt-8"> TRUSTED CONTACTS </div>
                <div className="flex mb-8 ">
                    <select
                        className="mr-8"
                        placeholder="Relationship to contact"
                        value={formData.trustedRelation1} //setting the value of the form to the props value
                        onChange={(e) =>
                            setFormData({ ...formData, trustedRelation1: e.target.value })  //setting the formData to the value input of the textfield  
                        }
                    >
                        <option>Spouse</option>
                        <option>Fiance</option>
                        <option>Life Partner</option>
                        <option>Child</option>
                        <option>Son</option>
                        <option>Daughter</option>
                        <option>Mother</option>
                        <option>Father</option>
                        <option>Brother</option>
                        <option>Sister</option>
                        <option>Other Family</option>
                        <option>Other</option>
                    </select>
                    <input
                        className=" border-0 "
                        type="text"
                        placeholder="Email"
                        value={formData.trustedEmail} //setting the value of the form to the props value
                        onChange={(e) =>
                            setFormData({ ...formData, trustedEmail1: e.target.value })  //setting the formData to the value input of the textfield 
                        }
                    />
                </div>
                <div className="flex mb-8 ">
                    <select
                        className="mr-8"
                        placeholder="Relationship to contact"
                        value={formData.trustedRelation2} //setting the value of the form to the props value
                        onChange={(e) =>
                            setFormData({ ...formData, trustedRelation2: e.target.value })  //setting the formData to the value input of the textfield  
                        }
                    >
                        <option>Spouse</option>
                        <option>Fiance</option>
                        <option>Life Partner</option>
                        <option>Child</option>
                        <option>Son</option>
                        <option>Daughter</option>
                        <option>Mother</option>
                        <option>Father</option>
                        <option>Brother</option>
                        <option>Sister</option>
                        <option>Other Family</option>
                        <option>Other</option>
                    </select>
                    <input
                        className=" border-0 "
                        type="text"
                        placeholder="Email"
                        value={formData.trustedEmail2} //setting the value of the form to the props value
                        onChange={(e) =>
                            setFormData({ ...formData, email: e.target.value })  //setting the formData to the value input of the textfield 
                        }
                    />
                </div>
                <div className="flex mb-8 ">
                    <select
                        className="mr-8"
                        placeholder="Relationship to contact"
                        value={formData.trustedRelation3} //setting the value of the form to the props value
                        onChange={(e) =>
                            setFormData({ ...formData, trustedRelation3: e.target.value })  //setting the formData to the value input of the textfield  
                        }
                    >
                        <option>Spouse</option>
                        <option>Fiance</option>
                        <option>Life Partner</option>
                        <option>Child</option>
                        <option>Son</option>
                        <option>Daughter</option>
                        <option>Mother</option>
                        <option>Father</option>
                        <option>Brother</option>
                        <option>Sister</option>
                        <option>Other Family</option>
                        <option>Other</option>
                    </select>
                    <input
                        className=" border-0 "
                        type="text"
                        placeholder="Email"
                        value={formData.trustedEmail3} //setting the value of the form to the props value
                        onChange={(e) =>
                            setFormData({ ...formData, trustedEmail3: e.target.value })  //setting the formData to the value input of the textfield 
                        }
                    />
                </div>
            </div>


            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300 font-bold " htmlFor="file_input">
                Upload file
            </label>
            <input className="block w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 
            cursor-pointer dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 
            dark:placeholder-gray-400" aria-describedby="file_input_help" id="file_input" type="file" />
            <p className="mt-1 text-sm text-gray-500 dark:text-gray-300" id="file_input_help">
                SVG, PNG, JPG or GIF (MAX. 800x400px).
            </p>


            <button
                onClick={() => {
                    setPage(page + 1);
                }}>
                Next
            </button>
            <br />
            <button
                onClick={() => {
                    setPage(page - 1);
                }}>
                Previous
            </button>
        </div>
    );
};

export default TheWill;