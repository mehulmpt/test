import React from 'react';
import './Jointeam.scss';
import Modal from '../Modal/Modal';

const Jointeam = (props) => {
    
    const modalRef = React.useRef();
    
    const openModal = () => {
        modalRef.current.openModal();
    }
    
    return (
        
        <React.Fragment>


            <h1>Join the team!</h1>
            
            <Modal ref={modalRef}>

            </Modal>
            <div className="container">

                <div className="box-positions">
                    <div className="positions">

                        <div className="singular">

                            <h1>lorem adsadsa</h1>
                            <button onClick={openModal}><a>OPEN</a></button>
                            
                        </div>
                        <div  className="singular">

                            <h1>lorem dsadsadsadsa</h1>
                            <button onClick={openModal}>OPEN</button>

                        </div>
                        <div  className="singular">

                            <h1>lorem dasdasdsasaddsa</h1>
                            <button onClick={openModal}>OPEN</button>

                        </div>
                        <div  className="singular">

                            <h1>lorem dasdsasdsa</h1>
                            <button>CLOSED</button>

                        </div>
                    </div>
                </div>

            </div>
        </React.Fragment>

    );

}

export default Jointeam;
