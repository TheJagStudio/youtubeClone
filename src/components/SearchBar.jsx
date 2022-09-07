import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import { Paper, IconButton } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

const SearchBar = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const navigate = useNavigate();

    const onhandleSubmit = (e) => {
        e.preventDefault();

        if (searchTerm) {
        navigate(`/search/${searchTerm}`);

        setSearchTerm('');
        }
    };

    return (
        <Paper
        component='form'
        onSubmit={onhandleSubmit}
        sx={{
            borderRadius:0,
            border: '2px solid #313131',
            background:'#000',
            pl:1,
            pt:'1px',
            boxShadow: 'none',
            mr:{sm:5},
            ml:10,
            height:30,
        }}
        >
        <input
            className='search-bar'
            placeholder='Search...'
            value={searchTerm}
            sx={{
                color:'white',
                backgroundColor:'#000',
            }}
            onChange={(e) => setSearchTerm(e.target.value)}
        />
        <IconButton type='submit' 
        sx={{
            p:'-1px',
            mt:'-2px',
            height:33,
            mr:'0px',
            color:'white',
            background:'#313131',
            borderRadius:'0px'
        }}
        aria-label='search'>
            <SearchIcon />
        </IconButton>
        </Paper>
    );
};

export default SearchBar;
