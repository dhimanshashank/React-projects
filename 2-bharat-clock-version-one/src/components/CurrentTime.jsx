let CurrentTime = () => {

    let time = new Date();

    return <p id= "current-time"> {time.toLocaleDateString()} - {time.toLocaleTimeString()}</p>;
};

export default CurrentTime;