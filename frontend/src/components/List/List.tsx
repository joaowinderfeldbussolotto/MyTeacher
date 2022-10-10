import { Button } from "@mui/material";
import { Teacher } from "../../@types/Teacher";
import { ListStyled, ListItem, Photo, Info, Name, Value, Description, EmptyList } from "./List.style";

interface ListProps{
    teachers: Teacher[]
}
const List = (props: ListProps) => {
    return (
        <div>
            {props.teachers.length > 0 ? (
                <ListStyled>
                {props.teachers.map(teacher => (
                    <ListItem key = {teacher.id}>
                    <Photo src = {teacher.photo}></Photo>
                    <Info>
                        <Name>
                            {teacher.name}
                        </Name>
                        <Value>
                            {teacher.value_per_hour.toLocaleString('pt-BR', {minimumFractionDigits: 2, style: 'currency', currency: 'BRL'})} por hora
                        </Value>
                        <Description>
                            {teacher.description}
                        </Description>
                        <Button sx = {{width:'70%'}}> Marcar aula com {teacher.name}</Button>
                    </Info>
                </ListItem>

                     ))}
            </ListStyled>
            ):(
            <EmptyList>
                Nenhum professor encontrado!
            </EmptyList>
        )}
        </div>
        
       
            

          
            
    )
}

export default List;