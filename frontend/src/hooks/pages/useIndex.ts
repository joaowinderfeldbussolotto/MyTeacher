import { useState, useEffect } from "react";
import {Teacher} from "../../@types/Teacher"
import { ApiService } from "../../services/ApiService"

export function useIndex(){
    const [teachersList, setTeachersList] = useState <Teacher[]>([]);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [selectedTeacher, setSelectedTeacher] = useState<Teacher | null> (null);
    const [message, setMessage] = useState('');


    useEffect(() => {
        ApiService.get('/professores').then((response) => {
            setTeachersList(response.data)
        })    
    }, []); //empty array --> run once.

    useEffect (() => {
        clearForm();
    }, [selectedTeacher])//dependencia pra ficar observando

    function scheduleClass(){
        if(selectedTeacher != null){
            if (validateClassInput()){
                ApiService.post('/professores/'+selectedTeacher.id+ '/aulas', {
                    name,
                    email
                }).then(() => {
                    setSelectedTeacher(null);
                    setMessage('Cadastrado com sucesso!')
                }).catch((error) => {
                    setMessage(error.response?.data.message);
                });

            }
            else{
                setMessage('Preencha os dados corretamente');
            }
        }
    }

    function validateClassInput(){
        return name.length > 0 && email.length > 0;
    }

    function clearForm(){
        setName('')
        setEmail('')
    }

    return {
        teachersList,
        name,
        setName,
        email, 
        setEmail,
        selectedTeacher, 
        setSelectedTeacher, 
        scheduleClass,
        message,
        setMessage
      }
}