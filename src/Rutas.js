import React from "react";

const Home = () => <h1>Home page</h1>

const Notes = () => <h1>Notes</h1>

const Users = () => <h1>Users</h1>

const Rutas = () => {
    const [page, setPage] = usesTate('home')

    const getContent = () => {
        if (page == 'Home' ) {
            return <Home />
        }if (page == 'Users' ) {
            return <Users />
        }if (page == 'Notes'){
            return <Notes />
        }   
        }
}   