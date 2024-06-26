/* eslint-disable react/prop-types */
import { useEffect, useState } from "react"
import Utils from "../../utils/Utils"
import ServiceAddUpdate from "./ServiceAddUpdate"

const AddUpdate = ({ detail, isUpdate, callback }) => {
    const [state, setState] = useState(1)
    const [ok, setOK] = useState(Utils.StringEmpty)
    const [year, setYear] = useState(Utils.StringEmpty)
    const [error, setError] = useState(Utils.StringEmpty)
    const [carId, setCarId] = useState(Utils.StringEmpty)
    const [model, setModel] = useState(Utils.StringEmpty)
    const [trademark, setTrademark] = useState(Utils.StringEmpty)
    const [licensePlate, setLicensePlate] = useState(Utils.StringEmpty)

    useEffect(() => {
        if (detail != null && isUpdate) {
            setCarId(detail.id)
            setYear(detail.year)
            setState(detail.state)
            setModel(detail.model)
            setTrademark(detail.trademark)
            setLicensePlate(detail.license_plate)
        }
    }, [detail, isUpdate])

    const UpdateCar = async () => {
        setOK(Utils.StringEmpty)
        setError(Utils.StringEmpty)

        try {
            const update = await ServiceAddUpdate.UpdateCar({
                year: year,
                carId: carId,
                model: model,
                state: state,
                trademark: trademark,
                licensePlate: licensePlate
            });

            if (update.IsOk === false) {
                setError(`Error: ${update.MessageOperation}`)
                return
            }

            setOK(update.MessageOperation)
            callback()
        } catch (error) {
            setError(`Error: ${error.message}`)
        }
    }

    const CreateCar = async () => {
        setOK(Utils.StringEmpty)
        setError(Utils.StringEmpty)

        try {
            const update = await ServiceAddUpdate.CreateCar({
                year: year,
                model: model,
                state: state,
                trademark: trademark,
                licensePlate: licensePlate
            });

            if (update.IsOk === false) {
                setError(`Error: ${update.MessageOperation}`)
                return
            }

            setOK(update.MessageOperation)
            setYear(Utils.StringEmpty)
            setCarId(Utils.StringEmpty)
            setState(Utils.StringEmpty)
            setModel(Utils.StringEmpty)
            setTrademark(Utils.StringEmpty)
            setLicensePlate(Utils.StringEmpty)
            callback()
        } catch (error) {
            setError(`Error: ${error.message}`)
        }
    }

    const CleanInputs = () => {
        setOK(Utils.StringEmpty)
        setYear(Utils.StringEmpty)
        setError(Utils.StringEmpty)
        setCarId(Utils.StringEmpty)
        setState(Utils.StringEmpty)
        setModel(Utils.StringEmpty)
        setTrademark(Utils.StringEmpty)
        setLicensePlate(Utils.StringEmpty)
    }

    return (
        <div id="modal_addupdate" className='modal fade' data-backdrop="static" data-keyboard="false" aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title">{isUpdate ? "Actualizar vehiculo" : "Registro del vehiculo"}</h5>
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close" onClick={CleanInputs}>
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div className="modal-body">
                        <form>
                            <div className='form-group'>
                                <label htmlFor="txt_Trademark" className="font-weight-bold mr-2">Marca del vehiculo: </label>
                                <input id='txt_Trademark' className='form-control' type="text" autoComplete='off' value={trademark} onChange={(ev) => setTrademark(ev.target.value)} />
                            </div>
                            <div className='form-group'>
                                <label htmlFor="txt_Year" className="font-weight-bold mr-2">Año: </label>
                                <input id='txt_Year' className='form-control' type="text" autoComplete='off' value={year} onChange={(ev) => setYear(ev.target.value)} />
                            </div>
                            <div className='form-group'>
                                <label htmlFor="slc_State" className="font-weight-bold mr-2">Estado actual: </label>
                                <select id="slc_State" className="form-control" value={state} onChange={(ev) => setState(ev.target.value)}>
                                    <option value="1">Disponible</option>
                                    <option value="2">Mantenimiento</option>
                                    <option value="3">Fuera de servicio</option>
                                </select>
                            </div>
                            <div className='form-group'>
                                <label htmlFor="txt_Model" className="font-weight-bold mr-2">Modelo: </label>
                                <input id='txt_Model' className='form-control' type="text" autoComplete='off' value={model} onChange={(ev) => setModel(ev.target.value)} />
                            </div>
                            <div className='form-group'>
                                <label htmlFor="txt_LicensePlate" className="font-weight-bold mr-2">Placas: </label>
                                <input id='txt_LicensePlate' className='form-control' type="text" autoComplete='off' value={licensePlate} onChange={(ev) => setLicensePlate(ev.target.value)} />
                            </div>
                            <div className="mb-3">
                                <span className="d-block text-danger">{error}</span>
                                <span className="d-block text-success">{ok}</span>
                            </div>
                            <div className="text-right">
                                <button type="button" className="btn btn-primary" onClick={() => isUpdate ? UpdateCar() : CreateCar()}>Guardar</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AddUpdate