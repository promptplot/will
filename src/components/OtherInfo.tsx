const OtherInfo = ({ page, setPage, formData, setFormData }) => {
    return (
        <div className="card">
            <div className="step-title">Other Info</div>
            <input
                type="text"
                placeholder="Occupation"
                value={formData.occupation}
                onChange={(e) =>
                    setFormData({ ...formData, occupation: e.target.value })
                }
            />
            <textarea

                placeholder="About"
                value={formData.about}
                onChange={(e) => setFormData({ ...formData, about: e.target.value })}
            />
            <br />
            <button
                onClick={() => {
                    alert("You've successfully submitted this form");
                }}>
                Submit
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

export default OtherInfo;