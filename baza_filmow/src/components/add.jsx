import React, {useState} from 'react';
import "../App.css"
import {Button, ChakraProvider, Input, Textarea} from "@chakra-ui/react";
import NavbarLogo from "./navbarLogo";
import 'react-dropzone-uploader/dist/styles.css'
import Dropzone from 'react-dropzone-uploader'

const axios = require('axios');

const Add = () => {

    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")
    //const [uploadedFile, setUploadedFile] = useState();
    const [uploadedFileUrl, setUploadedFileUrl] = useState("");
    const [movieAdded, setMovieAdded] = useState(false);

    const addMovie = () => {
        if (title !== "" && description !== "" && uploadedFileUrl !== "") {
            axios.post('https://pr-movies.herokuapp.com/api/movies', {
                title: title,
                content: description,
                image: uploadedFileUrl
            })
                .then(function (response) {
                    console.log(response);
                    setTitle("")
                    setDescription("")
                    setUploadedFileUrl("")
                    setMovieAdded(true)
                })
                .catch(function (error) {
                    console.log(error);
                    alert("Nie udało się dodać filmu!")
                });
        } else {
            alert("Uzupełnij wszystkie pola!")
        }
    }

/*    const getUploadParams = ({meta}) => {
        return {url: 'https://httpbin.org/post'}
    }

    const handleSubmit = (files) => {
        setUploadedFile(files[0].meta.previewUrl)
    }*/

    return (
        <div id="add">
            <ChakraProvider>
                <NavbarLogo main={false}/>
                {uploadedFileUrl === "" ? (
                    <div></div>
                ) : (
                    <div className="addImagePreview"><img className="addImagePreviewI" src={uploadedFileUrl}/></div>
                )}
                <div className="addForm">
                    <div className="pageTitleAdd">Dodaj film:</div>
                    <Input id="formInputAddTitle" placeholder="Tytuł..." size="lg" value={title}
                           onChange={event => setTitle(event.target.value)}/><br/><br/>
                    <Input id="formInputAddUrl" placeholder="URL obrazu..." size="lg" value={uploadedFileUrl}
                           onChange={event => setUploadedFileUrl(event.target.value)}/><br/><br/>
                    <Textarea id="formInputAddDesc" placeholder="Opis..." size="lg"
                              onChange={event => setDescription(event.target.value)} value={description}/><br/><br/>
{/*                    <Dropzone
                        getUploadParams={getUploadParams}
                        onSubmit={handleSubmit}
                        accept="image/*"
                        maxFiles='1'
                    />*/}
                    <Button type="submit" id="addButton" onClick={addMovie}>Dodaj</Button>
                    {
                        movieAdded ? (<div id="sentSuccessfully">Film dodany pomyślnie!</div>) : (<div id="sentSuccessfully"></div>)
                    }
                </div>
            </ChakraProvider>
        </div>
    )
};


export default Add;
