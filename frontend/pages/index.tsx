import { Box } from '@mui/material';
import type { NextPage } from 'next'
import { Teacher } from '../src/@types/Teacher';
import Header from '../src/components/Header/Header';
import List from '../src/components/List/List';

function Button(){
  return (
    <a href="#">Clique aqui</a>
  );
}


const Home: NextPage = () => {
  const teachers: Teacher[] = [
    {
      id:1,
      name: "Professor 1",
      photo: "https://github.com/joaowinderfeldbussolotto.png",
      description: "Descrição",
      value_per_hour: 100
    },

    {
      id:2,
      name: "Professor 2",
      photo: "https://github.com/joaowinderfeldbussolotto.png",
      description: "Descrição",
      value_per_hour: 100
    },

    {
      id:3,
      name: "Professor 3",
      photo: "https://github.com/joaowinderfeldbussolotto.png",
      description: "Descrição",
      value_per_hour: 100
    },
   
  ]

  return (
    <Box sx={{backgroundColor: 'secondary.main'}}>
          <List teachers = {teachers}></List>

    </Box>
  )
}

export default Home
