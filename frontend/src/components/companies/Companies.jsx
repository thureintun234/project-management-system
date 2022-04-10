import React, { useEffect, useState } from 'react'
import companyService from '../../services/company'
import { DataGrid } from '@mui/x-data-grid';
import { Link } from 'react-router-dom';
import { Button } from '@mui/material';


const Companies = () => {
  const [companies, setCompanies] = useState([])

  useEffect(() => {
    companyService
      .getAll()
      .then(returnObjected => setCompanies(returnObjected))
  }, [])

  const columns = [
    { field: 'id', headerName: 'ID', width: 200 },
    { field: 'name', headerName: 'First name', width: 150 }
  ];

  const rows = companies.map(company => ({
    id: company._id,
    name: company.name
  }))


  return (
    <div>
      <div>
        <Link to='/company/new' style={{ float: 'right' }}>
          <Button variant='contained' color='primary'>
            Add
          </Button>
        </Link>
      </div>
      <div style={{ height: 300, width: '35%' }}>
        <DataGrid
          rows={rows}
          columns={columns}
          pageSize={5}
          rowsPerPageOptions={[5]}
        />
      </div>
    </div>
  )
}

export default Companies