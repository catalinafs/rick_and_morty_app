import React from "react";

const Home = () => <h1>Home page</h1>

const Notes = () => <h1>Notes</h1>

const Users = () => <h1>Users</h1>

const inlineStyles = {
    padding: 5 
}

const Rutas = () => {
    const [page] = usesTate('Home')

    const getContent = () => {
        if (page == 'Home' ) {
            return <Home />
        } else if (page == 'Users' ) {
            return <Users />
        } else if (page == 'Notes') {
            return <Notes />
        }   
        }

        return (
        <div>
            <header>
                <a href="#" onClick={() => {}} style={inlineStyles}>
                    Home
                </a>
                <a href="#" onClick={() => {}} style={inlineStyles}>
                    Notes
                </a>
                <a href="#" onClick={() => {}} style={inlineStyles}>
                    Users
                </a>
            </header>
            {getContent()}
        </div>
        )
}   

export default Rutas;   