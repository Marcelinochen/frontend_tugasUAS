import React,{useState, useEffect} from 'react';
import axios from "axios";
import { useNavigate, useParams} from 'react-router-dom';

const EditUser = () => {
    const [name, setNama] = useState("");
    const [email, setEmail] = useState("");
    const [gender, setGender] = useState("Laki-laki");
    const navigate = useNavigate();
    const {id} = useParams();

    useEffect(()=>{
        getUserById();
    }, []);

    const updateUser = async(e)=> {
        e.preventDefault();
        try{
            await axios.patch(`http://localhost:3000/users/${id}`, {
                name,
                email,
                gender
            });
            navigate("/");
        } catch (error){
            console.log(error);
        }
    };

    const getUserById = async()=>{
        const response =  await axios.get(`http://localhost:3000/users/${id}`);
        setNama(response.data.name);
        setEmail(response.data.email);
        setGender(response.data.gender);
    }

    return (
        <div className="columns mt-5 is-centered">
            <div className="column is-half">
                <form onSubmit={updateUser}>
                    <div className='field'>
                        <label className="label">Nama</label>
                        <div className="control">
                            <input type="text" className="input" value={name} onChange={(e)=> setNama(e.target.value)} placeholder='Nama'/>
                        </div> 
                    </div>
                    <div className='field'>
                        <label className="label">Email</label>
                        <div className="control">
