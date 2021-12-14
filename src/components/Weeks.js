function Weeks(props) {
    const { showWeeks, setShowWeeks } = props.props;
    return (
        <div className="weeks">
            <p>weeks go here</p>
            <button onClick={() => setShowWeeks(!showWeeks)} >Go back</button>
        </div>
    )
}

export default Weeks;