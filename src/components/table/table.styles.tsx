import styled from "styled-components";

export const TableHeader = styled.div`
    padding: 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 20px;
    h1 {
        font-size: 24px;
        font-family: 'Roboto', sans-serif;
        font-weight: 400;
    }
    input {
        padding: 10px;
        border: 1px solid #ccc;
        border-radius: 4px;
    }
`
export const TableContainer = styled.div`
margin-left: 3%;
margin-right: 3%;
padding: 0px;
border: 1px solid #ccc;
border-radius: 10px;
background-color: #f9f9f9;
    table {
        width: 100%;
        border-collapse: collapse;
        font-family: 'Roboto', sans-serif;
        thead {
            border-radius: 50%;
            th {
                position: relative;
                background-color: ;
                color: black;
                padding: 10px;
                text-align: left;
            }
        }
        tbody {
            tr {
                border-bottom: 1px solid #ccc;
                td {
                    padding: 10px;
                    img {
                        width: 40px;
                        border-radius: 50%;
                    }
                }
            }
        }
    }
`
