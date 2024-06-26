/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react"
import ServiceList from "./ServiceList"
import Utils from "../../utils/Utils"
import DetailCar from "../detailcar/DetailCar"
import AddUpdate from "../addupdatecar/AddUpdateCar"
import Delete from "../deletecar/DeleteCar"
import ServerConstants from "../../constants/ServerConstants"
import { useNavigate } from "react-router-dom"

const List = () => {
    const navigate = useNavigate();
    const [data, setCars] = useState([])
    const [detail, setDetail] = useState(null)
    const [reload, setReload] = useState(false)
    const [error, setError] = useState(Utils.StringEmpty)

    const GetData = async () => {
        setCars([])
        setError(Utils.StringEmpty)

        try {
            const cars = await ServiceList.GetAllCarsByUser()
            if (cars.StatusCode === ServerConstants.CODE_NOT_AUTHORIZE) {
                Utils.CleanToken()
                navigate("/login")
                return
            }

            if (cars.IsOk === false) {
                setError(cars.MessageOperation)
                return
            }

            if (cars.Content.length === 0) {
                setError('No hay vehiculos registrados')
                return
            }

            setCars(cars.Content)
        } catch (error) {
            setError(error.message)
        }
    }

    useEffect(() => {
        GetData()
    }, [reload])

    const AddDetail = (infoCar) => {
        setDetail(infoCar)
    }

    const ReloadList = () => {
        setReload(prev => !prev)
    }

    return (
        <div className="m-auto" >
            <div className='text-right mb-4'>
                <button type='button' className='btn btn-success' data-toggle="modal" data-target="#modal_addupdate" onClick={()=> AddDetail(null)}>Registrar vehiculo</button>
            </div>
            {error ? <div className="text-danger border border-dark p-3 text-center">{error}</div> :
                <>

                    <table className='table table-hover'>
                        <thead className="thead-dark">
                            <tr>
                                <th>Marca</th>
                                <th>Modelo</th>
                                <th>Año</th>
                                <th>Placas</th>
                                <th>Estado</th>
                                <th className="text-center">Acciones</th>
                            </tr>
                        </thead>
                        <tbody>
                            {data.map((car) => (
                                <tr key={car.id}>
                                    <td>{car.trademark}</td>
                                    <td>{car.model}</td>
                                    <td>{car.year}</td>
                                    <td>{car.license_plate}</td>
                                    <td>{car.stateInfo.description_status}</td>
                                    <td className="text-center">
                                        <button data-toggle="modal" data-target="#modal_detail" className="btn btn-primary mr-3" onClick={() => AddDetail(car)}>Detalle</button>
                                        <button data-toggle="modal" data-target="#modal_addupdate" className="btn btn-warning mr-3" onClick={() => AddDetail(car)}>Editar</button>
                                        <button data-toggle="modal" data-target="#modal_delete" className="btn btn-danger" onClick={() => AddDetail(car)}>Eliminar</button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                    {detail != null && <DetailCar detail={detail}></DetailCar>}
                    {detail != null && <Delete idToDelete={detail.id} callback={ReloadList}></Delete>}
                    {detail != null && <AddUpdate detail={detail} isUpdate={true} callback={ReloadList}></AddUpdate>}
                </>
            }
            {detail == null && <AddUpdate detail={null} isUpdate={false} callback={ReloadList}></AddUpdate>}
        </div>
    )
}

export default List