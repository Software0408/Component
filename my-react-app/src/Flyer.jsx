import profilePic from "./assets/profile.jpg"

function Flyer(){

        return(
            <div className="Flyer">
                <img className="flyer-image" src={profilePic} alt="Profile Picture"></img>
                <h2 className="flyer-title">Software0408</h2>
                <p className="flyer-text">For now i'm a Medical Typist. Maybe in a few months I will be a Front-end Developer.</p>
            </div>
        );
}

export default Flyer