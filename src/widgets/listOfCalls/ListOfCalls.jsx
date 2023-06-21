import { useEffect, useState } from 'react'
import { fetchLists } from './api/api'
import './listOfCalls.styles.css'
import { TableRowCalls } from './tableRowCalls/TableRowCalls'

export const ListOfCalls = () => {

    const [lists, setLists] = useState([])

    useEffect(() => {
        fetchLists()
            .then((data) => setLists(data))
            .then((err) => console.error(err))
    }, [])

    return (
        <>
            <p>Тут будет панель фильтрации</p>
            <table cols='8'>
                <thead>
                    <tr>
                        <th scope='col'><input type="checkbox" name="" id="" /></th>
                        <th scope='col'>Тип</th>
                        <th scope='col'>Время</th>
                        <th scope='col'>Сотрудник</th>
                        <th scope='col'>Звонок</th>
                        <th scope='col'>Источник</th>
                        <th scope='col'>Оценка</th>
                        <th scope='col'>Длительность</th>
                    </tr>
                </thead>
                {lists ? (
                    <tbody >
                        {lists.map((call) => (
                            <TableRowCalls key={call.id} call={call} />
                        ))}
                    </tbody>
                ) : (
                    <tbody>
                        <tr>
                            <td>Загрузка...</td>
                        </tr>
                    </tbody>
                )}
            </table>
        </>
    )
}