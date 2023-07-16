import { Container, Pagination } from "react-bootstrap";
import { useEffect, useState } from "react";
//import useFetch from "../hooks/useFetch";
import { mockCountNoticias } from "../services/mock-service";

export const PaginacionNoticias = ({index}) => {
  //const {data, isLoading} = useFetch(process.env.REACT_APP_API_URL + '/countnoticias');
  const {data, isLoading} = mockCountNoticias();
  const [pages, setPages] = useState(1);

  useEffect(() => {
    if(!isLoading){
      let totalPages = Math.ceil(data.filecount/5);
      setPages(totalPages);
    }
  }, [isLoading, data])
  
  const total = pages;
  let numbers = [1, 2, 3, 4, 5];

  if(index>3){
    numbers = [index-2, index-1, index, index+1, index+2]
  }

  if(index>(total-2)){
    numbers = [total-4, total-3, total-2, total-1, total]
  }

  if(total<=5){
    numbers = [1, 2, 3, 4, 5];
  }

  return (
    <Container fluid className="d-flex justify-content-center align-items-center">
      <Pagination>
        <Pagination.First disabled={ index === 1 } href="/noticias/1"/>
        <Pagination.Prev disabled={ index === 1 } href={`/noticias/${index-1}`}/>
        <Pagination.Item active={numbers[0] === index} href={`/noticias/${numbers[0]}`}>{numbers[0]}</Pagination.Item>
        <Pagination.Item active={numbers[1] === index} href={`/noticias/${numbers[1]}`} disabled={total<2}>{numbers[1]}</Pagination.Item>
        <Pagination.Item active={numbers[2] === index} href={`/noticias/${numbers[2]}`} disabled={total<3}>{numbers[2]}</Pagination.Item>
        <Pagination.Item active={numbers[3] === index} href={`/noticias/${numbers[3]}`} disabled={total<4}>{numbers[3]}</Pagination.Item>
        <Pagination.Item active={numbers[4] === index} href={`/noticias/${numbers[4]}`} disabled={total<5}>{numbers[4]}</Pagination.Item>
        <Pagination.Next disabled={ index === total } href={`/noticias/${index+1}`}/>
        <Pagination.Last disabled={ index === total } href={`/noticias/${total}`}/>
      </Pagination>
    </Container>
  );
};
