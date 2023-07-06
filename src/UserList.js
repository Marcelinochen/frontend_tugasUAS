import React, {useState, useEffect} from 'react';
import axios from "axios";
import {Link} from "react-router-dom";


const UserList = () => {
    const [users, setUser] = useState([]);

    useEffect(()=>{
        getUsers();
    }, []);

    const getUsers = async () => {
        const response = await axios.get('http://localhost:3000/users');
        setUser(response.data);
    }

    return (
        <div className="columns mt-5 is-centered">
            <div className="column is-half">
                <Link to={`about`} className='button is-success'>Tentang Kami </Link>
                <button className='button is-light'></button>
                <Link to={`add`} className='button is-success'>Tambah User Baru</Link>
                <table className='table is-striped is-fullwidth'>
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>Nama</th>
                            <th>Email</th>
                            <th>Jenis Kelamin</th>
                            <th>Menu</th>
                        </tr>
                    </thead>
                    <tbody>
                        {users.map((user, index) =>(
                            <tr key={user.id}>
                                <td>{index + 1}</td>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                                <td>{user.gender}</td>
                                <td>
                                    <Link to={`edit/${user.id}`} className='button is-small is-info'>Edit</Link>
                                </td>
                            </tr>
                        ))}
                        
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default UserList
