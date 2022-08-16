import { useState, useEffect } from "react";

import axios from "axios";

import { Menu } from "../../../components/menu";
import { Container, Main } from "../styles";
import { Box, ListProducts } from "./styles";

import { Button } from "@mui/material";
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';

import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';

const columns = [
  { id: 'name', label: 'Nome do Produto', minWidth: 170 },
  { id: 'category', label: 'Categoria', minWidth: 170 },
  { id: 'price', label: 'Preço', minWidth: 170, },
  { id: 'status', label: 'Status', minWidth: 10, },
  {
    id: 'deleteIcon',
    label: '',
    maxWidth: 20,
    align: 'right'
  },
  {
    id: 'editIcon',
    label: '',
    minWidth: 10,
  },
];

function createData(name, category, price, status, deleteIcon, editIcon) {
  /*
    Aqui vai entra configuração de icone, sem passar por parametro
    para ser dinamico.
    ex: se eu tenho 10 e vendi 2, ainda sobra 8, 
    entao retorna disponivel no status
  */  
  return { name, category, price, status, deleteIcon, editIcon };
}

const rows = [
  createData('India', 'IN', 1324171354, 'Disponível', <button onClick={() => alert('Aqui vem um modal')}><DeleteOutlineOutlinedIcon/></button>,  <EditOutlinedIcon />),

  createData('Nigeria', 'NG', 200962417, 923768, <DeleteOutlineOutlinedIcon/>,  <EditOutlinedIcon />),
  createData('Brazil', 'BR', 210147125, 8515767, <DeleteOutlineOutlinedIcon/>,  <EditOutlinedIcon />),
];


export function Products() {

    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(10);

    useEffect(() => {
        axios.get('api/products').then(res => {
            debugger   
        })
    }, [])
  
    const handleChangePage = (event, newPage) => {
      setPage(newPage);
    };
  
    const handleChangeRowsPerPage = (event) => {
      setRowsPerPage(+event.target.value);
      setPage(0);
    };

    return (
        <Container>
            <Menu />
            <Main>
                <Box className="flex">
                    <div className="box__item flex">
                        <h2>Seus Produtos</h2>
                        <p>Aqui você poderá editar, excluir ou adicionar produtos!</p>
                    </div>
                    <div className="box__item flex">
                        <Button 
                            type="submit" 
                            variant="contained" 
                            style={{ 
                                width: '9rem', 
                                height: '2.5rem', 
                                background: 'var(--white)',
                                fontSize: '.7rem',
                                fontWeight: '600',
                                color: 'var(--light-black)',
                                }}>
                                NOVO PRODUTO
                        </Button>
                    </div>
                </Box>
                <ListProducts>
                    <Paper sx={{ 
                        width: '100%',
                        overflow: 'hidden',
                        background: 'none',
                        boxShadow: 'none',
                        }}>
                        <TableContainer>
                            <Table stickyHeader aria-label="sticky table">
                            <TableHead>
                                <TableRow>
                                {columns.map((column) => (
                                    <TableCell
                                        key={column.id}
                                        align={column.align}
                                        style={{ minWidth: column.minWidth }}
                                        >
                                        {column.label}
                                    </TableCell>
                                ))}
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {rows
                                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                                .map((row) => {
                                    return (
                                    <TableRow hover role="checkbox" tabIndex={-1} key={row.category}>
                                        {columns.map((column) => {
                                        const value = row[column.id];
                                        return (
                                            <TableCell key={column.id} align={column.align}>
                                            {column.format && typeof value === 'number'
                                                ? column.format(value)
                                                : value}
                                            </TableCell>
                                        );
                                        })}
                                    </TableRow>
                                    );
                                })}
                            </TableBody>
                            </Table>
                        </TableContainer>
                        <TablePagination
                            style={{ padding: '0 4rem' }}
                            rowsPerPageOptions={[10, 25, 50]}
                            component="div"
                            count={rows.length}
                            rowsPerPage={rowsPerPage}
                            page={page}
                            onPageChange={handleChangePage}
                            onRowsPerPageChange={handleChangeRowsPerPage}
                        />
                    </Paper>
                </ListProducts>
            </Main>
        </Container>
    )
}