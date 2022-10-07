const FinalArrangements = ({ page, setPage, formData, setFormData }) => {
    return (
        <div className="card">
            <div className="step-title  text-center text-slate-900 font-bold "> Final Arrangements </div>
            <p className="text-center text-slate-900 mb-10 "> Inform your loved ones of certain things that you’d like done at the time of your passing.
                Please note that this section cannot be made legally binding. </p>
            <div className="items-center justify-center ">
                <label className="text-center font-bold text-lg mb-4"> What are your wishes for your final resting place or arrangements?  </label>
                <div className="flex">
                <input
                    type="radio"
                    name="wishes"
                    value={formData.wishes}
                    onChange={(e) => setFormData({ ...formData, wishes: e.target.value })}
                />
                <label> Cremation </label>
                </div>
                <div className="flex">
                <input
                    type="radio"
                    name="wishes"
                    value={formData.wishes}
                    onChange={(e) => setFormData({ ...formData, wishes: e.target.value })}
                />
                <label> Donate Body To Science </label>
                </div>
                <div className="flex">
                <input
                    type="radio"
                    name="wishes"
                    value={formData.wishes}
                    onChange={(e) => setFormData({ ...formData, wishes: e.target.value })}
                />
                <label> Ground Burial </label>
                </div>
                <div className="flex">
                <input
                    type="radio"
                    name="wishes"
                    value={formData.wishes}
                    onChange={(e) => setFormData({ ...formData, wishes: e.target.value })}
                />
                <label> Let Family Decide </label>
                </div>
                <div className="flex">
                <input
                    type="radio"
                    name="wishes"
                    value={formData.wishes}
                    onChange={(e) => setFormData({ ...formData, wishes: e.target.value })}
                />
                <label> Mausoleum Burial </label>
                </div>
                <div className="flex">
                <input
                    type="radio"
                    name="wishes"
                    value={formData.wishes}
                    onChange={(e) => setFormData({ ...formData, wishes: e.target.value })}
                />
                <label> Something Else </label>
                </div>
            </div>
            <div className="text-center ">
                <div className="text-center font-bold text-2xl mb-4"> Cremation Details </div>
                <label className="text-center font-bold text-lg mb-4"> What do you want done with your ashes? </label>
                <textarea
                className="w-full border-2"
                placeholder=""
                value={formData.cremation}
                onChange={(e) => setFormData({ ...formData, cremation: e.target.value })}
            />
            </div>
            <div>
                <label className="text-center font-bold text-lg mb-4"> What kind of ceremony do you wish to have?   </label>
                <div className="flex">
                <input
                    type="radio"
                    name="ceremony"
                    value={formData.ceremony}
                    onChange={(e) => setFormData({ ...formData, ceremony: e.target.value })}
                />
                <label> No Ceremony </label>
                </div>
                <div className="flex">
                <input
                    type="radio"
                    name="ceremony"
                    value={formData.ceremony}
                    onChange={(e) => setFormData({ ...formData, ceremony: e.target.value })}
                />
                <label> Let My Family Decide </label>
                </div>
                <div className="flex">
                <input
                    type="radio"
                    name="ceremony"
                    value={formData.ceremony}
                    onChange={(e) => setFormData({ ...formData, ceremony: e.target.value })}
                />
                <label> Funeral </label>
                </div>
                <div className="flex">
                <input
                    type="radio"
                    name="ceremony"
                    value={formData.ceremony}
                    onChange={(e) => setFormData({ ...formData, ceremony: e.target.value })}
                />
                <label> Memorial </label>
                </div>
                <div className="flex">
                <input
                    type="radio"
                    name="ceremony"
                    value={formData.ceremony}
                    onChange={(e) => setFormData({ ...formData, ceremony: e.target.value })}
                />
                <label> Funeral and Memorial </label>
                </div>
                <div className="flex">
                <input
                    type="radio"
                    name="ceremony"
                    value={formData.ceremony}
                    onChange={(e) => setFormData({ ...formData, ceremony: e.target.value })}
                />
                <label> Something Else </label>
                </div>
            </div>
            <div className="text-center">
                <label className="text-center font-bold text-lg mb-4"> Do you have any special requests for your final resting place or your ceremony? </label>
                <p className="text-center text-slate-900 mb-10 "> For example, you may request to have certain songs played at your ceremony, 
                    ask for a tree to be planted where your ashes will be spread, 
                    or have people donate to an organization of your choice instead of sending flowers for the funeral. </p>
                <button className="w-40 mr-4"> Yes </button>
                <button className="w-40"> No </button>
            </div>
            <br/>

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

export default FinalArrangements