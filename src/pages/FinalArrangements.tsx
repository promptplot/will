const FinalArrangements = ({ page, setPage, formData, setFormData }) => {
    return (
        <div className="card">
            <div className="step-title  text-center text-slate-900 font-bold "> Final Arrangements </div>
            <p className="text-center text-slate-900 mb-10 "> Inform your loved ones of certain things that you’d like done at the time of your passing.
                Please note that this section cannot be made legally binding. </p>
            <div className="items-center justify-center ">
                <div className="text-center font-bold text-lg mb-4"> What are your wishes for your final resting place or arrangements?  </div>
                <div className="flex items-center bg-white mb-4">
                    <input
                        className="ml-4 mr-4 mt-4"
                        type="radio"
                        name="wishes"
                        value={formData.wishes}
                        onChange={(e) => setFormData({ ...formData, wishes: e.target.value })}
                    />
                    <div> Cremation </div>
                </div>
                <div className="flex items-center bg-white mb-4">
                    <input
                        className="ml-4 mr-4 mt-4"
                        type="radio"
                        name="wishes"
                        value={formData.wishes}
                        onChange={(e) => setFormData({ ...formData, wishes: e.target.value })}
                    />
                    <div> Donate Body To Science </div>
                </div>
                <div className="flex items-center bg-white mb-4">
                    <input
                        className="ml-4 mr-4 mt-4"
                        type="radio"
                        name="wishes"
                        value={formData.wishes}
                        onChange={(e) => setFormData({ ...formData, wishes: e.target.value })}
                    />
                    <div> Ground Burial </div>
                </div>
                <div className="flex items-center bg-white mb-4">
                    <input
                        className="ml-4 mr-4 mt-4"
                        type="radio"
                        name="wishes"
                        value={formData.wishes}
                        onChange={(e) => setFormData({ ...formData, wishes: e.target.value })}
                    />
                    <div> Let Family Decide </div>
                </div>
                <div className="flex items-center bg-white mb-4">
                    <input
                        className="ml-4 mr-4 mt-4"
                        type="radio"
                        name="wishes"
                        value={formData.wishes}
                        onChange={(e) => setFormData({ ...formData, wishes: e.target.value })}
                    />
                    <div> Mausoleum Burial </div>
                </div>
                <div className="flex items-center bg-white mb-4">
                    <input
                        className="ml-4 mr-4 mt-4"
                        type="radio"
                        name="wishes"
                        value={formData.wishes}
                        onChange={(e) => setFormData({ ...formData, wishes: e.target.value })}
                    />
                    <div> Something Else </div>
                </div>
            </div>
            <div className="text-center ">
                <div className="text-center font-bold text-2xl mb-4 mt-8 "> Cremation Details </div>
                <div className="text-center font-bold text-lg mb-4"> What do you want done with your ashes? </div>
                <textarea
                    className="w-full border-2"
                    placeholder=""
                    value={formData.cremation}
                    onChange={(e) => setFormData({ ...formData, cremation: e.target.value })}
                />
            </div>
            <div>
                <div className="text-center font-bold text-lg mb-4 mt-4 "> What kind of ceremony do you wish to have?   </div>
                <div className="flex items-center bg-white mb-4">
                    <input
                        className="ml-4 mr-4 mt-4"
                        type="radio"
                        name="ceremony"
                        value={formData.ceremony}
                        onChange={(e) => setFormData({ ...formData, ceremony: e.target.value })}
                    />
                    <div> No Ceremony </div>
                </div>
                <div className="flex items-center bg-white mb-4">
                    <input
                        className="ml-4 mr-4 mt-4"
                        type="radio"
                        name="ceremony"
                        value={formData.ceremony}
                        onChange={(e) => setFormData({ ...formData, ceremony: e.target.value })}
                    />
                    <div> Let My Family Decide </div>
                </div>
                <div className="flex items-center bg-white mb-4">
                    <input
                        className="ml-4 mr-4 mt-4"
                        type="radio"
                        name="ceremony"
                        value={formData.ceremony}
                        onChange={(e) => setFormData({ ...formData, ceremony: e.target.value })}
                    />
                    <div> Funeral </div>
                </div>
                <div className="flex items-center bg-white mb-4">
                    <input
                        className="ml-4 mr-4 mt-4"
                        type="radio"
                        name="ceremony"
                        value={formData.ceremony}
                        onChange={(e) => setFormData({ ...formData, ceremony: e.target.value })}
                    />
                    <div> Memorial </div>
                </div>
                <div className="flex items-center bg-white mb-4">
                    <input
                        className="ml-4 mr-4 mt-4"
                        type="radio"
                        name="ceremony"
                        value={formData.ceremony}
                        onChange={(e) => setFormData({ ...formData, ceremony: e.target.value })}
                    />
                    <div> Funeral and Memorial </div>
                </div>
                <div className="flex items-center bg-white mb-4">
                    <input
                        className="ml-4 mr-4 mt-4"
                        type="radio"
                        name="ceremony"
                        value={formData.ceremony}
                        onChange={(e) => setFormData({ ...formData, ceremony: e.target.value })}
                    />
                    <div> Something Else </div>
                </div>
            </div>
            <div className="text-center">
                <div className="text-center font-bold text-lg mb-4"> Do you have any special requests for your final resting place or your ceremony? </div>
                <p className="text-center text-slate-900 mb-10 "> For example, you may request to have certain songs played at your ceremony,
                    ask for a tree to be planted where your ashes will be spread,
                    or have people donate to an organization of your choice instead of sending flowers for the funeral. </p>
                <button onClick = {() => setFormData({...formData, specialRequest: true })} className="w-40 mr-4"> Yes </button>
                <button className="w-40"> No </button>
            </div>
            <br />

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