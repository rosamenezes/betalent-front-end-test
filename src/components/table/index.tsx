import axios from 'axios';
import { useEffect, useState, useCallback } from 'react';
import { formatDate, formatPhone } from '../../utils/format_functions';
import { TableHeader, TableContainer } from './table.styles';

type Employee = {
    id: number;
    name: string;
    job: string;
    admission_date: string;
    phone: string;
    image: string;
}

function Table() {
    const [employees, setEmployees] = useState<Employee[]>([]);
    const [search, setSearch] = useState('');

    useEffect(() => {
        axios.get('http://localhost:3000/employees')
            .then(response => setEmployees(response.data))
            .catch(error => console.error('Error fetching employees:', error));
    }, []);

    const handleSearchChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
        setSearch(e.target.value);
    }, []);

    const filteredEmployees = employees.filter((employee) => {
        const searchTerm = search.toLowerCase();
        return (
            employee.name.toLowerCase().includes(searchTerm) ||
            employee.job.toLowerCase().includes(searchTerm) ||
            employee.phone.includes(searchTerm)
        );
    });

    return (
        <div>
            <TableHeader>
                <h1>Funcionários</h1>
                <input
                    value={search} 
                    type='text' 
                    placeholder='Pesquisar'
                    onChange={handleSearchChange} 
                />
            </TableHeader>
            <TableContainer>
                <table>
                    <thead>
                        <tr>
                            <th>FOTO</th>
                            <th>NOME</th>
                            <th>CARGO</th>
                            <th>DATA DE ADMISSÃO</th>
                            <th>TELEFONE</th>
                        </tr>
                    </thead>
                    <tbody>
                        {filteredEmployees.map((employee: Employee) => (
                            <tr key={employee.id}>
                                <td>
                                    <img src={employee.image} alt={employee.name} />
                                </td>
                                <td>{employee.name}</td>
                                <td>{employee.job}</td>
                                <td>{formatDate(employee.admission_date)}</td>
                                <td>{formatPhone(employee.phone)}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </TableContainer>
        </div>
    );
}

export default Table;
