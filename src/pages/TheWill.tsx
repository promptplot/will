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
                <label className="text-center font-bold text-lg mb-4"> Do you have children under the age of 18? </label>
                <br />
                <button className="w-40 mr-4"> Yes </button>
                <button className="w-40"> No </button>
            </div>
            <div>
                <label className="text-center font-bold text-lg mb-4"> Do you want to include one or more bequests in your will?  </label>
                <br />
                <button className="w-40 mr-4"> Yes </button>
                <button className="w-40"> No </button>
            </div>
            <div className="text-center ">
                <div className="text-center font-bold text-lg mb-4 mt-8 "> EXECUTOR </div>
                <p className="text-center text-slate-900 mb-10 "> The executor is the person who is responsible to ensure that the wishes stated in your will are carried out.
                    Most people select their spouse, sibling or a trusted friend for this role.
                    When choosing your will's executor,
                    please keep in mind the many responsibilities of an executor and the requirements for being one. </p>
                <label className="text-center font-bold text-lg mb-4"> Legal name of your will's executor </label>
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
                <div>
                    <label className="text-center font-bold text-lg mb-4"> Is your relationship to this executor personal or professional? </label>
                    <p className="text-center text-slate-900 mb-10 "> By providing this information we can help you think of ways to get the conversation started
                        with them in the Messages section of your Fabric Will Kit. </p>
                    <button className="w-40 mr-4"> Personal </button>
                    <button className="w-40"> Proffessional </button>
                </div>
                <div className="text-center mt-8 ">
                    <label className="text-center font-bold text-lg mb-4"> Send this will to the executor? </label>
                    <p className="text-center text-slate-900 mb-4 "> Optional but recommended. It's a good idea to share your final wishes
                        with the person responsible for making them happen. </p>
                    <input
                        className="w-full"
                        type="text"
                        placeholder="Email"
                        value={formData.email} //setting the value of the form to the props value
                        onChange={(e) =>
                            setFormData({ ...formData, email: e.target.value })  //setting the formData to the value input of the textfield 
                        }
                    />
                </div>
            </div>
            <div className="text-center ">
                <label className="text-center font-bold text-lg mb-4"> Do you want to designate an alternate executor? </label>
                <p className="text-center text-slate-900 mb-4 "> An alternate executor would become the executor of your will in the event
                    that the primary person chosen is unwilling or unable to take on the role. </p>
                <button className="w-40 mr-4"> Yes </button>
                <button className="w-40"> No </button>
            </div>
            <div className="text-center mt-8">
                <label className="text-center font-bold text-lg mb-4"> Would you like to share a summary of your will with other trusted contacts? </label>
                <p className="text-center text-slate-900 mb-4 "> This could be a close family member or friend, an accountant or another advisor.
                    Note that only a summary will be shared (and not the full document). </p>
            </div>
            <div className="text-center ">
                <div className="text-center font-bold text-lg mb-4 mt-8"> TRUSTED CONTACTS </div>
                <select
                    placeholder="Relationship to contact"
                    value={formData.relation} //setting the value of the form to the props value
                    onChange={(e) =>
                        setFormData({ ...formData, relation: e.target.value })  //setting the formData to the value input of the textfield  
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
                    type="text"
                    placeholder="Email"
                    value={formData.email} //setting the value of the form to the props value
                    onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })  //setting the formData to the value input of the textfield 
                    }
                />
                <select
                    placeholder="Relationship to contact"
                    value={formData.relation} //setting the value of the form to the props value
                    onChange={(e) =>
                        setFormData({ ...formData, relation: e.target.value })  //setting the formData to the value input of the textfield  
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
                    type="text"
                    placeholder="Email"
                    value={formData.email} //setting the value of the form to the props value
                    onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })  //setting the formData to the value input of the textfield 
                    }
                />
                <select
                    placeholder="Relationship to contact"
                    value={formData.relation} //setting the value of the form to the props value
                    onChange={(e) =>
                        setFormData({ ...formData, relation: e.target.value })  //setting the formData to the value input of the textfield  
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
                    type="text"
                    placeholder="Email"
                    value={formData.email} //setting the value of the form to the props value
                    onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })  //setting the formData to the value input of the textfield 
                    }
                />
            </div>

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