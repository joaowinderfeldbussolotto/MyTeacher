import { Button } from "@mui/material";
import { Teacher } from "../../@types/Teacher";
import { ListStyled, ListItem, Photo, Info, Name, Value, Description, EmptyList } from "./List.style";
import { FormatterService} from "../../services/FormatterService"
interface ListProps{
    teachers: Teacher[],
    onSelect: (teacher: Teacher) => void //declarando "tipo da funcao"
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
                            {FormatterService.money(teacher.value_per_hour)} por hora
                        </Value>
                        <Description>
                            {FormatterService.limitText(teacher.description, 200)}
                        </Description>
                        <Button  onClick = {() => props.onSelect(teacher)} sx = {{width:'70%'}}> Marcar aula com {teacher.name}</Button>
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